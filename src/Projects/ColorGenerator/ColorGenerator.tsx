import React, { useState } from "react";
import Values from "values.js";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <section className="clrgen-container"></section>
    </>
  );
};

export default ColorGenerator;
