import React from "react";
import "./Alert.css";

interface Alert {
  show: boolean;
  msg: string;
  type: string;
}

const Alert: React.FC<Alert> = ({ type, msg }) => {
  return <p className={`gBud-alert gBud-alert-${type}`}>{msg}</p>;
};

export default Alert;
