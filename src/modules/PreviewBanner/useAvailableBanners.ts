import { useState, useEffect } from "react";
import { ICase } from "../../shared/types/cases/case";
import { Banners } from "../MissingBanners";
import { BannerType } from "../..";
import { IAgency } from "../../shared/types/agency";

enum PosterOrientation {
  portrait = "portrait",
  landscape = "landscape"
}

export type AvailableBanners = {
  type: BannerType;
  component: React.FunctionComponent<{
    agencyData?: IAgency;
    caseData?: ICase;
    className?: string;
    childId?: string;
  }>;
  posterOrientation: PosterOrientation;
};

const useAvailableBanners = (data: ICase): AvailableBanners[] => {
  const [availableBanners, setAvailableBanners] = useState<AvailableBanners[]>(
    []
  );

  useEffect(() => {
    const childrenLength = data && data.children.length;

    if (!childrenLength) {
      return;
    }

    let bannersOptions = [
      {
        type: BannerType.SINGLE_CHILD_PORTRAIT,
        component: Banners[BannerType.SINGLE_CHILD_PORTRAIT],
        posterOrientation: PosterOrientation.portrait
      },
      {
        type: BannerType.SINGLE_CHILD_LANDSCAPE,
        component: Banners[BannerType.SINGLE_CHILD_LANDSCAPE],
        posterOrientation: PosterOrientation.landscape
      }
    ];

    if (childrenLength > 1) {
      bannersOptions = [
        ...bannersOptions,
        {
          type: BannerType.MULTIPLE_CHILD_PORTRAIT,
          component: Banners[BannerType.MULTIPLE_CHILD_PORTRAIT],
          posterOrientation: PosterOrientation.portrait
        },
        {
          type: BannerType.MULTIPLE_CHILD_LANDSCAPE,
          component: Banners[BannerType.MULTIPLE_CHILD_LANDSCAPE],
          posterOrientation: PosterOrientation.landscape
        }
      ];
    }

    setAvailableBanners(bannersOptions);
  }, [data]);

  return availableBanners;
};

export default useAvailableBanners;
