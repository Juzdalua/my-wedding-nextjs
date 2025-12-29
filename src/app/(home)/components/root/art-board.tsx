"use client";

import { useState, useEffect } from "react";
import Loading from "../../loading";

const ArtBoard = () => {
  const [images, setImages] = useState<any>(null);
  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then((data) => setImages(data.images));
  }, []);
  
    if (!images) return <Loading />; 

  return (
    <div className="flex justify-center">
      <div className="mt-20 flex flex-col items-center h-[620px] w-[400px]">
        <img
          className="h-[550px] object-contain rounded-box"
          src={images?.main[0]}
          alt="asd"
        />
        <div className="flex flex-col items-end justify-end w-full pr-10 h-full">
          <span className="text-xl">12321321312</span>
          <span className="text-xl">12321321312</span>
        </div>
      </div>
    </div>
  );
};
export default ArtBoard;
