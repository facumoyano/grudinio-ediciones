import Form from "../components/Form";
import Navbar from "../components/Navbar";
import styles from "../styles/Contacto.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import Footer from "../components/Footer";

const Contacto = () => {
    return (
        <>
            <Navbar />
            <main className={styles.background}>
                <div className={styles.container}>
                    <h1>Contacto</h1>
                    <div className={styles.grid}>
                        <Form />
                        <div className={styles.info_container}>
                            <div className={styles.info_item}>
                                <BsFillTelephoneFill />
                                <p>15-1234-1234</p>
                            </div>
                            <div className={styles.info_item}>
                                <AiOutlineMail />
                                <p>info@grunido.com.ar</p>
                            </div>
                            <div className={styles.info_item}>
                                <SiGooglemaps />
                                <p>lorem ipsum, 123 CABA.</p>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13618.148986415323!2d-64.19334471767814!3d-31.426873402408265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28fb8f9010b%3A0xf38e0d8c5a49ab83!2zTnVldmEgQ8OzcmRvYmEsIEPDs3Jkb2Jh!5e0!3m2!1ses!2sar!4v1648497308634!5m2!1ses!2sar"
                                width="100%"
                                height="210"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="ubicacion"
                                className={styles.iframe}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Contacto;
