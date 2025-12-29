import RootPage from "@/src/app/(home)/components/root/root-page";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Home",
};

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
