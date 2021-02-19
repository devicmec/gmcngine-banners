import React, { FC } from "react";
import "./styles.css";
import SingleChildLandscapeDetails from "../SingleChildLandscapeDetails";
import SingleChildLandscapeHeadline from "../SingleChildLandscapeHeadline";
import AbductorsCard from "../../../../shared/components/AbductorsCard";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";
import { useTranslation } from "react-i18next";

type Props = {
  caseData: ICase;
};

const SingleChildLandscapeBody: FC<Props> = ({ caseData }) => {
  const { t } = useTranslation("translation");
  const childSelected: IChild = caseData.children[0];

  return (
    <div className="scl-body-container">
      <div className="scl-upper-section">
        <SingleChildLandscapeHeadline
          childData={childSelected}
          hasAbductors={Boolean(caseData.abductors.length)}
        />
        <SingleChildLandscapeDetails
          childData={childSelected}
          caseData={caseData}
        />

        {caseData.abductors.length ? (
          <div className="scl-abductors-wrapper">
            <h4>{t("labels.companions")}</h4>
            {caseData.abductors.map((abductor, index) => (
              <AbductorsCard
                bannerOrientation="landscape"
                abductorData={abductor}
                key={abductor.abductorId + index}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className="scl-banner-title">
        <h2>{childSelected.fullName}</h2>
        <h3>
          {t("labels.missingFrom")} {caseData.city || t("information.unknown")},{" "}
          {caseData.state || t("information.unknown")}
        </h3>
      </div>
      <div className="scl-circumstances">
        <p>{caseData.circumstances}</p>
      </div>
    </div>
  );
};

export default SingleChildLandscapeBody;
