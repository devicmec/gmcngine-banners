import React, { FC } from "react";
import AbductorsCard from "../../../../shared/components/AbductorsCard";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";
import "./styles.css";

type Props = {
  caseData: ICase;
  childData: IChild;
};

const SingleChildPortraitHeadline: FC<Props> = ({ caseData, childData }) => {
  return (
    <div className="scpa-headline-container">
      <img
        src={childData.images[0]}
        alt="childPhotoLeft"
        className="scpa-child-image"
      />
      {caseData.abductors.length ? (
        <div className="scpa-abductors-container">
          <h4>Companions</h4>
          {caseData.abductors.map((abductor, index) => (
            <AbductorsCard
              bannerOrientation="portrait"
              abductorData={abductor}
              key={abductor.abductorId + index}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SingleChildPortraitHeadline;
