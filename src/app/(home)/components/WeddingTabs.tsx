"use client";

import RootPage from "./root/root-page";

export default function WeddingTabs() {
  // 공통 클래스를 변수로 빼서 가독성을 높였습니다.
  // flex-1: 4등분, text-[0.75rem]: 모바일 글자 크기, whitespace-nowrap: 줄바꿈 방지
  const tabClass = "tab flex-1 transition-all text-[0.75rem] sm:text-[0.95rem] whitespace-nowrap px-1";

  return (
    <div className="w-full max-w-[450px] mx-auto px-2 mt-10">
      <div className="tabs tabs-lifted tabs-sm sm:tabs-md w-full">
        
        {/* Tab 1: 오시는 길 */}
        <input
          type="radio"
          name="wedding_tabs"
          className={tabClass}
          aria-label="오시는 길"
          style={{ "--tab-bg": "#EADCD9", "--tab-border-color": "transparent", color: "#3A3A3A" } as any}
          defaultChecked
        />
        <div className="tab-content w-full min-h-[600px] bg-white/80 backdrop-blur-sm border-none rounded-2xl rounded-tl-none p-4 shadow-sm">
          <div className="w-full h-[600px] overflow-y-auto custom-scrollbar">
            <RootPage />
          </div>
        </div>

        {/* Tab 2: 예식 정보 */}
        <input
          type="radio"
          name="wedding_tabs"
          className={tabClass}
          aria-label="예식 정보"
          style={{ "--tab-bg": "#EADCD9", "--tab-border-color": "transparent", color: "#3A3A3A" } as any}
        />
        <div className="tab-content w-full min-h-[600px] bg-white/80 backdrop-blur-sm border-none rounded-2xl p-4 shadow-sm">
          <div className="w-full h-[600px] flex flex-col items-center justify-center">
            <p className="font-serif text-[#3A3A3A]">예식 상세 정보</p>
          </div>
        </div>

        {/* Tab 3: 마음 전하기 */}
        <input
          type="radio"
          name="wedding_tabs"
          className={tabClass}
          aria-label="마음 전하기"
          style={{ "--tab-bg": "#EADCD9", "--tab-border-color": "transparent", color: "#3A3A3A" } as any}
        />
        <div className="tab-content w-full min-h-[600px] bg-white/80 backdrop-blur-sm border-none rounded-2xl p-4 shadow-sm">
          <div className="w-full h-[600px] flex flex-col items-center justify-center font-serif text-[#3A3A3A]">
            <p>축하의 마음을 담아...</p>
          </div>
        </div>

        {/* Tab 4: 방명록 */}
        <input
          type="radio"
          name="wedding_tabs"
          className={tabClass}
          aria-label="방명록"
          style={{ "--tab-bg": "#EADCD9", "--tab-border-color": "transparent", color: "#3A3A3A" } as any}
        />
        <div className="tab-content w-full min-h-[600px] bg-white/80 backdrop-blur-sm border-none rounded-2xl p-4 shadow-sm">
          <div className="w-full h-[600px] flex flex-col items-center justify-center font-serif text-[#3A3A3A]">
            <p>방명록 영역입니다.</p>
          </div>
        </div>
      </div>

      {/* 스크롤바 스타일은 global CSS 파일이나 여기에 유지하되, JSX 에러 방지를 위해 하단 배치 */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #EADCD9; border-radius: 10px; }
      `}</style>
    </div>
  );
}