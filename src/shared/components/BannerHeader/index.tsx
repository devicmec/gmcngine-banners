import React, { FC } from "react";
import icmecLogoStacked from "../../../images/icmecLogoStacked.png";
import "./styles.css";
import QRCode from "qrcode.react";
import { useTranslation } from "react-i18next";

type Props = {
  bannerColor: "white" | "red";
  pageOrientation: "landscape" | "portrait";
  qrCodeURL: string;
};

const BannerHeader: FC<Props> = ({
  bannerColor,
  pageOrientation,
  qrCodeURL,
}) => {
  const { t, i18n } = useTranslation("translation");
  const headerBackground = bannerColor === "red" ? "#C72828" : bannerColor;
  const headerColor = bannerColor === "white" ? "#C72828" : "white";
  const headerWidth = pageOrientation === "landscape" ? "11in" : "8.5in";
  const headerSize = i18n.language === "es" ? "0.6in" : "0.763in";
  return (
    <div
      className="banner-header-container"
      style={{
        backgroundColor: headerBackground,
        color: headerColor,
        width: headerWidth,
      }}
    >
      <div className="banner-header-agency-wrapper">
        <img
          src={icmecLogoStacked}
          alt="agency-logo"
          className="banner-header-agency-logo"
        />
      </div>
      <div>
        <h1 className="banner-header-text" style={{ fontSize: headerSize }}>
          {t("header.missing")}
        </h1>
      </div>
      <div className="banner-header-qrCode">
        <QRCode value={qrCodeURL} size={110} />
      </div>
    </div>
  );
};

export default BannerHeader;
