import { FC } from "react";
import "./styles.css";
import { ICase } from "../../shared/types/cases/case";
import { IAgency } from "../../shared/types/agency";
declare type Props = {
    agencyData?: IAgency;
    caseData?: ICase;
    className?: string;
    childId?: string;
};
declare const SingleChildLandscapeBanner: FC<Props>;
export default SingleChildLandscapeBanner;
