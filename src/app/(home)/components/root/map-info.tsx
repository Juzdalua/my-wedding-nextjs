import Link from "next/link";
import { IImages } from "./root-page";
import Loading from "../../loading";
import { IConfig } from "@/src/app/api/config/route";

interface MapInfoProps {
  config: IConfig;
  images: IImages;
}

const MapInfo = ({ config, images }: MapInfoProps) => {
  if (!images || !images.map || images.map.length === 0) return <Loading />;

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full bg-white/60 backdrop-blur-sm rounded-3xl p-4 shadow-sm border border-white/40">
        <img
          className="w-full aspect-[4/3] object-cover rounded-2xl mb-4"
          src={images.map[0]}
          alt="map"
        />
        <div className="flex flex-col items-center space-y-3">
          <span className="text-sm font-serif text-[#3A3A3A] opacity-80 leading-relaxed text-center px-4">
            {config["MAP_DESCRIPTION"]}
          </span>
          <Link target="_blank" href={config["MAP_URL"]} className="group">
            <span className="text-xs tracking-tighter border-b border-[#3A3A3A] pb-0.5 group-hover:opacity-60 transition-opacity uppercase">
              Open Map 〈
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MapInfo;
