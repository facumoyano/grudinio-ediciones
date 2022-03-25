import { useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import axios from "axios";

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
            {productos.map((producto) => (
                <div key={producto.id}>
                    <img
                        src={require(`../assets/${producto.imgUrl}`)}
                        alt={producto.nombre}
                    />
                    <h5>{producto.nombre}</h5>
                    <p>{producto.autor}</p>
                    <div>
                        <p>${producto.precio} </p>
                        <MdAddShoppingCart />
                    </div>
                </div>
            ))}
        </>
    );
};

export default Item;
