import React, { FC } from "react";
import "./styles.css";
import SingleChildPortraitDetails from "../SingleChildPortraitDetails";
import SingleChildPortraitHeadline from "../SingleChildPortraitHeadline";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";
import { useTranslation } from "react-i18next";
import { getChild } from "../../../../shared/utils/getChildInfo";

type Props = {
  caseData: ICase;
  childId?: string;
};

const SingleChildPortraitBody: FC<Props> = ({ caseData, childId }) => {
  const childSelected: IChild = getChild(caseData.children, childId);
  const { t } = useTranslation("translation");

  return (
    <div className="scp-body-container">
      <div className="scp-banner-headline">
        <SingleChildPortraitHeadline
          caseData={caseData}
          childData={childSelected}
        />

        <div className="scp-banner-title">
          <h2>{childSelected.fullName}</h2>
          <h3>
            {t("labels.missingFrom")}
            {caseData.city || t("information.unknown")},{" "}
            {caseData.state || t("information.unknown")}
          </h3>
        </div>
      </div>

      <div className="scp-banner-details">
        <SingleChildPortraitDetails
          caseData={caseData}
          childData={childSelected}
        />
        <div className="scp-circumstances">
          <p>{caseData.circumstances}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleChildPortraitBody;
