import React, { FC } from "react";
import "./styles.css";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import SingleChildPortraitBody from "./components/SingleChildPortraitBody";
import useCases from "../../shared/hooks/useCases";

type Props = {};

const SingleChildPortraitBanner: FC<Props> = () => {
  const { data } = useCases();

  return (
    <div className="scp-container">
      <BannerHeader bannerColor="red" pageOrientation="portrait" />
      <SingleChildPortraitBody caseData={data} />
      <BannerFooter pageOrientation="portrait" />
    </div>
  );
};

export default SingleChildPortraitBanner;
