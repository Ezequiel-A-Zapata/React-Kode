import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../componentes-css/cestaWidget.scss"
import { CartContext } from '../../context/CartContext'

function CestaWidget() {

const  {carritoAcumulador}=useContext(CartContext)      
    return (
        <>
            <Link to="/Cesta" className='cesta-header'><i className="bi bi-bag" style={{fontSize:"170%",color:"gray"}}></i>
            {carritoAcumulador ? <p className='acumulador-carrito'>{carritoAcumulador}</p> : ""}
            
            </Link>
            
        </>
    )
}

export default CestaWidget
