import React, { FC } from "react";
import "./styles.css";
import MediumPortraitChildCard from "../MediumPortraitChildCard";
import { ICase } from "../../../../shared/types/cases/case";
import SmallPortraitChildCard from "../SmallPortraitChildCard";

type Props = {
  caseData: ICase;
};

const MultipleChildPortraitHeadline: FC<Props> = ({ caseData }) => {
  const childrenAmount = caseData.children.length;

  return (
    <div className="mcp-headline-container">
      {childrenAmount <= 3
        ? caseData.children.map((child, index) => (
            <MediumPortraitChildCard
              childData={child}
              key={child.childId + index}
            />
          ))
        : caseData.children.map((child, index) => (
            <SmallPortraitChildCard
              childData={child}
              key={child.childId + index}
            />
          ))}
    </div>
  );
};

export default MultipleChildPortraitHeadline;
