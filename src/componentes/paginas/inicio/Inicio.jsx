import React from 'react'
import "../../componentes-css/inicio.scss"
import imagen1 from "../../../assets/imagenes-react-kode/imagen1.jpg";
import imagen2 from "../../../assets/imagenes-react-kode/imagen2.jpg";
import imagen4 from "../../../assets/imagenes-react-kode/imagen4.jpg";
import imagenfondo2 from "../../../assets/imagenes-react-kode/imagenfondo2.jpg";
import imagenfondo1 from "../../../assets/imagenes-react-kode/imagenfondo1.jpg";
import imagenfondo3 from "../../../assets/imagenes-react-kode/imagenfondo3.jpg";
import imagenfondo4 from "../../../assets/imagenes-react-kode/imagenfondo4.jpg";
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

function Inicio() {


    
    return (
        <>
        <Header></Header>
        <div className='inicio'>
            <img className='imagen' src={imagenfondo1} alt="" />
            <img className='imagen' src={imagenfondo4} alt="" />
            <img className='imagen' src={imagenfondo2} alt="" />
            <img className='imagen' src={imagenfondo3} alt="" />
        </div>
        <Footer></Footer>
        </>
    )
}

export default Inicio
