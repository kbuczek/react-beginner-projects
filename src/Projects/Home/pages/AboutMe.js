import React from "react";
import Navbar from "../Navbar2";
import { Link } from "react-router-dom";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <main className="about-me">
      <Navbar />
      <section className="about-me-container">
        <h1>About me</h1>
        <div className="about-me-underline"></div>
        <article className="about-me-article">
          <div>
            In 2021 I started learning web development during my final{" "}
            <strong>Computer Science</strong> year at{" "}
            <strong>Jagiellonian University</strong> and I it was something I
            really enjoyed doing. I am a creative person who likes to work with
            computer graphics. Before university I've spent a lot of time
            creating things in Adobe Photoshop and 3D programs. I graduated
            Computer Science from Jagiellonian University in October 2021 with{" "}
            <strong>Bachelor of Science</strong> degree. My current life goal is
            to become the best Web Developer or at least somewhere near the top
            :) Below are the technologies that I use everyday to create magic:
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>React Native</li>
            </ul>
            Be sure to check out <Link to="/my-projects">my projects</Link> tab.
            In my free time I adore cycling with my friends. Apart from that I
            am learning After Effects, Blender and Unreal Engine, because I
            think it can elevate my web development capabilites.{" "}
            <div>
              I am available for hire. If you are interestd, please{" "}
              <Link to="/contact">contact me </Link>
              via email or telephone.
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default AboutMe;
