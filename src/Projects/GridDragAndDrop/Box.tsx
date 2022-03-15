import React, { useEffect, useState } from "react";
import "./Box.css";

export interface BoxProps {
  id: number;
  // id_klienta: number;
  nazwa: string;
  rok: number;
}

const Box = (props: any) => {
  const [gridColumnSpan, setGridColumnSpan] = useState(1);
  const [gridRowSpan, setGridRowSpan] = useState(1);
  const [currentBoxCss, setCurrentBoxCss] = useState(false); //black background css
  const [boxStyle, setBoxStyle] = useState({});
  const [mouseEntered, setMouseEntered] = useState(0);
  const colors: string[] = [
    "pink",
    "peachpuff",
    "lightyellow",
    "palegreen",
    "lightcyan",
    "powderblue",
    "thistle",
  ];
  // const randNum: number = Math.floor(Math.random() * 7); //changes after every rerender of component
  const [randNum, setRandNum] = useState(Math.floor(Math.random() * 7));

  useEffect(() => {
    setBoxStyle({
      gridColumnEnd: `span ${gridColumnSpan}`,
      gridRowEnd: `span ${gridRowSpan}`,
      // background: colors[randNum],
    });
  }, [gridColumnSpan, gridRowSpan]);

  useEffect(() => {
    if (props.dragging && props.currentDragBox.current === props.id) {
      setCurrentBoxCss(true);
    } else {
      setCurrentBoxCss(false);
    }
  }, [props.dragging]);

  const handleDragStart = (e: any) => {
    console.log("drag start", props.id);
    props.currentDragBox.current = props.id;
    props.setDragging(true);
  };

  const handleDragEnd = (e: any) => {
    console.log("drag end", props.id);
    // if statement prevents changing positions when user drags item back to its original place
    if (props.enteredBoxId !== props.currentDragBox.current) {
      props.changeBoxPosition();
    }
    props.currentDragBox.current = -1;
    props.setDragging(false);
    props.setEnteredBoxId(-1);
    setMouseEntered(0);
  };

  const handleDragOver = (e: any) => {
    if (e.preventDefault) {
      e.preventDefault();
    }

    return false;
  };

  //triggered every time the mouse stops
  const handleDragEnter = (e: any) => {
    // Don't trigger when entering the current dragged box
    e.preventDefault();
    console.log("dragenter", props.id);
    setMouseEntered((mouseEntered) => mouseEntered + 1);
    if (props.id !== props.currentDragBox.current) {
      console.log("Dragged over different item");
      props.setEnteredBoxId(props.id);
    }
  };

  const handleDragLeave = (e: any) => {
    let newMouseEntered = mouseEntered - 1;
    setMouseEntered(newMouseEntered);
    // every child in DOM triggers dragleave in parent
    // every time we enter child we newMouseEntered++, when we leave child --;
    // when we are in parent (griddnd-box) newMouseEntered is always equal to 1; When we leave 0;
    console.log("dragleave", props.id);
    if (newMouseEntered === 0) {
      console.log("MOUSE LEAVE", newMouseEntered);
      props.setEnteredBoxId(-1);
      setMouseEntered(0);
    }
  };

  return (
    <section
      id={props.id}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      draggable="true"
      className={`${currentBoxCss && "griddnd-box-current"} ${
        props.enteredBoxId === props.id && "griddnd-box-entered"
      }  ${true && colors[randNum]} griddnd-box `}
      style={boxStyle}
    >
      <div className="griddnd-box-edge griddnd-box-up-left"></div>
      <div
        className="griddnd-box-edge griddnd-box-up-center"
        onClick={() => {
          setGridRowSpan(gridRowSpan - 1);
        }}
      >
        -
      </div>
      <div className="griddnd-box-edge griddnd-box-up-right"></div>
      <div
        className="griddnd-box-edge griddnd-box-center-left"
        onClick={() => {
          setGridColumnSpan(gridColumnSpan - 1);
        }}
      >
        -
      </div>
      <div className="griddnd-box-content">{props.children}</div>
      <div
        className="griddnd-box-edge griddnd-box-center-right"
        onClick={() => {
          setGridColumnSpan(gridColumnSpan + 1);
        }}
      >
        +
      </div>
      <div className="griddnd-box-edge griddnd-box-down-left"></div>
      <div
        className="griddnd-box-edge griddnd-box-down-center"
        onClick={() => {
          setGridRowSpan(gridRowSpan + 1);
        }}
      >
        +
      </div>
      <div className="griddnd-box-edge griddnd-box-down-right"></div>
    </section>
  );
};

export default Box;
