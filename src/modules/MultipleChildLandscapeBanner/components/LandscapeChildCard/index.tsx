import React, { FC } from "react";
import BannerCard from "../../../../shared/components/BannerCard";
import "./styles.css";
import { IChild } from "../../../../shared/types/cases/children";
import { no_photo_found } from "../../../../shared/utils/helpers";
import { useTranslation } from "react-i18next";

type Props = {
  childrenAmount: number;
  childData: IChild;
};

const LandscapeChildCard: FC<Props> = ({ childrenAmount, childData }) => {
  const { t } = useTranslation("translation");
  const landscapeChildCardDimensions = {
    width: childrenAmount <= 3 ? "3.25in" : "2.5in",
    height: "3.7in",
  };

  return (
    <BannerCard dimensions={landscapeChildCardDimensions}>
      <div className="mcl-card-content-wrapper">
        <div className="mcl-image-wrapper">
          <img
            src={childData.images[0] || no_photo_found}
            className="mcl-child-image"
            alt="medium-child-card"
          />
        </div>
        <div className="mcl-card-details-container">
          <h2>{childData.fullName}</h2>
          <div>
            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">{t("labels.currentAge")}</p>
              <p className="mcl-child-card-info">
                {childData.age || t("information.unknown")}
              </p>
            </div>
            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">{t("labels.sex")}</p>
              <p className="mcl-child-card-info">
                {childData.sex || t("information.unknown")}
              </p>
            </div>
            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">{t("labels.height")}</p>
              <p className="mcl-child-card-info">
                {childData.height || t("information.unknown")}{" "}
                {childData.heightUnit}
              </p>
            </div>

            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">{t("labels.weight")}</p>
              <p className="mcl-child-card-info">
                {childData.weight || t("information.unknown")}{" "}
                {childData.weightUnit}
              </p>
            </div>
          </div>
        </div>
      </div>
    </BannerCard>
  );
};

export default LandscapeChildCard;
