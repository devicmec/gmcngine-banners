import React, { FC } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import "./styles.css";
import MultipleChildLandscapeBody from "./components/MultipleChildLandscapeBody";
import useCases from "../../shared/hooks/useCases";

type Props = {};

const MultipleChildLandscapeBanner: FC<Props> = () => {
  const { data } = useCases();
  return (
    <div className="mcl-container">
      <BannerHeader bannerColor="red" pageOrientation="landscape" />
      <MultipleChildLandscapeBody caseData={data} />
      <BannerFooter pageOrientation="landscape" />
    </div>
  );
};

export default MultipleChildLandscapeBanner;
