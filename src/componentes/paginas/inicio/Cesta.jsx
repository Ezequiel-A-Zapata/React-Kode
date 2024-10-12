import React, { useContext } from 'react'
import Header2 from '../../header/Header2'
import { CartContext } from '../../../context/CartContext'

function Cesta() {

    const {carrito,cantidad,handleSumar,handleRestar,handleAgregar,carritoAcumulador} = useContext(CartContext)



    return (
        <>
        <Header2></Header2>
        {carrito && carrito.map((prod)=>{
            return(
                <section>
                    <img src={prod.imagenes.IMG1} alt={prod.nombre} />
                    <p>{prod.nombre}</p>
                    <p>${prod.precio}</p>
                    </section>
            )
        })}
        </>
    )
}

export default Cesta