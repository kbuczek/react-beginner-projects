import React from "react";
import react, { useState } from "react";
import "./Keyboard.css";

const Keyboard = ({ level, setCurrentWord }) => {
  const [userInput, setUserInput] = useState(
    "click here and start typing text above"
  );
  const [currentKey, setCurrentKey] = useState("");
  const alphabet = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    " ",
  ];

  const resetUserInput = () => {
    setUserInput("");
  };

  const removeLastLetterUserInput = () => {
    setUserInput(userInput.slice(0, -1));
  };

  const handleKeyDown = (e) => {
    const key = e.key;

    if (key === " ") {
      setCurrentKey(key);
      setCurrentWord(userInput);
      resetUserInput();
    } else if (alphabet.includes(key)) {
      setCurrentKey(key);
      setUserInput([...userInput, key]);
    } else if (key === "Backspace") {
      // resetUserInput();
      removeLastLetterUserInput();
    }
  };

  return (
    <section className="keyboard">
      {/* <div>{level.text}</div> */}
      <div
        id="keyboard-input"
        onClick={resetUserInput}
        onKeyDown={handleKeyDown}
        tabIndex="0"
      >
        {userInput}
      </div>

      <div id="keyboard-keys">
        <div id="keyboard-keys-row1">
          {alphabet.slice(0, 10).map((letter) => {
            return (
              <div
                id={letter}
                className={`
                  keyboard-key
                  ${currentKey === letter ? "keyboard-current-key" : ""}
                )`}
              >
                {letter.toUpperCase()}
              </div>
            );
          })}
        </div>
        <div id="keyboard-keys-row2">
          {alphabet.slice(10, 19).map((letter) => {
            return (
              <div
                id={letter}
                className={`
                  keyboard-key
                  ${currentKey === letter ? "keyboard-current-key" : ""}
                )`}
              >
                {letter.toUpperCase()}
              </div>
            );
          })}
        </div>
        <div id="keyboard-keys-row3">
          {alphabet.slice(19, 26).map((letter) => {
            return (
              <div
                id={letter}
                className={`
                  keyboard-key
                  ${currentKey === letter ? "keyboard-current-key" : ""}
                )`}
              >
                {letter.toUpperCase()}
              </div>
            );
          })}
        </div>
        <div id="keyboard-keys-row4">
          {alphabet.slice(26, 27).map((letter) => {
            return (
              <div
                id={letter}
                className={`
                  keyboard-key keyboard-key-space
                  ${currentKey === letter ? "keyboard-current-key" : ""}
                )`}
              >
                {letter.toUpperCase()}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Keyboard;
