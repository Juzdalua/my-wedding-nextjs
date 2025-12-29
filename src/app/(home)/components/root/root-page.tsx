"use client"

import { useEffect, useState } from "react";
import ArtBoard from "./art-board";
import DaisyCountdown from "./daisy-countdown";
import FullBleedCarousel from "./full-bleed-carousel";
import MapInfo from "./map-info";
import Loading from "../../loading";
import { IConfig } from "@/src/app/api/config/route";

const RootPage = () => {
  const [config, setConfig] = useState<IConfig | null>(null);
  useEffect(() => {
    fetch("/api/config")
      .then((res) => res.json())
      .then((data) => setConfig(data.config));
  }, []);

  if(!config) return <Loading/>

  return (
    <div className="flex flex-col justify-center">
      <DaisyCountdown config={config} />
      <ArtBoard />
      <FullBleedCarousel />
      <MapInfo />
    </div>
  );
};

export default RootPage;
