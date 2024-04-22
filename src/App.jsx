import { Route, Routes } from 'react-router-dom'
import './App.css'
import Histroy from './Pages/Histroy'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route element={<Landing/>} path='/'></Route>
        <Route element={<Home/>} path='/home'></Route>
        <Route element={<Histroy/>} path='/history'></Route>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
