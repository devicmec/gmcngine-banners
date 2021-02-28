import React, { FC } from "react";
import BannerHeader from "../../shared/components/BannerHeader";
import BannerFooter from "../../shared/components/BannerFooter";
import SingleChildLandscapeAbductorsBody from "./components/SingleChildLandscapeAbductorsBody";
import "./styles.css";
import useCases from "../../shared/hooks/useCases";
import { ICase } from "../../shared/types/cases/case";
import SingleChildLandscapeBody from "./components/SingleChildLandscapeBody";
import { IAgency } from "../../shared/types/agency";

type Props = {
  agencyData?: IAgency;
  caseData?: ICase;
  className?: string;
  childId?: string;
  shareUrl?: string;
};

const SingleChildLandscapeBanner: FC<Props> = ({
  agencyData,
  caseData,
  childId,
  className,
  shareUrl
}) => {
  const { agency, data, qrCodeURL } = useCases();

  return (
    <div className={`${className} scl-container`}>
      <BannerHeader
        bannerColor="red"
        pageOrientation="landscape"
        qrCodeURL={shareUrl || qrCodeURL}
      />
      {(caseData && caseData?.abductors?.length) || data?.abductors?.length ? (
        <SingleChildLandscapeAbductorsBody
          caseData={caseData || data}
          childId={childId}
        />
      ) : (
        <SingleChildLandscapeBody
          caseData={caseData || data}
          childId={childId}
        />
      )}

      <BannerFooter
        pageOrientation="landscape"
        agencyData={agencyData || agency}
        caseData={caseData || data}
      />
    </div>
  );
};

export default SingleChildLandscapeBanner;
