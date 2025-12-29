"use client";

import Link from "next/link";
import { useGlobalContext } from "../../../../components/global-context";
import ToggleHambugerButton from "./toggle-button";

const TopLayout = ({ onSideBarToggle }: { onSideBarToggle: () => void }) => {
  const { token, setToken } = useGlobalContext();

  return (
    <div className="h-20 flex items-center justify-between px-6 bg-white/70 backdrop-blur-sm">
      {/* Left */}
      {/* <ToggleHambugerButton onSideBarToggle={onSideBarToggle} /> */}

      {/* Right */}
      <div className="flex w-full justify-end">
        <ul className="menu menu-horizontal content-center">
          <li>
            <Link href={`/pay-letter`}>Pay-Letter</Link>
          </li>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/room`}>Room</Link>
          </li>
          <li>
            <Link href={`/auth/connect`} className={token ? "hidden" : ""}>
              Connect
            </Link>
          </li>
          <li>
            <Link href={`/auth/disconnect`} className={token ? "" : "hidden"}>
              Disconnect
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopLayout;
