import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1 className="home-title">My react beginner projects:</h1>
      <nav>
        <ul className="home-container">
          <li>
            <Link className="home-link home-button-red" to="/type-racer">
              type racer
            </Link>
          </li>
          <li>
            <a
              className="home-link home-button-red"
              href="https://hardsoft.netlify.app/"
            >
              HARDSoft webpage
            </a>
          </li>
          {/* <li>
            <Link className="home-link home-button" to="/memory-game">
              MEMORY GAME
            </Link>
          </li> */}
          <li>
            <Link className="home-link home-button" to="/navbar">
              Responsive Navbar
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/menu">
              Menu
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
          <a
            className="home-github"
            href="https://github.com/kbuczek/react-beginner-projects"
          >
            Source code on github
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Home;
