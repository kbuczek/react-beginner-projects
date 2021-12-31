import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";
import links from "./data/links";
import { FaTimes, FaBars, FaCaretDown } from "react-icons/fa";
import "./Navbar2.css";

const Navbar2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const closeMobileMenu = () => setToggleMenu(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setToggleDropdown(false);
    } else {
      setToggleDropdown(true); //enableDropdown
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setToggleDropdown(false);
    } else {
      setToggleDropdown(false);
    }
  };

  return (
    <nav className="navbar2">
      <Link to="/" className="navbar2-logo">
        Your Logo
      </Link>
      <div className="navbar2-bars" onClick={() => setToggleMenu(!toggleMenu)}>
        {toggleMenu ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar2-menu ${toggleMenu && "active"}`}>
        {links.map(({ id, url, text, dropdown }) => {
          return (
            <li
              className="navbar2-menu-item"
              key={id}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to={url}
                className="navbar2-menu-link"
                onClick={closeMobileMenu}
              >
                {text}
                {dropdown && <FaCaretDown className="FaCaretDown" />}
                {dropdown && toggleDropdown ? (
                  <Dropdown
                    dropdown={dropdown}
                    setToggleMenu={setToggleMenu}
                    setToggleDropdown={setToggleDropdown}
                  />
                ) : (
                  ""
                )}
              </Link>
            </li>
          );
        })}
        <li className="navbar2-menu-item">
          <Link to="/sign-up" className="navbar2-menu-link-mobile">
            Sign up
          </Link>
        </li>
      </ul>
      <Button link={"sign-up"} text={"Sign up"} />
    </nav>
  );
};

export default Navbar2;
