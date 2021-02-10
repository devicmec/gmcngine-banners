import React from "react";
import BannerCard from "../../../../shared/components/BannerCard";
import "./styles.css";
import childPhotoLeft from "../../../../images/childPhotoLeft.png";

const MediumPortraitChildCard = () => {
  const mediumPortraitChildCardDimensions = {
    width: "7.986in",
    height: "1.83in",
  };

  return (
    <BannerCard dimensions={mediumPortraitChildCardDimensions}>
      <div className="mcp-md-card-content-wrapper">
        <div className="mcp-md-image-wrapper">
          <img
            src={childPhotoLeft}
            className="mcp-md-child-image"
            alt="medium-child-card"
          />
        </div>
        <div className="mcp-md-card-details-container">
          <h2>Ekaterina Lisitsa</h2>
          <div className="mcp-md-card-details-table">
            <div className="mcp-md-child-card-column">
              <div className="mcp-md-child-card-row">
                <p className="mcp-md-child-card-label">Current Age:</p>
                <p className="mcp-md-child-card-info">22</p>
              </div>
              <div className="mcp-md-child-card-row">
                <p className="mcp-md-child-card-label">Sex:</p>
                <p className="mcp-md-child-card-info">Female</p>
              </div>
              <div className="mcp-md-child-card-row">
                <p className="mcp-md-child-card-label">Height:</p>
                <p className="mcp-md-child-card-info">5'3</p>
              </div>
            </div>
            <div className="mcp-md-child-card-column">
              <div className="mcp-md-child-card-row">
                <p className="mcp-md-child-card-label">Weight:</p>
                <p className="mcp-md-child-card-info">130 pounds</p>
              </div>
              <div className="mcp-md-child-card-row">
                <p className="mcp-md-child-card-label">Eye Color:</p>
                <p className="mcp-md-child-card-info">Brown</p>
              </div>
              <div className="mcp-md-child-card-row">
                <p className="mcp-md-child-card-label">Hair Color:</p>
                <p className="mcp-md-child-card-info">Brown</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerCard>
  );
};

export default MediumPortraitChildCard;
