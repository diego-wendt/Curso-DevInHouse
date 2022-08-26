import styles from "./Footer.module.css";
import { MdPlace, MdPhone, MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftBar}>
        <ul>
          <li>
            <MdPlace /> Rua da comida, nº 237, bairro Comilão - São Paulo - SP
          </li>
          <li>
            <MdPhone /> (11) 1234-5678
          </li>
          <li>
            <MdEmail /> contato@restaurantedomundo.com.br
          </li>
        </ul>
      </div>
      <div className={styles.rightBar}>
        <p>Sobre nós</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          perferendis voluptas consectetur atque.
        </p>
        <div>
          <ul className={styles.socialMedias}>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedin />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
