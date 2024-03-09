import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a mi nueva Store openings"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
