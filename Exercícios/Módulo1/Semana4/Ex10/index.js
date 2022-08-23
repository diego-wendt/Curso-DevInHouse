const data = document.getElementById('data');
const estacao = document.getElementById('estacao');
const imagem = document.getElementById('img');

const verificaEstacao = (event)=>{
    const dataFormatada = new Date(`${event.target.value} 00:00`)
    const dia = dataFormatada.getDate();
    const mes = (dataFormatada.getMonth()+1);
    const diaNoAno = dataFormatada

    console.log(dia,mes)

if(mes==1 || mes==2 || (mes==3 && dia <=21) || (mes==12 && dia >=22)){
    atualizaDados("Verão","./Imgs/verao.png")
    // estacao.innerText = "Verão";
    // document.getElementById('img').src = "./Imgs/verao.png"

}else if ((mes==3&&dia>=22) || mes==4 || mes== 5|| (mes==6 && dia <=21)){
    atualizaDados("Outono","./Imgs/outono.png")
    // estacao.innerText = "Outono";
    // document.getElementById('img').src = "./Imgs/outono.png"

}else if ((mes==6&&dia>=22) || mes==7 || mes== 8|| (mes==9 && dia <=21)){
    atualizaDados("Inverno","./Imgs/inverno.png")
    // estacao.innerText = "Inverno";
    // document.getElementById('img').src = "./Imgs/inverno.png"

}else if((mes==9&&dia>=22) || mes==10 || mes== 11|| (mes==12 && dia <=21)){
    atualizaDados("Primavera","./Imgs/primavera.png")
    // estacao.innerText = "Primavera";
    // document.getElementById('img').src = "./Imgs/primavera.png"

}else{
    estacao.innerText = "Data inválida";
}    
}

const atualizaDados = (texto,url) =>{
    estacao.innerText = texto;
    imagem.src = url
}

data.onchange = verificaEstacao;

// -- 22/03 a 21/06 - Outono;
// -- 22/06 a 21/09 - Inverno;
// -- 22/09 a 21/12 - Primavera.
// -- 22/12 a 21/03 - Verão;