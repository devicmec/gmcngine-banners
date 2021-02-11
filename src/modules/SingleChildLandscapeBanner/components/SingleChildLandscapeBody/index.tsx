import React, { FC } from "react";
import "./styles.css";
import SingleChildLandscapeDetails from "../SingleChildLandscapeDetails";
import SingleChildLandscapeHeadline from "../SingleChildLandscapeHeadline";
import AbductorsCard from "../../../../shared/components/AbductorsCard";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";

type Props = {
  caseData: ICase;
};

const SingleChildLandscapeBody: FC<Props> = ({ caseData }) => {
  const childSelected: IChild = caseData.children[0];

  return (
    <div className="scl-body-container">
      <div className="scl-upper-section">
        <SingleChildLandscapeHeadline childData={childSelected} />
        <SingleChildLandscapeDetails
          childData={childSelected}
          caseData={caseData}
        />

        {caseData.abductors.length ? (
          <div className="scl-abductors-wrapper">
            <h4>Companions</h4>
            {caseData.abductors.map((abductor, index) => (
              <AbductorsCard
                bannerOrientation="landscape"
                abductorData={abductor}
                key={abductor.abductorId + index}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className="scl-banner-title">
        <h2>{childSelected.fullName}</h2>
        <h3>
          Missing from: {caseData.city}, {caseData.state}
        </h3>
      </div>
      <div className="scl-circumstances">
        <p>{caseData.circumstances}</p>
      </div>
    </div>
  );
};

export default SingleChildLandscapeBody;
