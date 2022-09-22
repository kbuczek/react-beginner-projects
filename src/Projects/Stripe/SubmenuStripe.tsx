import React, { useEffect, useRef, useState } from "react";
import { IoRadio } from "react-icons/io5";
import { useGlobalContext } from "./context";

const SubmenuStripe = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef<HTMLElement>(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    const submenu = container.current; //useRef is reference to html <aside>SubmenuStripe</aside>
    // console.log(submenu);
    setColumns("col-2");
    if (submenu) {
      const { center, bottom } = location;
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
    }
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);

  return (
    <aside
      className={`submenuStripe ${isSubmenuOpen && "submenuStripe-show"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenuStripe-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default SubmenuStripe;
