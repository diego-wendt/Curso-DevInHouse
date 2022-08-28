import styles from "./Secao.module.css";
import { SubSecao } from "../index";
import PropTypes from "prop-types";

export const Secao = ({ secao, produtos }) => {
  const filtroEntrada = produtos.filter((p) => p.secao == secao);
  const tiposSub = [...new Set(filtroEntrada.map((p) => p.subSecao))];

  return (
    <div className={styles.secao}>
      <h2 className={styles.titulo}>{secao}</h2>

      {tiposSub.map((sub) => (
        <SubSecao key={sub} sub={sub} produtos={produtos} />
      ))}
    </div>
  );
};

Secao.propTypes = {
  secao: PropTypes.string,
  produtos: PropTypes.arrayOf(PropTypes.object),
};
