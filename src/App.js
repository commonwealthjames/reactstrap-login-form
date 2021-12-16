import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container } from "reactstrap";
import init from "./functions/init";
import LoginDemo from "./components/LoginDemo";

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Container>
        <LoginDemo />
      </Container>
    </div>
  );
}

export default App;
