import styles from "../styles/HeaderHome.module.css";
import ImgLibro from "../assets/libro1.jpg";
import { MdAddShoppingCart } from "react-icons/md";
import Logo from "../assets/g-logo.jpg";

const HeaderHome = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_img}>
                    <img src={ImgLibro} alt="libro" />
                </div>
                <div>
                    <h1>Vigilar y castigar</h1>
                    <h3>Subtítulo</h3>
                    <p className={styles.autor}>Michel Foucalt</p>
                    <div className={styles.precio}>
                        <p>$ 500 ARG</p>
                        <div>
                            <MdAddShoppingCart />
                        </div>
                    </div>
                </div>
                <div className={styles.logo}>
                    <img src={Logo} alt="logo grudiño" />
                </div>
            </div>
        </header>
    );
};

export default HeaderHome;
