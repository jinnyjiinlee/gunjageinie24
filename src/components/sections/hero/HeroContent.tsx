'use client';

import { heroPhotos } from '@/data/posters';

interface HeroContentProps {
  daysLeft: number;
}

export default function HeroContent({ daysLeft }: HeroContentProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-20 relative z-10 text-center">
      <PromoBanner daysLeft={daysLeft} />
      <HeroTitle />
      <HeroSubtitle />
      <HeroCTAButtons />
      <FreeTrialCard />
      <PhotoGallery />
    </div>
  );
}

function PromoBanner({ daysLeft }: { daysLeft: number }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-8">
      <div className="inline-flex items-center gap-1.5 border border-[#00FF88]/50 text-[#00FF88] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-sm font-medium backdrop-blur-sm bg-[#00FF88]/5">
        <span className="w-1.5 h-1.5 bg-[#00FF88] rounded-full animate-pulse" />
        24시간 운영
      </div>
      <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#00FF88]/10 border border-[#00FF88]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
        <span className="text-[#00FF88] font-bold text-xs sm:text-base">D-{daysLeft}</span>
        <span className="text-gray-300 text-[10px] sm:text-sm">~12/21</span>
      </div>
    </div>
  );
}

function HeroTitle() {
  return (
    <h1 className="font-bold leading-tight mb-3 sm:mb-6 md:mb-8">
      <span className="text-white text-xl sm:text-4xl md:text-5xl lg:text-6xl block mb-1 sm:mb-2">
        집중이 필요한 당신을 위한
      </span>
      <span className="neon-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl">몰입의 공간</span>
    </h1>
  );
}

function HeroSubtitle() {
  return (
    <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
      <span className="hidden sm:inline">퇴근 후에도 집중할 수 있는 공간을 찾다가<br /></span>
      <span className="text-white font-medium">직접 만들었습니다</span>
    </p>
  );
}

function HeroCTAButtons() {
  return (
    <div className="flex flex-row gap-2 sm:gap-3 justify-center mb-6 sm:mb-10 md:mb-14">
      <a
        href="https://www.millionz.co.kr"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-[#00FF88] text-[#0A0A0A] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 hover:scale-105"
      >
        이용하기
        <span className="inline-block ml-1 sm:ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
      </a>
      <a
        href="#seats"
        className="border border-[#00FF88]/50 text-[#00FF88] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-medium text-xs sm:text-sm md:text-base hover:bg-[#00FF88]/10 hover:border-[#00FF88] transition-all duration-300"
      >
        둘러보기
      </a>
    </div>
  );
}

function FreeTrialCard() {
  return (
    <a
      href="https://map.naver.com/p/entry/place/2024921054?lng=127.0807503&lat=37.5589534&placePath=/booking"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#111111]/80 backdrop-blur-md border border-[#00FF88]/40 px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl neon-border animate-float hover:border-[#00FF88] transition-all cursor-pointer group"
    >
      <div className="text-[10px] sm:text-xs text-gray-400 mb-0.5">처음 오시는 분</div>
      <div className="text-base sm:text-xl font-bold text-[#00FF88] group-hover:scale-105 transition-transform">
        4시간 무료 체험
      </div>
    </a>
  );
}

function PhotoGallery() {
  const photos = [...heroPhotos, ...heroPhotos];

  return (
    <div className="mt-8 sm:mt-12 md:mt-16">
      <div className="relative overflow-hidden">
        <GradientOverlay />
        <div className="flex gap-3 sm:gap-4 animate-scroll">
          {photos.map((photo, index) => (
            <PhotoCard key={index} src={photo.src} label={photo.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

function GradientOverlay() {
  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
    </>
  );
}

function PhotoCard({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex-shrink-0 relative group">
      <div className="w-[200px] sm:w-[280px] md:w-[320px] aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4">
          <span className="bg-[#00FF88]/90 text-[#0A0A0A] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
