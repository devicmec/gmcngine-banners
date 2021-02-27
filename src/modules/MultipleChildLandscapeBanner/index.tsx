import React, { FC } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import "./styles.css";
import MultipleChildLandscapeBody from "./components/MultipleChildLandscapeBody";
import useCases from "../../shared/hooks/useCases";
import { ICase } from "../../shared/types/cases/case";
import { IAgency } from "../../shared/types/agency";

type Props = {
  agencyData?: IAgency;
  caseData?: ICase;
  className?: string;
  shareUrl?: string;
};

const MultipleChildLandscapeBanner: FC<Props> = ({
  agencyData,
  caseData,
  className,
  shareUrl
}) => {
  const { data, agency, qrCodeURL } = useCases();
  return (
    <div className={`${className} mcl-container`}>
      <BannerHeader
        bannerColor="red"
        pageOrientation="landscape"
        qrCodeURL={shareUrl || qrCodeURL}
      />
      <MultipleChildLandscapeBody caseData={caseData || data} />
      <BannerFooter
        pageOrientation="landscape"
        agencyData={agencyData || agency}
        caseData={caseData || data}
      />
    </div>
  );
};

export default MultipleChildLandscapeBanner;
