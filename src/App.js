import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import {Carrusel} from './components/Carrusel/Carrusel'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    
    <BrowserRouter>
      <NavBar/>
      
      <Carrusel/>
      
      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/productos/:catId" element={ <ItemListContainer /> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    
   

 </BrowserRouter>
    
    
    

  );
}

export default App;
