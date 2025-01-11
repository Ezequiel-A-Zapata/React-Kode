// import React, { useContext } from 'react'
// import { useState, useEffect, useRef } from 'react'
// import { collection, getDocs, query, where } from "firebase/firestore"
// import { db } from '../../firebase/config-fb'
// import { Link, useParams } from 'react-router-dom';
// import "../../componentes-css/itemListContainer.scss"
// import Header2 from '../../header/Header2';
// import { CartContext } from '../../../context/CartContext';
// import Footer2 from '../../footer/Footer2.';


// function ItemListContainer() {

//     const { handleAgregar, carrito, eliminarProducto } = useContext(CartContext)

//     const [boton, setBoton] = useState("")

//     const botonRef = useRef(null);

//     const [productos, setProductos] = useState();

//     const { CategoriaId } = useParams();

//     const handleClick = (producto) => {
//         if (carrito.find((item) => item.id === producto.id)) {
//             eliminarProducto(producto);
//             buttonRef.current.classList.remove("bi bi-bookmark-fill");
//             buttonRef.current.classList.add("bi bi-bookmark");
//         } else {
//             handleAgregar(producto, carrito);
//             buttonRef.current.classList.remove("bi bi-bookmark");
//             buttonRef.current.classList.add("bi bi-bookmark-fill");
//         }
//     };

//     useEffect(() => {

//         const productosRef = collection(db, "ProductosKode");

//         const q = CategoriaId ? query(productosRef, where("categoria.id", "==", CategoriaId)) : "";

//         getDocs(q)
//             .then((res) => {
//                 setProductos(res.docs.map((producto) => {
//                     return { ...producto.data(), id: producto.id }
//                 }))
//             })
//             .catch((error) => {
//                 console.error("Error al obtener productos:", error);
//             });

//     }, [CategoriaId])



//     return (
//         <>
//             <Header2></Header2>
//             <section className='container'>
//                 <section className='list-container'>
//                     {productos ? productos.map((producto) => {
//                         return (
//                             <div className='producto' key={producto.id}>
//                                 {producto.imagenes && producto.imagenes.IMG1 ? (
//                                     <img className='producto-imagen' src={producto.imagenes.IMG1} alt={producto.nombre} />
//                                 ) : (
//                                     <p>Imagen no disponible</p>
//                                 )}
//                                 <div className='nombre-precio'>
//                                     <p>{producto.nombre.toUpperCase()}</p>
//                                     <p>${producto.precio}
//                                         <button >
//                                             <i ref={botonRef} onClick={()=>{handleClick(producto)} } className="bi bi-bookmark" style={{ fontSize: "110%", color: "black" }}></i>
//                                         </button>
//                                     </p></div>
//                                 <Link className='link-detail' to={`/producto/${producto.id}`}><i className="bi bi-plus-square-fill" style={{ fontSize: "90%", color: "gray" }}></i></Link>
//                             </div>)
//                     })
//                         : ""
//                     }
//                 </section>
//             </section>
//             <Footer2 />
//         </>
//     )
// }

// export default ItemListContainer

import React, { useContext, useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config-fb';
import { Link, useParams } from 'react-router-dom';
import '../../componentes-css/itemListContainer.scss';
import Header2 from '../../header/Header2';
import { CartContext } from '../../../context/CartContext';
import Footer2 from '../../footer/Footer2.';

function ItemListContainer() {
    const { handleAgregar, carrito, eliminarProducto } = useContext(CartContext);
    const [productos, setProductos] = useState([]);
    const [botonesEstado, setBotonesEstado] = useState({}); // Objeto para gestionar las clases por ID de producto
    const { CategoriaId } = useParams();

    // Maneja el click en el botón
    const handleClick = (producto) => {
        if (carrito.find((item) => item.id === producto.id)) {
            eliminarProducto(producto);
            setBotonesEstado((prev) => ({
                ...prev,
                [producto.id]: false, // Cambia el estado a "no está en el carrito"
            }));
        } else {
            handleAgregar(producto, carrito);
            setBotonesEstado((prev) => ({
                ...prev,
                [producto.id]: true, // Cambia el estado a "está en el carrito"
            }));
        }
    };

    useEffect(() => {
        const productosRef = collection(db, 'ProductosKode');
        const q = CategoriaId ? query(productosRef, where('categoria.id', '==', CategoriaId)) : productosRef;

        getDocs(q)
            .then((res) => {
                const productosData = res.docs.map((producto) => ({
                    ...producto.data(),
                    id: producto.id,
                }));
                setProductos(productosData);

                // Inicializa los estados de los botones según el carrito actual
                const inicialEstado = {};
                productosData.forEach((producto) => {
                    inicialEstado[producto.id] = carrito.some((item) => item.id === producto.id);
                });
                setBotonesEstado(inicialEstado);
            })
            .catch((error) => {
                console.error('Error al obtener productos:', error);
            });
    }, [CategoriaId, carrito]);

    return (
        <>
            <Header2 />
            <section className="container">
                <section className="list-container">
                    {productos.length > 0
                        ? productos.map((producto) => (
                            <div className="producto" key={producto.id}>
                                {producto.imagenes && producto.imagenes.IMG1 ? (
                                    <img
                                        className="producto-imagen"
                                        src={producto.imagenes.IMG1}
                                        alt={producto.nombre}
                                    />
                                ) : (
                                    <p>Imagen no disponible</p>
                                )}
                                <div className="nombre-precio">
                                    <p>{producto.nombre.toUpperCase()}</p>
                                    <p>
                                        ${producto.precio}
                                        <button onClick={() => handleClick(producto)}>
                                            <i
                                                className={
                                                    botonesEstado[producto.id]
                                                        ? 'bi bi-bookmark-fill'
                                                        : 'bi bi-bookmark'
                                                }
                                                style={{ fontSize: '110%', color: 'black' }}
                                            ></i>
                                        </button>
                                    </p>
                                </div>
                                <Link
                                    className="link-detail"
                                    to={`/producto/${producto.id}`}
                                >
                                    <i
                                        className="bi bi-eye-fill"
                                        style={{ fontSize: '90%', color: 'gray' }}
                                    ></i>
                                </Link>
                            </div>
                        ))
                        : ''}
                </section>
            </section>
            <Footer2 />
        </>
    );
}

export default ItemListContainer;