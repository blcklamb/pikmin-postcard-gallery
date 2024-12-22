import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "피크민또 엽서 갤러리",
  description: "보내봐요 엽서대회 갤러리입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={`antialiased ${pretendard.className}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
