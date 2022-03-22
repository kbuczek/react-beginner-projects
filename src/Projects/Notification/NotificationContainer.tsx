import React from "react";
import Notification from "./Notification";
import "./notificationContainer.css";

interface NotificationContainer {
  position: string;
}

const NotificationContainer = ({ position = "top-right" }) => {
  return (
    <div className="notificationContainer" data-position={position}>
      <Notification
        title="Title"
        message="Sample message of the notification"
      />
      <Notification
        title="Title 2"
        message="Sample message of the notification "
      />
    </div>
  );
};

export default NotificationContainer;
