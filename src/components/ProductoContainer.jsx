import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Producto from "./Producto";

const ProductoContainer = () => {
    return (
        <>
            <Navbar />
            <Producto />
            <Footer />
        </>
    );
};

export default ProductoContainer;
