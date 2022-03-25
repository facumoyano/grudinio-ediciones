import { Link } from "react-router-dom";
import Logo from "../assets/logo-blanco-negro.jpg";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <img src={Logo} alt="logo gudiño" />
            </div>

            <div className={styles.lista}>
                <ul>
                    <li>
                        <Link to="/">inicio</Link>
                    </li>
                    <li>
                        <Link to="/nosotros">nosotros</Link>
                    </li>
                    <li>
                        <Link to="/catalogo">catalogo</Link>
                    </li>
                    <li>
                        <Link to="/contacto">contacto</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.filtro}>
                <input type="search" placeholder="¿Que libro buscas?" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.input_icon}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </nav>
    );
};

export default Navbar;
