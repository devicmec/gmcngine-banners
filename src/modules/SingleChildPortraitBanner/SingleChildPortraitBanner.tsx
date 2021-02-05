import * as React from "react";
import "./styles/single-child-portrait-styles.css";
import BannerHeader from "../../shared/BannerHeader/BannerHeader";
import BannerFooter from "../../shared/BannerFooter/BannerFooter";
import SingleChildPortraitDetails from "./components/SingleChildPortraitDetails";
import { useReactToPrint } from "react-to-print";

const SingleChildPortraitBanner = () => {
  const componentRef = React.useRef(null);
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <>
      <div className="scp-container" ref={componentRef}>
        <BannerHeader />
        <SingleChildPortraitDetails />
        <BannerFooter />
      </div>
      <button
        onClick={handlePrint}
        style={{
          marginLeft: "100px",
          backgroundColor: "green",
          border: "0px",
          padding: "20px",
          color: "white",
          fontSize: "30px",
        }}
      >
        Print
      </button>
    </>
  );
};

export default SingleChildPortraitBanner;
