import React from "react";
import { useState, useMemo, useEffect } from "react";

const Component = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber_v2 = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const theme2 = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  const theme3 = {
    backgroundColor: "black",
    color: "white",
  };
  
  //this will calculate object only on mount (best solution?)
 const theme4 = useMemo(() => {
    return {
      backgroundColor: "white",
      color: "black",
    };
  }, []);

  //In javaScript objects and arrays are compared by reference, so 'theme2 === theme' will return false, because they reference different objects
  useEffect(() => {
    //this console.log will be triggered if number state changes
    //this console.log will be triggered if dark state changes
    //this console.log will be triggered if theme object changes
    console.log("Theme changed");
  }, [theme]);

  useEffect(() => {
    //this console.log will be triggered if ONLY dark state changes !!!!!!!!!!!!!!!
    //this console.log will be triggered if theme2 object changes
    console.log("Theme2 changed");
  }, [theme2]);

  useEffect(() => {
    //this console.log will be triggered if number state changes
    //this console.log will be triggered if dark state changes
    //this console.log will be triggered if theme3 object changes
    console.log("Theme3 changed");
  }, [theme3]);

  return (
    //if we change any state (dark or number) whole Component rerenders from top to bottom
    <>
      {/* //IF WE CHANGE NUMBER IN INPUT, USEEFFECT [theme] WILL BE CALLED */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change theme</button>
      {/* //if number (or dark) state changes, then whole component rerenders, then
      new 'theme' object is created (even though it's value is not depended on
      number state). New 'theme' object is not the same as old 'theme' object
      (even if they have the same values), because they have different
      references in memory - this will trigger useEffect [theme] */}
      <div style={theme}>{doubleNumber_v2}</div>
      {/* //because of theme2 being inside useMemo [dark], new 'theme2' object will
      be created ONLY WHEN dark state changes. */}
      <div style={theme2}>{doubleNumber_v2}</div>
      {/* //this will also be triggered every rerender (if any state in component changes) :(*/}
      <div style={theme3}>{doubleNumber_v2}</div>
    </>
  );
};

function slowFunction(num) {
  console.log("React is recalculating this SLOW function!");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default Component;
