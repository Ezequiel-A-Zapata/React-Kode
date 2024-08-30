import React from 'react'
import { useState,useEffect } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../../firebase/config-fb'
import { useParams } from 'react-router-dom';


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
        <section className='camisas'>{productos ? productos.map((producto)=>{
            return <div key={producto.id}>
                <img className='producto-imagen' src={producto.imagen} alt="" />
                <div className='producto-nombre'>{producto.nombre}</div>
                <div className='producto-precio'>{producto.precio}</div>
                </div>
        })
    : "cargando"
            }
        </section>
    )
}

export default ItemListContainer