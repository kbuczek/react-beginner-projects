import React, { useState, useEffect } from "react";
import {
  IoInformationCircle,
  IoCheckmarkCircle,
  IoAlertCircle,
  IoCloseCircle,
  IoClose,
} from "react-icons/io5";
import "./notification.css";

interface Notification {
  id: number;
  title?: string;
  message?: string;
  type?: string;
  timeShown?: number;
  deleteNotification: Function;
}

const Notification: React.FunctionComponent<Notification> = ({
  id = -1,
  title = "",
  message = "",
  type = "info",
  timeShown = 3,
  deleteNotification,
}) => {
  const [time, setTime] = useState(timeShown);
  const [css, setCss] = useState<string>("");

  useEffect(() => {
    setCss("show");
    setTimeout(() => {
      setCss("");
      deleteNotification(id);
    }, timeShown * 1000);
  }, []);

  const displayIcon = () => {
    console.log(type);
    switch (type) {
      case "info":
        return <IoInformationCircle color="blue" size={40} />;
      case "success":
        return <IoCheckmarkCircle color="green" size={40} />;
    }
  };

  return (
    <div
      className={`notification ${css}`}
      onClick={() => {
        deleteNotification(id);
      }}
    >
      <div className="notification-icon">{displayIcon()}</div>
      <div className="notification-text">
        <div className="notification-text-title">{title}</div>
        <div className="notification-text-message">{message}</div>
      </div>
      <div className="notification-close">
        <IoClose size={20} />
      </div>
    </div>
  );
};

export default Notification;
