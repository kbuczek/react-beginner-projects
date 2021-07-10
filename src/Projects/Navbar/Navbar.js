import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="company logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="link-container"></div>
        <ul className="social-icons"></ul>
      </div>
    </nav>
  );
};

export default Navbar;
