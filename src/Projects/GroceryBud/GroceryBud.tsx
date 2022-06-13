import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";
import "./GroceryBud.css";

const GroceryBud = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState<{ id: string; title: string }[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      // diplay alert
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      // deal with edit
    } else {
      // show alert
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  return (
    <section className="gBud-section-center">
      <form className="gBud-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className="gBud-form-control">
          <input
            type="text"
            className="gBud-input"
            placeholder="eg. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="gBud-submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="gBud-grocery-container">
          <List items={list} />
          <button className="gBud-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

export default GroceryBud;
