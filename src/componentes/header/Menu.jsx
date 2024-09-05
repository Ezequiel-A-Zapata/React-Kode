import React, { useEffect, useRef, useState } from 'react'
import "../componentes-css/menu.scss"
import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase/config-fb'
import { Link, useParams } from 'react-router-dom'



function Menu() {

    const { CategoriaId } = useParams();

    const lista = useRef(null);
    const links = useRef([]);
    
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

useEffect (()=>{
    links.current.forEach(link => {
        if (link && link.getAttribute("href")=== `/productos/${CategoriaId}`) {
            link.classList.add("rojo")
        } else {
            link.classList.remove("rojo")
        }
        
    });
},[CategoriaId,categorias])

    const toggleMenu = () => {
        setMenu(!menu)
        console.log(lista.current);
        if (!menu) {
            // Abre el menú y aplica la animación
            lista.current.classList.add('animacion');
            lista.current.classList.remove('dnone');
        } else {
            // Cierra el menú y elimina la animación (si es necesario)
            lista.current.classList.add('dnone');
            lista.current.classList.remove('animacion');
            
        }
        
    }

    return (
        <>
            <button  onClick={toggleMenu} className='boton-menu'>
            <i className="bi bi-list imagen-menu" style={{fontSize:"230%",color:"gray"}}></i>
            </button>
            <nav className={`nav-bar${menu ? ' dshow' : ''}`}>
                <button onClick={toggleMenu} className='boton-menu '>
                <i className="bi bi-x-lg" style={{fontSize:"200%",color:"gray"}}  ></i>
                </button>
                <ul ref={lista} className='lista'>
                    {categorias ? categorias.map((categoria,index)=> {
                        return <li key={categoria.id} className='categorias-link'>
                            <Link onClick={toggleMenu} ref={el => links.current[index] = el} className="link-menu"to={`/productos/${categoria.id}`}>{categoria.nombre.toUpperCase()}</Link>
                            </li>
                    }) : "cargando"}
                </ul>
            </nav>
        </>
    )
}

export default Menu
