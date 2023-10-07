import React from "react";
import Item from "./item";

const List = ({ data }) => {
  return (
    <div className="List">
      {data?.map((e) => (
        <div key={e}>
          <Item item={e} />
        </div>
      ))}
    </div>
  );
};

export default List;
