import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";
import "./styles.css";

type Props = {
  childData: IChild;
  caseData: ICase;
};

const SingleChildLandscapeAbductorsDetails: FC<Props> = ({
  childData,
  caseData,
}) => {
  const { t } = useTranslation("translation");

  return (
    <div className="scla-details-table">
      <div className="scla-row">
        <p className="scla-label">{t("labels.missingDate")}</p>
        <p className="scla-child-info">{caseData.missingDate}</p>
      </div>
      <div className="scla-row">
        <p className="scla-label">{t("labels.location")}</p>
        <p className="scla-child-info">
          {caseData.city || t("information.unknown")},{" "}
          {caseData.state || t("information.unknown")}
        </p>
      </div>
      <div className="scla-row">
        <p className="scla-label">{t("labels.birthdate")}</p>
        <p className="scla-child-info">
          {childData.birthDate || t("information.unknown")}
        </p>
      </div>
      <div className="scla-row">
        <p className="scla-label">{t("labels.currentAge")}</p>
        <p className="scla-child-info">
          {childData.age || t("information.unknown")}
        </p>
      </div>
      <div className="scla-row">
        <p className="scla-label">{t("labels.sex")}</p>
        <p className="scla-child-info">
          {childData.sex || t("information.unknown")}
        </p>
      </div>
      <div className="scla-row">
        <p className="scla-label">{t("labels.height")}</p>
        <p className="scla-child-info">
          {childData.height || t("information.unknown")} {childData.heightUnit}
        </p>
      </div>
      <div className="scla-row">
        <p className="scla-label">{t("labels.weight")}</p>
        <p className="scla-child-info">
          {childData.weight || t("information.unknown")} {childData.weightUnit}
        </p>
      </div>
      <div className="scla-row">
        <p className="scla-label">{t("labels.eyeColor")}</p>
        <p className="scla-child-info">
          {childData.eyeColor || t("information.unknown")}
        </p>
      </div>
      <div className="scla-row">
        <p className="scla-label">{t("labels.hairColor")}</p>
        <p className="scla-child-info">
          {childData.hairColor || t("information.unknown")}
        </p>
      </div>
      <div className="scla-row">
        <p className="scla-label">{t("labels.country")}</p>
        <p className="scla-child-info">{caseData.country}</p>
      </div>
    </div>
  );
};

export default SingleChildLandscapeAbductorsDetails;
