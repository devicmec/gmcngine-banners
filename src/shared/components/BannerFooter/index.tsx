import React from "react";
import "./styles.css";
import { FC } from "react";
import { IAgency } from "../../types/agency";
import { ICase } from "../../types/cases/case";

type Props = {
  pageOrientation: "landscape" | "portrait";
  agencyData: IAgency;
  caseData: ICase;
};

const BannerFooter: FC<Props> = ({ pageOrientation, agencyData, caseData }) => {
  const headerWidth = pageOrientation === "landscape" ? "11in" : "8.5in";

  return (
    <div className="banner-footer-container" style={{ width: headerWidth }}>
      <div className="banner-footer-phone-number-wrapper">
        <h4 className="banner-footer-agency-number">
          {caseData.contactInformation}
        </h4>
      </div>
      <div className="banner-footer-gmcngine-logo">
        <img src={agencyData.logo.url} width={105} />
      </div>
    </div>
  );
};

export default BannerFooter;
