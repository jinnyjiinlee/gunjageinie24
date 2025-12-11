'use client';

import { useState, useEffect } from 'react';
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

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navigation />
      <HeroSection daysLeft={daysLeft} />
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
  );
}
