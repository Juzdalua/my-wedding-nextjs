import { Metadata } from "next";
import PayLetterCallbackComponent from "./components/callback";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Callback",
  };
}

const PayLetterCallbackPage = () => {
  return (
    <div>
      <Suspense fallback={<div>결제 정보를 확인 중입니다...</div>}>
        <PayLetterCallbackComponent />
      </Suspense>
    </div>
  );
};

export default PayLetterCallbackPage;
