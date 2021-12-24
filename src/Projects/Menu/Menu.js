import React, { useState } from "react";
import Categories from "./Categories";
import MenuItems from "./MenuItems";
import items from "./data";
import "./Menu.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main className="menu">
      <section className="menu section">
        <div className="menu-title">
          We serve these delicious foods :)
          <div className="menu-underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <MenuItems items={menuItems} />
      </section>
    </main>
  );
};

export default Menu;
