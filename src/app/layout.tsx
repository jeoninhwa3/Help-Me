import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Health-Protect-Me",
  description:
    "헬스케어 전문가가 내 옆에!  나만을 위한 식단과 운동을 동시에 추천해주는 건강 관리",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className}`}>{children}</body>
    </html>
  );
}
