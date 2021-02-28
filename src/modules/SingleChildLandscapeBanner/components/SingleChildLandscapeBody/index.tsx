import React, { FC } from "react";
import "./styles.css";
import SingleChildLandscapeDetails from "../SingleChildLandscapeDetails";
import SingleChildLandscapeHeadline from "../SingleChildLandscapeHeadline";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";
import { useTranslation } from "react-i18next";
import { getChild } from "../../../../shared/utils/getChildInfo";

type Props = {
  caseData: ICase;
  childId?: string;
};

const SingleChildLandscapeBody: FC<Props> = ({ caseData, childId }) => {
  const { t } = useTranslation("translation");
  const childSelected: IChild = getChild(caseData.children, childId);

  return (
    <div className="scl-body-container">
      <div className="scl-upper-section">
        <div className="scl-pictures-header-container">
          <SingleChildLandscapeHeadline
            childData={childSelected}
            hasAbductors={Boolean(caseData.abductors.length)}
          />
          <div className="scl-banner-title">
            <h2>{childSelected.fullName}</h2>
            <h3>
              {t("labels.missingFrom")}{" "}
              {caseData.city || t("information.unknown")},{" "}
              {caseData.state || t("information.unknown")}
            </h3>
          </div>
        </div>
        <SingleChildLandscapeDetails
          childData={childSelected}
          caseData={caseData}
        />
      </div>

      <div className="scl-circumstances">
        <p>{caseData.circumstances}</p>
      </div>
    </div>
  );
};

export default SingleChildLandscapeBody;
