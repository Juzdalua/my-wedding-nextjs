import { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Next.js",
    default: "Loading...",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
