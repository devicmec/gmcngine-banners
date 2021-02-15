import React, { FC } from "react";
import "./styles.css";
import SingleChildPortraitDetails from "../SingleChildPortraitDetails";
import SingleChildPortraitHeadline from "../SingleChildPortraitHeadline";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";

type Props = {
  caseData: ICase;
};

const SingleChildPortraitBody: FC<Props> = ({ caseData }) => {
  const childSelected: IChild = caseData.children[0];

  return (
    <div className="scp-body-container">
      <div className="scp-banner-headline">
        <SingleChildPortraitHeadline
          caseData={caseData}
          childData={childSelected}
        />

        <div className="scp-banner-title">
          <h2>{childSelected.fullName}</h2>
          <h3>
            Missing from: {caseData.city || "Unknown"},
            {caseData.state || "Unknown"}
          </h3>
        </div>
      </div>

      <div className="scp-banner-details">
        <SingleChildPortraitDetails
          caseData={caseData}
          childData={childSelected}
        />
        <div className="scp-circumstances">
          <p>{caseData.circumstances}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleChildPortraitBody;
