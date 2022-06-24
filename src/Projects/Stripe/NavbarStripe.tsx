import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import logo from "./Images/logo.svg";
import "./NavbarStripe.css";

const NavbarStripe = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  return (
    <nav className="navbarStripe">
      <div className="navbarStripe-center">
        <div className="navbarStripe-header">
          <img src={logo} className="navbarStripe-logo" alt="stripe logo" />
          <button
            className="navbarStripe-button navbarStripe-button-toggle"
            onClick={() => {
              openSidebar();
            }}
          >
            <FaBars />
          </button>
        </div>
        <ul className="navbarStripe-links">
          <li>
            <button className="navbarStripe-link-btn">products</button>
          </li>
          <li>
            <button className="navbarStripe-link-btn">developers</button>
          </li>
          <li>
            <button className="navbarStripe-link-btn">company</button>
          </li>
        </ul>
        <button className="navbarStripe-button navbarStripe-signin">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default NavbarStripe;
