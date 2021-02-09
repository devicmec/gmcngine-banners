import React from "react";
import "../styles/single-child-landscape-details-styles.css";

const SingleChildLandscapeDetails = () => {
  return (
    <div className="scl-details-table">
      <div className="scl-row">
        <p className="scl-label">Missing date:</p>
        <p className="scl-child-info">Aug 13, 2020</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Location:</p>
        <p className="scl-child-info">Sacramento, CA</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Birthdate:</p>
        <p className="scl-child-info">Sep 19, 2006</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Current Age:</p>
        <p className="scl-child-info">22</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Sex:</p>
        <p className="scl-child-info">Female</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Height:</p>
        <p className="scl-child-info">5'3"</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Weigth:</p>
        <p className="scl-child-info">130 pounds</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Eye Color:</p>
        <p className="scl-child-info">Brown</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Hair Color:</p>
        <p className="scl-child-info">Brown</p>
      </div>
      <div className="scl-row">
        <p className="scl-label">Country:</p>
        <p className="scl-child-info">United States</p>
      </div>
    </div>
  );
};

export default SingleChildLandscapeDetails;
