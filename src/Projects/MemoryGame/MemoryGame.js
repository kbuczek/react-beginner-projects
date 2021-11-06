import React, { useState, useEffect } from "react";
import data from "./data";
import "./MemoryGame.css";

const SimpleList = () => {
  const [cards, setCards] = useState(data);
  const [clickedCardName, setClickedCardName] = useState(" ");
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log(cards);
    duplicateData();
    console.log("EFFECT");
  }, []);

  const duplicateData = () => {
    const duplicatedData = [...cards];
    duplicatedData.forEach((item) => {
      item.id = item.id + duplicatedData.length;
    });
    setCards([...data, ...duplicatedData]);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setCards(array);
  };

  return (
    <main className="memory-body">
      <section className="memory-header">
        <div className="memory-clicked-card-name">{clickedCardName}</div>
        <div className="memory-score">Score: {score}</div>
      </section>

      <section className="memory-cards-container">
        {cards.map(({ id, name, image }) => {
          return (
            <div
              className="memory-card"
              onClick={() => {
                setClickedCardName(name);
              }}
            >
              {id}
              <img src={image} alt="card" />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default SimpleList;
