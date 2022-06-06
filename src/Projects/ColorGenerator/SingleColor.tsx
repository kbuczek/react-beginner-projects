import React, { useState } from "react";
import rgbToHex from "./utils";

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

  return (
    <article
      className={`singleColor ${index > 10 && "singleColor-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="singleColor-weight">{color.weight}%</p>
      <p className="singleColor-value">{hex}</p>
    </article>
  );
};

export default SingleColor;
