import React from 'react'
import "../../componentes-css/inicio.scss"
import imagen1 from "../../../assets/imagenes-react-kode/imagen1.jpg";
import imagen2 from "../../../assets/imagenes-react-kode/imagen2.jpg";
import imagen4 from "../../../assets/imagenes-react-kode/imagen4.jpg";
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

function Inicio() {


    
    return (
        <>
        <Header></Header>
        <div className='inicio'>
            <img className='imagen' src={imagen2} alt="" />
            <img className='imagen' src={imagen1} alt="" />
            <img className='imagen' src={imagen4} alt="" />
        </div>
        <Footer></Footer>
        </>
    )
}

export default Inicio
