'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { posterSlides } from '@/data/posters';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import StorySection from '@/components/sections/StorySection';
import AboutSection from '@/components/sections/AboutSection';
import SeatsSection from '@/components/sections/SeatsSection';
import EventBanner from '@/components/sections/EventBanner';
import PriceSection from '@/components/sections/PriceSection';
import MillionsAppSection from '@/components/sections/MillionsAppSection';
import PosterGallerySection from '@/components/sections/PosterGallerySection';
import LocationSection from '@/components/sections/LocationSection';
import BlogSection from '@/components/sections/BlogSection';
import FeedbackSection from '@/components/sections/FeedbackSection';
import TargetSection from '@/components/sections/TargetSection';
import ParticleBackground from '@/components/ui/ParticleBackground';

export default function Home() {
  const [daysLeft, setDaysLeft] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // 구조화된 데이터 (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://gunjageinie24.vercel.app",
    "name": "군자역 지니24 스터디카페",
    "alternateName": "지니24",
    "description": "군자역 도보 3분, 24시간 운영하는 프리미엄 스터디카페. 서울대 시디즈 의자, 100cm 넓은 책상, 모니터존, 빈백존 완비.",
    "image": "https://gunjageinie24.vercel.app/opengraph-image",
    "url": "https://gunjageenie24.vercel.app",
    "telephone": "+82-2-123-4567",
    "priceRange": "₩₩",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "능동로 217",
      "addressLocality": "광진구",
      "addressRegion": "서울",
      "postalCode": "05029",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.5589534,
      "longitude": 127.0807503
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://blog.naver.com/gunjageinie24",
      "https://map.naver.com/p/entry/place/2024921054"
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "24시간 운영",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "무료 WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "모니터 제공",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "프리미엄 의자",
        "value": true
      }
    ],
    "keywords": "군자역 스터디카페, 지니24, 24시간 스터디카페, 광진구 스터디카페, 능동 스터디카페, 프리미엄 스터디카페, 군자 독서실, 모니터존, 빈백존"
  };

  useEffect(() => {
    const eventEndDate = new Date('2025-12-21T23:59:59');
    const today = new Date();
    const timeDiff = eventEndDate.getTime() - today.getTime();
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDaysLeft(days > 0 ? days : 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % posterSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 구조화된 데이터 (JSON-LD) - SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-[#0A0A0A] text-white relative">
        <ParticleBackground />
        <Navigation />
        <HeroSection daysLeft={daysLeft} />
        <TargetSection />
        <StorySection />
        <AboutSection />
        <SeatsSection />
        <EventBanner daysLeft={daysLeft} />
        <PriceSection />
        <MillionsAppSection />
        <PosterGallerySection
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
        <LocationSection />
        <BlogSection />
        <FeedbackSection />
        <Footer />
      </div>
    </>
  );
}
