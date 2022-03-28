import React, { useState, useEffect } from "react";
import { memo } from "react";
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
  // const [time, setTime] = useState(timeShown * 1000);
  const [timeBarColor, setTimeBarColor] = useState("black");
  const [timeBarIcon, setTimeBarIcon] = useState(
    <IoInformationCircle color="blue" size={40} />
  );
  const [cssShowClass, setCssShowClass] = useState<boolean>(false);
  const [cssTimeBarProgress, setCssTimeBarProgress] = useState({});

  useEffect(() => {
    chooseTimeBarType();
  }, []);

  useEffect(() => {
    if (Object.keys(cssTimeBarProgress).length !== 0) {
      showAnimation();
      timeBarAnimation();
    }
  }, [timeBarColor]);

  const chooseTimeBarType = () => {
    switch (type) {
      case "info":
        setTimeBarColor("blue");
        setCssTimeBarProgress({
          ...cssTimeBarProgress,
          backgroundColor: "blue",
        });
        setTimeBarIcon(<IoInformationCircle color={"blue"} size={40} />);
        break;
      case "success":
        setTimeBarColor("#28a745");
        setCssTimeBarProgress({
          ...cssTimeBarProgress,
          backgroundColor: "#28a745",
        });

        setTimeBarIcon(<IoCheckmarkCircle color={"#28a745"} size={40} />);
        break;
      case "warning":
        setTimeBarColor("#ffc107");
        setCssTimeBarProgress({
          ...cssTimeBarProgress,
          backgroundColor: "#ffc107",
        });

        setTimeBarIcon(<IoAlertCircle color={"#ffc107"} size={40} />);
        break;
      case "danger":
        setTimeBarColor("red");
        setCssTimeBarProgress({
          ...cssTimeBarProgress,
          backgroundColor: "red",
        });

        setTimeBarIcon(<IoCloseCircle color={"red"} size={40} />);
        break;
    }
  };

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
      let currentTime = timeShown * 1000;
      const fullTime = currentTime;
      const timeBarInterval = setInterval(() => {
        let progress = currentTime / fullTime;

        // console.log("progress", progress);
        // console.log("color", timeBarColor);
        // console.log(cssTimeBarProgress);
        setCssTimeBarProgress({
          ...cssTimeBarProgress,
          width: `calc(100% * ${progress})`,
        });
        currentTime -= 10;

        if (progress < 0) {
          clearInterval(timeBarInterval);
        }
      }, 10);
    }
  };

  return (
    <div
      className={`notification ${cssShowClass && "show"}`}
      onClick={() => {
        setCssShowClass(false);
        setTimeout(() => {
          deleteNotification(id);
        }, 100);
      }}
    >
      <div className="notification-icon">{timeBarIcon}</div>
      <div className="notification-text">
        <div className="notification-text-title">{title}</div>
        <div className="notification-text-message">{message}</div>
      </div>
      <div className="notification-close">
        <IoClose size={20} />
      </div>
      <div className="notification-timebar" style={cssTimeBarProgress}></div>
    </div>
  );
};

export default Notification;
