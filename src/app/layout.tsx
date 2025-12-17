import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "군자역 지니24 스터디카페 | 24시간 프리미엄 스터디카페",
  description: "군자역 도보 3분, 24시간 운영. 서울대 시디즈 의자, 100cm 넓은 책상, 모니터존, 빈백존 완비. 성인 자기계발러와 학생 모두를 위한 프리미엄 스터디카페.",
  keywords: [
    // 브랜드 키워드
    "지니24", "군자 지니", "군자지니", "지니 스터디카페", "군자역 지니",
    // 지역별 키워드 - 역/지하철
    "군자역 스터디카페", "군자 스터디카페", "세종대 스터디카페", "세종대입구 스터디카페", "세종대학교 스터디카페",
    "어린이대공원 스터디카페", "건대입구 스터디카페", "구의 스터디카페", "2호선 스터디카페", "5호선 스터디카페",
    // 지역별 키워드 - 근처/주변
    "군자역 근처 스터디카페", "세종대 근처 스터디카페", "광진구 스터디카페", "능동 스터디카페", "광장동 스터디카페",
    // 24시간 조합 키워드
    "24시간 스터디카페", "군자역 24시간 스터디카페", "세종대 24시간 스터디카페", "군자 24시간 스터디카페",
    "광진구 24시간 스터디카페", "24시간 독서실", "24시 스터디카페",
    // 시설 유형별 키워드
    "프리미엄 스터디카페", "1인 스터디카페", "무인 스터디카페", "스터디룸", "독서실", "자습실", "공부방",
    // 지역 + 시설 유형 조합
    "군자역 독서실", "세종대 독서실", "광진구 독서실", "군자역 자습실", "세종대 자습실",
    "군자역 1인 스터디카페", "세종대 1인 스터디카페",
    // 추가 조합 키워드
    "군자 독서실", "세종대입구 독서실", "군자역 공부방", "세종대 공부방", "스카", "카공"
  ],
  metadataBase: new URL('https://gunjageinie24.vercel.app'),
  icons: {
    icon: '/icon',
  },
  verification: {
    other: {
      'naver-site-verification': 'f4ac62e566c9fa4ce9e26c7df12cefb4c80e0d95',
    },
  },
  openGraph: {
    title: "군자역 지니24 스터디카페",
    description: "24시간 프리미엄 스터디카페. 군자역 도보 3분.",
    type: "website",
    locale: "ko_KR",
    siteName: "군자역 지니24 스터디카페",
  },
  twitter: {
    card: 'summary_large_image',
    title: "군자역 지니24 스터디카페",
    description: "24시간 프리미엄 스터디카페. 군자역 도보 3분.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme="dark">
      <body className={`${notoSansKR.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
