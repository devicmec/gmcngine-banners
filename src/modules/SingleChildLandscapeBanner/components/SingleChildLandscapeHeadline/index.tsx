import React from "react";
import childPhotoLeft from "../../../../images/childPhotoLeft.png";
//import childPhotoRight from "../../../../images/childPhotoRight.png";
import "./styles.css";

const SingleChildLandscapeHeadline = () => {
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

export default SingleChildLandscapeHeadline;
