import React, { FC } from "react";
import BannerCard from "../BannerCard";
import "./styles.css";
import { IAbductor } from "../../types/cases/abductor";
import { no_photo_found } from "../../../shared/utils/helpers";
import { useTranslation } from "react-i18next";

type Props = {
  bannerOrientation: "portrait" | "landscape";
  abductorData: IAbductor;
};

const AbductorsCard: FC<Props> = ({ bannerOrientation, abductorData }) => {
  const { t } = useTranslation("translation");
  const portraitDimensions = {
    width: "4.3in",
    height: "1.55in",
  };
  const landscapeDimensions = {
    width: "4in",
    height: "1.65in",
  };
  const cardDimensions =
    bannerOrientation === "portrait" ? portraitDimensions : landscapeDimensions;
  return (
    <BannerCard dimensions={cardDimensions}>
      <div className="banner-abductor-card-content-wrapper">
        <div className="banner-abductor-image-wrapper">
          <img
            src={abductorData.images[0] || no_photo_found}
            className="banner-abductor-image"
            alt="abductor"
          />
        </div>
        <div className="banner-abductor-details-container">
          <h3>{abductorData.fullName}</h3>
          <div className="banner-abductor-row">
            <p className="banner-abductor-label">{t("labels.birthdate")}</p>
            <p className="banner-abductor-info">{abductorData.birthDate}</p>
          </div>
          <div className="banner-abductor-row">
            <p className="banner-abductor-label">{t("labels.sex")}</p>
            <p className="banner-abductor-info">{abductorData.sex}</p>
          </div>
          <div className="banner-abductor-row">
            <p className="banner-abductor-label">{t("labels.height")}</p>
            <p className="banner-abductor-info">{abductorData.height}</p>
          </div>
        </div>
      </div>
    </BannerCard>
  );
};

export default AbductorsCard;
