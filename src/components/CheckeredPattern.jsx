import React, { useState } from "react";
import Block from "./Block";
import "./CheckeredPattern.css";

function CheckeredPattern() {
  const gridSize = 20;
  const width = gridSize / 2; // Wanted the width to be half the length
  // Generate blocks for odd and even rows to create a dense pattern
  const oddRowBlocks = Array.from({ length: width }, (_, index) => {
    const initialColor = index % 2 === 0 ? "#4caf50" : "#f44336"; // Alternate colors
    return <Block key={`odd-${index}`} initialColor={initialColor} />;
  });

  const evenRowBlocks = Array.from({ length: width }, (_, index) => {
    const initialColor = index % 2 === 0 ? "#f44336" : "#4caf50"; // Alternate colors
    return <Block key={`even-${index}`} initialColor={initialColor} />;
  });

  // Render rows with appropriate offsets
  return (
    <div className="grid-container">
      {Array.from({ length: gridSize }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid-row ${rowIndex % 2 === 0 ? "odd-row" : "even-row"}`}
        >
          {rowIndex % 2 === 0 ? oddRowBlocks : evenRowBlocks}
        </div>
      ))}
    </div>
  );
}

export default CheckeredPattern;