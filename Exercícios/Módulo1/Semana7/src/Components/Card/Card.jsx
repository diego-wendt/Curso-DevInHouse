import styles from "./Card.module.css";
import imagem from "../../assets/imgs/foto.png";

export const Card = (prop) => {
  return (
    <div className={styles.card}>
      <img src={imagem} alt="Foto" />
      <div>Nome: {prop.nome}</div>
      <div>Descrição: {prop.descricao}</div>
      <div>Valor: R${prop.valor}</div>
      <div>Tempo de preparo: {prop.tempo}</div>
    </div>
  );
};