import { useState } from "react";
import NavBar from "./components/shared/NavBar.jsx"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/shared/Vistas/Home.jsx'
import Novedades from './components/shared/Vistas/Novedades.jsx'
import Tienda from './components/shared/Vistas/Tienda.jsx'
import Carrito from "./components/shared/Vistas/Carrito.jsx";

function App() {

  return (
    <div >
      <Router >
        <NavBar />
        <div className='bg-[#0E3C09] opacity-25 pt-20'><h1 className="text-[5px]">-</h1></div>
        <div style={{ paddingTop: '200px', paddingLeft:'800px' }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/novedades" element={<Novedades />} />
          </Routes>
        </div>
      </Router>

    </div>
  )
}

export default App
