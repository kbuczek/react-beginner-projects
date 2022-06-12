import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

interface List {
  items: { id: string; title: string }[];
}

const List: React.FC<List> = ({ items }) => {
  return (
    <div className="gBud-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="gBud-list-item">
            <p className="gBud-list-title">{title}</p>
            <div className="gBud-list-btn-container">
              <button type="button" className="gBud-list-btn-edit">
                <FaEdit />
              </button>
              <button type="button" className="gBud-list-btn-delete">
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
