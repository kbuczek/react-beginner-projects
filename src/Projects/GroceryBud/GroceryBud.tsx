import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";

const GroceryBud = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="gBud-section-center">
      <form className="gBud-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>grocery bud</h3>
        <div className="gBud-form-controll">
          <input type="text" />
          <button type="submit" className="gBud-submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="gBud-grocery-conatiner">
        <List />
        <button className="gBud-btn"></button>
      </div>
    </section>
  );
};

export default GroceryBud;
