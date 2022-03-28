import styles from "../styles/Footer.module.css";
import Logo from "../assets/logo-blanco-negro.jpg";
import {
    GrFacebookOption,
    GrInstagram,
    GrYoutube,
    GrTwitter,
} from "react-icons/gr";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.empresa}>
                    <img src={Logo} alt="Logo gruñido" />
                    <p>Grudiño ediciones</p>
                </div>
                <div className={styles.redes}>
                    <p>Seguinos en redes</p>
                    <ul>
                        <li>
                            <a href="#">
                                <GrFacebookOption />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <GrInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <GrYoutube />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <GrTwitter />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.derechos}>
                    <p>Todos los derechos reservados 2022</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
