import React, { FC, MutableRefObject, useRef } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import MultipleChildPortraitHeadline from "./components/MultipleChildPortraitHeadline";
import "./styles.css";
import MultipleChildPortraitDetails from "./components/MultipleChildPortraitDetails";
import useCases from "../../shared/hooks/useCases";

type Props = {
  ref: MutableRefObject<null>;
};

const MultipleChildPortraitBanner: FC<Props> = ({ ref }) => {
  const { data } = useCases();
  return (
    <div className="mcp-container" ref={ref}>
      <BannerHeader bannerColor="red" pageOrientation="portrait" />
      <MultipleChildPortraitHeadline caseData={data} />
      <MultipleChildPortraitDetails caseData={data} />
      <BannerFooter pageOrientation="portrait" />
    </div>
  );
};

export default MultipleChildPortraitBanner;
