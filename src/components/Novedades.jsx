import styles from "../styles/Novedades.module.css";
import Item from "./Item";

const Novedades = () => {
    return (
        <section className={styles.container}>
            <h3>Novedades</h3>
            <Item />
        </section>
    );
};

export default Novedades;
