import React, { FC } from "react";
import "./styles.css";
import SingleChildLandscapeDetails from "../SingleChildLandscapeDetails";
import SingleChildLandscapeHeadline from "../SingleChildLandscapeHeadline";
import AbductorsCard from "../../../../shared/components/AbductorsCard";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";

type Props = {
  caseData: ICase;
  childId?: string;
};

const SingleChildLandscapeBody: FC<Props> = ({ caseData, childId }) => {
  const getChild = () => {
    return childId
      ? caseData.children.find(child => child.childId === childId) ||
          caseData.children[0]
      : caseData.children[0];
  };

  const childSelected: IChild = getChild();

  return (
    <div className="scl-body-container">
      <div className="scl-upper-section">
        <SingleChildLandscapeHeadline
          childData={childSelected}
          hasAbductors={Boolean(caseData.abductors.length)}
        />
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
          Missing from: {caseData.city || "Unknown"}, {caseData.state}
        </h3>
      </div>
      <div className="scl-circumstances">
        <p>{caseData.circumstances}</p>
      </div>
    </div>
  );
};

export default SingleChildLandscapeBody;
