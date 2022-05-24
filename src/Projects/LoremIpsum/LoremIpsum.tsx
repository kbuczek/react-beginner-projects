import React, { useState } from "react";
import data from "./data";
import "./LoremIpsum.css";

const LoremIpsum = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //unnecessary page refreshes
    let amount = count;
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount)); //slice return a new copy
    // let number: any = "10";
    // number = number >> 0;
    // console.log(number);
    // console.log(typeof number);
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
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
};

export default LoremIpsum;
