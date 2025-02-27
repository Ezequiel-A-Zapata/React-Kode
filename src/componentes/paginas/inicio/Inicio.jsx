import React, { useRef, useEffect, useState } from 'react'
import "../../componentes-css/inicio.scss"
import imagenfondo2 from "../../../assets/imagenes-react-kode/imagenfondo2.jpg";
import imagenfondo1 from "../../../assets/imagenes-react-kode/imagenfondo1.jpg";
import imagenfondo3 from "../../../assets/imagenes-react-kode/imagenfondo3.jpg";
import imagenfondo4 from "../../../assets/imagenes-react-kode/imagenfondo4.jpg";
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

function Inicio() {
    const [imagenEscala, setImagenEscala] = useState([1, 1, 1, 1]); // Escala inicial de las imágenes (1 = 100%)
    const imagenesRef = useRef([]);

    // Verificar la posición de cada imagen
    const checkImagePositions = () => {
        // Crear un array para almacenar las posiciones
        const posiciones = imagenesRef.current.map((img) => {
            const rect = img.getBoundingClientRect(); // Obtiene las coordenadas de la imagen
            return rect.top; // La distancia desde la parte superior de la ventana
        });

        const nuevasEscalas = posiciones.map((pos) => {
            if (pos <= -650) {
                const escala = pos / 1000 + 1.65;
                return escala;
            }
            return 1
        });
        setImagenEscala(nuevasEscalas);
    };



    useEffect(() => {
        const handleScroll = () => {
            checkImagePositions(); // Verifica las posiciones de las imágenes al hacer scroll
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])



    return (
        <>
            <Header></Header>
            <div className='inicio'>
                <div className='contenedor-imagenes'>
                <img
                    ref={(el) => (imagenesRef.current[0] = el)}
                    style={{ transform: `scale(${imagenEscala[0]})` }}
                    className='imagen' src={imagenfondo1} alt="" />
                <img
                    ref={(el) => (imagenesRef.current[1] = el)}
                    style={{ transform: `scale(${imagenEscala[1]})` }}
                    className='imagen' src={imagenfondo4} alt="" />
                <img
                    ref={(el) => (imagenesRef.current[2] = el)}
                    style={{ transform: `scale(${imagenEscala[2]})` }}
                    className='imagen' src={imagenfondo2} alt="" />
                <img
                    ref={(el) => (imagenesRef.current[3] = el)}
                    style={{ transform: `scale(${imagenEscala[3]})` }}
                    className='imagen' src={imagenfondo3} alt="" />
                </div>
            </div>
            
            <Footer></Footer>
        </>
    )
}

export default Inicio
