import React, { FC } from "react";
import "./styles.css";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import SingleChildPortraitBody from "./components/SingleChildPortraitBody";
import useCases from "../../shared/hooks/useCases";
import { ICase } from "../../shared/types/cases/case";

type Props = {
  caseData?: ICase;
  className?: string;
  childId?: string;
};

const SingleChildPortraitBanner: FC<Props> = ({
  caseData,
  childId,
  className
}) => {
  const { data } = useCases();

  return (
    <div className={`${className} scp-container`}>
      <BannerHeader bannerColor="red" pageOrientation="portrait" />
      <SingleChildPortraitBody caseData={caseData || data} childId={childId} />
      <BannerFooter pageOrientation="portrait" />
    </div>
  );
};

export default SingleChildPortraitBanner;
