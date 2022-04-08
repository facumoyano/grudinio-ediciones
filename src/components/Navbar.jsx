import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/logo-blanco-negro.jpg";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const open = () => {
        setActive(true);
    };

    const close = () => {
        setActive(false);
    };

    const openSearch = () => {
        setSearchActive(true);
    };

    const closeSearch = () => {
        setSearchActive(false);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <div>
                    <img src={Logo} alt="logo gudiño" />
                </div>
                <div className={styles.icon}>
                    <AiOutlineSearch onClick={openSearch} />

                    {active ? (
                        <AiOutlineClose onClick={close} />
                    ) : (
                        <GiHamburgerMenu onClick={open} />
                    )}
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
            {active && (
                <div className={styles.desplegable}>
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
            )}

            {searchActive && (
                <div className={styles.search}>
                    <h3>¿Qué libro buscás?</h3>
                    <input type="text" placeholder="Título del libro" />
                    <input type="text" placeholder="Nombre del autor/a" />
                    <div className={styles.search_buttons}>
                        <button
                            className={styles.search_button_volver}
                            onClick={closeSearch}
                        >
                            Volver
                        </button>
                        <button className={styles.search_button_buscar}>
                            Buscar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
