import React from "react";
import "./index.css";
import App from "./App";
// import { AppProvider } from "./context" used in react context;
import { Provider } from "react-redux";
import { store } from "./store";

const index = () => {
  return (
    <React.StrictMode>
      {/* <AppProvider> in react context we use AppProvider */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </AppProvider> */}
    </React.StrictMode>
  );
};

export default index;
