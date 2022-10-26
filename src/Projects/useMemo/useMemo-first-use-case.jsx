import React, { useState, useMemo } from "react";

const Component = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber_v1 = slowFunction(number);
  const doubleNumber_v2 = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    //if we change any state (dark or number) whole Component rerenders from top to bottom
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change theme</button>
      // 1. When any state in component changes (dark or number), whole
      component is rerendered - slowFunction is recalulated every time. 2.If we
      only change DARK state, doubleNumber_v1 is still recalculated even though
      it doesn't use DARK state (it only uses NUMBER state).
      <div style={theme}>{doubleNumber_v1}</div>
      // slowFunction wrapped in useMemo with [number] dependency is
      recalculated ONLY when NUMBER state changes
      <div style={theme}>{doubleNumber_v2}</div>
    </>
  );
};

function slowFunction(num) {
  console.log("React is recalculating this SLOW function!");
  for (let i = 0; i < 100000000000; i++) {}
  return num * 2;
}

//DON'T OVERUSE USEMEMO. In every rerender useMemo must be called (you are calling an additional function)
// and the value from the function is saved in memory
//use it only when function is big(slow) or you need performance boost

export default Componoent;
