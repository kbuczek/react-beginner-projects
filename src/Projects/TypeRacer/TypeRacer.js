import react, { useState, useEffect } from "react";
import Keyboard from "./Keyboard";
import level from "./data/level1";
import "./TypeRacer.css";

const TypeRacer = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [wordsArray, setWordsArray] = useState([]);
  const [wordsArrayValues, setWordsArrayValues] = useState([]);
  const [startTimer, setStartTimer] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    loadWordsArray();
  }, []);

  useEffect(() => {
    checkCurrentWord();
  }, [currentWord]);

  const loadWordsArray = () => {
    setWordsArray(level.text.split(" "));
    setWordsArrayValues((oldArray) => [...oldArray, "current"]);
  };

  const checkCurrentWord = () => {
    if (currentWordIndex >= 0) {
      if (currentWord === wordsArray[currentWordIndex]) {
        setWordsArrayValues((prev) => {
          let newArr = [...prev];
          newArr[currentWordIndex] = "correct";
          return newArr;
        });
      } else {
        setWordsArrayValues((prev) => {
          let newArr = [...prev];
          newArr[currentWordIndex] = "wrong";
          return newArr;
        });
      }
      setWordsArrayValues((prev) => {
        return [...prev, "current"];
      });
    }

    setCurrentWordIndex((prev) => {
      return prev + 1;
    });
  };

  const refreshPage = () => {
    // setCurrentWord("");
    // setCurrentWordIndex(-1);
    // setWordsArrayValues(["current"]);
    // setDisplayModal(false);
    window.location.reload(false);
  };

  return (
    <>
      {displayModal && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <p>correct words</p>
            <p>time</p>
            <p>WPM</p>
            <button onClick={refreshPage}>Try again</button>
          </div>
        </div>
      )}

      <main className="typeracer-main container">
        <div className="typeracer-level">
          {wordsArray.map((word, index) => {
            return (
              <span
                key={index}
                className={`typeracer-word ${
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
        <div>{startTimer.toString()}</div>
        <div>{currentWordIndex}</div>
        <div>
          <Keyboard
            level={level}
            setCurrentWord={setCurrentWord}
            setStartTimer={setStartTimer}
          />
        </div>
      </main>
    </>
  );
};

export default TypeRacer;
