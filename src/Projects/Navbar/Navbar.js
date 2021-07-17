import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import logo from "./logo.png";
import { links, social } from "./data";
import "./navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  //useRef doesn't trigger re-render (no useEffect)
  //used mainly to target DOM elements
  // refValue.current = <div>...</div>
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height + 25;
    // console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`; //inline css on DOM element linksContainerRef, chagnging height: ""
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav className="nav-nav">
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="company logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div
          // className={`${
          //   showLinks ? "links-container show-container" : "links-container"
          // }`}
          className="links-container"
          ref={linksContainerRef}
        >
          <ul className="links" ref={linksRef}>
            {links.map(({ id, url, text }) => {
              //all links from map in this return() will be placed in linksRef.current
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
