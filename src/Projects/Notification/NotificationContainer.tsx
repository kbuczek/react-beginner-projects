import React, { useState, useEffect } from "react";
import Notification from "./Notification";
import "./notificationContainer.css";

interface NotificationContainer {
  position: string;
  newNotification: {
    title: string;
    message: string;
    type?: string;
    timeShown?: number;
    displayTimeBar?: boolean;
  };
}

const NotificationContainer = ({
  position = "top-right",
  newNotification = {
    title: "",
    message: "",
    type: "",
    timeShown: 0,
    displayTimeBar: true,
  },
}) => {
  interface NLInterface {
    id: number;
    title: string;
    message: string;
    type: string;
    timeShown: number;
    displayTimeBar: boolean;
  }
  const [notificationList, setNotificationList] = useState<NLInterface[]>([]);

  useEffect(() => {
    addNotification();
  }, [newNotification]);

  const addNotification = () => {
    let notifListLength = notificationList.length;

    if (newNotification.title !== "") {
      setNotificationList((prev) => [
        {
          id: notifListLength,
          title: newNotification.title,
          message: newNotification.message,
          type: newNotification.type,
          timeShown: newNotification.timeShown,
          displayTimeBar: newNotification.displayTimeBar,
        },
        ...prev,
      ]);
    }
  };

  const deleteNotification = (id: number) => {
    const newNotificationList = notificationList.filter(
      (item) => item.id !== id
    );
    setNotificationList(newNotificationList);
  };

  return (
    <div className="notificationContainer" data-position={position}>
      {notificationList?.map(
        ({ id, title, message, type, timeShown, displayTimeBar }) => {
          return (
            <Notification
              key={id}
              id={id}
              title={title}
              message={message}
              type={type}
              timeShown={timeShown}
              displayTimeBar={displayTimeBar}
              deleteNotification={deleteNotification}
            />
          );
        }
      )}
    </div>
  );
};

export default NotificationContainer;
