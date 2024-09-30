import React, { useState } from 'react'
import "../../componentes-css/itemDetail.scss"
import Header2 from '../../header/Header2';
function ItemDetail(props) {

    const { item } = props;

    const [carrito, setCarrito] = useState([])
    console.log(carrito)

    const [cantidad, setCantidad] = useState(0)

    const handleSumar = () => {
        setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleAgregar = () => {

        const itemAgregado = { ...item, cantidad }
        const nuevoCarrito = [...carrito];
        const estaEnElcarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElcarrito) {
            estaEnElcarrito.cantidad = estaEnElcarrito.cantidad + cantidad;
            setCarrito(nuevoCarrito);
        } else {
            setCarrito([nuevoCarrito, itemAgregado])
        }

    }

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
                    <div className='display-cantidad'>
                        <p>CANTIDAD: {cantidad}</p>
                        <button className='boton-sumar-restar' onClick={handleSumar}><i class="bi bi-plus-square-dotted"></i></button>
                        <button className='boton-sumar-restar' onClick={handleRestar}><i class="bi bi-dash-square-dotted"></i></button>
                    </div>
                    <button onClick={handleAgregar} className='botonDetail-anadir'> Añadir</button>
                    <div className='descripcion'>{item.descripcion}</div>
                </section>
            </section>
        </>
    )
}

export default ItemDetail