import styles from "../styles/Form.module.css";

const Form = () => {
    return (
        <div className={styles.form}>
            <form>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <input type="number" placeholder="Celular" />
                <input type="emial" placeholder="E-mail" />
                <textarea type="text" placeholder="Ingrese su consulta..." />
                <div className={styles.buttons}>
                    <button className={styles.button_enviar}>Enviar</button>
                    <button className={styles.button_borrar}>
                        Borrar todo
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
