import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import logo from "./Images/logo.svg";
import "./NavbarStripe.css";

const NavbarStripe = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e: React.MouseEvent) => {
    const page = (e.target as HTMLElement).textContent; //get button content
    const tempBtn = (e.target as HTMLElement).getBoundingClientRect(); //get button coordinates
    const center = (tempBtn.left + tempBtn.right) / 2; //width of li the button is in
    const bottom = tempBtn.bottom - 3; //lift submenu 3 pixels up
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e: React.MouseEvent) => {
    if (
      !(e.target as HTMLElement).classList.contains("navbarStripe-link-btn")
    ) {
      closeSubmenu();
    }
  };

  return (
    <nav
      className="navbarStripe"
      onMouseOver={(e: React.MouseEvent) => {
        handleSubmenu(e);
      }}
    >
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
            <button
              className="navbarStripe-link-btn"
              onMouseOver={(e: React.MouseEvent) => {
                displaySubmenu(e);
              }}
            >
              products
            </button>
          </li>
          <li>
            <button
              className="navbarStripe-link-btn"
              onMouseOver={(e: React.MouseEvent) => {
                displaySubmenu(e);
              }}
            >
              developers
            </button>
          </li>
          <li>
            <button
              className="navbarStripe-link-btn"
              onMouseOver={(e: React.MouseEvent) => {
                displaySubmenu(e);
              }}
            >
              company
            </button>
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
