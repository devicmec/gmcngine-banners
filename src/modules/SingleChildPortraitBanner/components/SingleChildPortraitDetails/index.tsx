import React, { FC } from "react";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";
import "./styles.css";

type Props = {
  caseData: ICase;
  childData: IChild;
};

const SingleChildPortraitDetails: FC<Props> = ({ caseData, childData }) => {
  return (
    <div className="scp-details-table">
      <div className="scp-details-column">
        <div className="scp-row">
          <p className="scp-labels">Missing date:</p>
          <p className="scp-child-info">{caseData.missingDate}</p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Location:</p>
          <p className="scp-child-info">
            {caseData.city}, {caseData.state}
          </p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Birthdate:</p>
          <p className="scp-child-info">{childData.birthDate}</p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Current Age:</p>
          <p className="scp-child-info">{childData.age}</p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Sex:</p>
          <p className="scp-child-info">{childData.sex}</p>
        </div>
      </div>
      <div className="scp-details-column">
        <div className="scp-row">
          <p className="scp-labels">Height:</p>
          <p className="scp-child-info">
            {childData.height} {childData.heightUnit}
          </p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Weigth:</p>
          <p className="scp-child-info">
            {childData.weight} {childData.weightUnit}
          </p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Eye Color:</p>
          <p className="scp-child-info">{childData.eyeColor}</p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Hair Color:</p>
          <p className="scp-child-info">{childData.hairColor}</p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Country:</p>
          <p className="scp-child-info">{caseData.country}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleChildPortraitDetails;
