import React, { useState } from "react";
import Values from "values.js";
import "./ColorGenerator.css";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState<object[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(list[0]);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <section className="clrgen-container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            // placeholder="#f15025"
            className={`${error ? "clrgen-error" : null}`}
          />
          <button className="clrgen-btn">submit</button>
        </form>
      </section>
      <section className="clrgen-colors">
        <h4>list goes here</h4>
      </section>
    </>
  );
};

export default ColorGenerator;
