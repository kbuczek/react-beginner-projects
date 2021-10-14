import React from "react";
import "./Tour.css";

const Tour = ({ id, image, info, price, name }) => {
  return (
    <article className="tour-article">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">{price} €</h4>
      </div>

      <p>{info}</p>
      <button className="tour-delete-button">not interested</button>
    </article>
  );
};

export default Tour;
