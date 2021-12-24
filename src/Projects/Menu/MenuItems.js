import React from "react";
import "./MenuItems.css";

const MenuItems = ({ items }) => {
  return (
    <div className="menuItems-section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menuItems-item">
            <img
              src={process.env.PUBLIC_URL + img}
              alt={title}
              className="menuItems-photo"
            />
            <div>
              <header>
                <h4>{title}</h4>
                <h4 className="menuItems-price">${price}</h4>
              </header>
              <p className="menuItems-item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MenuItems;
