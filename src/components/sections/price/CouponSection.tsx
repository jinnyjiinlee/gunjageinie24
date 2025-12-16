'use client';

import { useRef } from 'react';
import { createCouponCanvas, isMobileDevice, openMobileCouponPage, downloadCouponPC } from '@/lib/coupon';

export default function CouponSection() {
  const couponRef = useRef<HTMLDivElement>(null);

  const handleDownloadCoupon = async () => {
    try {
      const canvas = createCouponCanvas();
      const dataUrl = canvas.toDataURL('image/png');
      if (isMobileDevice()) {
        openMobileCouponPage(dataUrl);
      } else {
        downloadCouponPC(dataUrl);
      }
    } catch (error) {
      console.error('쿠폰 다운로드 실패:', error);
      alert('쿠폰 이미지를 길게 눌러서 저장해주세요!');
    }
  };

  return (
    <div id="coupon" className="mt-4 sm:mt-8 md:mt-10 bg-gradient-to-r from-[#FFD700]/20 via-[#FFD700]/10 to-[#00FF88]/10 border-2 border-[#FFD700]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00FF88]/10 rounded-full blur-2xl" />
      <div className="relative z-10">
        <CouponHeader />
        <CouponBonusInfo />
        <CouponVisual couponRef={couponRef} />
        <CouponButtons onDownload={handleDownloadCoupon} />
      </div>
    </div>
  );
}

function CouponHeader() {
  return (
    <div className="text-center mb-3 sm:mb-4">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-xl sm:text-2xl">🎁</span>
        <h3 className="text-base sm:text-xl md:text-2xl font-bold text-[#FFD700]">
          홈페이지 방문자 전용 혜택
        </h3>
      </div>
      <div className="inline-block bg-[#F04452] text-white text-[10px] sm:text-xs px-3 py-1 rounded-full font-bold animate-pulse">
        선착순 10명 한정!
      </div>
    </div>
  );
}

function CouponBonusInfo() {
  return (
    <div className="bg-[#0A0A0A]/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-5 mb-3 sm:mb-4 border border-[#FFD700]/30">
      <BonusHeader />
      <BonusGrid />
    </div>
  );
}

function BonusHeader() {
  return (
    <div className="text-center mb-2 sm:mb-3">
      <div className="text-[10px] sm:text-xs text-gray-400 mb-1">충전권 구매 시</div>
      <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
        시간 <span className="text-[#FFD700]">추가 증정!</span>
      </div>
    </div>
  );
}

function BonusGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
      <div className="bg-[#1A1A1A] rounded-lg p-2 sm:p-3 border border-white/10">
        <div className="text-[10px] sm:text-xs text-gray-400">200시간 구매 시</div>
        <div className="text-sm sm:text-lg font-bold text-[#FFD700]">+20시간</div>
      </div>
      <div className="bg-[#1A1A1A] rounded-lg p-2 sm:p-3 border border-[#FFD700]/50 relative">
        <div className="absolute -top-1.5 -right-1.5 bg-[#F04452] text-white text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded-full font-bold">
          파격
        </div>
        <div className="text-[10px] sm:text-xs text-gray-400">300시간 구매 시</div>
        <div className="text-sm sm:text-lg font-bold text-[#FFD700]">+60시간</div>
      </div>
    </div>
  );
}

function CouponVisual({ couponRef }: { couponRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div className="text-center">
      <p className="text-[10px] sm:text-sm text-gray-300 mb-3 sm:mb-4">
        쿠폰을 다운로드해서 <span className="text-[#00FF88] font-bold">네이버 톡톡</span>으로 보내주세요!
      </p>
      <CouponCard couponRef={couponRef} />
    </div>
  );
}

function CouponCard({ couponRef }: { couponRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={couponRef} className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg sm:rounded-xl p-4 sm:p-5 text-[#0A0A0A] max-w-sm mx-auto relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#0A0A0A] rounded-r-full" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#0A0A0A] rounded-l-full" />
      <CouponCardContent />
    </div>
  );
}

function CouponCardContent() {
  return (
    <div className="border-2 border-dashed border-[#0A0A0A]/30 rounded-lg p-3 sm:p-4">
      <div className="text-[11px] sm:text-xs font-medium mb-1">군자역 지니24 스터디카페</div>
      <div className="text-lg sm:text-2xl font-black mb-2">충전권 보너스 쿠폰</div>
      <div className="bg-[#0A0A0A]/10 rounded-lg p-2 mb-2">
        <div className="text-xs sm:text-sm font-bold">200시간 → +20시간 추가</div>
        <div className="text-xs sm:text-sm font-bold">300시간 → +60시간 추가 🔥</div>
      </div>
      <div className="text-[10px] sm:text-xs opacity-80">홈페이지 방문자 한정 혜택</div>
      <div className="text-[9px] sm:text-[10px] mt-1 opacity-60">네이버 톡톡으로 이 쿠폰을 보내주세요!</div>
    </div>
  );
}

function CouponButtons({ onDownload }: { onDownload: () => void }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mt-3 sm:mt-4">
      <button
        onClick={onDownload}
        className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0A0A0A] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition"
      >
        <span>📥</span> 쿠폰 다운로드
      </button>
      <a
        href="https://talk.naver.com/ct/wh8csvl?frm=mnmb&frm=nmb_detail#nafullscreen"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-[#03C75A] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(3,199,90,0.5)] transition"
      >
        <span>💬</span> 네이버 톡톡 문의
      </a>
    </div>
  );
}
