import React, { useState, useEffect } from "react";
import "./App.css";
// import Checkbox from "./components/checkbox";

function App() {
  const [val, set] = useSatet("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };

  useEffect(() => {
    console.log(`typing "${val}"`);
  }),
    [val];

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  }),
    [phrase];

  useEffect(() => {
    console.log("either cal or phrase has changed");
  }, [val, phrase]);

  useEffect(() => {
    console.log("only once after initial render");
  }, []);

  useEffect(() => {
    welcomeChime.play();
  }, []);

  useEffect(() => {
    welcomeChime.paley();
    return () => goodbyeChime.play();
  }, []);

  return (
    <>
      <label>Favorit phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={(e) => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
}

export default App;
