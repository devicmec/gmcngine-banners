import React, { useRef } from "react";
import BannerHeader from "../../shared/components/BannerHeader/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter/BannerFooter";
import MultipleChildPortraitHeadline from "./components/MultipleChildPortraitHeadline";
import "./styles/multiple-child-portrait-styles.css";
import MultipleChildPortraitDetails from "./components/MultipleChildPortraitDetails";
import { useReactToPrint } from "react-to-print";

const MultipleChildPortraitBanner = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <>
      <div className="mcp-container" ref={componentRef}>
        <BannerHeader bannerColor="red" pageOrientation="portrait" />
        <MultipleChildPortraitHeadline />
        <MultipleChildPortraitDetails />
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

export default MultipleChildPortraitBanner;
