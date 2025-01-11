import React, { useContext, useState } from 'react'
import "../../componentes-css/itemDetail.scss"
import Header2 from '../../header/Header2';
import { CartContext } from '../../../context/CartContext';
function ItemDetail(props) {

    const { item } = props;

    const {carrito,handleAgregar}=useContext(CartContext)
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
                        <h2 className='nombre-producto'>{item.nombre.toUpperCase()}</h2>
                        <h3 className='precio-producto'>${item.precio}</h3>
                    </div>
                    <button onClick={()=>{handleAgregar(item,carrito)}} className='botonDetail-anadir'> AÑADIR</button>
                    <div className='descripcion'>{item.descripcion.toUpperCase()}</div>
                </section>
            </section>
        </>
    )
}

export default ItemDetail