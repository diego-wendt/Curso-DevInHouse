// Inicia a funcao ao clicar o botao
// captura das variáveis
function submitFormContact() {
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var telefone = document.getElementById('telefone');
    var mensagem = document.getElementById('mensagem');

    // condicao campo vazio
    if (!nome.value) {
        console.warn("Campo nome vazio");
        window.alert("Campo nome deve ser preenchido");
        return;
    }

    // condicao email sem @
    if (!email.value.includes("@")) {
        console.warn("deve possuir @");
        window.alert("Campo email deve ser preenchido corretamente");
        return;
    }


    // Imprime mensagem no console.log
    console.log(
        'Formulário de contato: ',
        '\nNome: ' + nome.value,
        '\nE-mail: ' + email.value,
        '\nTelefone: ' + telefone.value,
        '\nDescrição: ' + mensagem.value);

    // limpa campos do formulário
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('mensagem').value = "";

    window.alert("O formulário foi enviado com sucesso!");
}