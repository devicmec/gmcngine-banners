import React, { createContext, FC, useRef } from "react";
import { useReactToPrint } from "react-to-print";
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
  buttonClassName: string;
  onPrint: () => void;
};

export const DataContext = createContext<{ data: ICase }>({ data: {} as any });

const MissingBanners: FC<Props> = ({
  data,
  type,
  // buttonClassName,
  // onPrint,
}) => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  function renderBanner() {
    const BannerToBeRendered = Banners[type];
    return <BannerToBeRendered ref={componentRef} />;
  }

  return (
    <DataContext.Provider value={{ data }}>
      {renderBanner()}
      <button
        onClick={handlePrint}
        style={{
          marginLeft: "100px",
          backgroundColor: "green",
          border: "0px",
          padding: "20px",
          color: "white",
          fontSize: "30px",
        }}
      >
        Print
      </button>
    </DataContext.Provider>
  );
};

export default MissingBanners;
