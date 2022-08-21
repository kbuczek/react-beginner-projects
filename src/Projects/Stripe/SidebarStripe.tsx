import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const SidebarStripe = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`sidebarStripe-wrapper ${
        isSidebarOpen && "sidebarStripe-show"
      }`}
    >
      <div className="sidebarStripe">
        <button
          className="sidebarStripe-close-btn"
          onClick={() => {
            closeSidebar();
          }}
        >
          <FaTimes />
        </button>
      </div>
    </aside>
  );
};

export default SidebarStripe;
