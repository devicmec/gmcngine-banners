import React, { FC } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import SingleChildLandscapeAbductorsBody from "./components/SingleChildLandscapeAbductorsBody";
import "./styles.css";
import useCases from "../../shared/hooks/useCases";
import SingleChildLandscapeBody from "./components/SingleChildLandscapeBody";

type Props = {};

const SingleChildLandscapeBanner: FC<Props> = () => {
  const { data, agency } = useCases();

  return (
    <div className="scl-container">
      <BannerHeader bannerColor="red" pageOrientation="landscape" />
      {data.abductors.length ? (
        <SingleChildLandscapeAbductorsBody caseData={data} />
      ) : (
        <SingleChildLandscapeBody caseData={data} />
      )}

      <BannerFooter
        pageOrientation="landscape"
        agencyData={agency}
        caseData={data}
      />
    </div>
  );
};

export default SingleChildLandscapeBanner;
