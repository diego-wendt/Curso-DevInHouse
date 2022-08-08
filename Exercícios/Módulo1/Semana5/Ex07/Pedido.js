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
        const isProduct = produto instanceof Produto;
        if (isProduct) {
            this.listaProdutos.push(produto);
        }
    }

    calcularTotal() {
        let total = this.listaProdutos.reduce((ant, atu) => {
            return ant + atu.preco * atu.quantidade;
        }, 0);
        return total;
    }

}
