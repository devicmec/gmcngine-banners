import { FC } from "react";
import "./styles.css";
import { ICase } from "../../shared/types/cases/case";
import { IAgency } from "../../shared/types/agency";
declare type Props = {
    agencyData?: IAgency;
    caseData?: ICase;
    className?: string;
};
declare const MultipleChildPortraitBanner: FC<Props>;
export default MultipleChildPortraitBanner;
