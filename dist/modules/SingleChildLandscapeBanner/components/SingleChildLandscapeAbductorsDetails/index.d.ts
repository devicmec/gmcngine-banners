import { FC } from "react";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";
import "./styles.css";
declare type Props = {
    childData: IChild;
    caseData: ICase;
};
declare const SingleChildLandscapeAbductorsDetails: FC<Props>;
export default SingleChildLandscapeAbductorsDetails;
