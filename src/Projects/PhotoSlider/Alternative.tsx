import React, { useState, useEffect } from "react";
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

  const nextSlide = () => {
    setIndex((prevIndex) => {
      let index = prevIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((prevIndex) => {
      let index = prevIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  //unnecessary in this solution
  // useEffect(() => {
  //   const lastIndex = people.length - 1;
  //   if (index < 0) {
  //     setIndex(lastIndex);
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0);
  //   }
  // }, [index, people]); //if index changes or if people data changes

  useEffect(() => {
    let slider = setInterval(() => {
      // setIndex(index + 1);
      nextSlide();
    }, 3000);
    //we have to use clean up function to clearIntervals after user clicks on next slide
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="photo-slider">
      <div className="photo-slider-title">
        <h2>Photo Slider</h2>
      </div>
      <div className="photo-slider-container">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={`photo-slider-article ${position}`}>
              <img className="photo-slider-img" src={image} alt={name} />
              <h4>{name}</h4>
              <p className="photo-slider-img-title">{title}</p>
              <p className="photo-slider-img-text">{quote}</p>
              <FaQuoteRight className="photo-slider-icon" />
            </article>
          );
        })}
        <button className="photo-slider-prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="photo-slider-next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default PhotoSlider;
