import react, { useState, useEffect } from "react";
import Keyboard from "./Keyboard";
import level from "./data/level1";
import "./TypeRacer.css";

const TypeRacer = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordsArray, setWordsArray] = useState([]);
  const [wordsArrayValues, setWordsArrayValues] = useState([]);
  // let wordsArrayValues2 = [];

  useEffect(() => {
    loadWordsArray();
  }, []);

  useEffect(() => {
    checkCurrentWord();
  });

  const loadWordsArray = () => {
    setWordsArray(level.text.split(" "));
    setWordsArrayValues((oldArray) => [...oldArray, "current"]);
    // wordsArrayValues2.push("current");
  };

  const checkCurrentWord = () => {
    if (currentWord === wordsArray[currentWordIndex]) {
      setWordsArrayValues((wordsArrayValues[currentWordIndex] = "success"));
      setWordsArrayValues((oldArray) => [...oldArray, "current"]);
    }
  };

  return (
    <main className="typeracer-main container">
      <div className="typeracer-level">
        {wordsArray.map((word, index) => {
          return (
            <span
              // id={`typeracer-word-${index}`}
              class={`typeracer-word ${
                wordsArrayValues[index] === "correct"
                  ? "typeracer-word-correct"
                  : ""
              } ${
                wordsArrayValues[index] === "wrong"
                  ? "typeracer-word-wrong"
                  : ""
              }
              ${
                wordsArrayValues[index] === "current"
                  ? "typeracer-word-current"
                  : ""
              }`}
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
      <div>{currentWord}</div>
      <div>{wordsArrayValues[0]}</div>
      <div>
        <Keyboard level={level} setCurrentWord={setCurrentWord} />
      </div>
    </main>
  );
};

export default TypeRacer;
