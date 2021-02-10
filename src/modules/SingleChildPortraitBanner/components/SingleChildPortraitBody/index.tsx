import "./styles.css";
import SingleChildPortraitDetails from "../SingleChildPortraitDetails";
import SingleChildPortraitHeadline from "../SingleChildPortraitHeadline";

const SingleChildPortraitBody = () => {
  return (
    <div className="scp-body-container">
      <div className="scp-banner-headline">
        <SingleChildPortraitHeadline />

        <div className="scp-banner-title">
          <h2>Ekaterina Lisitsa</h2>
          <h3>Missing from: Sacramento, CA</h3>
        </div>
      </div>

      <div className="scp-banner-details">
        <SingleChildPortraitDetails />
        <div className="scp-circumstances">
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

export default SingleChildPortraitBody;
