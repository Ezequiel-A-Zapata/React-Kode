import React from 'react'
import "../../componentes-css/itemDetail.scss"
import Header2 from '../../header/Header2';
function ItemDetail(props) {
    const { item } = props;
    console.log(item)

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
                    <button className='botonDetail-anadir'> Añadir</button>
                    <div className='descripcion'>{item.descripcion}</div>
                </section>
            </section>
        </>
    )
}

export default ItemDetail