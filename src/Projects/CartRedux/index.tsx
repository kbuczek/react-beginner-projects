import React from "react";
import "./index.css";
import App from "./App";
// import { AppProvider } from "./context";
import { Provider } from "react-redux";
import { store } from "./store";

const index = () => {
  return (
    <React.StrictMode>
      {/* <AppProvider> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </AppProvider> */}
    </React.StrictMode>
  );
};

export default index;
