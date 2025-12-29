"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 로깅 (선택)
    console.error(error);
  }, [error]);

  return (
    <html lang="ko">
      <body className="bg-[#F8EDEB] text-[#3A3A3A] flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">문제가 발생했습니다!</h2>
          <p className="mb-8">죄송합니다. 페이지를 새로고침해보세요.</p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
          >
            다시 시도
          </button>
        </div>
      </body>
    </html>
  );
}
