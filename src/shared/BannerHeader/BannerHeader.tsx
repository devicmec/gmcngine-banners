import React, { FC } from "react";
import ncmecLogo from "../../images/ncmecLogo.png";
import "./styles.css";
import QRCode from "qrcode.react";
// type Props = {
//   bannerColor: string;
// };

const BannerHeader: FC = () => {
  return (
    <div className="banner-header-container">
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
