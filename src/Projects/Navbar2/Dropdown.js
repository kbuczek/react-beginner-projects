import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({ dropdown, setToggleMenu, setToggleDropdown }) => {
  const [click, setClick] = useState(false);

  return (
    <div
      className="dropdown"
      onClick={() => {
        setClick(!click);
      }}
    >
      <ul className={`dropdown-list ${click && "clicked"}`}>
        {dropdown.map(({ id, url, text }) => {
          return (
            <li className="dropdown-list-item" key={id}>
              <Link
                to={url}
                onClick={() => setClick(false)}
                className="dropdown-link"
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
