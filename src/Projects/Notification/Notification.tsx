import React from "react";
import {
  IoInformationCircle,
  IoCheckmarkCircle,
  IoAlertCircle,
  IoCloseCircle,
  IoClose,
} from "react-icons/io5";
import "./notification.css";

interface Notification {
  title?: string;
  message?: string;
  type?: string;
}

const Notification: React.FunctionComponent<Notification> = ({
  title = "",
  message = "",
  type = "info",
}) => {
  return (
    <div className="notification">
      <div className="notification-icon">
        <IoAlertCircle color="red" size={40} />
      </div>
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
