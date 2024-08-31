import React, { useEffect, useState } from 'react'
import hamburgermenu from "../../assets/imagenes-react-kode/hamburgermenu_120234.png"
import "../componentes-css/menu.scss"
import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase/config-fb'
import { Link } from 'react-router-dom'



function Menu() {

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
    }

    return (
        <>
            <button onClick={toggleMenu} className='boton-menu'>
            <i className="bi bi-list imagen-menu" style={{fontSize:"170%"}}></i>
            </button>
            <nav className={`nav-bar${menu ? ' dshow' : ''}`}>
                <button onClick={toggleMenu} className='boton-menu '>
                <i className="bi bi-x-lg" style={{fontSize:"170%"}}  ></i>
                </button>
                <ul className='lista'>
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
