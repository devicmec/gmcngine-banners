import React, { FC, MutableRefObject } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import "./styles.css";
import MultipleChildLandscapeBody from "./components/MultipleChildLandscapeBody";
import { ICase } from "../../shared/types/cases/case";
import useCases from "../../shared/hooks/useCases";

type Props = {
  ref: MutableRefObject<null>;
};

const MultipleChildLandscapeBanner: FC<Props> = ({ ref }) => {
  const { data } = useCases();

  return (
    <div className="mcp-container" ref={ref}>
      <BannerHeader bannerColor="red" pageOrientation="landscape" />
      <MultipleChildLandscapeBody caseData={data} />
      <BannerFooter pageOrientation="landscape" />
    </div>
  );
};

export default MultipleChildLandscapeBanner;
