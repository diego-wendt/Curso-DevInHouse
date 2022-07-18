var anoDigitado = prompt("Digite um ano para comparar a diferença com o ano atual:");
console.log(anoDigitado);

var anoCapturado = new Date().getFullYear();
console.log(anoCapturado);

var textoAno = "anos";
var resultado = 0;

20// calcula a diferença e muda a operação dependendo se o ano digitado é maior ou menor que o ano atual
if (anoDigitado <= anoCapturado) {
    var resultado = anoCapturado - parseInt(anoDigitado);
} else {
    var resultado = parseInt(anoDigitado) - anoCapturado;
}

console.log(resultado)

// se a diferenca é 1, transforma o texto ano para singular
if (resultado <= 1) {
    textoAno = "ano";
}

window.alert("A diferença entre o ano digitado e o ano atual é de " + resultado + " " + textoAno + ".")

