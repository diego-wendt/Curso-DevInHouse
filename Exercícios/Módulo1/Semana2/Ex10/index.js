// Executa a funcao alterar titulo
function alterarTitulo() {
    var novoTitulo = document.getElementById('textoNovoTitulo');
    console.log(novoTitulo.value)

    document.getElementById('titulo').innerText = novoTitulo.value;
    document.getElementById('textoNovoTitulo').value = "";
}