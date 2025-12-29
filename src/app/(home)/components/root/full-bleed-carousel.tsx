"use client";

import { useState } from "react";
import Loading from "../../loading";
import { IImages } from "./root-page";

interface CarouselProps {
  images: IImages;
}

const FullBleedCarousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || !images.carousel || images.carousel.length === 0) return <Loading />;

  const length = images.carousel.length;

  const prevSlide = () => setCurrentIndex((currentIndex - 1 + length) % length);
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % length);

  return (
    <div className="relative w-full mt-8 sm:mt-20 overflow-hidden">
      {/* 이전 버튼 */}
      <button
        className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 z-10 bg-white/70 p-2 rounded"
        onClick={prevSlide}
      >
        ◀
      </button>

      {/* carousel wrapper */}
      <div className="w-full max-w-4xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.carousel.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex justify-center"
            >
              <img
                src={src}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 다음 버튼 */}
      <button
        className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 z-10 bg-white/70 p-2 rounded"
        onClick={nextSlide}
      >
        ▶
      </button>
    </div>
  );
};

export default FullBleedCarousel;
