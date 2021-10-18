import React from "react";
import react, { useState } from "react";
import "./Keyboard.css";

const Keyboard = () => {
  const [userInput, setUserInput] = useState(
    "click here and start typing to play!"
  );
  const [currentKey, setCurrentKey] = useState("");
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const resetUserInput = () => {
    setUserInput([]);
  };

  const handleKeyDown = (e) => {
    const key = e.key;

    if (key === " ") {
      setCurrentKey(key);
      resetUserInput();
    } else if (alphabet.includes(key)) {
      setCurrentKey(key);
      setUserInput([...userInput, key]);
    } else if (key === "Backspace") {
      resetUserInput();
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
        {alphabet.map((letter) => {
          return (
            <div
              id={letter}
              className={currentKey === letter && "keyboard-current-key"}
            >
              {letter}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Keyboard;
