import logo from "./logo.svg";
import "./App.css";
import Error from "./components/Error";
import Success from "./components/Success";

function App() {
  const success = 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {success ? <Success /> : <Error />}
      </header>
    </div>
  );
}

export default App;
