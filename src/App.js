import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';



function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Próximamente... novedades!" />
    </>

  );
}

export default App;
