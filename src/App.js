import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
