"use client";

import { useEffect, useState } from "react";
import ArtBoard from "./art-board";
import DaisyCountdown from "./daisy-countdown";
import FullBleedCarousel from "./full-bleed-carousel";
import MapInfo from "./map-info";
import Loading from "../../loading";
import { IConfig } from "@/src/app/api/config/route";

export interface IImages {
  [folderName: string]: string[];
}

const RootPage = () => {
  const [config, setConfig] = useState<IConfig | null>(null);
  const [images, setImages] = useState<IImages | null>(null);
  useEffect(() => {
    fetch("/api/config")
      .then((res) => res.json())
      .then((data) => setConfig(data.config));

    fetch("/api/images")
      .then((res) => res.json())
      .then((data) => setImages(data.images as IImages));
  }, []);

  if (!images || !config) return <Loading />;

  return (
    <div className="flex flex-col items-center w-full space-y-12 pb-10">
      <DaisyCountdown config={config} />
      <ArtBoard images={images} />
      <FullBleedCarousel images={images} />
      <MapInfo config={config} images={images} />
    </div>
  );
};

export default RootPage;
