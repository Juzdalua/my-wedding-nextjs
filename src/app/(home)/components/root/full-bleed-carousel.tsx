"use client";

import { useState } from "react";
import Loading from "../../loading";
import { IImages } from "./root-page";

interface CarouselProps {
  images: IImages;
}

const FullBleedCarousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || !images.carousel || images.carousel.length === 0)
    return <Loading />;

  const length = images.carousel.length;

  const prevSlide = () => setCurrentIndex((currentIndex - 1 + length) % length);
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % length);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl group">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.carousel.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full px-1">
            <img
              src={src}
              className="w-full h-auto object-cover rounded-2xl shadow-inner"
            />
          </div>
        ))}
      </div>

      {/* 화살표 버튼 커스텀 */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/40 backdrop-blur-md rounded-full text-[#3A3A3A] opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={prevSlide}
      >
        <span className="text-xs">〈</span>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/40 backdrop-blur-md rounded-full text-[#3A3A3A] opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={nextSlide}
      >
        <span className="text-xs">〉</span>
      </button>

      {/* 인디케이터 (점) 추가 */}
      <div className="flex justify-center gap-1.5 mt-4">
        {images.carousel.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all ${
              currentIndex === i ? "w-4 bg-[#3A3A3A]" : "w-1 bg-[#3A3A3A]/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullBleedCarousel;
