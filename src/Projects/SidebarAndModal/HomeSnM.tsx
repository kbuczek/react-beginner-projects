import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
// import { AppContext } from "./context";
import { useGlobalContext } from "./context";

const HomeSnM = () => {
  // const data = useContext(AppContext);
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main className="homesnm-main">
      <button
        className="homesnm-sidebar-toggle"
        onClick={() => {
          openSidebar();
        }}
      >
        <FaBars />
      </button>
      <button
        className="homesnm-btn"
        onClick={() => {
          openModal();
        }}
      >
        show modal
      </button>
    </main>
  );
};

export default HomeSnM;
