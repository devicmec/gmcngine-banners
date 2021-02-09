import React from "react";
import childPhotoLeft from "../../../images/childPhotoLeft.png";
import AbductorsCard from "../../../shared/components/AbductorsCard/AbductorsCard";
import "../styles/single-child-portrait-abductors-headline-styles.css";

const SingleChildPortraitHeadline = () => {
  return (
    <div className="scpa-headline-container">
      <img
        src={childPhotoLeft}
        alt="childPhotoLeft"
        className="scpa-child-image"
      />
      <div className="scpa-abductors-container">
        <h4>Companions</h4>
        <AbductorsCard bannerOrientation="portrait" />
        <AbductorsCard bannerOrientation="portrait" />
      </div>
    </div>
  );
};

export default SingleChildPortraitHeadline;
