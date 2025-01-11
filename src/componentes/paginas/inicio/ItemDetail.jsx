import React, { useContext, useRef, useState, useEffect } from 'react';
import "../../componentes-css/itemDetail.scss";
import Header2 from '../../header/Header2';
import { CartContext } from '../../../context/CartContext';

function ItemDetail(props) {
    const { item } = props;
    const { carrito, handleAgregar } = useContext(CartContext);
    const imagenes = item.imagenes;

    const [infoEscala, setInfoEscala] = useState(0.6); // Escala inicial
    const infoRef = useRef(null);

    // Verificar la posición y calcular la escala
    const checkInfoPositions = () => {
        if (!infoRef.current) return;

        // Obtener la posición del elemento respecto a la ventana
        const posicion = infoRef.current.getBoundingClientRect().top;
        console.log(posicion)

        // Rango de posición y escala
        const posicionMaxima = 700; // Escala mínima
        const posicionMinima = 590; // Escala máxima
        const escalaMinima = 0.6;
        const escalaMaxima = 1;

        // Calcular escala dentro del rango
        if (posicion >= posicionMaxima) {
            setInfoEscala(escalaMinima); // Escala mínima
        } else if (posicion <= posicionMinima) {
            setInfoEscala(escalaMaxima); // Escala máxima
        } else {
            // Calcular escala intermedia
            const escala =
                escalaMinima +
                ((escalaMaxima - escalaMinima) * (posicionMaxima - posicion)) /
                    (posicionMaxima - posicionMinima);
            setInfoEscala(escala);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            checkInfoPositions();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header2 />
            <section className="item-detail">
                {imagenes ? (
                    Object.entries(imagenes).map(([key, url]) => (
                        <img
                            key={key}
                            className="imagen-detail"
                            src={url}
                            alt={`${item.nombre} ${key}`}
                        />
                    ))
                ) : (
                    <p>no hay imagenes</p>
                )}
                <section
                    ref={infoRef}
                    className="info-detail"
                    style={{
                        transform: `scale(${infoEscala})`,
                        transition: 'transform 0.3s ease-in-out',
                    }}
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