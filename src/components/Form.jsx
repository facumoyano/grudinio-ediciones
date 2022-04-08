import styles from "../styles/Form.module.css";
import Modal from "react-modal";
import { useState } from "react";

const Form = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal(e) {
        e.preventDefault();
        setModalIsOpen(true);
    }

    function closeModal(e) {
        e.preventDefault();
        setModalIsOpen(false);
    }

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
        overlay: {
            position: "fixed",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
    };

    return (
        <>
            <div className={styles.form}>
                <form>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Apellido" />
                    <input type="number" placeholder="Celular" />
                    <input type="emial" placeholder="E-mail" />
                    <textarea
                        type="text"
                        placeholder="Ingrese su consulta..."
                    />
                    <div className={styles.buttons}>
                        <button
                            className={styles.button_enviar}
                            onClick={openModal}
                        >
                            Enviar
                        </button>
                        <button className={styles.button_borrar}>
                            Borrar todo
                        </button>
                    </div>
                </form>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <div className={styles.modal_container}>
                    <h2>¡Muchas gracias!</h2>
                    <p>En breve nos estaremos comunicando vía e-mail</p>
                    <button onClick={closeModal}>Volver</button>
                </div>
            </Modal>
        </>
    );
};

export default Form;
