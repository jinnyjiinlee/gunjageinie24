'use client';

import { posterSlides } from '@/data/posters';

interface PosterGallerySectionProps {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

export default function PosterGallerySection({ currentSlide, setCurrentSlide }: PosterGallerySectionProps) {
  return (
    <section id="posters" className="py-10 sm:py-16 md:py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader />
        <MobileSlider currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
        <DesktopGrid />
        <ViewAllButton />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="text-center mb-5 sm:mb-8">
      <div className="inline-flex items-center gap-1.5 text-[#00FF88] text-[10px] sm:text-sm mb-2 sm:mb-4">
        <span className="w-1.5 h-1.5 bg-[#00FF88] rounded-full animate-pulse" />
        지니24 홍보물
      </div>
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
        <span className="neon-text">포스터</span> 갤러리
      </h2>
      <p className="text-gray-400 text-[10px] sm:text-sm">실제 제작한 포스터들</p>
    </div>
  );
}

function MobileSlider({ currentSlide, setCurrentSlide }: { currentSlide: number; setCurrentSlide: (slide: number) => void }) {
  return (
    <div className="sm:hidden mb-6">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {posterSlides.map((poster) => (
            <PosterSlide key={poster.id} poster={poster} />
          ))}
        </div>
      </div>
      <SlideIndicators currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
    </div>
  );
}

function PosterSlide({ poster }: { poster: typeof posterSlides[0] }) {
  return (
    <a href={poster.href} className="group block flex-shrink-0 w-full px-8">
      <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-white/10 relative bg-[#1A1A1A] max-w-[280px] mx-auto">
        <iframe
          src={poster.href}
          className="w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none"
          style={{ border: 'none' }}
          loading="lazy"
          title={poster.title}
        />
        <PosterOverlay />
      </div>
      <PosterLabel category={poster.category} title={poster.title} />
    </a>
  );
}

function SlideIndicators({ currentSlide, setCurrentSlide }: { currentSlide: number; setCurrentSlide: (slide: number) => void }) {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {posterSlides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            currentSlide === index ? 'bg-[#00FF88] w-6' : 'bg-white/30'
          }`}
        />
      ))}
    </div>
  );
}

function DesktopGrid() {
  return (
    <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8">
      {posterSlides.map((poster) => (
        <PosterCard key={poster.id} poster={poster} />
      ))}
    </div>
  );
}

function PosterCard({ poster }: { poster: typeof posterSlides[0] }) {
  return (
    <a href={poster.href} className="group block">
      <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white/10 relative bg-[#1A1A1A] group-hover:border-[#00FF88]/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] group-hover:scale-[1.02]">
        <iframe
          src={poster.href}
          className="w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none"
          style={{ border: 'none' }}
          loading="lazy"
          title={poster.title}
        />
        <PosterOverlay />
      </div>
      <PosterLabel category={poster.category} title={poster.title} />
    </a>
  );
}

function PosterOverlay() {
  return (
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <span className="bg-[#00FF88] text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold">
        보러가기 →
      </span>
    </div>
  );
}

function PosterLabel({ category, title }: { category: string; title: string }) {
  return (
    <div className="mt-2 sm:mt-3 text-center">
      <div className="text-[10px] sm:text-xs text-[#00FF88]">{category}</div>
      <div className="text-xs sm:text-sm font-medium text-white">{title}</div>
    </div>
  );
}

function ViewAllButton() {
  return (
    <div className="text-center">
      <a
        href="/posters"
        className="inline-flex items-center gap-2 bg-[#00FF88] text-[#0A0A0A] px-5 sm:px-8 py-2.5 sm:py-4 rounded-full font-bold text-xs sm:text-base hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition"
      >
        전체 포스터 보기 →
      </a>
      <p className="text-gray-500 text-[10px] sm:text-sm mt-2 sm:mt-4">PDF/JPG 다운로드 가능</p>
    </div>
  );
}
