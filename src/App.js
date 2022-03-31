import {BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductoContainer from './components/ProductoContainer';
import Catalogo from './pages/Catalogo';
import Comprar from './pages/Comprar';
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
        <Route path='/comprar' element={<Comprar />} />
        <Route path='/producto/:id' element={<ProductoContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
