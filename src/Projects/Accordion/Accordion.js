import React from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";
import "./Accordion.css";

const Accordion = () => {
  return (
    <main>
      <div className="acc-container">
        <h4>Frequently asked questions</h4>
        <section>
          {data.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Accordion;
