import react, { useState, useEffect } from "react";
import Keyboard from "./Keyboard";
import level from "./data/level1";
import "./TypeRacer.css";

const TypeRacer = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [wordsArray, setWordsArray] = useState([]);

  useEffect(() => {
    loadWordsArray();
  }, []);

  const loadWordsArray = () => {
    setWordsArray(level.text.split(" "));
  };

  return (
    <main className="typeracer-main container">
      <div className="typeracer-level">{level.text}</div>
      <div>{currentWord}</div>
      <div>{wordsArray[1]}</div>
      <div>
        <Keyboard level={level} setCurrentWord={setCurrentWord} />
      </div>
    </main>
  );
};

export default TypeRacer;
