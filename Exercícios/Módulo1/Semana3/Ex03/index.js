var numero1 = window.prompt("Qual o primeiro número?");
var numero2 = window.prompt("Qual o segundo número?");
var operacao = window.prompt("Qual a operação?");
var calc;

switch (operacao) {

    case "+":
        console.log("case1")
        calc = parseInt(numero1) + parseInt(numero2);
        break;

    case "-":
        calc = numero1 - numero2;
        break;

    case "*":
        calc = numero1 * numero2;
        break;

    case "/":
        calc = numero1 / numero2;
        break;

    default:
        break;
}

console.log(calc)