import styles from "./NavBar.module.css";
import logo from "../../assets/imgs/logo.svg";

export const NavBar = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" />
      <div className={styles.menu}>
        <h1>gula.com</h1>
        <nav>
          <ul>
            <li>Menu</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
