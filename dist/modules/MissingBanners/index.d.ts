import React, { FC, ReactElement } from "react";
import { ICase } from "../../shared/types/cases/case";
import { IAgency } from "../../shared/types/agency";
export declare enum BannerType {
    SINGLE_CHILD_PORTRAIT = "SINGLE_CHILD_PORTRAIT",
    SINGLE_CHILD_LANDSCAPE = "SINGLE_CHILD_LANDSCAPE",
    MULTIPLE_CHILD_PORTRAIT = "MULTIPLE_CHILD_PORTRAIT",
    MULTIPLE_CHILD_LANDSCAPE = "MULTIPLE_CHILD_LANDSCAPE"
}
export declare const Banners: {
    SINGLE_CHILD_PORTRAIT: React.FC<{
        agencyData?: IAgency | undefined;
        caseData?: ICase | undefined;
        className?: string | undefined;
        childId?: string | undefined;
    }>;
    SINGLE_CHILD_LANDSCAPE: React.FC<{
        agencyData?: IAgency | undefined;
        caseData?: ICase | undefined;
        className?: string | undefined;
        childId?: string | undefined;
    }>;
    MULTIPLE_CHILD_PORTRAIT: React.FC<{
        agencyData?: IAgency | undefined;
        caseData?: ICase | undefined;
        className?: string | undefined;
    }>;
    MULTIPLE_CHILD_LANDSCAPE: React.FC<{
        agencyData?: IAgency | undefined;
        caseData?: ICase | undefined;
        className?: string | undefined;
    }>;
};
declare type Props = {
    data: ICase;
    agency: IAgency;
    type: BannerType;
    printTrigger: () => ReactElement;
    language?: string;
};
export declare const DataContext: React.Context<{
    data: ICase;
    agency: IAgency;
}>;
declare const MissingBanners: FC<Props>;
export default MissingBanners;
