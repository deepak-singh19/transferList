import "./styles.css";
import React, { useState } from "react";
import List from "./component/list";
import Button from "./component/button";
import { items } from "./data";
import { checkedArray, filterArray } from "./utils/utils";

export default function App() {
  const [leftData, setLeftData] = useState(items);
  const [rightData, setRightdata] = useState([]);
  const [checkedItem, setCheckedItems] = useState([]);

  const handleToggle = (item) => {
    // console.log("handle Toggle");

    const currIndex = checkedItem.indexOf(item);
    const newItem = [...checkedItem];

    if (currIndex === -1) {
      newItem.push(item);
    } else {
      newItem.splice(currIndex, 1);
    }

    setCheckedItems(newItem);
    // console.log(newItem);
  };

  console.log(checkedItem);

  const rightBox = () => {
    // console.log("move right");
    setRightdata(rightData.concat(checkedArray(leftData, checkedItem)));
    setLeftData(filterArray(leftData, checkedItem));
    setCheckedItems(
      filterArray(checkedItem, checkedArray(leftData, checkedItem))
    );
  };

  const leftBox = () => {
    // console.log("move left");
    setLeftData(leftData.concat(checkedArray(rightData, checkedItem)));
    setRightdata(filterArray(rightData, checkedItem));
    setCheckedItems(
      filterArray(checkedItem, checkedArray(rightData, checkedItem))
    );
  };

  return (
    <div className="App">
      <List data={leftData} handleToggle={handleToggle} />
      <Button rightBox={rightBox} leftBox={leftBox} />
      <List data={rightData} handleToggle={handleToggle} />
    </div>
  );
}
