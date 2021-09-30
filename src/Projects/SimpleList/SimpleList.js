import React, { useState } from "react";
import List from "./List";
import data from "./data";
import "./SimpleList.css";

const SimpleList = () => {
  const [people, setPeople] = useState(data);
  return (
    <main className="simplelist-body">
      <section className="simplelist-container">
        <h3>List of {people.length} people</h3>
        <List people={people} />
        <button
          className={people.length === 0 && "simplelist-button-notactive"}
          onClick={() => {
            setPeople([]);
          }}
        >
          delete all
        </button>
      </section>
    </main>
  );
};

export default SimpleList;
