import React from "react";
import "./notification.css";

interface Notification {
  title: string;
  message: string;
  type: string;
}

const Notification: React.FunctionComponent<Notification> = ({
  title,
  message,
  type = "default",
}) => {
  return (
    <div className="notification">
      <div className="notification-icon">🐶</div>
      <div className="notification-text">
        <div className="notification-text-title">{title}</div>
        <div className="notification-text-message">{message}</div>
      </div>
      <div className="notification-close" >X</div>
    </div>
  );
};

export default Notification;
