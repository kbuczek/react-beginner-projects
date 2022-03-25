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
    hidden: boolean;
  }
  const [notificationList, setNotificationList] = useState<NLInterface[]>([]);
  const [hiddenNotificationsLength, setHiddenNotificationsLength] = useState(0);

  useEffect(() => {
    addNotification();
  }, [newNotification]);

  useEffect(() => {
    console.log(hiddenNotificationsLength);
    console.log(notificationList.length);

    if (notificationList.length === hiddenNotificationsLength) {
      console.log("DELETING TABLE");
      setNotificationList([]);
      setHiddenNotificationsLength(0);
    }
  }, [hiddenNotificationsLength]);

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
          hidden: false,
        },
        ...prev,
      ]);
    }
  };

  const deleteNotification = (id: number) => {
    // const newNotificationList = notificationList.filter(
    //   (item) => item.id !== id
    // );
    // setNotificationList(newNotificationList);
    setHiddenNotificationsLength((prev) => prev + 1);
    console.log("ADDD");
    const index = notificationList.findIndex((x) => x.id === id);
    notificationList[index].hidden = true;
  };

  return (
    <div className="notificationContainer" data-position={position}>
      {notificationList?.map(
        ({ id, title, message, type, timeShown, displayTimeBar, hidden }) => {
          if (hidden) {
            return null;
          }
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
    // <>
    //   {notificationList?.map(
    //     ({ id, title, message, type, timeShown, displayTimeBar }) => {
    //       return (
    //         <div className="notificationContainer" data-position={position}>
    //           <Notification
    //             key={id}
    //             id={id}
    //             title={title}
    //             message={message}
    //             type={type}
    //             timeShown={timeShown}
    //             displayTimeBar={displayTimeBar}
    //             deleteNotification={deleteNotification}
    //           />
    //         </div>
    //       );
    //     }
    //   )}
    // </>
  );
};

export default NotificationContainer;
