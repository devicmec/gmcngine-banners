import React, { useRef } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import { useReactToPrint } from "react-to-print";
import "./styles.css";
import MultipleChildLandscapeBody from "./components/MultipleChildLandscapeBody";

const MultipleChildLandscapeBanner = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => componentRef.current });
  return (
    <>
      <div className="mcp-container" ref={componentRef}>
        <BannerHeader bannerColor="red" pageOrientation="landscape" />
        <MultipleChildLandscapeBody />
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

export default MultipleChildLandscapeBanner;
