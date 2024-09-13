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
        }else{
            setCarrito({ ...carrito, itemAgregado })
        }

    }




    return (
        <>

            <Header2></Header2>
            <section className='item-detail'>
                <img className='imagen-detail' src={item.imagen} alt={item.nombre} />
                <section className='info-detail'>
                    <div>
                        <p>{item.nombre.toUpperCase()}</p>
                        <p>{item.precio}</p>
                    </div>
                    <button onClick={handleAgregar} className='botonDetail-anadir'> Añadir</button>
                    <div className='display-cantidad'>
                        <button onClick={handleSumar}>+</button>
                        <p>{cantidad}</p>
                        <button onClick={handleRestar}>-</button>
                    </div>
                    <div className='descripcion'>{item.descripcion}</div>
                </section>
            </section>
        </>
    )
}

export default ItemDetail