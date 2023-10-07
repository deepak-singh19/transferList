import React from "react";

const Item = ({ item, handleToggle }) => {
  return (
    <div>
      <input type="checkbox" onChange={() => handleToggle(item)} />
      {item}
    </div>
  );
};

export default Item;
