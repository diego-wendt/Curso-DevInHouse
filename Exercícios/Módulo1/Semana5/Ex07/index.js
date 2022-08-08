import { Pedido } from "./Pedido.js"
import { Produto } from "./Produto.js"

const prod1 = new Produto("Fusca preto", 40_000, true, 1);
const prod2 = new Produto("Kombi ciano", 10_000, false, 0);
const prod3 = new Produto("Chevette verde", 6_500, true, 2);
const prod4 = new Produto("Opala grafite", 20_000, true, 1);
const prod5 = new Produto("Maverick vermelho", 35_000, true, 5);

const pdAnderson = new Pedido("20220001", "Anderson");
const pdLeandro = new Pedido("20220002", "Leandro");

pdAnderson.adicionarProduto(prod5);
pdAnderson.adicionarProduto(prod3);
pdAnderson.adicionarProduto(prod4);

pdLeandro.adicionarProduto(prod1);
pdLeandro.adicionarProduto(prod3);