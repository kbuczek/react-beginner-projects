import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

interface List {
  items: { id: string; title: string }[];
  removeItem: Function;
  editItem: Function;
}

const List: React.FC<List> = ({ items, removeItem, editItem }) => {
  return (
    <div className="gBud-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="gBud-list-item">
            <p className="gBud-list-title">{title}</p>
            <div className="gBud-list-btn-container">
              <button
                type="button"
                className="gBud-list-btn-edit"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="gBud-list-btn-delete"
                onClick={() => removeItem(id)}
              >
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
