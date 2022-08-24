import React, { useState } from "react";
import boxes from "./boxes";
import Box from "./components/Box";
import "./styles.css";

export default function App() {
  const [squares, setSquares] = useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on
          };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  }

  const squareElements = squares.map((square) => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      win={square.win}
      toggle={toggle}
    />
  ));

  return <main>{squareElements}</main>;
}
