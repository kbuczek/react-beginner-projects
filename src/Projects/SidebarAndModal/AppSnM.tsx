import React from "react";
import HomeSnM from "./HomeSnM";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import "./AppSnM.css";

import { AppProvider } from "./context"; //we can also put this in index.js

const AppSnM = () => {
  return (
    <>
      <AppProvider>
        <HomeSnM />
        <Modal />
        <Sidebar />
      </AppProvider>
    </>
  );
};

export default AppSnM;
