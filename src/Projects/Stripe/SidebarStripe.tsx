import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";
import "./SidebarStripe.css";

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
        <div className="sidebarStripe-links">
          {sublinks.map((item, index) => {
            const { page, links } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebarStripe-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default SidebarStripe;
