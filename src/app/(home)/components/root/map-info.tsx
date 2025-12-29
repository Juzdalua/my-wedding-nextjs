import Link from "next/link";
import { IImages } from "./root-page";
import Loading from "../../loading";
import { IConfig } from "@/src/app/api/config/route";

interface MapInfoProps {
  config: IConfig;
  images: IImages;
}

const MapInfo = ({ config, images }: MapInfoProps) => {
  if(!images || !images.map || images.map.length === 0) return <Loading/>

  return (
    <div className="flex justify-center">
      <div className="mt-20 flex flex-col items-center h-[550px] w-[400px]">
        <img className="h-[550px] object-contain rounded-box" src={images.map[0]} alt="asd" />
        <div className="flex flex-col items-end justify-center w-full pr-10 h-full">
          <span className="text-sm">{config['MAP_DESCRIPTION']}</span>
          <Link target="_blank" href={config['MAP_URL']}>
            <span className="underline underline-offset-1">지도 보기</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MapInfo;