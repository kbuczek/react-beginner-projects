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

  return (
    <main style={{ marginTop: "400px" }}>
      <button onClick={handleClickInfo}>Add info notification</button>
      <button onClick={handleClickSuccess}>Add success notification</button>
      <NotificationContainer
        position="top-right"
        newNotification={newNotification}
      />
    </main>
  );
};

export default Index;
