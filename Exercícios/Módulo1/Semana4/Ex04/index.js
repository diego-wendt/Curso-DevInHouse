let contasClientes = [
    {
        id: 1,
        nome: 'Cliente 01',
        saldo: 500,
    },
    {
        id: 2,
        nome: 'Cliente 02',
        saldo: 3000,
    },
    {
        id: 3,
        nome: 'Cliente 03',
        saldo: 5000,
    },
];


// DECLARAÇÃO DE VARIÁVEIS E ATRIBUIÇÃO AOS ELEMENTOS HTML
const selectConta = document.getElementById('selectConta');
const button = document.getElementById('button');
const campoMensagem = document.getElementById('mensagem');

//EXECUTA A FUNCAO PARA INSERIR OS CLIENTES NO SELECTCONTA AO INICIAR
const body = document.body;
body.onload = setItemsSelectConta(contasClientes);

//POPULANDO O SELECT CONTA
function setItemsSelectConta(item) {
    item.forEach(function (item) {
        const option = document.createElement('option');
        option.value = item.id;
        option.text = item.nome;
        selectConta.appendChild(option);
    })
}

// A EXECUÇÃO AUTOMATICA DO JS VEM ATÉ AQUI, A PARTIR DAQUI SÓ POR COMANDOS
// =-=-=-==-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//DISPARA O EVENTO E INICIA A ACAO AO CLICAR EM CONFIRMAR
button.addEventListener('click', confirmar);

function confirmar() {

    // captura dos valores dentro dos seletores e do valor digitado no campo Valor
    const valorDigitado = parseFloat(document.getElementById('valor').value);
    const operacaoSelecionado = parseInt(document.getElementById('operacao').value);
    const contaSelecionada = parseInt(document.getElementById('selectConta').value);

    // verificação dos valores digitados. todos chamam a mesma função, validaValor(), mas cada chamada envia um valor diferente
    if (!validaValor(valorDigitado) || !validaValor(operacaoSelecionado) || !validaValor(contaSelecionada)) {
        return
    }

    // função para localizar conta em formato arrowFunction que retorna um array com o objeto localizado
    const contaLocalizada = contasClientes.find((conta) => conta.id === contaSelecionada);

    // se a conta não foi localizada, informa
    if (!contaLocalizada) {
        exibirMensagem(`Conta não localizada`, `erro`)
        console.log(`Conta não localizada`);
    }

    // SWTICH PARA SELECIONAR ENTRE SAQUE E DEPÓSITO
    // APENAS A ROTINA SAQUE EXIGE SENHA
    switch (operacaoSelecionado) {
        case 1:
            sacar(contaLocalizada, valorDigitado);
            break;

        case 2:
            depositar(contaLocalizada, valorDigitado);
            break;

        default:
            break;
    }

}

function sacar(contaLocalizada, valor) {

    if (valor > contaLocalizada.saldo) {
        console.log(`saldo insuficiente`);
        exibirMensagem(`Operação inválida. Saldo insuficiente. Saldo atual ${contaLocalizada.saldo}`, `erro`)
    } else {
        const novoSaldo = contaLocalizada.saldo - valor;
        atualizaSaldo(contaLocalizada, novoSaldo);

        exibirMensagem(`Saque efetuado com sucesso`, `sucesso`)
        // console.log("cliente:", contaLocalizada.nome);
        // console.log("novo saldo:", novoSaldo);
        // console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    }
}

//TODAS AS VALIDACOES DE VALORES E SELETORES SÃO FEITAS POR ESSE MESMO BLOCO JA QUE A VERIFICAÇÃO É A MESMA
function validaValor(valor) {
    if (valor <= 0 || isNaN(valor)) {
        exibirMensagem(`Erro valor 0 ou inválido`, `erro`);
        // console.log(`erro valor 0 ou inválido`)
        return false
    }
    return true
}

const exibirMensagem = (mensagem, tipo) => {
    campoMensagem.textContent = mensagem;
    // incluir tipo erro para mudar o arquivo CSS
}