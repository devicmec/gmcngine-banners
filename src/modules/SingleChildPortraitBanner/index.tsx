import React, { FC } from "react";
import "./styles.css";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import SingleChildPortraitBody from "./components/SingleChildPortraitBody";
import useCases from "../../shared/hooks/useCases";
import { ICase } from "../../shared/types/cases/case";
import { IAgency } from "../../shared/types/agency";

type Props = {
  agencyData?: IAgency;
  caseData?: ICase;
  className?: string;
  childId?: string;
  shareUrl?: string;
};

const SingleChildPortraitBanner: FC<Props> = ({
  agencyData,
  caseData,
  childId,
  className,
  shareUrl
}) => {
  const { agency, data, qrCodeURL } = useCases();

  return (
    <div className={`${className} scp-container`}>
      <BannerHeader
        bannerColor="red"
        pageOrientation="portrait"
        qrCodeURL={shareUrl || qrCodeURL}
      />
      <SingleChildPortraitBody caseData={caseData || data} childId={childId} />
      <BannerFooter
        pageOrientation="portrait"
        agencyData={agencyData || agency}
        caseData={caseData || data}
      />
    </div>
  );
};

export default SingleChildPortraitBanner;
