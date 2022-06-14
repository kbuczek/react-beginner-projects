import React from "react";
import { FaBars } from "react-icons/fa";

const HomeSnM = () => {
  return (
    <main>
      <button className="homesnm-sidebar-toggle">
        <FaBars />
      </button>
      <button className="homesnm-btn">show modal</button>
    </main>
  );
};

export default HomeSnM;
