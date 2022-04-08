import styles from "../styles/FormCompra.module.css";
import Modal from "react-modal";
import { useState } from "react";

const FormCompra = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
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
            <main className={styles.bg}>
                <div className={styles.container}>
                    <h1>Comprar</h1>
                    <form className={styles.form}>
                        <div className={styles.label_container}>
                            <label htmlFor="nombre">Nombre:</label>
                            <label htmlFor="apellido">Apellido:</label>
                            <label htmlFor="email">E-mail:</label>
                            <label htmlFor="telefono">Celular:</label>
                            <label htmlFor="direccion">Dirección:</label>
                            <label htmlFor="libro">Libro:</label>
                        </div>
                        <div className={styles.input_container}>
                            <input
                                type="text"
                                name="nombre"
                                id="nombre"
                                placeholder="* Nombre"
                            />
                            <input
                                type="text"
                                name="apellido"
                                id="apellido"
                                placeholder="* Apellido"
                            />

                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="* E-mail"
                            />

                            <input
                                type="number"
                                name="telefono"
                                id="telefono"
                                placeholder="* Celular"
                            />

                            <input
                                type="text"
                                name="direccion"
                                id="direccion"
                                placeholder="Dirección"
                            />

                            <input
                                type="text"
                                name="libro"
                                id="libro"
                                placeholder="* Nombre del libro"
                            />
                        </div>
                    </form>
                    <div className={styles.buttons}>
                        <button className={styles.btn_cancel}>Cancelar</button>
                        <button
                            className={styles.btn_compra}
                            onClick={openModal}
                        >
                            Comprar
                        </button>
                    </div>
                </div>
            </main>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <div className={styles.modal_container}>
                    <h2>¡Gracias por su compra!</h2>
                    <p>En breve nos estaremos comunicando vía e-mail</p>
                    <button onClick={closeModal}>Volver</button>
                </div>
            </Modal>
        </>
    );
};

export default FormCompra;
