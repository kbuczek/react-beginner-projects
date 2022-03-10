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
  const [currentBoxCss, setCurrentBoxCss] = useState(false);
  const [enteredBoxCss, setEnteredBoxCss] = useState(false);
  const [boxStyle, setBoxStyle] = useState({});

  useEffect(() => {
    setBoxStyle({
      gridColumnEnd: `span ${gridColumnSpan}`,
      gridRowEnd: `span ${gridRowSpan}`,
    });
  }, [gridColumnSpan, gridRowSpan]);

  useEffect(() => {
    if (props.dragging && props.currentDragBox.current === props.id) {
      setTimeout(() => {
        setCurrentBoxCss(true);
      }, 0);
    } else {
      setCurrentBoxCss(false);
    }
  }, [props.dragging]);

  const handleDragStart = (e: any) => {
    console.log("drag start", props.id);
    props.currentDragBox.current = props.id;

    //if onDragEnd doesn't work properly
    // dragNode.current = e.target;
    // dragNode.current.addEventListener("dragend", handleDragEnd)
    props.setDragging(true);
  };

  const handleDragEnd = (e: any) => {
    // dragNode.current.removeEventListener("dragend", handleDragEnd)
    console.log("drag end", props.id);
    props.changeBoxPosition();

    props.currentDragBox.current = -1;
    // dragNode.current = -1;
    props.setDragging(false);
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
    if (props.id !== props.currentDragBox.current) {
      console.log("Dragged over different item");
      props.setEnteredBoxId(props.id);
      setEnteredBoxCss(true);
    }
    //
  };

  const handleDragLeave = (e: any) => {
    console.log("handleDragLeave", props.id);
    setEnteredBoxCss(false);
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
        enteredBoxCss && "griddnd-box-entered"
      } griddnd-box`}
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
