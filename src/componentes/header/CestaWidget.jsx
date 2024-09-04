import React from 'react'
import { Link } from 'react-router-dom'

function CestaWidget() {
    return (
        <>
            <Link to="/Cesta" className='cesta-header'><i class="bi bi-bag" style={{fontSize:"180%",color:"gray"}}></i> 0</Link>
        </>
    )
}

export default CestaWidget
