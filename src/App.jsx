
import './App.scss'
import Header from './componentes/header/Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Inicio from './componentes/paginas/inicio/Inicio'
import Footer from './componentes/footer/Footer'
import Header2 from './componentes/header/Header2'
import ItemListContainer from './componentes/paginas/inicio/ItemListContainer'
import Cesta from './componentes/paginas/inicio/Cesta'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header></Header>
      {/* <Header2></Header2> */}
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/productos/:CategoriaId' element={<ItemListContainer/>}></Route>
        <Route path='/Cesta' element={<Cesta />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
