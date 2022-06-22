import React from "react";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import { useGlobalContext } from "./context";

import "./Sidebar.css";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen && "sidebar-show"}`}>
      <div className="sidebar-header">
        <img src="/logo192.png" className="sidebar-logo" alt="logo" />
        <button
          className="sidebar-close-btn"
          onClick={() => {
            closeSidebar();
          }}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="sidebar-links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="sidebar-social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
