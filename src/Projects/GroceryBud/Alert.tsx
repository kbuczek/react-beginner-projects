import React, { useEffect } from "react";
import "./Alert.css";

interface Alert {
  show: boolean;
  msg: string;
  type: string;
  removeAlert: Function;
  list: { id: string; title: string }[];
}

const Alert: React.FC<Alert> = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]); //every time list changes, alert displays for 3 seconds

  return <p className={`gBud-alert gBud-alert-${type}`}>{msg}</p>;
};

export default Alert;
