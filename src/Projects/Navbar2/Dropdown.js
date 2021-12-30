import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({ dropdown, setToggleMenu, setToggleDropdown }) => {
  return (
    <div
      className="dropdown"
      onClick={() => {
        setToggleMenu((prev) => !prev);
      }}
    >
      <ul className="dropdown-list">
        {dropdown.map(({ id, url, text }) => {
          return (
            <Link to={url} className="dropdown-list-item" key={id}>
              {text}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
