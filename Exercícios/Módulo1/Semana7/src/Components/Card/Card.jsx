import styles from "./Card.module.css";
import imagem from "../../assets/imgs/foto.png";
import PropTypes from "prop-types";

export const Card = ( prop ) => {
  return (
    <div className={styles.section}>
      <img src={imagem} alt="Foto" />
      <div>Nome: {prop.nome}</div>
      <div>Descrição: {prop.descricao}</div>
      <div>Valor: R${prop.valor}</div>
      <div>Tempo de preparo: {prop.tempo}</div>
    </div>
  );
};

Card.propTypes = {
  prop: PropTypes.shape({
    nome: PropTypes.string,
    descricao: PropTypes.string,
    valor: PropTypes.number,
    tempo: PropTypes.string,
  }),
};
