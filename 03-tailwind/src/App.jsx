import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [mode, setMode] = useState(
    localStorage.theme === "dark" ? "Light" : "Dark"
  );

  const toggleDarkMode = () => {
    localStorage.theme = document.documentElement.classList.toggle("dark")
      ? "dark"
      : "light";

    setMode(localStorage.theme === "dark" ? "Light" : "Dark");
  };

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="App dark:text-white">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="bg-gray-600 hover:bg-gray-800 transition-colors duration-300 text-slate-100 mb-8"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>

        <button
          className="block mx-auto bg-slate-900 text-white dark:bg-white dark:text-slate-900 mb-8"
          onClick={toggleDarkMode}
        >
          {mode} mode
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
