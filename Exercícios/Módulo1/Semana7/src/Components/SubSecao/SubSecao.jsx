import styles from "./SubSecao.module.css";
import PropTypes from "prop-types";
import { ListaCards } from "../ListaCards/ListaCards";

export const SubSecao = ({ sub, produtos }) => {
  return (
    <>
      <h2 className={styles.titulo}>{sub}</h2>
      <div className={styles.subSecao}>
        <ListaCards key={sub} sub={sub} produtos={produtos} />
      </div>
    </>
  );
};

SubSecao.propTypes = {
  sub: PropTypes.string,
  produtos: PropTypes.arrayOf(PropTypes.object),
};
