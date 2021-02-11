import { FC } from "react";
import "./styles.css";
import { IChild } from "../../../../shared/types/cases/children";
declare type Props = {
    childrenAmount: number;
    childData: IChild;
};
declare const LandscapeChildCard: FC<Props>;
export default LandscapeChildCard;
