import React, { useEffect, useState, useRef } from "react";
import Box, { BoxProps } from "./Box";
import "./index.css";

const GridDnd = ({ data }) => {
  const [columns, setColumns] = useState(5);
  const [boxesPositions, setBoxesPositions] = useState([]);
  const [gridDndStyle, setGridDndStyle] = useState({
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  });
  const [dragging, setDragging] = useState(false);
  const [enteredBoxId, setEnteredBoxId] = useState(-1);
  const [dataValuesMap, setDataValuesMap] = useState(new Map());

  //useRef stays constant between rerenders
  const currentDragBox = useRef(-1);

  useEffect(() => {
    initializeBoxesPositions();
  }, []);

  useEffect(() => {
    setGridDndStyle({
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
    });
  }, [columns]);

  const initializeBoxesPositions = () => {
    data.map((item) => {
      setBoxesPositions((positions) => [...positions, item.id]);
      setDataValuesMap(
        dataValuesMap.set(item.id, {
          id_klienta: item.id_klienta,
          nazwa: item.nazwa,
          rok: item.rok,
        })
      );
    });
    console.log(dataValuesMap);
  };

  const changeBoxPosition = () => {
    if (enteredBoxId > 0) {
      console.log("changeBox currentDragBox", currentDragBox.current);
      console.log("changeBox enteredBoxId", enteredBoxId);
      const indexCurrentDragBox = boxesPositions.indexOf(
        currentDragBox.current
      );
      const indexEnteredBox = boxesPositions.indexOf(enteredBoxId);
      boxesPositions.splice(indexEnteredBox, 1, currentDragBox.current);
      boxesPositions.splice(indexCurrentDragBox, 1, enteredBoxId);
    }
  };

  return (
    <main>
      <h1>Drag and drop boxes on css grid. Change boxes size with + and -</h1>
      <div className="column-ctrl">
        <div>Number of columns</div>

        <button
          className="griddnd-ctrl-button-red"
          onClick={() => {
            setColumns(columns - 1);
          }}
        >
          -
        </button>
        <button
          className="griddnd-ctrl-button"
          onClick={() => {
            console.log(columns);
            setColumns(columns + 1);
            console.log(columns);
          }}
          style={{ marginLeft: "5px" }}
        >
          +
        </button>
      </div>
      <div className="griddnd" style={gridDndStyle}>
        {boxesPositions.map((boxId) => {
          const data = dataValuesMap.get(boxId);
          return (
            <Box
              key={boxId}
              dragging={dragging}
              setDragging={setDragging}
              currentDragBox={currentDragBox}
              changeBoxPosition={changeBoxPosition}
              enteredBoxId={enteredBoxId}
              setEnteredBoxId={setEnteredBoxId}
              id={boxId}
            >
              <div>{data.nazwa}</div>
              <div>{data.rok}</div>
            </Box>
          );
        })}
      </div>
    </main>
  );
};

export default GridDnd;
