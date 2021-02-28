import React, {
  createContext,
  FC,
  ReactElement,
  useMemo,
  useRef,
  Suspense,
  useEffect
} from "react";
import SingleChildPortraitBanner from "../SingleChildPortraitBanner";
import { ICase } from "../../shared/types/cases/case";
import MultipleChildLandscapeBanner from "../MultipleChildLandscapeBanner";
import MultipleChildPortraitBanner from "../MultipleChildPortraitBanner";
import SingleChildLandscapeBanner from "../SingleChildLandscapeBanner";
import ReactToPrint from "react-to-print";
import i18n from "../../i18n/config";
import { IAgency } from "../../shared/types/agency";

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
  agency: IAgency;
  type: BannerType;
  printTrigger: () => ReactElement;
  language?: string;
  qrCodeURL: string;
};

export const DataContext = createContext<{
  data: ICase;
  agency: IAgency;
  qrCodeURL: string;
}>({
  data: {} as any,
  agency: {} as any,
  qrCodeURL: ""
});

const MissingBanners: FC<Props> = ({
  data,
  agency,
  type,
  printTrigger,
  language,
  qrCodeURL
}) => {
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

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  return (
    <Suspense fallback="loading">
      <DataContext.Provider value={{ data, agency, qrCodeURL }}>
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
    </Suspense>
  );
};

export default MissingBanners;
