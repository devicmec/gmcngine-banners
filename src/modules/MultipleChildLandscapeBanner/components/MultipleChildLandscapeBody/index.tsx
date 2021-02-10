import React from "react";
import "./styles.css";
import LandscapeChildCard from "../LandscapeChildCard";

const MultipleChildLandscapeBody = () => {
  return (
    <div className="mcl-body-container">
      <div className="mcl-cards-container">
        <LandscapeChildCard childrenAmount={4} />
        <LandscapeChildCard childrenAmount={4} />
        <LandscapeChildCard childrenAmount={4} />
        <LandscapeChildCard childrenAmount={4} />
      </div>
      <div className="mcl-missing-date-location">
        <div className="mcl-column">
          <div className="mcl-row">
            <p className="mcl-label">Missing date:</p>
            <p className="mcl-child-info">Aug 13, 2020</p>
          </div>
        </div>
        <div className="mcl-column">
          <div className="mcl-row">
            <p className="mcl-label">Location:</p>
            <p className="mcl-child-info">Sacramento, CA</p>
          </div>
        </div>
      </div>
      <div className="mcl-circumstances">
        <p>
          Ekaterina was supposed to meet with her boyfriend at a local bar,
          however she never arrive to the date. She was wearing a hot pink dress
          with black high heels and heavy makeup.
        </p>
      </div>
    </div>
  );
};

export default MultipleChildLandscapeBody;
