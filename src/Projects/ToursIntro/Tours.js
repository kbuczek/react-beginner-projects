import React from "react";
import Tour from "./Tour";
import "./Tours.css";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="tours-title">
        <h2>Tours data using api with fetch()</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
