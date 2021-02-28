import { FC } from "react";
import { IChild } from "../../../../shared/types/cases/children";
import "./styles.css";
declare type Props = {
    childData: IChild;
    hasAbductors: boolean;
};
declare const SingleChildLandscapeHeadline: FC<Props>;
export default SingleChildLandscapeHeadline;
