import React, { FC, MutableRefObject, useRef } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import MultipleChildPortraitHeadline from "./components/MultipleChildPortraitHeadline";
import "./styles.css";
import MultipleChildPortraitDetails from "./components/MultipleChildPortraitDetails";
import useCases from "../../shared/hooks/useCases";
import { useReactToPrint } from "react-to-print";

type Props = {};

const MultipleChildPortraitBanner: FC<Props> = () => {
  const { data } = useCases();
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => componentRef.current });
  return (
    <>
      <div className="mcp-container" ref={componentRef}>
        <BannerHeader bannerColor="red" pageOrientation="portrait" />
        <MultipleChildPortraitHeadline caseData={data} />
        <MultipleChildPortraitDetails caseData={data} />
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
