import React from 'react'
import { Link } from 'react-router-dom'
import "../componentes-css/cestaWidget.scss"

function CestaWidget() {
    return (
        <>
            <Link to="/Cesta" className='cesta-header'><i className="bi bi-bag" style={{fontSize:"150%",color:"gray"}}></i> 0</Link>
        </>
    )
}

export default CestaWidget
