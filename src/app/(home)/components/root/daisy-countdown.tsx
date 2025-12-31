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
    <div className="flex flex-col justify-center items-center mt-10 text-[#3A3A3A] w-full">
      {/* 상단 예식 날짜 정보 */}
      <div className="text-base sm:text-lg mb-6 tracking-[0.2em] font-serif opacity-70">
        {/* 날짜 변환 로직 동일 */}
        {date?.replace(/-/g, ".")} {ConvertStringDay(new Date(`${date}T${time}:00`).getDay())} {time}
      </div>

      {/* 카운트다운 박스 */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-center">
        {[
          { label: "days", value: days, isRaw: true },
          { label: "hours", value: hours },
          { label: "min", value: minutes },
          { label: "sec", value: seconds },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col min-w-[70px] px-2 py-3 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50">
            <span className="font-serif text-3xl sm:text-4xl text-[#3A3A3A]">
              {item.isRaw ? item.value : <span className="countdown"><span style={{ "--value": item.value } as any}></span></span>}
            </span>
            <span className="text-[10px] uppercase tracking-widest mt-1 opacity-50">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="text-lg mt-8 tracking-[0.3em] font-serif text-[#E8A0A0]">
        {isPast ? `D+${days}` : `D-${days}`}
      </div>
    </div>
  );
};

export default DaisyCountdown;
