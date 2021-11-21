import react, { useState, useEffect } from "react";
import Keyboard from "./Keyboard";
import level from "./data/level1";
import { BsArrowClockwise } from "react-icons/bs";
import "./TypeRacer.css";

const TypeRacer = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [wordsPool, setWordsPool] = useState([]);
  const [wordsArray, setWordsArray] = useState([]);
  const [wordsArrayValues, setWordsArrayValues] = useState([]);
  //timer
  const [startTimer, setStartTimer] = useState(false);
  const [timer, setTimer] = useState(0);
  //words numbers
  const [numOfAllWords, setNumOfAllWords] = useState(0);
  const [numOfCorrectWords, setNumOfCorrectWords] = useState(0);
  const [numOfCorrectLetters, setNumOfCorrectLetters] = useState(0);
  const [numOfWrongWords, setNumOfWrongWords] = useState(0);
  const [numOfWrongLetters, setNumOfWrongLetters] = useState(0);

  useEffect(() => {
    loadWordsPool();
  }, []);

  useEffect(() => {
    if (wordsPool.length > 0) {
      loadWordsArray();
    }
  }, [wordsPool]);

  useEffect(() => {
    setNumOfAllWords(wordsArray.length);
  }, [wordsArray]);

  useEffect(() => {
    checkCurrentWord();
  }, [currentWord]);

  useEffect(() => {
    if (startTimer === true) {
      setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
    }
  });

  useEffect(() => {
    if (
      numOfCorrectWords + numOfWrongWords === numOfAllWords &&
      numOfAllWords > 0
    ) {
      setStartTimer(false);
      // setDisplayModal(true);
    }
  }, [numOfCorrectWords, numOfWrongWords]);

  useEffect(() => {
    if (startTimer === false && timer > 0) {
      setDisplayModal(true);
    }
  }, [timer]);

  const loadWordsPool = () => {
    setWordsPool(level.text.split(", "));
  };

  const loadWordsArray = () => {
    for (let i = 0; i < 10; i++) {
      const randInt = getRandomInt(0, 1000);
      setWordsArray((prev) => [...prev, wordsPool[randInt]]);
    }
    // setWordsArray(level.text.split(" "));
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
        setNumOfCorrectWords((prev) => {
          return prev + 1;
        });
        setNumOfCorrectLetters((prev) => {
          return prev + currentWord.length;
        });
      } else {
        setWordsArrayValues((prev) => {
          let newArr = [...prev];
          newArr[currentWordIndex] = "wrong";
          return newArr;
        });
        setNumOfWrongWords((prev) => {
          return prev + 1;
        });
        setNumOfWrongLetters((prev) => {
          return prev + wordsArray[currentWordIndex].length;
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
    // window.location.href = "https://kbuczek-react.netlify.app/type-racer";
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const calcWPM = () => {
    const wpm = Math.round(
      numOfCorrectLetters / 5 / (timer / 60) -
        numOfWrongLetters / 5 / (timer / 60)
    );
    if (wpm > 0) {
      return wpm;
    } else {
      return 0;
    }
  };

  return (
    <>
      {displayModal && (
        <div id="myModal" className="typeracer-modal">
          <div className="typeracer-modal-content">
            <div className="typeracer-modal-title">Your results</div>
            <p className="typeracer-modal-wpm">{calcWPM()} WPM</p>
            <p className="typeracer-modal-correctwords">
              correct words: {numOfCorrectWords}
            </p>
            <p className="typeracer-modal-wrongwords">
              wrong words: {numOfWrongWords}
            </p>
            <p className="typeracer-modal-timer">time: {timer} seconds</p>

            <button className="typeracer-button2" onClick={refreshPage}>
              Try again
            </button>
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
        <div className="typeracer-info">
          <div className="typeracer-info-timer">{timer} seconds</div>
          <div className="typeracer-info-words">
            {numOfCorrectWords + numOfWrongWords} / {numOfAllWords} words
          </div>
          <button className="button-11" onClick={refreshPage}>
            try again
          </button>
        </div>
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
