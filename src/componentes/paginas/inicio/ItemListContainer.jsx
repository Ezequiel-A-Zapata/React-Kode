import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../../firebase/config-fb'
import { Link, useParams } from 'react-router-dom';
import "../../componentes-css/itemListContainer.scss"
import Header2 from '../../header/Header2';
import { CartContext } from '../../../context/CartContext';
import Footer2 from '../../footer/Footer2.';


function ItemListContainer() {
    

    const [productos, setProductos] = useState();

    const { CategoriaId } = useParams();


    useEffect(() => {

        const productosRef = collection(db, "ProductosKode");

        const q = CategoriaId ? query(productosRef, where("categoria.id", "==", CategoriaId)) : "";

        getDocs(q)
            .then((res) => {
                setProductos(res.docs.map((producto) => {
                    return { ...producto.data(), id: producto.id }
                }))
            })
            .catch((error) => {
                console.error("Error al obtener productos:", error);
            });

    }, [CategoriaId])



    return (
        <>
        <Header2></Header2>
        <section className='container'>
            <section className='list-container'>
                {productos ? productos.map((producto) => {
                    return (
                        <div className='producto' key={producto.id}>
                            {producto.imagenes && producto.imagenes.IMG1 ? (
                                <img className='producto-imagen' src={producto.imagenes.IMG1} alt={producto.nombre} />
                            ) : (
                                <p>Imagen no disponible</p>
                            )}
                            <div className='nombre-precio'>
                                <p>{producto.nombre.toUpperCase()}</p>
                                <p>${producto.precio}
                                    <button>
                                        <i className="bi bi-bookmark" style={{ fontSize: "110%", color: "black" }}></i>
                                    </button>
                                </p></div>
                            <Link className='link-detail' to={`/producto/${producto.id}`}><i className="bi bi-plus-square-fill" style={{ fontSize: "90%", color: "gray" }}></i></Link>
                        </div>)
                })
                    : ""
                }
            </section>
        </section>
        <Footer2 />
        </>
    )
}

export default ItemListContainer