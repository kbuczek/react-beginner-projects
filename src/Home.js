import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1 className="home-title">React beginner projects:</h1>
      <nav>
        <ul className="home-container">
          <li>
            <Link
              className="home-link home-button"
              to="/birthday-list-bootstrap"
            >
              Birthday List Bootstrap
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/accordion">
              Accordion
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/navbar">
              Navbar
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
