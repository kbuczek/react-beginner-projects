import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import Navbar from "./Navbar2";
import ProjectsArticle from "./pages/ProjectsArticle";
import "./Home.css";
const Home = () => {
  const [homeJumbotronCss, setHomeJumbotronCss] = useState();
  const [showCss, setShowCss] = useState(false);

  useEffect(() => {
    // setHomeJumbotronCss({ opacity: 1, transform: "translateY(0)" });
    setTimeout(() => {
      setShowCss(true);
    }, 100);
  }, []);

  return (
    <main className="home">
      <Navbar />

      <section className={`home-jumbotron ${showCss && "show"}`}>
        <div className="home-jumbotron-text" id="test">
          <img src="kbuczek.png" className="home-jumbotron-photo" alt="photo" />
          <h1>Hi, I'm Krzysztof Buczek :)</h1>
          <p>
            Web developer who specializes in <strong>React</strong> and{" "}
            <strong>React Native</strong>.{" "}
            <Link to="/about-me">Read more...</Link>
          </p>
          <a href="https://github.com/kbuczek">
            <GoMarkGithub /> My github profile
          </a>
        </div>
      </section>

      <section className="home-projects">
        <h2>My projects</h2>
        <div className="home-underline"></div>

        <ProjectsArticle />
      </section>

      <section className="home-small-projects">
        <h4>Smaller projects that I've created while learning React</h4>
        <ul className="home-container">
          {/* <li>
            <Link className="home-link home-button-red" to="/memory-game">
              MEMORY GAME
            </Link>
          </li> */}
          <li>
            <Link className="home-link home-button" to="/sidebar-and-modal">
              Sidebar and modal
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/grocery-bud">
              Grocery Bud
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/photo-slider">
              Photo Slider
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/lorem-ipsum">
              Lorem Ipsum
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/color-generator">
              Color Generator
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/navbar2">
              Navbar with Dropdown
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/navbar">
              Navbar
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/tabs">
              Tabs
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/menu">
              Menu Filters
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/accordion">
              Accordion
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/reviews">
              Reviews
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/tours-intro">
              Tours Intro fetch()
            </Link>
          </li>
          <li>
            <Link
              className="home-link home-button"
              to="/birthday-list-bootstrap"
            >
              Birthday List Bootstrap
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/simple-list">
              Simple List
            </Link>
          </li>
        </ul>
      </section>
      <footer className="home-footer">
        {" "}
        <div style={{ color: "white" }}>Created by Krzysztof Buczek</div>
        <a
          className="home-github"
          href="https://github.com/kbuczek/react-beginner-projects"
        >
          Source code
        </a>
      </footer>
    </main>
  );
};

export default Home;
