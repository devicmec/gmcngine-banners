import React, { FC } from "react";
import BannerCard from "../../../../shared/components/BannerCard";
import "./styles.css";
import { IChild } from "../../../../shared/types/cases/children";

type Props = {
  childrenAmount: number;
  childData: IChild;
};

const LandscapeChildCard: FC<Props> = ({ childrenAmount, childData }) => {
  const landscapeChildCardDimensions = {
    width: childrenAmount <= 3 ? "3.25in" : "2.5in",
    height: "4.12in",
  };

  return (
    <BannerCard dimensions={landscapeChildCardDimensions}>
      <div className="mcl-card-content-wrapper">
        <div className="mcl-image-wrapper">
          <img
            src={childData.images[0]}
            className="mcl-child-image"
            alt="medium-child-card"
          />
        </div>
        <div className="mcl-card-details-container">
          <h2>{childData.fullName}</h2>
          <div>
            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">Current Age:</p>
              <p className="mcl-child-card-info">{childData.age}</p>
            </div>
            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">Sex:</p>
              <p className="mcl-child-card-info">{childData.sex}</p>
            </div>
            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">Height:</p>
              <p className="mcl-child-card-info">
                {childData.height} {childData.heightUnit}
              </p>
            </div>

            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">Weight:</p>
              <p className="mcl-child-card-info">
                {childData.weight} {childData.weightUnit}
              </p>
            </div>
            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">Eye Color:</p>
              <p className="mcl-child-card-info">{childData.eyeColor}</p>
            </div>
            <div className="mcl-child-card-row">
              <p className="mcl-child-card-label">Hair Color:</p>
              <p className="mcl-child-card-info">{childData.hairColor}</p>
            </div>
          </div>
        </div>
      </div>
    </BannerCard>
  );
};

export default LandscapeChildCard;
