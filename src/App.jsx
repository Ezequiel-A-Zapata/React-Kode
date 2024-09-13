
import './App.scss'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Inicio from './componentes/paginas/inicio/Inicio'
import Footer from './componentes/footer/Footer'
import ItemListContainer from './componentes/paginas/inicio/ItemListContainer'
import Cesta from './componentes/paginas/inicio/Cesta'
import ItemDetailContainer from './componentes/paginas/inicio/ItemDetailContainer'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/productos/:CategoriaId' element={<ItemListContainer/>}></Route>
        <Route path='/producto/:ItemID' element={<ItemDetailContainer />} ></Route>
        <Route path='/Cesta' element={<Cesta />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
