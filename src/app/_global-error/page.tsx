"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold text-red-500">Something went wrong</h1>
      <button
        className="mt-4 px-4 py-2 bg-gray-200 rounded"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
