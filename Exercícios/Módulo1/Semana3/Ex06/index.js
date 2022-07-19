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

var listaConvidados = [convidado1, convidado2, convidado3, convidado4, convidado5, convidado6];
var convidadosComBebidasProcessada = [];


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

console.log(convidadosComBebidasProcessada);

