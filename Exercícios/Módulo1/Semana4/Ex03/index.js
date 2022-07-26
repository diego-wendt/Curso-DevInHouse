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
