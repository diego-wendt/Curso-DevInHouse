import styles from "./ListaCards.module.css";
import { Card } from "../index";

export const ListaCards = ({ sub, produtos }) => {
  const lista = produtos.filter((p) => p.subSecao == sub);

  return (
    <div className={styles.lista}>
      {lista.map((p) => (
        <Card
          key={p.id}
          nome={p.nome}
          descricao={p.descricao}
          valor={p.valor}
          tempo={p.tempoPreparo}
        />
      ))}
    </div>
  );
};
