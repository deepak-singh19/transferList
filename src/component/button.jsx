import React from "react";

export default function Button({ leftBox, rightBox }) {
  return (
    <div className="Action">
      <button onClick={rightBox}>&gt;</button>
      <button onClick={leftBox}>&lt;</button>
    </div>
  );
}
