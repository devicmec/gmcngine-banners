import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";
import "./styles.css";

type Props = {
  childData: IChild;
  caseData: ICase;
};

const SingleChildLandscapeDetails: FC<Props> = ({ childData, caseData }) => {
  const { t } = useTranslation("translation");
  return (
    <div className="scl-details-table">
      <div className="scl-row">
        <p className="scl-label">{t("labels.missingDate")}</p>
        <p className="scl-child-info">{caseData.missingDate}</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">{t("labels.location")}</p>
        <p className="scl-child-info">
          {caseData.city || t("information.unknown")},{" "}
          {caseData.state || t("information.unknown")}
        </p>
      </div>
      <div className="scl-row">
        <p className="scl-label">{t("labels.birthdate")}</p>
        <p className="scl-child-info">
          {childData.birthDate || t("information.unknown")}
        </p>
      </div>
      <div className="scl-row">
        <p className="scl-label">{t("labels.currentAge")}</p>
        <p className="scl-child-info">
          {childData.age || t("information.unknown")}
        </p>
      </div>
      <div className="scl-row">
        <p className="scl-label">{t("labels.sex")}</p>
        <p className="scl-child-info">
          {childData.sex || t("information.unknown")}
        </p>
      </div>
      <div className="scl-row">
        <p className="scl-label">{t("labels.height")}</p>
        <p className="scl-child-info">
          {childData.height || t("information.unknown")} {childData.heightUnit}
        </p>
      </div>
      <div className="scl-row">
        <p className="scl-label">{t("labels.weight")}</p>
        <p className="scl-child-info">
          {childData.weight || t("information.unknown")} {childData.weightUnit}
        </p>
      </div>
      <div className="scl-row">
        <p className="scl-label">{t("labels.eyeColor")}</p>
        <p className="scl-child-info">
          {childData.eyeColor || t("information.unknown")}
        </p>
      </div>
      <div className="scl-row">
        <p className="scl-label">{t("labels.hairColor")}</p>
        <p className="scl-child-info">
          {childData.hairColor || t("information.unknown")}
        </p>
      </div>
      <div className="scl-row">
        <p className="scl-label">{t("labels.country")}</p>
        <p className="scl-child-info">{caseData.country}</p>
      </div>
    </div>
  );
};

export default SingleChildLandscapeDetails;
