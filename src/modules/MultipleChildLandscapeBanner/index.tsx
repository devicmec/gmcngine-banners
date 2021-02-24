import React, { FC } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import "./styles.css";
import MultipleChildLandscapeBody from "./components/MultipleChildLandscapeBody";
import useCases from "../../shared/hooks/useCases";
import { ICase } from "../../shared/types/cases/case";

type Props = {
  caseData?: ICase;
  className?: string;
};

const MultipleChildLandscapeBanner: FC<Props> = ({ caseData, className }) => {
  const { data } = useCases();
  return (
    <div className={`${className} mcl-container`}>
      <BannerHeader bannerColor="red" pageOrientation="landscape" />
      <MultipleChildLandscapeBody caseData={caseData || data} />
      <BannerFooter pageOrientation="landscape" />
    </div>
  );
};

export default MultipleChildLandscapeBanner;
