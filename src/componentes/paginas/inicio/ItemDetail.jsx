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
                    <button onClick={()=>{handleAgregar(item,carrito)}} className='botonDetail-anadir'> AÑADIR</button>
                    <div className='descripcion'>{item.descripcion}</div>
                </section>
            </section>
        </>
    )
}

export default ItemDetail