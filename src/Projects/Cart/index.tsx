import React from "react";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";

const index = () => {
  return (
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  );
};

export default index;
