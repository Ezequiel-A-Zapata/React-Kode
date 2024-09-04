import React, { useEffect, useRef, useState } from 'react'
import "../componentes-css/menu.scss"
import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase/config-fb'
import { Link } from 'react-router-dom'



function Menu() {
    const lista = useRef(null)
    const [menu, setMenu] = useState(false);


    const [categorias,setCategorias] = useState()
    
    
    useEffect(() => {
        const categoriasRef = collection(db,"categorias");
        getDocs(categoriasRef)
        .then((res)=>{
            setCategorias(res.docs.map((categoria)=>{
                return {...categoria.data(), id: categoria.id}
            }))
        })
        
    }, [])


    const toggleMenu = () => {
        setMenu(!menu)
        console.log(lista.current);
        if (!menu) {
            // Abre el menú y aplica la animación
            lista.current.classList.add('animating');
            lista.current.classList.remove('dnone');
        } else {
            // Cierra el menú y elimina la animación (si es necesario)
            lista.current.classList.add('dnone');
            lista.current.classList.remove('animating');
            
        }
        
    }

    return (
        <>
            <button  onClick={toggleMenu} className='boton-menu'>
            <i className="bi bi-list imagen-menu" style={{fontSize:"200%",color:"gray"}}></i>
            </button>
            <nav className={`nav-bar${menu ? ' dshow' : ''}`}>
                <button onClick={toggleMenu} className='boton-menu '>
                <i className="bi bi-x-lg" style={{fontSize:"180%",color:"gray"}}  ></i>
                </button>
                <ul ref={lista} className='lista'>
                    {categorias ? categorias.map((categoria)=> {
                        return <li key={categoria.id} className='categorias-link'>
                            <Link onClick={toggleMenu} className="link-menu"to={`productos/${categoria.id}`}>{categoria.nombre.toUpperCase()}</Link>
                            </li>
                    }) : "cargando"}
                </ul>
            </nav>
        </>
    )
}

export default Menu
