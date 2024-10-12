import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../componentes-css/cestaWidget.scss"
import { CartContext } from '../../context/CartContext'

function CestaWidget() {

const  {carritoAcumulador}=useContext(CartContext)      
    return (
        <>
            <Link to="/Cesta" className='cesta-header'><i className="bi bi-bag" style={{fontSize:"150%",color:"gray"}}></i>{carritoAcumulador}</Link>
        </>
    )
}

export default CestaWidget
