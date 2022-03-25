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
  const [time, setTime] = useState(timeShown * 1000);
  const [timeBarColor, setTimeBarColor] = useState("black"); //this is useless, remove it later
  const [timeBarIcon, setTimeBarIcon] = useState(
    <IoInformationCircle color="blue" size={40} />
  );
  const [cssShowClass, setCssShowClass] = useState<boolean>(false);
  const [cssTimeBarProgress, setCssTimeBarProgress] = useState({});
  // const [timeBarInterval, setTimeBarInterval] = useState({});
  let timeBarInterval: ReturnType<typeof setInterval>;

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
        setCssTimeBarProgress({
          ...cssTimeBarProgress,
          backgroundColor: "green",
        });
        setTimeBarColor("green");
        setTimeBarIcon(<IoCheckmarkCircle color={"green"} size={40} />);
        break;
      case "warning":
        setCssTimeBarProgress({
          ...cssTimeBarProgress,
          backgroundColor: "yellow",
        });
        setTimeBarColor("yellow");
        setTimeBarIcon(<IoAlertCircle color={"yellow"} size={40} />);
        break;
      case "danger":
        setCssTimeBarProgress({
          ...cssTimeBarProgress,
          backgroundColor: "red",
        });
        setTimeBarColor("red");
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
    console.log("ASDFASDFSADF");
    if (displayTimeBar) {
      let currentTime = timeShown * 1000;
      const fullTime = timeShown * 1000;
      timeBarInterval = setInterval(() => {
        let progress = currentTime / fullTime;

        console.log("progress", progress);
        console.log("color", timeBarColor);
        console.log(cssTimeBarProgress);
        setCssTimeBarProgress({
          ...cssTimeBarProgress,
          width: `calc(100% * ${progress})`,
        });
        currentTime -= 10;

        if (progress < 0) {
          clearInterval(timeBarInterval);
        }
      }, 10);
      // setTimeBarInterval(timeBarInterval);
    }
  };

  return (
    <div
      className={`notification ${cssShowClass && "show"}`}
      onClick={() => {
        setCssShowClass(false);
        clearInterval(timeBarInterval);
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

export default memo(Notification);
