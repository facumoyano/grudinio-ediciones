import axios from "axios";
import { useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import styles from "../styles/Item.module.css";

const ItemsCatalogo = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            const url = "productos.json";
            const { data } = await axios(url);
            setProductos(data);
        };
        obtenerDatos();
    }, []);

    return (
        <>
            {productos.map((producto) => (
                <div key={producto.id} className={styles.item}>
                    <img
                        src={require(`../assets/${producto.imgUrl}`)}
                        alt={producto.nombre}
                    />
                    <h5>{producto.nombre}</h5>
                    <p className={styles.autor}>{producto.autor}</p>
                    <div className={styles.precio}>
                        <p>${producto.precio} </p>

                        <MdAddShoppingCart />
                    </div>
                </div>
            ))}
        </>
    );
};

export default ItemsCatalogo;
