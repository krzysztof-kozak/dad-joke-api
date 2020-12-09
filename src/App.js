import React, { useEffect, useState } from "react";
import "./styles.css";

const API = "https://icanhazdadjoke.com/";

export default function App() {
  const [joke, setJoke] = useState("");

  const fetchDadJoke = () => {
    fetch(API, { headers: { accept: "application/json" } }).then((response) =>
      response.json().then((joke) => setJoke(joke))
    );
  };

  useEffect(() => {
    fetchDadJoke();
  }, []);

  return (
    <div className="App">
      <h1>Random dad jokes!</h1>
      <div className="wrapper">
        <p>{joke.joke}</p>
        <button onClick={() => fetchDadJoke()}>New Joke!</button>
      </div>
    </div>
  );
}
