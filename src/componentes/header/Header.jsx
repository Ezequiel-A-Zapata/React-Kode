import React from 'react'
import "../componentes-css/header.scss"
import Menu from './Menu'
import CestaWidget from './CestaWidget'
import { Link } from 'react-router-dom'



function Header() { 



    return (
        <section className='header'>
            <div className='contenedor-menulogo'>
            <Menu></Menu>
            <Link className='link-logo' to="/"><h1 className='logo'>Archi</h1></Link>
            </div>
            <div className='contenedor-widget'>
            <CestaWidget></CestaWidget>
            </div>
        </section>
    )
}

export default Header
