import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";
import links from "./data/links";
import { FaTimes, FaBars, FaCaretDown } from "react-icons/fa";
import "./Navbar2.css";

const Navbar2 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(-1);

  const closeMobileMenu = () => setMobileMenu(false);

  const onMouseEnter = (id) => {
    if (window.innerWidth < 960) {
      return;
    } else {
      setToggleDropdown(id); //enableDropdown
    }
  };

  const onMouseLeave = () => {
    setToggleDropdown(-1);
  };

  return (
    <nav className="navbar2">
      <Link to="/" className="navbar2-logo">
        Your Logo
      </Link>
      <div className="navbar2-bars" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <FaTimes className="FaTimes" />
        ) : (
          <FaBars className="FaBars" />
        )}
      </div>
      <ul className={`navbar2-menu ${mobileMenu && "active"}`}>
        {links.map(({ id, url, text, dropdown }) => {
          return (
            <li
              className="navbar2-menu-item"
              key={id}
              onMouseEnter={() => onMouseEnter(id)}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to={url}
                className="navbar2-menu-link"
                onClick={closeMobileMenu}
              >
                {text}
                {dropdown && <FaCaretDown className="FaCaretDown" />}
                {dropdown && id === toggleDropdown ? (
                  <Dropdown
                    dropdown={dropdown}
                    setMobileMenu={setMobileMenu}
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
