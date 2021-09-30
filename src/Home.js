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
            <Link className="home-link home-button" to="/navbar">
              Responsive Navbar
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/accordion">
              Accordion
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/houses-intro-list">
              Tours Intro
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
      </nav>
    </>
  );
};

export default Home;
