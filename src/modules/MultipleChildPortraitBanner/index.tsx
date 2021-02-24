import React, { FC } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import MultipleChildPortraitHeadline from "./components/MultipleChildPortraitHeadline";
import "./styles.css";
import MultipleChildPortraitDetails from "./components/MultipleChildPortraitDetails";
import useCases from "../../shared/hooks/useCases";
import { ICase } from "../../shared/types/cases/case";

type Props = {
  caseData?: ICase;
  className?: string;
};

const MultipleChildPortraitBanner: FC<Props> = ({ caseData, className }) => {
  const { data } = useCases();

  return (
    <div className={`${className} mcp-container`}>
      <BannerHeader bannerColor="red" pageOrientation="portrait" />
      <MultipleChildPortraitHeadline caseData={caseData || data} />
      <MultipleChildPortraitDetails caseData={caseData || data} />
      <BannerFooter pageOrientation="portrait" />
    </div>
  );
};

export default MultipleChildPortraitBanner;
