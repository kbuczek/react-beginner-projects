import React, { useState } from "react";
import "./Tour.css";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="tour-article">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">{price} €</h4>
      </div>

      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button
          className="tour-read-button"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "read less" : "read more"}
        </button>
      </p>
      <button className="tour-delete-button" onClick={() => removeTour(id)}>
        not interested
      </button>
    </article>
  );
};

export default Tour;
