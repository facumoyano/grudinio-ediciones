import styles from "../styles/Producto.module.css";
import React from "react";
import { Link, useParams } from "react-router-dom";
import getProductById from "../helpers/getProductById";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Producto = () => {
    const { id } = useParams();
    const producto = getProductById(id);
    console.log(producto);

    return (
        <>
            <Navbar />
            <main className={styles.bg}>
                <div className={styles.container}>
                    <div className={styles.titulos}>
                        <h1>{producto.nombre} </h1>
                        <h2>Subtitulo </h2>
                        <p>{producto.autor} </p>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.detalles}>
                            <div className={styles.detalles_img}>
                                <img
                                    src={require(`/assets/${producto.imgUrl}`)}
                                    alt={producto.titulo}
                                />
                            </div>
                            <div className={styles.detalles_descripcion}>
                                <div className={styles.precio}>
                                    <p>${producto.precio} ARG</p>
                                    <button>
                                        <Link to="/comprar">Comprar</Link>
                                    </button>
                                </div>
                                <div className={styles.disponible}>
                                    <p className={styles.disponible_verde}>
                                        disponible
                                    </p>
                                    <p>disponible en la distribuidora</p>
                                </div>
                                <div className={styles.datos}>
                                    <p>Editorial: {producto.editorial} </p>
                                    <p>
                                        Colección del libro:{" "}
                                        {producto.coleccion}{" "}
                                    </p>
                                    <p>Editorial: {producto.editorial} </p>
                                    <p>Idioma: {producto.idioma} </p>
                                    <p>
                                        Número de páginas:{" "}
                                        {producto.numeropaginas}{" "}
                                    </p>
                                    <p>Dimensiones: {producto.dimensiones} </p>
                                    <p>
                                        Fecha de publicación:{" "}
                                        {producto.fechapub}{" "}
                                    </p>
                                    <p>Materia: {producto.materia} </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.sinopsis}>
                            <h3 className={styles.sinopsis_titulo}>Sinopsis</h3>
                            <p>
                                Sinopsis Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type
                                specimen book. It has survived not only five
                                centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div className={styles.autor_footer}>
                        <h4>Autor: {producto.autor} </h4>
                        <p>
                            Autor: Lorem ipsum There are many variations of
                            passages of Lorem Ipsum available, but the majority
                            have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even
                            slightly believable. If you are going to use a
                            passage of Lorem Ipsum, you need to be sure there
                            isn't anything embarrassing hidden in the middle of
                            text.{" "}
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Producto;
