import React, { useContext } from 'react'
import Header2 from '../../header/Header2'
import { CartContext } from '../../../context/CartContext'
import "../../componentes-css/cesta.scss"

function Cesta() {

    const { carrito, handleSumar, handleRestar, eliminarProducto, limpiarCarrito } = useContext(CartContext)

    console.log(carrito)

    return (
        <>
            <Header2></Header2>
            <section className='contenedor-cesta'>
                <button className='limpiar-carrito' onClick={limpiarCarrito}>LIMPIAR CARRITO</button>
                {carrito && carrito.map((prod) => {
                    return (
                        <div className='producto-cesta' key={prod.nombre}>
                            <img className='imagen-producto' src={prod.imagenes.IMG1} alt={prod.nombre} />
                            <div className='info-producto-cesta'>
                                <button className='boton-borrar' onClick={() => { eliminarProducto(prod) }}><i className="bi bi-x"></i></button>
                                <p className='nombre-producto'>{prod.nombre}</p>
                                <p className='precio-producto'>${prod.precio}</p>
                                <div className='display-cantidad'>
                                    <p>CANTIDAD: {prod.cantidad}</p>
                                    <button onClick={() => { handleSumar(prod) }}><i className="bi bi-plus-square-fill" style={{ color: "#D3D3D3" }}></i></button>
                                    <button onClick={() => { handleRestar(prod) }}><i className="bi bi-dash-square-fill" style={{ color: "#D3D3D3" }}></i></button>
                                </div>
                                <div className='descripcion-producto'>{prod.descripcion.toUpperCase()}</div>
                            </div>
                        </div>
                    )
                })}
            </section>

        </>
    )
}

export default Cesta