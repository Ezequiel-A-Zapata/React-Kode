
import React, { useContext, useMemo, useState, useEffect } from 'react';
import "../../componentes-css/itemDetail.scss";
import Header2 from '../../header/Header2';
import { CartContext } from '../../../context/CartContext';

function ItemDetail({ item }) {
    const { carrito, handleAgregar } = useContext(CartContext);
    
    // Validación para evitar errores si item es undefined
    if (!item) {
        return (
            <>
                <Header2 />
                <section className="item-detail">
                    <p>Cargando información del producto...</p>
                </section>
            </>
        );
    }

    const imagenes = item.imagenes || {};
    const [indexImagenes, setIndexImagenes] = useState(0);
    
    const urls = useMemo(() => Object.values(imagenes), [imagenes]);

    const next = () => {
        setIndexImagenes((prevIndex) => (prevIndex + 1) % urls.length);
    };

    const back = () => {
        setIndexImagenes((prevIndex) => (prevIndex - 1 + urls.length) % urls.length);
    };

    useEffect(() => {
        urls.forEach((url) => {
            const img = new Image();
            img.src = url;
        });
    }, [urls]);

    return (
        <>
            <Header2 />
            <section className="item-detail">
                <section className='imagen-container'>
                    {urls.length > 0 ? (
                        <>
                            <button className='boton-anterior' onClick={back} >
                                <i className="bi bi-caret-left"></i>
                            </button>
                            <button className='boton-siguiente' onClick={next} >
                                <i className="bi bi-caret-right"></i>
                            </button>
                            <img className='imagen-detail' src={urls[indexImagenes]} alt="Imagen del producto" />
                        </>
                    ) : (
                        <p>No hay imágenes</p>
                    )}
                </section>
                <section className="info-detail">
                    <div>
                        <h2 className="nombre-producto">{item.nombre?.toUpperCase() || "SIN NOMBRE"}</h2>
                        <h3 className="precio-producto">${item.precio || "0"}</h3>
                    </div>

                    <div className="descripcion">{item.descripcion?.toUpperCase() || "SIN DESCRIPCIÓN"}</div>

                    <button
                        onClick={() => handleAgregar(item, carrito)}
                        className="botonDetail-anadir"
                    >
                        AÑADIR
                    </button>
                </section>
            </section>
        </>
    );
}

export default ItemDetail;
