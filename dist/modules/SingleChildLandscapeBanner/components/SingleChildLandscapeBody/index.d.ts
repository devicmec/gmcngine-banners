import { FC } from "react";
import "./styles.css";
import { ICase } from "../../../../shared/types/cases/case";
declare type Props = {
    caseData: ICase;
    childId?: string;
};
declare const SingleChildLandscapeBody: FC<Props>;
export default SingleChildLandscapeBody;
