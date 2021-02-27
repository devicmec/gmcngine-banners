import React, { FC } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import MultipleChildPortraitHeadline from "./components/MultipleChildPortraitHeadline";
import "./styles.css";
import MultipleChildPortraitDetails from "./components/MultipleChildPortraitDetails";
import useCases from "../../shared/hooks/useCases";
import { ICase } from "../../shared/types/cases/case";
import { IAgency } from "../../shared/types/agency";

type Props = {
  agencyData?: IAgency;
  caseData?: ICase;
  className?: string;
  shareUrl?: string;
};

const MultipleChildPortraitBanner: FC<Props> = ({
  agencyData,
  caseData,
  className,
  shareUrl
}) => {
  const { data, agency, qrCodeURL } = useCases();

  return (
    <div className={`${className} mcp-container`}>
      <BannerHeader
        bannerColor="red"
        pageOrientation="portrait"
        qrCodeURL={shareUrl || qrCodeURL}
      />
      <MultipleChildPortraitHeadline caseData={caseData || data} />
      <MultipleChildPortraitDetails caseData={caseData || data} />
      <BannerFooter
        pageOrientation="portrait"
        agencyData={agencyData || agency}
        caseData={caseData || data}
      />
    </div>
  );
};

export default MultipleChildPortraitBanner;
