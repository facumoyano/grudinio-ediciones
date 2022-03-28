import styles from "../styles/Novedades.module.css";
import Item from "./Item";

const Novedades = () => {
    return (
        <section className={styles.container}>
            <h3>Novedades</h3>
            <div className={styles.grid}>
                <Item />
            </div>
        </section>
    );
};

export default Novedades;
