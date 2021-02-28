import { FC } from "react";
import "./styles.css";
declare type Props = {
    bannerColor: "white" | "red";
    pageOrientation: "landscape" | "portrait";
    qrCodeURL: string;
};
declare const BannerHeader: FC<Props>;
export default BannerHeader;
