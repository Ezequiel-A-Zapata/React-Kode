import React from 'react'

function ItemDetail(props) {
    const {item} = props;
    console.log(item)

    return (
        <section className='itemDetail'>
            <img src={item.imagen} alt={item.nombre} />
            <div>{item.nombre}</div>
            <div>{item.precio}</div>
        </section>
    )
}

export default ItemDetail