import React, { FC } from "react";
import BannerCard from "../../../../shared/components/BannerCard";
import "./styles.css";
import { IChild } from "../../../../shared/types/cases/children";

type Props = {
  childData: IChild;
};

const SmallPortraitChildCard: FC<Props> = ({ childData }) => {
  const smallPortraitChildCardDimensions = {
    width: "7.986in",
    height: "1.5in",
  };

  return (
    <BannerCard dimensions={smallPortraitChildCardDimensions}>
      <div className="mcp-sm-card-content-wrapper">
        <div className="mcp-sm-image-wrapper">
          <img
            src={childData.images[0]}
            className="mcp-sm-child-image"
            alt="medium-child-card"
          />
        </div>
        <div className="mcp-sm-card-details-container">
          <h2>{childData.fullName}</h2>
          <div className="mcp-sm-card-details-table">
            <div className="mcp-sm-child-card-column">
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">Current Age:</p>
                <p className="mcp-sm-child-card-info">{childData.age}</p>
              </div>
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">Sex:</p>
                <p className="mcp-sm-child-card-info">{childData.sex}</p>
              </div>
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">Height:</p>
                <p className="mcp-sm-child-card-info">
                  {childData.height} {childData.heightUnit}
                </p>
              </div>
            </div>
            <div className="mcp-sm-child-card-column">
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">Weight:</p>
                <p className="mcp-sm-child-card-info">
                  {childData.weight} {childData.weightUnit}
                </p>
              </div>
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">Eye Color:</p>
                <p className="mcp-sm-child-card-info">{childData.eyeColor}</p>
              </div>
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">Hair Color:</p>
                <p className="mcp-sm-child-card-info">{childData.hairColor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerCard>
  );
};

export default SmallPortraitChildCard;
