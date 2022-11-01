import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5)); //we can call getItems thanks to useCallback, and we can pass parameters into getItems
    console.log("Updating Items in List.");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};

export default List;
