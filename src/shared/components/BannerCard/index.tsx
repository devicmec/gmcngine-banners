import React, { FC } from "react";
import "./styles.css";

type Props = {
  dimensions: { height: string; width: string };
};

const BannerCard: FC<Props> = ({ children, dimensions }) => {
  return (
    <div className="banner-card-container" style={dimensions}>
      {children}
    </div>
  );
};

export default BannerCard;
