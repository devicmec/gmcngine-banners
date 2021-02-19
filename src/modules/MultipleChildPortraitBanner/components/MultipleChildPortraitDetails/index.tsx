import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { ICase } from "../../../../shared/types/cases/case";
import "./styles.css";

type Props = {
  caseData: ICase;
};

const MultipleChildPortraitDetails: FC<Props> = ({ caseData }) => {
  const { t } = useTranslation("translation");

  return (
    <div className="mcp-details-container">
      <div className="mcp-banner-details">
        <div className="mcp-date-location-container">
          <div className="mcp-details-column">
            <div className="mcp-details-row">
              <p className="mcp-details-label-missingDate">
                {t("labels.missingDate")}
              </p>
              <p className="mcp-details-children-info">
                {caseData.missingDate}
              </p>
            </div>
          </div>
          <div className="mcp-details-column">
            <div className="mcp-details-row">
              <p className="mcp-details-label-location">
                {t("labels.location")}
              </p>
              <p className="mcp-details-children-info">
                {caseData.city || t("information.unknown")},{" "}
                {caseData.state || t("information.unknown")}
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
