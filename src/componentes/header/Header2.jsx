import React, { useState,useEffect } from 'react'
import "../componentes-css/header2.scss"
import Menu from '../header/Menu'
import CestaWidget from "../header/CestaWidget"
function Header2() {


const [isTransparent, setIsTransparent] = useState(false);  // Estado para gestionar el fondo

useEffect(() => {

  const handleScroll = () => {
    const fixedElementPosition = 45;  // Esta es la posición (en píxeles) donde está el elemento fijo
    const scrollPosition = window.scrollY;  // Detecta la posición actual del scroll

    // Si hemos hecho scroll hasta la posición del elemento fijo, cambiamos el fondo a transparente
    if (scrollPosition >= fixedElementPosition) {
      setIsTransparent(true);  // Fondo transparente
    } else {
      setIsTransparent(false);  // Fondo blanco
    }
  };

  window.addEventListener('scroll', handleScroll);  // Escuchamos el evento de scroll

  return () => {
    window.removeEventListener('scroll', handleScroll);  // Limpiamos el escuchador cuando el componente se desmonta
  };
}, []);


  return (
    <div className='container-sticky'>
      <div className={`header-2 ${isTransparent ? 'transparente' : ''}`}>
        <Menu></Menu>
        <CestaWidget></CestaWidget>
      </div>
    </div>
  )
}

export default Header2