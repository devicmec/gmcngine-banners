import React, { FC } from "react";
import BannerCard from "../../../../shared/components/BannerCard";
import "./styles.css";
import { IChild } from "../../../../shared/types/cases/children";
import { no_photo_found } from "../../../../shared/utils/helpers";

type Props = {
  childData: IChild;
};

const MediumPortraitChildCard: FC<Props> = ({ childData }) => {
  const mediumPortraitChildCardDimensions = {
    width: "7.986in",
    height: "1.83in",
  };

  return (
    <BannerCard dimensions={mediumPortraitChildCardDimensions}>
      <div className="mcp-md-card-content-wrapper">
        <div className="mcp-md-image-wrapper">
          <img
            src={childData.images[0] || no_photo_found}
            className="mcp-md-child-image"
            alt="medium-child-card"
          />
        </div>
        <div className="mcp-md-card-details-container">
          <h2>{childData.fullName}</h2>
          <div className="mcp-md-card-details-table">
            <div className="mcp-md-child-card-column">
              <div className="mcp-md-child-card-row">
                <p className="mcp-md-child-card-label">Current Age:</p>
                <p className="mcp-md-child-card-info">
                  {childData.age || "Unknown"}
                </p>
              </div>
              <div className="mcp-md-child-card-row">
                <p className="mcp-md-child-card-label">Sex:</p>
                <p className="mcp-md-child-card-info">
                  {childData.sex || "Unknown"}
                </p>
              </div>
              <div className="mcp-md-child-card-row">
                <p className="mcp-md-child-card-label">Height:</p>
                <p className="mcp-md-child-card-info">
                  {childData.height || "Unknown"} {childData.heightUnit}
                </p>
              </div>
            </div>
            <div className="mcp-md-child-card-column">
              <div className="mcp-md-child-card-row">
                <p className="mcp-md-child-card-label">Weight:</p>
                <p className="mcp-md-child-card-info">
                  {childData.weight || "Unknown"} {childData.weightUnit}
                </p>
              </div>
              <div className="mcp-md-child-card-row">
                <p className="mcp-md-child-card-label">Eye Color:</p>
                <p className="mcp-md-child-card-info">
                  {childData.eyeColor || "Unknown"}
                </p>
              </div>
              <div className="mcp-md-child-card-row">
                <p className="mcp-md-child-card-label">Hair Color:</p>
                <p className="mcp-md-child-card-info">
                  {childData.hairColor || "Unknown"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerCard>
  );
};

export default MediumPortraitChildCard;
