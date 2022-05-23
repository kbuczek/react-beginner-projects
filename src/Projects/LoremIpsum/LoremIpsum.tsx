import React, { useState } from "react";
import data from "./data";
import "./LoremIpsum.css";

const LoremIpsum = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //unnecessary page refreshes
    console.log("hello");
  };

  return (
    <section className="lorem">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button type="submit" className="lorem-btn">
          generate
        </button>
      </form>

      <article className="lorem-text">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
          doloremque.
        </p>
      </article>
    </section>
  );
};

export default LoremIpsum;
