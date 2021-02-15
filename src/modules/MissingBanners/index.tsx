import React, { createContext, FC } from "react";
import SingleChildPortraitBanner from "../SingleChildPortraitBanner";
import { ICase } from "../../shared/types/cases/case";
import MultipleChildLandscapeBanner from "../MultipleChildLandscapeBanner";
import MultipleChildPortraitBanner from "../MultipleChildPortraitBanner";
import SingleChildLandscapeBanner from "../SingleChildLandscapeBanner";

enum BannerType {
  SINGLE_CHILD_PORTRAIT = "SINGLE_CHILD_PORTRAIT",
  SINGLE_CHILD_LANDSCAPE = "SINGLE_CHILD_LANDSCAPE",
  MULTIPLE_CHILD_PORTRAIT = "MULTIPLE_CHILD_PORTRAIT",
  MULTIPLE_CHILD_LANDSCAPE = "MULTIPLE_CHILD_LANDSCAPE",
}

const Banners = {
  ["SINGLE_CHILD_PORTRAIT"]: SingleChildPortraitBanner,
  ["SINGLE_CHILD_LANDSCAPE"]: SingleChildLandscapeBanner,
  ["MULTIPLE_CHILD_PORTRAIT"]: MultipleChildPortraitBanner,
  ["MULTIPLE_CHILD_LANDSCAPE"]: MultipleChildLandscapeBanner,
};

type Props = {
  data: ICase;
  type: BannerType;
  onPrint: () => void;
};

export const DataContext = createContext<{ data: ICase }>({ data: {} as any });

const MissingBanners: FC<Props> = ({
  data,
  type,
  // onPrint,
}) => {
  function renderBanner() {
    const BannerToBeRendered = Banners[type];
    const orientation =
      BannerToBeRendered === SingleChildPortraitBanner ||
      BannerToBeRendered === MultipleChildPortraitBanner
        ? "portrait"
        : "landscape";
    return (
      <BannerToBeRendered>
        <style>
          {`@media print{
          @page{
            size: ${orientation}
          }
        }`}
        </style>
      </BannerToBeRendered>
    );
  }

  return (
    <DataContext.Provider value={{ data }}>
      <div>{renderBanner()}</div>
    </DataContext.Provider>
  );
};

export default MissingBanners;
