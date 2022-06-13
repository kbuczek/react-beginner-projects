import React, { useEffect } from "react";
import "./Alert.css";

interface Alert {
  show: boolean;
  msg: string;
  type: string;
  removeAlert: Function;
}

const Alert: React.FC<Alert> = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return <p className={`gBud-alert gBud-alert-${type}`}>{msg}</p>;
};

export default Alert;
