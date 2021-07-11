import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-nav">
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="company logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container">
          <ul className="links">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">products</a>
            </li>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
        <ul className="social-icons"></ul>
      </div>
    </nav>
  );
};

export default Navbar;
