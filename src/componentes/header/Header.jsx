import React from 'react'
import "./header.scss"
import Menu from './Menu'
import Cesta from './Cesta'


function Header() {
    return (
        <section className='header'>
            <Menu></Menu>
            <h1 className='logo'>KODE</h1>
            <Cesta></Cesta>
        </section>
    )
}

export default Header
