import React from "react";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import "./Home.css";
const Home = () => {
  return (
    <main className="home">
      <nav className="home-navbar">
        <Link className="home-nav-btn" to="#">
          Home
        </Link>
        <Link className="home-nav-btn" to="#">
          About
        </Link>
        <Link className="home-nav-btn" to="#">
          Projects
        </Link>
        <Link className="home-nav-btn" to="#">
          Contact
        </Link>
      </nav>

      <section className="home-jumbotron">
        <div className="home-jumbotron-text">
          <img src="kbuczek.png" className="home-jumbotron-photo" alt="photo" />
          <h3>Hi, I'm Krzysztof Buczek :)</h3>
          <p>
            Aspiring web and app developer. <strong>React</strong> and{" "}
            <strong>React Native</strong> are techonolgies that I'm currently
            trying to master. Read more...{" "}
          </p>
          <a href="https://github.com/kbuczek">
            <GoMarkGithub /> My github profile
          </a>
          <p style={{ opacity: "30%" }}>
            (This site is work in progress. Please, don't get discouraged ;P)
          </p>
        </div>
      </section>

      <section className="home-projects">
        <h2>My projects</h2>
        <ul>
          <li>
            <Link className="home-link home-button-red" to="/type-racer">
              type racer
            </Link>
          </li>
          <li>
            <a
              className="home-link home-button-red"
              href="https://github.com/kbuczek/chairman-mobileapp/blob/main/README.md"
            >
              Chairman Fullstack App
            </a>
          </li>
          <li>
            <a
              className="home-link home-button-red"
              href="https://hardsoft.netlify.app/"
            >
              HARDSoft webpage
            </a>
          </li>
        </ul>
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
            <Link className="home-link home-button" to="/photo-slider">
              Photo Slider
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
