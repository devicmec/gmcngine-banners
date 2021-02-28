import React, { FC } from "react";
import "./styles.css";
import SingleChildLandscapeHeadline from "../SingleChildLandscapeHeadline";
import AbductorsCard from "../../../../shared/components/AbductorsCard";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";
import { useTranslation } from "react-i18next";
import SingleChildLandscapeAbductorsDetails from "../SingleChildLandscapeAbductorsDetails";
import { getChild } from "../../../../shared/utils/getChildInfo";

type Props = {
  caseData: ICase;
  childId?: string;
};

const SingleChildLandscapeAbductorsBody: FC<Props> = ({
  caseData,
  childId
}) => {
  const { t } = useTranslation("translation");
  const childSelected: IChild = getChild(caseData.children, childId);

  return (
    <div className="scla-body-container">
      <div className="scla-upper-section">
        <SingleChildLandscapeHeadline
          childData={childSelected}
          hasAbductors={Boolean(caseData.abductors.length)}
        />
        <SingleChildLandscapeAbductorsDetails
          childData={childSelected}
          caseData={caseData}
        />
        <div className="scla-abductors-wrapper">
          <h4>{t("labels.companions")}</h4>
          {caseData.abductors.map((abductor, index) => (
            <AbductorsCard
              bannerOrientation="landscape"
              abductorData={abductor}
              key={abductor.abductorId + index}
            />
          ))}
        </div>
      </div>
      <div className="scla-banner-title">
        <h2>{childSelected.fullName}</h2>
        <h3>
          {t("labels.missingFrom")} {caseData.city || t("information.unknown")},{" "}
          {caseData.state || t("information.unknown")}
        </h3>
      </div>
      <div className="scla-circumstances">
        <p>{caseData.circumstances}</p>
      </div>
    </div>
  );
};

export default SingleChildLandscapeAbductorsBody;
