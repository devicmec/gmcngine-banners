import React, { FC } from "react";
import ncmecLogo from "../../../images/ncmecLogo.png";
import "./styles.css";
import QRCode from "qrcode.react";

type Props = {
  bannerColor: "white" | "red";
  pageOrientation: "landscape" | "portrait";
};

const BannerHeader: FC<Props> = ({ bannerColor, pageOrientation }) => {
  const headerBackground = bannerColor === "red" ? "#C72828" : bannerColor;
  const headerColor = bannerColor === "white" ? "#C72828" : "white";
  const headerWidth = pageOrientation === "landscape" ? "11in" : "8.5in";

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
          src={ncmecLogo}
          alt="agency-logo"
          className="banner-header-agency-logo"
        />
      </div>
      <div>
        <h1 className="banner-header-text">MISSING</h1>
      </div>
      <div className="banner-header-qrCode">
        <QRCode value="www.google.com" size={110} />
      </div>
    </div>
  );
};

export default BannerHeader;
