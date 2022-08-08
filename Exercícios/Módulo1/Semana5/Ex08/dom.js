function formatCurrency(){
// procurar no git
}

function elementProduto(produto) {
    const listItemEl = document.createElement("li");
    const productPrice = produto.preço.toLocaleString("pt-BR", { style: "currency", currency: "BRL", });
    listItemEl.innerText = `${produto.nome} - ${produto.quantidade} - ${productPrice}`
    return listItemEl;
}

function printProds(list) {
    const labelEl = document.createElement("label");
    labelEl.htmlFor = "produtos";
    labelEl.innerText = "produtos";

    const listEl = document.createElement("ul");
    listEl.name = "produtos";

    list.forEach(prod => {
        listEl.appendChild(elementProduto(prod));
    });

    return [labelEl, listEl];
}

export function elementPedido(pedido){
    const el = document.createElement("li");
    el.innerHTML = /*html*/`
    <p>PEDIDO No. ${pedido.numero}</p>
    <p>Data: ${pedido.dataPedido}</p>
    <p>Cliente: ${pedido.nomeCliente}</p>
    <p>Total: ${formatCurrency(pedido.calcularTotal())}</p>
    <p>Está pago: ${pedido.estaPago ? "Sim" : "Não" }</p>
`;

const [label, lista] = printProds(pedido.listaProdutos);


el.appendChild(label);
el.appendChild(lista);
return el;
}