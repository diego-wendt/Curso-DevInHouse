import styles from "./Secao.module.css";
import { Card } from "../index";

export const Secao = ({ secao, produtos }) => {

  

  return (
    <div className={styles.secao}>
      <h2>{secao}</h2>



      {produtos.map((p) => (
        <Card key={p.id} nome={p.nome} descricao={p.descricao} valor={p.valor} tempo={p.tempoPreparo}/>
      ))}
    </div>
  );
};
