import React, { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";
import "./GroceryBud.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const GroceryBud = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState<{ id: string; title: string }[]>(
    getLocalStorage()
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState<string>();
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
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }; //change only title property in found item
          }
          return item;
        })
      );
      setName("");
      setEditID("");
      setIsEditing(false);
      showAlert(true, "success", "item editied");
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

  const removeItem = (id: string) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id: string) => {
    const specificItem = list.find((item) => item.id === id);
    if (specificItem) {
      setIsEditing(true);
      setEditID(id);
      setName(specificItem.title);
    } else {
      console.log("editItem: item with id=" + id + " not found");
    }
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="gBud-section-center">
      <form className="gBud-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="gBud-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

export default GroceryBud;
