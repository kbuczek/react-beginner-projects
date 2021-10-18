import React, { useState } from "react";
import data from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPeopleCarry,
  FaQuoteRight,
} from "react-icons/fa";
import "./Review.css";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const makeIndexInDataRange = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((prevValue) => {
      return makeIndexInDataRange(prevValue - 1);
    });
  };

  const nextPerson = () => {
    setIndex((prevValue) => {
      return makeIndexInDataRange(prevValue + 1);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      nextPerson();
    } else {
      setIndex(randomNumber);
    }
  };

  return (
    <article className="review-container">
      <div className="review-img-container">
        <img src={image} alt={name} className="review-image" />

        <span className="review-quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="review-name">{name}</h4>
      <p className="review-job">{job}</p>
      <p className="review-text">{text}</p>
      <div className="review-button-container">
        <button className="review-btn review-btn-left" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="review-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="review-random-btn" onClick={randomPerson}>
        random review
      </button>
    </article>
  );
};

export default Review;
