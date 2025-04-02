import { useState, useEffect } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:8080/api/users");
    //console.log(response.data.users);
    setArray(response.data.users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>These below names are coming from Backend </p>
        {array.map((user, index) => (
          <div key={index}>
            <span>{user}</span>
            <br></br>
          </div>
        ))}
      </div>
      <p className="read-the-docs">
        This a basic app for How to Create a Flask + React Project with Vite | Python Backend + React Frontend
      </p>
    </>
  );
}

export default App;
