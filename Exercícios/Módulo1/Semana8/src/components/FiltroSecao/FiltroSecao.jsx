import styles from "./FiltroSecao.module.css";
import PropTypes from "prop-types";
// import React from "react";

export const FiltroSecao = ({ secoes = [], onSelecionarSecao }) => {
  return (
    <div >
      <ul className={styles.areaBotoes}>
        {secoes.map((secao) => (
          <li>
            <button onClick={() => {}}>{secao.nome}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FiltroSecao.propTypes = {
  onSelecionarSecao: PropTypes.func.isRequired,
  secoes: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string,
    })
  ),
};
