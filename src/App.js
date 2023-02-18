import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar  from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <h1>
        {/* ejecucion de una funcion, no son etiqueta html */}
        <NavBar/>
        <ItemListContainer/>
      </h1>
    </div>
  );
}

export default App;
