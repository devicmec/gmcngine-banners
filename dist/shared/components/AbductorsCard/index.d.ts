import { FC } from "react";
import "./styles.css";
import { IAbductor } from "../../types/cases/abductor";
declare type Props = {
    bannerOrientation: "portrait" | "landscape";
    abductorData: IAbductor;
};
declare const AbductorsCard: FC<Props>;
export default AbductorsCard;
