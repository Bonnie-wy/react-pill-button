import React, { useState } from "react";
import "./App.css";
import Pill from "./components/Pill";

function App() {
  const [isSelected, setIsSelected] = useState([]);

  const clickHandler = (button) => {
    return isSelected.includes(button)
      ? setIsSelected(isSelected.filter((pill) => pill !== button))
      : setIsSelected([...isSelected, button]);
  };

  return (
    <div className="App">
      <div className="section">
        <h2>Pill button with icons</h2>
        <Pill
          label="button1"
          onClick={() => clickHandler("button1")}
          isSelected={isSelected.includes("button1")}
          hasIcons={true}
        />
      </div>
      <div className="section">
        <h2>Pill button without icons</h2>
        <Pill
          label="button2"
          onClick={() => clickHandler("button2")}
          isSelected={isSelected.includes("button2")}
          hasIcons={false}
        />
      </div>
    </div>
  );
}

export default App;
