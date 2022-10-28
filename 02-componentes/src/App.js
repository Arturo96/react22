import logo from "./logo.svg";
import "./App.css";
import Error from "./components/Error";
import Success from "./components/Success";
import Contador from "./components/Contador";
import Listado from "./components/Listado";
import Propiedades from "./components/Propiedades";

function App() {
  const success = 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {success ? <Success /> : <Error />}

        <Contador />

        <Listado />

        <Propiedades propiedad={"hola"} />
      </header>
    </div>
  );
}

export default App;
