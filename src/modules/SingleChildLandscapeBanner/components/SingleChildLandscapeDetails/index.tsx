import React, { FC } from "react";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";
import "./styles.css";

type Props = {
  childData: IChild;
  caseData: ICase;
};

const SingleChildLandscapeDetails: FC<Props> = ({ childData, caseData }) => {
  return (
    <div className="scl-details-table">
      <div className="scl-row">
        <p className="scl-label">Missing date:</p>
        <p className="scl-child-info">{caseData.missingDate}</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Location:</p>
        <p className="scl-child-info">
          {caseData.city || "Unknown"}, {caseData.state}
        </p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Birthdate:</p>
        <p className="scl-child-info">{childData.birthDate || "Unknown"}</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Current Age:</p>
        <p className="scl-child-info">{childData.age || "Unknown"}</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Sex:</p>
        <p className="scl-child-info">{childData.sex || "Unknown"}</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Height:</p>
        <p className="scl-child-info">
          {childData.height || "Unknown"} {childData.heightUnit}
        </p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Weigth:</p>
        <p className="scl-child-info">
          {childData.weight || "Unknown"} {childData.weightUnit}
        </p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Eye Color:</p>
        <p className="scl-child-info">{childData.eyeColor || "Unknown"}</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Hair Color:</p>
        <p className="scl-child-info">{childData.hairColor || "Unknown"}</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Country:</p>
        <p className="scl-child-info">{caseData.country}</p>
      </div>
    </div>
  );
};

export default SingleChildLandscapeDetails;
