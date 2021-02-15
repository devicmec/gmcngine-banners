import React, { FC, useRef } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import "./styles.css";
import MultipleChildLandscapeBody from "./components/MultipleChildLandscapeBody";
import useCases from "../../shared/hooks/useCases";
import { useReactToPrint } from "react-to-print";

type Props = {};

const MultipleChildLandscapeBanner: FC<Props> = () => {
  const { data } = useCases();
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <>
      <div className="mcl-container" ref={componentRef}>
        <BannerHeader bannerColor="red" pageOrientation="landscape" />
        <MultipleChildLandscapeBody caseData={data} />
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
