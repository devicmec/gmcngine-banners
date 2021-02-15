import React, { FC } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import SingleChildLandscapeBody from "./components/SingleChildLandscapeBody";
import "./styles.css";
import useCases from "../../shared/hooks/useCases";

type Props = {};

const SingleChildLandscapeBanner: FC<Props> = () => {
  const { data } = useCases();

  return (
    <div className="scl-container">
      <BannerHeader bannerColor="red" pageOrientation="landscape" />
      <SingleChildLandscapeBody caseData={data} />
      <BannerFooter pageOrientation="landscape" />
    </div>
  );
};

export default SingleChildLandscapeBanner;
