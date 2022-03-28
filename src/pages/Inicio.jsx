import React from "react";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";
import Navbar from "../components/Navbar";
import Novedades from "../components/Novedades";

const Inicio = () => {
    return (
        <div>
            <Navbar />
            <HeaderHome />
            <Novedades />
            <Footer />
        </div>
    );
};

export default Inicio;
