import React from "react";
import HeaderHome from "../components/HeaderHome";
import Navbar from "../components/Navbar";
import Novedades from "../components/Novedades";

const Inicio = () => {
    return (
        <div>
            <Navbar />
            <HeaderHome />
            <Novedades />
        </div>
    );
};

export default Inicio;
