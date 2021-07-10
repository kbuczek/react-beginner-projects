import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>React beginner projects:</h1>
      <nav>
        <ul>
          <li>
            <Link to="/birthday-list">Birthday List</Link>
          </li>
          <li>
            <Link to="/accordion">Accordion</Link>
          </li>
          <li>
            <Link to="/navbar">Navbar</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
