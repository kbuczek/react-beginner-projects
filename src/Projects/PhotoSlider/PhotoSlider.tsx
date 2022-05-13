import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "./data";
import "./PhotoSlider.css";

interface dataType {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}

const PhotoSlider = () => {
  const [people, setPeople] = useState<dataType[]>(data);
  const [index, setIndex] = useState(0);

  return (
    <section className="photo-slider">
      <div className="photo-slider-title">
        <h2>Photo Slider</h2>
      </div>
      <div className="photo-slider-container">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          return (
            <article key={id} className="photo-slider-article">
              <img className="photo-slider-img" src={image} alt={name} />
              <h4>{name}</h4>
              <p className="photo-slider-img-title">{title}</p>
              <p className="photo-slider-img-text">{quote}</p>
              <FaQuoteRight className="photo-slider-icon" />
            </article>
          );
        })}
        <button className="photo-slider-prev">
          <FaChevronLeft />
        </button>
        <button className="photo-slider-next">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default PhotoSlider;
