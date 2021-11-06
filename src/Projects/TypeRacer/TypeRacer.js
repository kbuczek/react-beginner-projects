import react from "react";
import Keyboard from "./Keyboard";
import level1 from "./data/level1";
import "./TypeRacer.css";

const TypeRacer = () => {
  return (
    <main className="typeracer-main container">
      <div className="typeracer-level">{level1.text}</div>
      <div>
        <Keyboard level={level1} />
      </div>
    </main>
  );
};

export default TypeRacer;
