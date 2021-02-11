import { FC } from "react";
import { ICase } from "../../../../shared/types/cases/case";
import { IChild } from "../../../../shared/types/cases/children";
import "./styles.css";
declare type Props = {
    caseData: ICase;
    childData: IChild;
};
declare const SingleChildPortraitDetails: FC<Props>;
export default SingleChildPortraitDetails;
