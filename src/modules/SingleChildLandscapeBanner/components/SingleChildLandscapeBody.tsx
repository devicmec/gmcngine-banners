import React from "react";
import "../styles/single-child-landscape-body-styles.css";
import SingleChildLandscapeDetails from "./SingleChildLandscapeDetails";
import SingleChildLandscapePicturesHeadline from "./SingleChildLandscapePicturesHeadline";
import AbductorsCard from "../../../shared/components/AbductorsCard/AbductorsCard";

const SingleChildLandscapeBody = () => {
  return (
    <div className="scl-body-container">
      <div className="scl-upper-section">
        <SingleChildLandscapePicturesHeadline />
        <SingleChildLandscapeDetails />

        <div className="scl-abductors-wrapper">
          <h4>Companions</h4>
          <AbductorsCard bannerOrientation="landscape" />
          <AbductorsCard bannerOrientation="landscape" />
        </div>
      </div>
      <div className="scl-banner-title">
        <h2>Ekaterina Lisitsa</h2>
        <h3>Missing from: Sacramento, CA</h3>
      </div>
      <div className="scl-circumstances">
        <p>
          Ekaterina was supposed to meet with her boyfriend at a local bar,
          however she never arrive to the date. She was wearing a hot pink dress
          with black high heels and heavy makeup.
        </p>
      </div>
    </div>
  );
};

export default SingleChildLandscapeBody;
