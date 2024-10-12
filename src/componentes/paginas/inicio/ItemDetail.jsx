import React, { useContext, useState } from 'react'
import "../../componentes-css/itemDetail.scss"
import Header2 from '../../header/Header2';
import { CartContext } from '../../../context/CartContext';
function ItemDetail(props) {

    const { item } = props;

    const {carrito,cantidad,handleSumar,handleRestar,handleAgregar}=useContext(CartContext)
    console.log(carrito)
    const imagenes = item.imagenes;


    return (
        <>
            <Header2></Header2>
            <section className='item-detail'>
                {imagenes ? Object.entries(imagenes).map(([key, url]) => (
                    <img key={key} className="imagen-detail" src={url} alt={`${item.nombre} ${key}`} />
                )) : <p>no hay imagenes</p>}
                <section className='info-detail'>
                    <div>
                        <p>{item.nombre.toUpperCase()}</p>
                        <p>${item.precio}</p>
                    </div>
                    {/* <div className='display-cantidad'>
                        <p>CANTIDAD: {cantidad}</p>
                        <button className='boton-sumar-restar' onClick={()=>{handleSumar(cantidad)}}><i className="bi bi-plus-square-dotted"></i></button>
                        <button className='boton-sumar-restar' onClick={()=>{handleRestar(cantidad)}}><i className="bi bi-dash-square-dotted"></i></button>
                    </div> */}
                    <button onClick={()=>{handleAgregar(cantidad,item,carrito)}} className='botonDetail-anadir'> AÑADIR</button>
                    <div className='descripcion'>{item.descripcion}</div>
                </section>
            </section>
        </>
    )
}

export default ItemDetail