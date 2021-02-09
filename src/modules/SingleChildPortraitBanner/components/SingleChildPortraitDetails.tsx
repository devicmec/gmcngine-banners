import "../styles/single-child-portrait-details-styles.css";

const SingleChildPortraitDetails = () => {
  return (
    <div className="scp-details-table">
      <div className="scp-details-column">
        <div className="scp-row">
          <p className="scp-labels">Missing date:</p>
          <p className="scp-child-info">Aug 13, 2020</p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Location:</p>
          <p className="scp-child-info">Sacramento, CA</p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Birthdate:</p>
          <p className="scp-child-info">Sep 19, 2006</p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Current Age:</p>
          <p className="scp-child-info">22</p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Sex:</p>
          <p className="scp-child-info">Female</p>
        </div>
      </div>
      <div className="scp-details-column">
        <div className="scp-row">
          <p className="scp-labels">Height:</p>
          <p className="scp-child-info">5'3"</p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Weigth:</p>
          <p className="scp-child-info">130 pounds</p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Eye Color:</p>
          <p className="scp-child-info">Brown</p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Hair Color:</p>
          <p className="scp-child-info">Brown</p>
        </div>
        <div className="scp-row">
          <p className="scp-labels">Country:</p>
          <p className="scp-child-info">United States</p>
        </div>
      </div>
    </div>
  );
};

export default SingleChildPortraitDetails;
