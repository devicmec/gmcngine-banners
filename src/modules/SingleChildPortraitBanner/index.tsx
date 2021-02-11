import React, { FC, MutableRefObject, RefObject } from "react";
import "./styles.css";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import SingleChildPortraitBody from "./components/SingleChildPortraitBody";
import useCases from "../../shared/hooks/useCases";

type Props = {
  ref: MutableRefObject<null>;
};

const SingleChildPortraitBanner: FC<Props> = ({ ref }) => {
  const { data } = useCases();

  return (
    <div ref={ref} className="scp-container">
      <BannerHeader bannerColor="red" pageOrientation="portrait" />
      <SingleChildPortraitBody caseData={data} />
      <BannerFooter pageOrientation="portrait" />
    </div>
  );
};

export default SingleChildPortraitBanner;
