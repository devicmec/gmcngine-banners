import React, { FC } from "react";
import { ICase } from "../../../../shared/types/cases/case";
import "./styles.css";

type Props = {
  caseData: ICase;
};

const MultipleChildPortraitDetails: FC<Props> = ({ caseData }) => {
  return (
    <div className="mcp-details-container">
      <div className="mcp-banner-details">
        <div className="mcp-date-location-container">
          <div className="mcp-date-column">
            <div className="mcp-details-row">
              <p className="mcp-details-label">Missing Date:</p>
              <p className="mcp-details-children-info">
                {caseData.missingDate}
              </p>
            </div>
          </div>
          <div className="mcp-location-column">
            <div className="mcp-details-row">
              <p className="mcp-details-label">Location:</p>
              <p className="mcp-details-children-info">
                {caseData.city}, {caseData.state}
              </p>
            </div>
          </div>
        </div>
        <div className="mcp-circumstances">
          <p>{caseData.circumstances}</p>
        </div>
      </div>
    </div>
  );
};

export default MultipleChildPortraitDetails;
