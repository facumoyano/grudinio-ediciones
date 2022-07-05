import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Producto from "./Producto";
import data from "../data";

const ProductoContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const obtenerDatos = () => {
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
