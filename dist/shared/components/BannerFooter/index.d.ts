import "./styles.css";
import { FC } from "react";
import { IAgency } from "../../types/agency";
import { ICase } from "../../types/cases/case";
declare type Props = {
    pageOrientation: "landscape" | "portrait";
    agencyData: IAgency;
    caseData: ICase;
};
declare const BannerFooter: FC<Props>;
export default BannerFooter;
