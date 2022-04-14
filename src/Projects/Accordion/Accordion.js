import React from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";
import Details from "./details/details";
// import "./Accordion.css";

const Accordion = () => {
  return (
    <main className="acc-main">
      <div className="acc-container">
        <h4>Frequently asked questions</h4>
        <section>
          {data.map((question) => (
            // <SingleQuestion key={question.id} {...question} />
            <Details key={question.id} summary={question.title}>
              {question.info}
            </Details>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Accordion;
