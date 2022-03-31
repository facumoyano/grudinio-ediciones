import Footer from "../components/Footer";
import ItemsCatalogo from "../components/ItemsCatalogo";
import Navbar from "../components/Navbar";
import styles from "../styles/Catalogo.module.css";

const Catalogo = () => {
    return (
        <>
            <Navbar />
            <main className={styles.bg}>
                <div className={styles.container}>
                    <h1>Todos</h1>
                    <div className={styles.grid}>
                        <ItemsCatalogo />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Catalogo;
