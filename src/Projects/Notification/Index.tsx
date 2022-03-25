import React, { useState } from "react";
import NotificationContainer from "./NotificationContainer";

const Index = () => {
  const [newNotification, setNewNotification] = useState({
    title: "",
    message: "",
    type: "",
    timeShown: 1,
    displayTimeBar: true,
  });
  const [notifContPosition, setNotifContPosition] = useState("top-right");

  const handleClickInfo = () => {
    setNewNotification({
      title: "Title Info",
      message: "This is my very long message",
      type: "info",
      timeShown: 20,
      displayTimeBar: true,
    });
  };

  const handleClickSuccess = () => {
    setNewNotification({
      title: "Title Success",
      message: "This is my very long message",
      type: "success",
      timeShown: 2,
      displayTimeBar: true,
    });
  };

  const handleClickWarning = () => {
    setNewNotification({
      title: "Title Warning",
      message: "This is my very long message",
      type: "warning",
      timeShown: 2,
      displayTimeBar: true,
    });
  };

  const handleClickDanger = () => {
    setNewNotification({
      title: "Title Danger",
      message: "This is my very long message",
      type: "danger",
      timeShown: 2,
      displayTimeBar: true,
    });
  };

  return (
    <main>
      <div style={{ marginTop: "400px" }}>
        <button onClick={handleClickInfo}>Add info notification</button>
        <button onClick={handleClickSuccess}>Add success notification</button>
        <button onClick={handleClickWarning}>Add warning notification</button>
        <button onClick={handleClickDanger}>Add danger notification</button>
      </div>

      <div style={{ marginTop: "50px" }}>
        <button onClick={() => setNotifContPosition("top-right")}>
          top right
        </button>
        <button onClick={() => setNotifContPosition("top-center")}>
          top center
        </button>
        <button onClick={() => setNotifContPosition("top-left")}>
          top left
        </button>
        <button onClick={() => setNotifContPosition("bottom-right")}>
          bottom right
        </button>
        <button onClick={() => setNotifContPosition("bottom-center")}>
          bottom center
        </button>
        <button onClick={() => setNotifContPosition("bottom-left")}>
          bottom left
        </button>
      </div>

      <NotificationContainer
        position={notifContPosition}
        newNotification={newNotification}
      />
    </main>
  );
};

export default Index;
