import React, { FC } from "react";
import { IChild } from "../../../../shared/types/cases/children";
import "./styles.css";
import { no_photo_found } from "../../../../shared/utils/helpers";

type Props = {
  childData: IChild;
  hasAbductors: boolean;
};

const SingleChildLandscapeHeadline: FC<Props> = ({
  childData,
  hasAbductors,
}) => {
  console.log(childData.images);
  return (
    <div className="scl-images-container">
      <img
        src={childData.images[0] || no_photo_found}
        alt="childPhotoLeft"
        className="scl-child-image"
      />
      {childData.images[1] && !hasAbductors ? (
        <img
          src={childData.images[1]}
          alt="childPhotoRight"
          className="scl-child-image"
        />
      ) : null}
    </div>
  );
};

export default SingleChildLandscapeHeadline;
