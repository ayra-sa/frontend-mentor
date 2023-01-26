import React from "react";
import Button from "./Button";

const btnValues = [
  [7, 8, 9, "DEL"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [".", 0, "/", "x"],
  ["RESET", "="],
];

const ButtonBox = () => {
  return (
    <div className="btn-box">
      {btnValues.flat().map((btn, i) => (
        <Button key={i} value={btn} />
      ))}
    </div>
  );
};

export default ButtonBox;
