import React, { useState, useEffect } from "react";
import data from "./data";
import "./MemoryGame.css";

const SimpleList = () => {
  const [cards, setCards] = useState([]);
  const [clickedCardName, setClickedCardName] = useState(" ");
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log("cards", cards);
    setCards(data);
    duplicateData();
  }, []);

  const duplicateData = () => {
    const duplicatedData = [...data];
    // const duplicatedData = data.map((item) => {
    //   item.id = item.id + data.length; //why it changes on original array?
    //   return item;
    // });
    console.log("duplicatedData1", duplicatedData);
    duplicatedData.forEach((item) => {
      item.id = item.id + duplicatedData.length;
    });
    // console.log("duplicatedData", duplicatedData);
    // setCards([...cards, duplicatedData]);
    console.log("new cards", cards);
  };

  const shuffuleCards = () => {};

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
