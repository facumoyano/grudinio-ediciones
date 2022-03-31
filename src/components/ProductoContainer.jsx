import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Producto from "./Producto";

const ProductoContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const obtenerDatos = async () => {
            const url = "/productos.json";
            const { data } = await axios(url);

            setProducto(data.find((producto) => producto.id === id));
        };
        obtenerDatos();
    }, [id]);

    return (
        <>
            <Navbar />
            <Producto producto={producto} />
            <Footer />
        </>
    );
};

export default ProductoContainer;
