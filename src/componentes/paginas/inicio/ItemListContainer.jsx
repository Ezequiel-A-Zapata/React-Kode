import React from 'react'
import { useState,useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../../firebase/config-fb'


function ItemListContainer() {
    
    const [productos,setProductos] = useState()
    console.log(productos)
    useEffect(() => {
        const productosRef = collection(db,"productos");
        getDocs(productosRef)
        .then((res)=>{
            setProductos (res.docs.map((producto)=>{
                return {...producto.data(),id: producto.id}
            }))
        })
    }, [])
    
    
    
    return (
        <section className='camisas'>{productos ?
            <>
            <div>{productos.nombre}</div>
            <div>{productos.precio}</div>
            </>
            : "cargando"
            }
            
        </section>
    )
}

export default ItemListContainer