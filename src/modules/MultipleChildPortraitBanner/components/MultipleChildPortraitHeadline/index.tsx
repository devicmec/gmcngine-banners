import React from "react";
import "./styles.css";
import MediumPortraitChildCard from "../MediumPortraitChildCard";

const MultipleChildPortraitHeadline = () => {
  return (
    <div className="mcp-headline-container">
      <MediumPortraitChildCard />
      <MediumPortraitChildCard />
      <MediumPortraitChildCard />
    </div>
  );
};

export default MultipleChildPortraitHeadline;
