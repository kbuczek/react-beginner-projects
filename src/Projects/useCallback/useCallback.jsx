import React, { useState, useCallback } from "react";
import List from "./List.js";

const Component = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  //thanks to useCallback, getItems function gets recreated only when number state changes
  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );
  //useMemo takes a function and returns a VALUE from that function
  //useCallback takes a function and returns a FUNCTION
  //WE USE USECALLBACK ONLY WHEN WE WORRY ABOUT REFERNTIAL EQUALITY

  return (
    //if we change any state (dark or number) whole Component rerenders from top to bottom
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change theme</button>
      {/* without useCallback, getItems is recreated in every rerender of the component (it will trigger useEffect inside) */}
      <List getItems={getItems} />
    </div>
  );
};

export default Componoent;
