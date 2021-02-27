/// <reference types="react" />
import { ICase } from "../../shared/types/cases/case";
import { BannerType } from "../..";
import { IAgency } from "../../shared/types/agency";
declare enum PosterOrientation {
    portrait = "portrait",
    landscape = "landscape"
}
export declare type AvailableBanners = {
    type: BannerType;
    component: React.FunctionComponent<{
        agencyData?: IAgency;
        caseData?: ICase;
        className?: string;
        childId?: string;
        shareUrl?: string;
    }>;
    posterOrientation: PosterOrientation;
};
declare const useAvailableBanners: (data: ICase) => AvailableBanners[];
export default useAvailableBanners;
