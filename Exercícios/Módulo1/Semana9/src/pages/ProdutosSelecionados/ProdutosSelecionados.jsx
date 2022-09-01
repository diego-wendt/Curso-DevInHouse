import { ListaCards } from "@components";
import { useProdutosSelecionados } from "@contexts";

import styles from './ProdutosSelecionados.module.css'

export const ProdutosSelecionados = () => {
  const { produtosSelecionados, limparProdutos } = useProdutosSelecionados();

  const total = produtosSelecionados.reduce((soma, item) => {
    return soma + item.valor;
  }, 0);

  return (
    <div>
      <div className={styles.header}>
        <h1>Produtos Selecionados</h1>
        <h2>{`R$ ${total.toFixed(2).replace(".", `,`)}`}</h2>
        <button onClick={limparProdutos}>Remover produtos</button>
      </div>

      <ListaCards produtos={produtosSelecionados} />
    </div>
  );
};
