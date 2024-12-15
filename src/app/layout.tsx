import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
