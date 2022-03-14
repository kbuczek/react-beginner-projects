import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ link, text }) => {
  return (
    <>
      <Link to={link}>
        <button className="navbar2-button">{text}</button>
      </Link>
    </>
  );
};

export default Button;
