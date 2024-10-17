import React, { useContext } from 'react'
import Header2 from '../../header/Header2'
import { CartContext } from '../../../context/CartContext'
import "../../componentes-css/cesta.scss"
import { Link } from 'react-router-dom'

function Cesta() {

    const { carrito, handleSumar, handleRestar, eliminarProducto, limpiarCarrito, precioTotal } = useContext(CartContext)

    console.log(carrito)

    return (
        <>
            <Header2></Header2>
            <section className='contenedor-cesta'>
                {carrito.length === 0 ? <p>la cesta esta vacia</p> :
                    <>
                        <button className='limpiar-carrito' onClick={limpiarCarrito}>LIMPIAR CESTA</button>
                        {carrito && carrito.map((prod) => {
                            return (
                                <div className='producto-cesta' key={prod.nombre}>
                                    <img className='imagen-producto' src={prod.imagenes.IMG1} alt={prod.nombre} />
                                    <div className='info-producto-cesta'>
                                        <button className='boton-borrar' onClick={() => { eliminarProducto(prod) }}><i className="bi bi-x" style={{fontSize:"130%"}}></i></button>
                                        <h2 className='nombre-producto'>{prod.nombre}</h2>
                                        <h3 className='precio-producto'>${prod.precio * prod.cantidad}</h3>
                                        <div className='descripcion-producto'>{prod.descripcion.toUpperCase()}</div>
                                        <div className='display-cantidad'>
                                            <button onClick={() => { handleSumar(prod) }}><i className="bi bi-plus" style={{color:"black"}}></i></button>
                                            <p>{prod.cantidad}</p>
                                            <button onClick={() => { handleRestar(prod) }}><i className="bi bi-dash" style={{color:"black"}}></i></button>
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        })}
                        <div className='contenedor-total'>
                            <p className='total'>TOTAL:</p>
                            <p className='precio-total'>${precioTotal}</p>
                            <Link className='continuar'>CONTINUAR</Link>
                            </div>
                    </>}
            </section>
            <Footer2 />
        </>
    )
}

export default Cesta