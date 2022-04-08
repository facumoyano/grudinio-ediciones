import axios from "axios";
import { useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../styles/Item.module.css";

const Item = () => {
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
            {productos.slice(0, 5).map((producto) => (
                <div key={producto.id} className={styles.item}>
                    <img
                        src={require(`../assets/${producto.imgUrl}`)}
                        alt={producto.nombre}
                    />
                    <h5>{producto.nombre}</h5>
                    <p className={styles.autor}>{producto.autor}</p>
                    <div className={styles.precio}>
                        <p>${producto.precio} </p>
                        <Link to={`/producto/${producto.id}`}>
                            <MdAddShoppingCart />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Item;
