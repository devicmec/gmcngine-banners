import React, { createContext, FC, ReactElement, useMemo, useRef } from "react";
import SingleChildPortraitBanner from "../SingleChildPortraitBanner";
import { ICase } from "../../shared/types/cases/case";
import MultipleChildLandscapeBanner from "../MultipleChildLandscapeBanner";
import MultipleChildPortraitBanner from "../MultipleChildPortraitBanner";
import SingleChildLandscapeBanner from "../SingleChildLandscapeBanner";
import ReactToPrint from "react-to-print";

export enum BannerType {
  SINGLE_CHILD_PORTRAIT = "SINGLE_CHILD_PORTRAIT",
  SINGLE_CHILD_LANDSCAPE = "SINGLE_CHILD_LANDSCAPE",
  MULTIPLE_CHILD_PORTRAIT = "MULTIPLE_CHILD_PORTRAIT",
  MULTIPLE_CHILD_LANDSCAPE = "MULTIPLE_CHILD_LANDSCAPE"
}

export const Banners = {
  ["SINGLE_CHILD_PORTRAIT"]: SingleChildPortraitBanner,
  ["SINGLE_CHILD_LANDSCAPE"]: SingleChildLandscapeBanner,
  ["MULTIPLE_CHILD_PORTRAIT"]: MultipleChildPortraitBanner,
  ["MULTIPLE_CHILD_LANDSCAPE"]: MultipleChildLandscapeBanner
};

type Props = {
  data: ICase;
  type: BannerType;
  printTrigger: () => ReactElement;
};

export const DataContext = createContext<{ data: ICase }>({ data: {} as any });

const MissingBanners: FC<Props> = ({ data, type, printTrigger }) => {
  const componentRef = useRef(null);
  const renderBanner = useMemo(() => {
    const BannerToBeRendered = Banners[type];
    return <BannerToBeRendered />;
  }, [type]);

  const orientation =
    type === BannerType.SINGLE_CHILD_LANDSCAPE ||
    type === BannerType.MULTIPLE_CHILD_LANDSCAPE
      ? "landscape"
      : "portrait";

  const bannerPrintStyles = `@media print {
    @page {
      size: ${orientation};
    }
  }
  `;
  return (
    <DataContext.Provider value={{ data }}>
      <ReactToPrint
        trigger={printTrigger}
        content={() => componentRef.current}
      />
      <div style={{ display: "none" }}>
        <div ref={componentRef}>
          <style>{bannerPrintStyles}</style>
          {renderBanner}
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default MissingBanners;

// yarn build y luego otra vez yalc publish, irse al public site, yalc add gmcngine, yarn , yarn dev
