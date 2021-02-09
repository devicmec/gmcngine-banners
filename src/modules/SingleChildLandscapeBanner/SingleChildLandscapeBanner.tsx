import React, { useRef } from "react";
import BannerHeader from "../../shared/components/BannerHeader/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter/BannerFooter";
import { useReactToPrint } from "react-to-print";
import SingleChildLandscapeBody from "./components/SingleChildLandscapeBody";

const SingleChildLandscapeBanner = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => componentRef.current });
  return (
    <>
      <div className="scp-container" ref={componentRef}>
        <BannerHeader bannerColor="red" pageOrientation="landscape" />
        <SingleChildLandscapeBody />
        <BannerFooter pageOrientation="landscape" />
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

export default SingleChildLandscapeBanner;
