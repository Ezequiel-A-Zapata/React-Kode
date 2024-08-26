import React, { useEffect, useState } from 'react'
import hamburgermenu from "../../assets/imagenes-react-kode/hamburgermenu_120234.png"
import "./menu.scss"
import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase/config-fb'



function Menu() {

    const [menu, setMenu] = useState(false);

    const [categorias,setCategorias] = useState()
    
    
    console.log(categorias)
    
    
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
                <img className="imagen-menu" src={hamburgermenu} alt="" />
            </button>
            <nav className={`nav-bar${menu ? ' dshow' : ''}`}>
                <button onClick={toggleMenu} className='boton-menu'>
                <img className="imagen-menu" src={hamburgermenu} alt="" />
                </button>
                <ul className='lista'>
                    {categorias ? categorias.map((categoria)=> {
                        return <li key={categoria.id} className='categorias-link'>
                            <em>{categoria.nombre.toUpperCase()}</em>
                            </li>
                    }) : "cargando"}
                </ul>
            </nav>
        </>
    )
}

export default Menu
