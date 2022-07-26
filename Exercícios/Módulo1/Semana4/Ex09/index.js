const resultado = document.getElementById('resultado');
let idade;

function classificar() {
    idade = parseInt(document.getElementById('idade').value);
    console.log(idade)

    if (idade <= 15) {
        resultado.innerHTML = "Jovens"
    } else if (idade >= 16 && idade < 65) {
        resultado.innerHTML = "Adultos"
    } else {
        resultado.innerHTML = "Idosos"
    }

}