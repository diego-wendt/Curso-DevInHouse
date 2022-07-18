
// captura o conteudo de texto de uma tag HTML
var valorTexto = document.getElementById('resultado');

// converte o conteudo texto para valor numérico
var valor = parseInt(valorTexto.textContent)
console.log(valor)

// soma o valor com +1 e imprime este valor atualizado para dentro da tag HTML
function somar() {
    valor += 1;
    console.log(valor);
    document.getElementById('resultado').innerText = valor
}

// subtrai o valor com -1 e imprime este valor atualizado para dentro da tag HTML
function subtrair() {
    valor -= 1;
    console.log(valor);
    document.getElementById('resultado').innerText = valor
}