import React from "react";
import childPhotoLeft from "../../../images/childPhotoLeft.png";
//import childPhotoRight from "../../../images/childPhotoRight.png";
import "../styles/single-child-landscape-pictures-headline-styles.css";

const SingleChildLandscapePicturesHeadline = () => {
  return (
    <div className="scl-images-container">
      <img
        src={childPhotoLeft}
        alt="childPhotoLeft"
        className="scl-child-image"
      />
      {/* <img
        src={childPhotoRight}
        alt="childPhotoRight"
        className="scl-child-image"
      /> */}
    </div>
  );
};

export default SingleChildLandscapePicturesHeadline;
