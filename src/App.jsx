
import './App.scss'
import Header from './componentes/header/Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Inicio from './componentes/paginas/inicio/Inicio'
import Footer from './componentes/footer/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
