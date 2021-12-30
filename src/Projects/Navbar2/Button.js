import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ link, text }) => {
  return (
    <>
      <Link to={link}>
        <button className="button">{text}</button>
      </Link>
    </>
  );
};

export default Button;
