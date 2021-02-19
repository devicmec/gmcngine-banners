import React, { FC } from "react";
import BannerCard from "../../../../shared/components/BannerCard";
import "./styles.css";
import { IChild } from "../../../../shared/types/cases/children";
import { no_photo_found } from "../../../../shared/utils/helpers";
import { useTranslation } from "react-i18next";

type Props = {
  childData: IChild;
};

const SmallPortraitChildCard: FC<Props> = ({ childData }) => {
  const { t } = useTranslation("translation");
  const smallPortraitChildCardDimensions = {
    width: "7.986in",
    height: "1.5in",
  };

  return (
    <BannerCard dimensions={smallPortraitChildCardDimensions}>
      <div className="mcp-sm-card-content-wrapper">
        <div className="mcp-sm-image-wrapper">
          <img
            src={childData.images[0] || no_photo_found}
            className="mcp-sm-child-image"
            alt="medium-child-card"
          />
        </div>
        <div className="mcp-sm-card-details-container">
          <h2>{childData.fullName}</h2>
          <div className="mcp-sm-card-details-table">
            <div className="mcp-sm-child-card-column">
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">
                  {t("labels.currentAge")}
                </p>
                <p className="mcp-sm-child-card-info">
                  {childData.age || t("information.unknown")}
                </p>
              </div>
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">{t("labels.sex")}</p>
                <p className="mcp-sm-child-card-info">
                  {childData.sex || t("information.unknown")}
                </p>
              </div>
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">{t("labels.height")}</p>
                <p className="mcp-sm-child-card-info">
                  {childData.height || t("information.unknown")}{" "}
                  {childData.heightUnit}
                </p>
              </div>
            </div>
            <div className="mcp-sm-child-card-column">
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">{t("labels.weight")}</p>
                <p className="mcp-sm-child-card-info">
                  {childData.weight || t("information.unknown")}{" "}
                  {childData.weightUnit}
                </p>
              </div>
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">
                  {t("labels.eyeColor")}
                </p>
                <p className="mcp-sm-child-card-info">
                  {childData.eyeColor || t("information.unknown")}
                </p>
              </div>
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">
                  {t("labels.hairColor")}
                </p>
                <p className="mcp-sm-child-card-info">
                  {childData.hairColor || t("information.unknown")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerCard>
  );
};

export default SmallPortraitChildCard;
