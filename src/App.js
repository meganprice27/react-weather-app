import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://marvelous-queijadas-2d1dd5.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Megan Price
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/meganprice27/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
