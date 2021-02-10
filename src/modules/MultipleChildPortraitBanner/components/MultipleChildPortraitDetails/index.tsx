import React from "react";
import "./styles.css";

const MultipleChildPortraitDetails = () => {
  return (
    <div className="mcp-details-container">
      <div className="mcp-banner-details">
        <div className="mcp-date-location-container">
          <div className="mcp-date-column">
            <div className="mcp-details-row">
              <p className="mcp-details-label">Missing Date:</p>
              <p className="mcp-details-children-info">Aug 13, 2020</p>
            </div>
          </div>
          <div className="mcp-location-column">
            <div className="mcp-details-row">
              <p className="mcp-details-label">Location:</p>
              <p className="mcp-details-children-info">Sacramento, CA</p>
            </div>
          </div>
        </div>
        <div className="mcp-circumstances">
          <p>
            Ekaterina was supposed to meet with her boyfriend at a local bar,
            however she never arrive to the date. She was wearing a hot pink
            dress with black high heels and heavy makeup.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultipleChildPortraitDetails;
