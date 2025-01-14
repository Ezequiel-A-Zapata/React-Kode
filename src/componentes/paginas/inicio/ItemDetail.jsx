import React, { useContext, useMemo, useState, useEffect } from 'react';
import "../../componentes-css/itemDetail.scss";
import Header2 from '../../header/Header2';
import { CartContext } from '../../../context/CartContext';

function ItemDetail(props) {
    const { item } = props;
    const { carrito, handleAgregar } = useContext(CartContext);
    const imagenes = item.imagenes;

    const [indexImagenes, setIndexImagenes] = useState(0);
    console.log(indexImagenes)

    const urls = useMemo(() => Object.values(imagenes), [imagenes]);

    // usamos % para que nos devuelva el residuo de la division y asi asegurarnos que no nos de valores afuera de los indices

    const next = () => {
        setIndexImagenes((prevIndex) => (prevIndex + 1) % urls.length);
    }

    const back = () => {
        setIndexImagenes((prevIndex) => (prevIndex - 1 + urls.length) % urls.length);
    }
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
                            <button className='boton-anterior' onClick={back} ><i className="bi bi-caret-left "  ></i></button>
                            <button className='boton-siguiente' onClick={next} ><i className="bi bi-caret-right "></i></button>
                            <img className='imagen-detail' src={urls[indexImagenes]} />
                            
                        </>
                    ) : (
                        <p>no hay imagenes</p>
                    )}
                </section>
                <section
                    className="info-detail"
                >
                    <div>
                        <h2 className="nombre-producto">{item.nombre.toUpperCase()}</h2>
                        <h3 className="precio-producto">${item.precio}</h3>
                    </div>
                    <button
                        onClick={() => {
                            handleAgregar(item, carrito);
                        }}
                        className="botonDetail-anadir"
                    >
                        AÑADIR
                    </button>
                    <div className="descripcion">{item.descripcion.toUpperCase()}</div>
                </section>
            </section>
        </>
    );
}

export default ItemDetail;