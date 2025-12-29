import RootPage from "@/src/app/(home)/components/root/root-page";
import { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home", 
  };
}

const Start = async () => {
  return (
    <div>
      <Suspense fallback={""}>
        <RootPage />
      </Suspense>
    </div>
  );
};

export default Start;
