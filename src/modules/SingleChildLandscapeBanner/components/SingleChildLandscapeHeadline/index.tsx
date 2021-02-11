import React, { FC } from "react";
import { IChild } from "../../../../shared/types/cases/children";
import "./styles.css";

type Props = {
  childData: IChild;
};

const SingleChildLandscapeHeadline: FC<Props> = ({ childData }) => {
  return (
    <div className="scl-images-container">
      <img
        src={childData.images[0]}
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
