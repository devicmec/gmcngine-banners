import React from "react";
import "../styles/multiple-child-portrait-headline-styles.css";
import MediumChildCard from "./MediumChildCard";

const MultipleChildPortraitHeadline = () => {
  return (
    <div className="mcp-headline-container">
      <MediumChildCard />
      <MediumChildCard />
      <MediumChildCard />
    </div>
  );
};

export default MultipleChildPortraitHeadline;
