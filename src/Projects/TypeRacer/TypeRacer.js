import react, { useState, useEffect } from "react";
import Keyboard from "./Keyboard";
import level from "./data/level1";
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
    loadWordsArray();
    // loadWordsPool();
  }, []);

  // useEffect(() => {
  //   loadWordsArray();
  // }, [wordsPool]);

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
      setDisplayModal(true);
    }
  }, [numOfCorrectWords, numOfWrongWords]);

  const loadWordsPool = () => {
    // setWordsPool(level.text2.split(", "));
    // wordsPool2 = level.text2.split(", ");
  };

  const loadWordsArray = () => {
    // console.log(wordsPool[0]);
    // for (let i = 0; i < 42; i++) {
    //   const randInt = getRandomInt(0, 1000);
    //   setWordsArray((prev) => [...prev, wordsPool[randInt]]);
    // }
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
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const calcWPM = () => {
    return Math.round(
      numOfCorrectLetters / 5 / (timer / 60) -
        numOfWrongLetters / 5 / (timer / 60)
    );
  };

  return (
    <>
      {displayModal && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div>Your results</div>
            <p>WPM: {calcWPM()}</p>
            <p>correct words: {numOfCorrectWords}</p>
            <p>wrong words: {numOfWrongWords}</p>
            <p>time: {timer} seconds</p>

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
        <div>{timer} seconds</div>
        <div>
          {numOfCorrectWords + numOfWrongWords} / {numOfAllWords} words
        </div>
        <button onClick={refreshPage}>Try again</button>
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
