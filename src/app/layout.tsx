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
  keywords: ["군자역 스터디카페", "지니24", "24시간 스터디카페", "광진구 스터디카페", "능동 스터디카페", "프리미엄 스터디카페", "군자 독서실", "군자역 공부방", "모니터존 스터디카페"],
  metadataBase: new URL('https://gunjageinie24.vercel.app'),
  authors: [{ name: "군자역 지니24 스터디카페" }],
  creator: "군자역 지니24 스터디카페",
  publisher: "군자역 지니24 스터디카페",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Console 등록 후 추가
    // google: 'your-google-verification-code',
    // Naver 웹마스터 도구
    other: {
      'naver-site-verification': 'f4ac62e566c9fa4ce9e26c7df12cefb4c80e0d95',
    },
  },
  alternates: {
    canonical: 'https://gunjageinie24.vercel.app',
  },
  openGraph: {
    title: "군자역 지니24 스터디카페 | 24시간 프리미엄 스터디카페",
    description: "군자역 도보 3분, 24시간 운영. 서울대 시디즈 의자, 100cm 넓은 책상, 모니터존, 빈백존 완비.",
    url: 'https://gunjageinie24.vercel.app',
    type: "website",
    locale: "ko_KR",
    siteName: "군자역 지니24 스터디카페",
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: '군자역 지니24 스터디카페',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "군자역 지니24 스터디카페 | 24시간 프리미엄 스터디카페",
    description: "군자역 도보 3분, 24시간 운영. 서울대 시디즈 의자, 100cm 넓은 책상, 모니터존, 빈백존 완비.",
    images: ['/opengraph-image'],
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
