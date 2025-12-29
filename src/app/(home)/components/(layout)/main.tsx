"use client";

import { useState } from "react";
import TopLayout from "./top-layout";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { GlobalContextProvider } from "../../../../components/global-context";

export default function MainComponent({ children }: { children: React.ReactNode }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <GlobalContextProvider>
        <TopLayout onSideBarToggle={() => setIsSidebarVisible(!isSidebarVisible)} />
        <div className="flex flex-1">
          <Sidebar isVisible={isSidebarVisible} />
          <div className="relative flex justify-center mt-8 sm:mt-20 w-full overflow-hidden">{children}</div>
        </div>
        <Footer />
      </GlobalContextProvider>
    </div>
  );
}
