import React, { useState } from "react";
import "./Block.css";

function Block({ initialColor }) {

    const [color, setColor] = useState("#F0FFFF"); // Initial color (green)

    // Function to change the color when the block is clicked
  const handleClick = () => {
    const newColor = color === "#F0FFFF" ? "#FFB6C1" : "#F0FFFF"; // Toggle between green and red
    setColor(newColor);
  };

    return (
    <div
      className="block"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
}

export default Block;