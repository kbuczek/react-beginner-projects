import React, { useState, useEffect, CSSProperties } from "react";
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
  displayTimeBar?: boolean;
  deleteNotification: Function;
}

const Notification: React.FunctionComponent<Notification> = ({
  id = -1,
  title = "",
  message = "",
  type = "info",
  timeShown = 3,
  displayTimeBar = true,
  deleteNotification,
}) => {
  const [time, setTime] = useState(timeShown * 1000);
  const [cssShowClass, setCssShowClass] = useState<boolean>(false);
  const [cssTimeBarClass, setCssTimeBarClass] = useState<boolean>(false);

  useEffect(() => {
    showAnimation();
    timeBarAnimation();
    setCssTimeBarClass(displayTimeBar);
    // const timebarFromCss = getComputedStyle(
    //   document.documentElement
    // ).getPropertyValue("--timebar");
    // console.log(timebarFromCss);

    document.documentElement.style.setProperty("--timebar-color", "blue");
  }, []);

  const showAnimation = () => {
    setTimeout(() => {
      setCssShowClass(true);
    }, 100);
    setTimeout(() => {
      setCssShowClass(false);
      setTimeout(() => {
        deleteNotification(id);
      }, 150);
    }, timeShown * 1000);
  };

  const timeBarAnimation = () => {
    if (displayTimeBar) {
      // document.documentElement.style.setProperty("--timebar", "1");
      let currentTime = timeShown * 1000;
      const fullTime = timeShown * 1000;
      const timeBarInterval = setInterval(() => {
        let progress = currentTime / fullTime;

        console.log("progress", progress);
        document.documentElement.style.setProperty(
          "--timebar",
          progress.toString()
        );
        currentTime -= 10;

        if (progress < 0) {
          clearInterval(timeBarInterval);
        }
      }, 10);
    }
  };

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
      className={`notification ${cssShowClass && "show"} ${
        cssTimeBarClass && "timebar"
      }`}
      onClick={() => {
        setCssShowClass(false);
        setTimeout(() => {
          deleteNotification(id);
        }, 100);
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
