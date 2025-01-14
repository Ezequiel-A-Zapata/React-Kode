import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Header2 from '../../header/Header2'
import { CartContext } from '../../../context/CartContext'
import "../../componentes-css/cesta.scss"
import { Link } from 'react-router-dom'
import Footer2 from '../../footer/Footer2.'

function Cesta() {

    const { carrito, handleSumar, handleRestar, eliminarProducto, limpiarCarrito, precioTotal } = useContext(CartContext)
    const navigate = useNavigate();
    console.log(carrito)

    return (
        <>
            <Header2></Header2>
            <section className='contenedor-cesta'>
                {carrito.length === 0 ? <div className='cesta-vacia'><p >LA CESTA ESTA VACIA</p></div> :
                    <>
                        <button className='limpiar-carrito' onClick={limpiarCarrito}>LIMPIAR CESTA</button>
                        {carrito && carrito.map((prod) => {
                            return (
                                <div className='producto-cesta' key={prod.nombre}>
                                    <img className='imagen-producto' src={prod.imagenes.IMG1} alt={prod.nombre} onClick={() => navigate(`/producto/${prod.id}`)}
                                            style={{ cursor: 'pointer' }} />
                                    <div className='info-producto-cesta'>
                                        <button className='boton-borrar' onClick={() => { eliminarProducto(prod) }}><i className="bi bi-x" style={{fontSize:"130%"}}></i></button>
                                        <h2 className='nombre-producto' onClick={() => navigate(`/producto/${prod.id}`)}
                                            style={{ cursor: 'pointer' }} >{prod.nombre}</h2>
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
                            <div className='cuenta'>
                                <p className='total'>TOTAL:</p>
                                <p className='precio-total'>${precioTotal}</p>
                            </div>
                            <Link className='continuar'>CONTINUAR</Link>
                            </div>
                    </>}
            </section>
            <Footer2 />
        </>
    )
}

export default Cesta