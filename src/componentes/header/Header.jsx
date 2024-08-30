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
            <Link className='link-logo' to="/"><h1 className='logo'>KODE</h1></Link>
            </div>
            <CestaWidget></CestaWidget>
        </section>
    )
}

export default Header
