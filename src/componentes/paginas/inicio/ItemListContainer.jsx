import React from 'react'
import { useState,useEffect } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../../firebase/config-fb'
import { useParams } from 'react-router-dom';
import "../../componentes-css/itemListContainer.scss"


function ItemListContainer() {
    
    const [productos,setProductos] = useState();

    const {CategoriaId} = useParams();


    useEffect(() => {
        
        const productosRef = collection(db,"productos");
        const q = CategoriaId ? query(productosRef,where("categoria.id","==", CategoriaId)) : "";
        
        getDocs(q)
        .then((res)=>{
            // const productosFiltrados = res.docs.filter(doc => doc.data().categoria.id === CategoriaId)
            setProductos (res.docs.map((producto)=>{
                return {...producto.data(),id: producto.id}
            }))
        })

    }, [CategoriaId])  
    
    
    
    return (
        <section className='list-container'>
            {productos ? productos.map((producto)=>{
            return (
                <div className='producto' key={producto.id}>
                <img className='producto-imagen' src={producto.imagen} alt="" />
                <p className='producto-nombre'>{producto.nombre.toUpperCase()}</p>
                <p className='producto-precio'>${producto.precio}</p>
                </div>)
        })
    : "cargando"
            }
        </section>
    )
}

export default ItemListContainer