
import './App.scss'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Inicio from './componentes/paginas/inicio/Inicio'
import ItemListContainer from './componentes/paginas/inicio/ItemListContainer'
import Cesta from './componentes/paginas/inicio/Cesta'
import ItemDetailContainer from './componentes/paginas/inicio/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import ScrollToTop from './componentes/resetRutas/ScrollToTop'
import NotFound from './componentes/paginas/inicio/NotFound'

function App() {



  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/productos/:CategoriaId' element={<ItemListContainer/>}></Route>
        <Route path='/producto/:ItemID' element={<ItemDetailContainer />} ></Route>
        <Route path='/Cesta' element={<Cesta />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
