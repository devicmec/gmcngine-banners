import React, { useRef } from "react";
import "./styles.css";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import { useReactToPrint } from "react-to-print";
import SingleChildPortraitBody from "./components/SingleChildPortraitBody";

const SingleChildPortraitBanner = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <>
      <div className="scp-container" ref={componentRef}>
        <BannerHeader bannerColor="red" pageOrientation="portrait" />
        <SingleChildPortraitBody />
        <BannerFooter pageOrientation="portrait" />
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
