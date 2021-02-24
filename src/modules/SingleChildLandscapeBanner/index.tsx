import React, { FC } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import SingleChildLandscapeBody from "./components/SingleChildLandscapeBody";
import "./styles.css";
import useCases from "../../shared/hooks/useCases";
import { ICase } from "../../shared/types/cases/case";

type Props = {
  caseData?: ICase;
  className?: string;
  childId?: string;
};

const SingleChildLandscapeBanner: FC<Props> = ({
  caseData,
  childId,
  className
}) => {
  const { data } = useCases();

  return (
    <div className={`${className} scl-container`}>
      <BannerHeader bannerColor="red" pageOrientation="landscape" />
      <SingleChildLandscapeBody caseData={caseData || data} childId={childId} />
      <BannerFooter pageOrientation="landscape" />
    </div>
  );
};

export default SingleChildLandscapeBanner;
