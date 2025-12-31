"use client";

import { IImages } from "./root-page";
import Loading from "../../loading";

interface ArtBoardProps {
  images: IImages;
}

const ArtBoard = ({ images }: ArtBoardProps) => {
  if (!images || !images.main || images.main.length === 0) return <Loading />;

  return (
    <div className="flex justify-center w-full px-2">
      <div className="flex flex-col items-center w-full">
        <div className="p-2 bg-white/50 rounded-3xl shadow-sm">
          <img
            className="w-full h-auto rounded-2xl"
            src={images.main[0]}
            alt="main_photo"
          />
        </div>
        <div className="flex flex-col items-center w-full mt-6 space-y-1 font-serif text-[#3A3A3A]">
          <span className="text-lg tracking-widest">
            신랑 김준 · 신부 이지은
          </span>
          <span className="text-sm opacity-60 italic">
            우리의 첫 시작에 초대합니다
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArtBoard;
