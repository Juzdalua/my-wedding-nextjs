import { Metadata } from "next";
import { Suspense } from "react";
import WeddingTabs from "./components/WeddingTabs";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
  };
}

const Start = async () => {
  return (
    <div className="bg-[#F8EDEB] min-h-screen pb-20">
      <Suspense
        fallback={
          <div className="text-center mt-20 font-serif">Loading...</div>
        }
      >
        <WeddingTabs />
      </Suspense>
    </div>
  );
};

export default Start;
