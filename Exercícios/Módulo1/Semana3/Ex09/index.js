var convidado1 = {
    nome: "Naruto",
    sobrenome: "Uzumaki",
    setor: "pista",
    idade: 15,
}

var convidado2 = {
    nome: "Sasuke",
    sobrenome: "Uchiha",
    setor: "arquibancada",
    idade: 16,
}

var convidado3 = {
    nome: "Goku",
    sobrenome: "Sayajin",
    setor: "arquibancada",
    idade: 20,
}

var convidado4 = {
    nome: "Vegeta",
    sobrenome: "Sayajin",
    setor: "camarote",
    idade: 18,
}

var convidado5 = {
    nome: "Sakura",
    sobrenome: "Haruno",
    setor: "pista",
    idade: 19,
}

var convidado6 = {
    nome: "Hinata",
    sobrenome: "Hyuuga",
    setor: "camarote",
    idade: 16,
}

const listaConvidados = [
    convidado1,
    convidado2,
    convidado3,
    convidado4,
    convidado5,
    convidado6,
];

function liberarBebidas(lista) {
    var resultadoMap = lista.map((convidado) => {
        if (convidado.idade >= 18) {
            convidado.openBar = true;
        } else {
            convidado.openBar = false;
        }
        return convidado;
    })
    return resultadoMap;
};

convidadosComBebidasProcessada = liberarBebidas(listaConvidados);

let listaPista = separarPista(convidadosComBebidasProcessada);
// FUNÇÃO ARROWFUNCTION MODO EXTENDIDO
function separarPista(lista) {
    return lista.filter((convidado) => {
        return convidado.setor == 'pista';
    })
}

// FUNÇÃO ARROWFUNCTION COM BODY REDUZIDO
let listaCamarote = convidadosComBebidasProcessada.filter((convidado) => convidado.setor == 'camarote');

let listaArquibancada = separarArquibancada(convidadosComBebidasProcessada);
// FUNÇÃO ARROWFUNCTION MODO EXTENDIDO
function separarArquibancada(lista) {
    return lista.filter((convidado) => {
        return convidado.setor == "arquibancada";
    })
}

let ingArquibancada = document.getElementById('listaArquibancada')
listaArquibancada.forEach((element) => {
    ingArquibancada.innerHTML += '<li>' + nomeCompletoMaisBebida(element) + '</li> '
});

let ingCamarote = document.getElementById('listaCamarote')
listaCamarote.forEach((element) => {
    ingCamarote.innerHTML += '<li>' + nomeCompletoMaisBebida(element) + '</li> '
});

let ingPista = document.getElementById('listaPista')
listaPista.forEach((element) => {
    ingPista.innerHTML += '<li>' + nomeCompletoMaisBebida(element) + '</li> '
});

function nomeCompletoMaisBebida(element) {
    if (element.idade >= 18) {
        return element.nome + " " + element.sobrenome + " &#x1F37E";
    } else {
        return element.nome + " " + element.sobrenome + " &#x1F6AB";
    }
}