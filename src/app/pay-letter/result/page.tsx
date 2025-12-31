import { Metadata } from "next";
import PayLetterResultComponent from "./components/result";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Result",
  };
}

const PayLetterResultPage = () => {
  return (
    <div>
      <Suspense fallback={<div>결과를 불러오는 중...</div>}>
        <PayLetterResultComponent />
      </Suspense>
    </div>
  );
};

export default PayLetterResultPage;
