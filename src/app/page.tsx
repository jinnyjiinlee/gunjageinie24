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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "군자역 군자 스터디카페 지니24",
    "alternateName": "지니24",
    "image": "https://gunjageinie24.vercel.app/og-image.jpg",
    "description": "군자역 도보 3분, 세종대입구 도보 5분. 서울대 시디즈 의자, 100cm 넓은 책상, 모니터존, 빈백존 완비. 성인 자기계발러와 학생 모두를 위한 24시간 프리미엄 스터디카페.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "능동로 330 5층",
      "addressLocality": "광진구",
      "addressRegion": "서울",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.5589534,
      "longitude": 127.0807503
    },
    "url": "https://gunjageinie24.vercel.app",
    "openingHours": "Mo-Su 00:00-24:00",
    "priceRange": "₩₩",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "24시간 운영"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "무료 간식 및 음료"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "시디즈 의자"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "모니터존"
      }
    ],
    "keywords": "군자역 스터디카페, 세종대 스터디카페, 군자 스터디카페, 광진구 스터디카페, 24시간 스터디카페, 군자역 독서실, 세종대 독서실"
  };

  return (
    <>
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
