import React, { FC } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import "./styles.css";
import MultipleChildLandscapeBody from "./components/MultipleChildLandscapeBody";
import useCases from "../../shared/hooks/useCases";

type Props = {};

const MultipleChildLandscapeBanner: FC<Props> = () => {
  const { data, agency } = useCases();
  return (
    <div className="mcl-container">
      <BannerHeader bannerColor="red" pageOrientation="landscape" />
      <MultipleChildLandscapeBody caseData={data} />
      <BannerFooter
        pageOrientation="landscape"
        agencyData={agency}
        caseData={data}
      />
    </div>
  );
};

export default MultipleChildLandscapeBanner;
