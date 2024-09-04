import React from 'react'
import { useState,useEffect } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../../firebase/config-fb'
import { Link, useParams } from 'react-router-dom';
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
                <img className='producto-imagen' src={producto.imagen} alt={producto.nombre} />
                <div className='nombre-precio'>
                    <p>{producto.nombre.toUpperCase()}</p>
                    <p>${producto.precio}
                        <button><i class="bi bi-bookmark"></i></button>
                </p></div>
                <Link className='link-detail' to={`/producto/${producto.id}`}><i className="bi bi-plus-square-fill" style={{fontSize:"80%",color:"#D3D3D3"}}></i></Link>
                </div>)
        })
    : "cargando"
            }
        </section>
    )
}

export default ItemListContainer