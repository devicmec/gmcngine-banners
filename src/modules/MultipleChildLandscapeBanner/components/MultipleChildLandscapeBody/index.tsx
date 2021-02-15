import React, { FC } from "react";
import "./styles.css";
import LandscapeChildCard from "../LandscapeChildCard";
import { ICase } from "../../../../shared/types/cases/case";

type Props = {
  caseData: ICase;
};

const MultipleChildLandscapeBody: FC<Props> = ({ caseData }) => {
  return (
    <div className="mcl-body-container">
      <div className="mcl-cards-container">
        {caseData.children.map((child, index) => (
          <LandscapeChildCard
            key={caseData.caseId + index}
            childrenAmount={caseData.children.length}
            childData={child}
          />
        ))}
      </div>
      <div className="mcl-missing-date-location">
        <div className="mcl-column">
          <div className="mcl-row">
            <p className="mcl-label">Missing date:</p>
            <p className="mcl-child-info">{caseData.missingDate}</p>
          </div>
        </div>
        <div className="mcl-column">
          <div className="mcl-row">
            <p className="mcl-label">Location:</p>
            <p className="mcl-child-info">
              {caseData.city || "Unknown"}, {caseData.state}
            </p>
          </div>
        </div>
      </div>
      <div className="mcl-circumstances">
        <p>{caseData.circumstances}</p>
      </div>
    </div>
  );
};

export default MultipleChildLandscapeBody;
