"use client";

import { IImages } from "./root-page";
import Loading from "../../loading";

interface ArtBoardProps {
  images: IImages;
}

const ArtBoard = ({ images }: ArtBoardProps) => {
  if (!images || !images.main || images.main.length === 0)return <Loading />;

  return (
    <div className="flex justify-center px-4">
      <div className="mt-10 flex flex-col items-center w-full max-w-md lg:max-w-lg xl:max-w-xl">
        <img
          className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
          src={images.main[0]}
          alt="artboard"
        />
        <div className="flex flex-col items-end justify-end w-full mt-4">
          <span className="text-base sm:text-lg lg:text-xl">12321321312</span>
          <span className="text-base sm:text-lg lg:text-xl">12321321312</span>
        </div>
      </div>
    </div>
  );
};

export default ArtBoard;
