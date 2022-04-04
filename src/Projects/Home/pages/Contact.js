import React from "react";
import Navbar from "../Navbar2";
import { Link } from "react-router-dom";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <main className="about-me">
      <Navbar />
      <section className="about-me-container">
        <h1>Contact Me</h1>
        <div className="about-me-underline"></div>
        <article className="about-me-article">
          <div>Please feel free to contact me via email or phone. </div>
        </article>
      </section>
    </main>
  );
};

export default AboutMe;
