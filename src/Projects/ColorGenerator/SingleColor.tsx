import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";
import "./SingleColor.css";

interface SingleColor {
  index: number;
  color: {
    rgb: [number, number, number];
    alpha: number;
    type: string;
    weight: number;
  };
}

const SingleColor: React.FunctionComponent<SingleColor> = ({
  index,
  color,
}) => {
  const [alert, setAlert] = useState(false);
  const bcg = color.rgb.join(",");
  const hex = rgbToHex(...color.rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`singleColor ${index > 10 && "singleColor-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex); //copy to client clipboard
      }}
    >
      <p className="singleColor-weight">{color.weight}%</p>
      <p className="singleColor-value">{hex}</p>
      {alert && <p className="singleColor-alert">color copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
