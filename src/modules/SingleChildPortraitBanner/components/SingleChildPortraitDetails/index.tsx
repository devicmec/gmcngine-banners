import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";
import "./styles.css";

type Props = {
  caseData: ICase;
  childData: IChild;
};

const SingleChildPortraitDetails: FC<Props> = ({ caseData, childData }) => {
  const { t } = useTranslation("translation");
  return (
    <div className="scp-details-table">
      <div className="scp-details-column">
        <div className="scp-row">
          <p className="scp-labels">{t("labels.missingDate")}</p>
          <p className="scp-child-info">
            {caseData.missingDate || t("information.unknown")}
          </p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">{t("labels.location")}</p>
          <p className="scp-child-info">
            {caseData.city || t("information.unknown")},{" "}
            {caseData.state || t("information.unknown")}
          </p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">{t("labels.birthdate")}</p>
          <p className="scp-child-info">
            {childData.birthDate || t("information.unknown")}
          </p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">{t("labels.currentAge")}</p>
          <p className="scp-child-info">
            {childData.age || t("information.unknown")}
          </p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">{t("labels.sex")}</p>
          <p className="scp-child-info">
            {childData.sex || t("information.unknown")}
          </p>
        </div>
      </div>
      <div className="scp-details-column">
        <div className="scp-row">
          <p className="scp-labels">{t("labels.height")}</p>
          <p className="scp-child-info">
            {childData.height || t("information.unknown")}
            {childData.heightUnit}
          </p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">{t("labels.weight")}</p>
          <p className="scp-child-info">
            {childData.weight || t("information.unknown")}{" "}
            {childData.weightUnit}
          </p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">{t("labels.eyeColor")}</p>
          <p className="scp-child-info">
            {childData.eyeColor || t("information.unknown")}
          </p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">{t("labels.hairColor")}</p>
          <p className="scp-child-info">
            {childData.hairColor || t("information.unknown")}
          </p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">{t("labels.country")}</p>
          <p className="scp-child-info">{caseData.country}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleChildPortraitDetails;
