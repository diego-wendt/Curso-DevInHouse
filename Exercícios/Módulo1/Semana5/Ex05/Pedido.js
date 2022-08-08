import { Produto } from "./Produto.js"

export class Pedido {
    numeroPedido;
    dataPedido;
    estaPago;
    listaProdutos;
    nomeCliente;

    constructor(numeroPedido, nomeCliente) {
        this.numeroPedido = numeroPedido
        this.dataPedido = new Date().toLocaleDateString()
        this.estaPago = false
        this.listaProdutos = []
        this.nomeCliente = nomeCliente
    }

    adicionarProduto(produto) {
        // a linha abaixo é um if que vai returnar true se produto pertencer à classe produtos
        const isProduct = produto instanceof Produto;
        if (isProduct) {
            this.listaProdutos.push(produto);
        }
    }
}
