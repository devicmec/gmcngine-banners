import React, { FC, useRef } from "react";
import "./styles.css";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import SingleChildPortraitBody from "./components/SingleChildPortraitBody";
import useCases from "../../shared/hooks/useCases";
import { useReactToPrint } from "react-to-print";

type Props = {};

const SingleChildPortraitBanner: FC<Props> = () => {
  const { data } = useCases();
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => componentRef.current });
  return (
    <>
      <div ref={componentRef} className="scp-container">
        <BannerHeader bannerColor="red" pageOrientation="portrait" />
        <SingleChildPortraitBody caseData={data} />
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
