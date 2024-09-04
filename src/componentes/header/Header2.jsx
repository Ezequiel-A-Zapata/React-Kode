import React from 'react'
import "../componentes-css/header2.scss"
import Menu from '../header/Menu'
import CestaWidget from "../header/CestaWidget"
function Header2() {
  return (
    <div className='container-sticky'>
      <div className='header-2'>
        <Menu></Menu>
        <CestaWidget></CestaWidget>
      </div>
    </div>
  )
}

export default Header2