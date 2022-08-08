export class Pedido{
    numeroPedido;
    dataPedido;
    estaPago;
    listaProdutos;
    nomeCliente;

    constructor(numeroPedido,nomeCliente){
        this.numeroPedido = numeroPedido
        this.dataPedido = new Date( ).toLocaleDateString( ) 
        this.estaPago = false
        this.listaProdutos = []
        this.nomeCliente = nomeCliente
    }
}