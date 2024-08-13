import React from 'react'
import "./Inicio.scss"
import imagen1 from "../../../assets/imagenes-react-kode/imagen1.jpg";
import imagen2 from "../../../assets/imagenes-react-kode/imagen2.jpg";
import imagen4 from "../../../assets/imagenes-react-kode/imagen4.jpg";

function Inicio() {
    return (
        <div>
            <img className='imagen' src={imagen2} alt="" />
            <img className='imagen' src={imagen1} alt="" />
            <img className='imagen' src={imagen4} alt="" />
        </div>
    )
}

export default Inicio
