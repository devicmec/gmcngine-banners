import { FC } from "react";
import "./styles.css";
import { ICase } from "../../../../shared/types/cases/case";
declare type Props = {
    caseData: ICase;
    childId?: string;
};
declare const SingleChildPortraitBody: FC<Props>;
export default SingleChildPortraitBody;
