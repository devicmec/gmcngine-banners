import React, { FC } from "react";
import BannerCard from "../BannerCard/BannerCard";
import childAbductor from "../../../images/childAbductor.png";
import "./styles.css";

type Props = {
  bannerOrientation: "portrait" | "landscape";
};

const AbductorsCard: FC<Props> = ({ bannerOrientation }) => {
  const portraitDimensions = {
    width: "4.33in",
    height: "1.55in",
  };
  const landscapeDimensions = {
    width: "3.9in",
    height: "1.55in",
  };

  const cardDimensions =
    bannerOrientation === "portrait" ? portraitDimensions : landscapeDimensions;
  return (
    <BannerCard dimensions={cardDimensions}>
      <div className="banner-abductor-card-content-wrapper">
        <div className="banner-abductor-image-wrapper">
          <img
            src={childAbductor}
            className="banner-abductor-image"
            alt="abductor"
          />
        </div>
        <div className="banner-abductor-details-container">
          <h3>Matthew Young</h3>
          <div className="banner-abductor-row">
            <p className="banner-abductor-label">Current Age:</p>
            <p className="banner-abductor-info">26</p>
          </div>
          <div className="banner-abductor-row">
            <p className="banner-abductor-label">Sex:</p>
            <p className="banner-abductor-info">Male</p>
          </div>
          <div className="banner-abductor-row">
            <p className="banner-abductor-label">Height:</p>
            <p className="banner-abductor-info">5'10"</p>
          </div>
        </div>
      </div>
    </BannerCard>
  );
};

export default AbductorsCard;
