import React from "react";
import BannerCard from "../../../shared/components/BannerCard/BannerCard";
import "../styles/small-child-card-styles.css";
import childPhotoLeft from "../../../images/childPhotoLeft.png";

const SmallChildCard = () => {
  const smallChildCardDimensions = {
    width: "7.986in",
    height: "1.5in",
  };

  return (
    <BannerCard dimensions={smallChildCardDimensions}>
      <div className="mcp-sm-card-content-wrapper">
        <div className="mcp-sm-image-wrapper">
          <img
            src={childPhotoLeft}
            className="mcp-sm-child-image"
            alt="medium-child-card"
          />
        </div>
        <div className="mcp-sm-card-details-container">
          <h2>Ekaterina Lisitsa</h2>
          <div className="mcp-sm-card-details-table">
            <div className="mcp-sm-child-card-column">
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">Current Age:</p>
                <p className="mcp-sm-child-card-info">22</p>
              </div>
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">Sex:</p>
                <p className="mcp-sm-child-card-info">Female</p>
              </div>
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">Height:</p>
                <p className="mcp-sm-child-card-info">5'3</p>
              </div>
            </div>
            <div className="mcp-sm-child-card-column">
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">Weight:</p>
                <p className="mcp-sm-child-card-info">130 pounds</p>
              </div>
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">Eye Color:</p>
                <p className="mcp-sm-child-card-info">Brown</p>
              </div>
              <div className="mcp-sm-child-card-row">
                <p className="mcp-sm-child-card-label">Hair Color:</p>
                <p className="mcp-sm-child-card-info">Brown</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerCard>
  );
};

export default SmallChildCard;
