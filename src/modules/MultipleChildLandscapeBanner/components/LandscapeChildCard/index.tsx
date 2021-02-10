import React, { FC } from "react";
import BannerCard from "../../../../shared/components/BannerCard";
import "./styles.css";
import childPhotoLeft from "../../../../images/childPhotoLeft.png";

type Props = {
  childrenAmount: number;
};

const LandscapeChildCard: FC<Props> = ({ childrenAmount }) => {
  const landscapeChildCardDimensions = {
    width: childrenAmount <= 3 ? "3.25in" : "2.5in",
    height: "4.12in",
  };

  return (
    <BannerCard dimensions={landscapeChildCardDimensions}>
      <div className="mcl-card-content-wrapper">
        <div className="mcl-image-wrapper">
          <img
            src={childPhotoLeft}
            className="mcl-child-image"
            alt="medium-child-card"
          />
        </div>
        <div className="mcl-card-details-container">
          <h2>Ekaterina Lisitsa</h2>
          <div>
            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">Current Age:</p>
              <p className="mcl-child-card-info">22</p>
            </div>
            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">Sex:</p>
              <p className="mcl-child-card-info">Female</p>
            </div>
            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">Height:</p>
              <p className="mcl-child-card-info">5'3</p>
            </div>

            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">Weight:</p>
              <p className="mcl-child-card-info">130 pounds</p>
            </div>
            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">Eye Color:</p>
              <p className="mcl-child-card-info">Brown</p>
            </div>
            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">Hair Color:</p>
              <p className="mcl-child-card-info">Brown</p>
            </div>
          </div>
        </div>
      </div>
    </BannerCard>
  );
};

export default LandscapeChildCard;
