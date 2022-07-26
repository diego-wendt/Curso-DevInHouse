let numero;

const campoResultado = document.getElementById('campoResultado');

function verificar() {
    numero = parseInt(document.getElementById('numero').value);
    campoResultado.innerHTML = seParImpar();
}

function seParImpar() {
    console.log(numero)
    return numero % 2 == 0 ? "O número " + numero + " é par." : "O número " + numero + " é impar."
}