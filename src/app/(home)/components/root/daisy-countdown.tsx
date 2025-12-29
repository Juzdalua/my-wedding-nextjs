"use client";

import { IConfig } from "@/src/app/api/config/route";
import { useEffect, useState } from "react";

const ConvertStringDay = (day: number) => {
  switch (day) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
  }
};

const ConvertFullStringDay = (day: number) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
};

interface DaisyCountdownProps {
  config: IConfig;
}

const DaisyCountdown = ({ config }: DaisyCountdownProps) => {
  const [targetDateTime, setTargetDateTime] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const date = config["DDAY_DATE"];
  const time = config["DDAY_TIME"];

  useEffect(() => {

    const targetDate = new Date(`${date}T${time}:00`);
    setTargetDateTime(targetDate.getTime());
  }, []);

  useEffect(() => {
    if (!targetDateTime) return;

    const interval = setInterval(() => {
      const timeLeft = targetDateTime - Date.now();
      setRemainingTime(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateTime]);

  const isPast = remainingTime < 0;
  const absRemainingTime = Math.abs(remainingTime);

  const days = Math.floor(absRemainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((absRemainingTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((absRemainingTime / (1000 * 60)) % 60);
  const seconds = Math.floor((absRemainingTime / 1000) % 60);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <div className="flex flex-col justify-center items-center mt-24 text-[#3A3A3A]">
      <div className="text-lg mb-8 tracking-wide opacity-80">
        {`${date?.split("-")[0]}.${
          date?.split("-")[1]
        }.${
          date?.split("-")[2]
        }. ${ConvertStringDay(
          new Date(
            `${date}T${time}:00`
          ).getDay()
        )} ${time?.split(":")[0]}:${
          time?.split(":")[1]
        }`}
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-center">
        <div className="flex flex-col px-3 py-2 sm:px-4 sm:py-3 bg-white/70 backdrop-blur-sm rounded-xl">
          <div className="flex flex-col items-center align-middle font-serif">
            <span className="text-5xl">{days}</span>
            days
          </div>
        </div>

        {isMobile && <div className="w-full h-0"></div>}

        <div className="flex flex-col px-3 py-2 sm:px-4 sm:py-3 bg-white/70 backdrop-blur-sm rounded-xl">
          <span className="countdown font-serif text-2xl sm:text-3xl md:text-4xl">
            <span
              className="text-5xl"
              style={{ "--value": hours } as React.CSSProperties}
            ></span>
          </span>
          hours
        </div>

        <div className="flex flex-col px-3 py-2 sm:px-4 sm:py-3 bg-white/70 backdrop-blur-sm rounded-xl">
          <span className="countdown font-serif text-2xl sm:text-3xl md:text-4xl">
            <span
              className="text-5xl"
              style={{ "--value": minutes } as React.CSSProperties}
            ></span>
          </span>
          min
        </div>

        <div className="flex flex-col px-3 py-3 sm:px-4 sm:py-4 bg-white/70 backdrop-blur-sm rounded-xl">
          <span className="countdown font-serif text-2xl sm:text-3xl md:text-4xl">
            <span
              className="text-5xl"
              style={{ "--value": seconds } as React.CSSProperties}
            ></span>
          </span>
          sec
        </div>
      </div>

      <div className="text-xl mt-8 tracking-wide font-medium text-[#E8A0A0]">
        {isPast ? `D+${days}` : `D-${days}`}
      </div>
    </div>
  );
};

export default DaisyCountdown;
