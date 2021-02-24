import React, { FC } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import MultipleChildPortraitHeadline from "./components/MultipleChildPortraitHeadline";
import "./styles.css";
import MultipleChildPortraitDetails from "./components/MultipleChildPortraitDetails";
import useCases from "../../shared/hooks/useCases";

type Props = {};

const MultipleChildPortraitBanner: FC<Props> = () => {
  const { data, agency } = useCases();

  return (
    <div className="mcp-container">
      <BannerHeader bannerColor="red" pageOrientation="portrait" />
      <MultipleChildPortraitHeadline caseData={data} />
      <MultipleChildPortraitDetails caseData={data} />
      <BannerFooter
        pageOrientation="portrait"
        agencyData={agency}
        caseData={data}
      />
    </div>
  );
};

export default MultipleChildPortraitBanner;
