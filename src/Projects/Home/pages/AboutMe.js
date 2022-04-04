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
            Hi, I'm Krzysztof Buczek. In 2021 I started learning web development
            during my final <strong>Applied Computer Science</strong> year at{" "}
            <strong>Jagiellonian University</strong> and it was something I
            really enjoyed doing. I am a creative person who likes to work with
            computer graphics. Before university I've spent a lot of time
            creating things in Adobe Photoshop and 3D programs. Web development
            combines 2 things I like: programming and computer graphics into one
            thing. I graduated Computer Science from Jagiellonian University at{" "}
            <strong>
              Physics, Astronomy and Applied Computer Science department
            </strong>{" "}
            in October 2021 with <strong>Bachelor of Science</strong> degree.
            Below are the technologies that I have experience in and that I use
            everyday:
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Bootstrap 5</li>
              <li>React Native</li>
              <li>NodeJS</li>
            </ul>
            Be sure to check out <Link to="/my-projects">my projects</Link> tab
            or <a href="https://github.com/kbuczek">github</a> profile. I
            possess <strong>Certificate in Advanced English (C1 level)</strong>.
            In my free time I adore cycling with my friends. Apart from that, I
            am learning After Effects, Blender and Unreal Engine, because I
            think it can elevate my web development capabilites.{" "}
            <div className="about-me-contact">
              <span className="about-me-hire">I am available for hire.</span> If
              you are interested, please <Link to="/contact">contact me</Link>.
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default AboutMe;
