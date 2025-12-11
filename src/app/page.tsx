'use client';

import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';

// 포스터 데이터 - 실제 포스터 스타일 미리보기
const posterSlides = [
  {
    id: 1,
    title: '2차 프로모션',
    subtitle: '~12/21까지',
    highlight: '시간권 50% 할인',
    category: '이벤트',
    bgGradient: 'from-[#FF6B6B] to-[#FF8E53]',
    href: '/posters/promo-2nd'
  },
  {
    id: 2,
    title: '가격표',
    subtitle: '2차 이벤트 특가',
    highlight: '1시간 1,000원~',
    category: '안내',
    bgGradient: 'from-[#00FF88] to-[#00CC6A]',
    href: '/posters/price-table'
  },
  {
    id: 3,
    title: '공지사항',
    subtitle: '이용 안내',
    highlight: '퇴실처리 필수',
    category: '안내',
    bgGradient: 'from-[#3B82F6] to-[#1D4ED8]',
    href: '/posters/notice'
  },
  {
    id: 4,
    title: '소통 공간',
    subtitle: '의견 환영',
    highlight: '휴게실 게시판',
    category: '소통',
    bgGradient: 'from-[#8B5CF6] to-[#6D28D9]',
    href: '/posters/communication'
  },
  {
    id: 5,
    title: '피드백 반영',
    subtitle: '여러분의 의견',
    highlight: '적극 반영중',
    category: '피드백',
    bgGradient: 'from-[#EC4899] to-[#BE185D]',
    href: '/posters/feedback'
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const couponRef = useRef<HTMLDivElement>(null);

  // 쿠폰 이미지 다운로드 함수
  const downloadCoupon = async () => {
    if (!couponRef.current) return;

    try {
      const canvas = await html2canvas(couponRef.current, {
        backgroundColor: '#0A0A0A',
        scale: 2, // 고해상도
      });

      const link = document.createElement('a');
      link.download = '지니24_충전권_쿠폰.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('쿠폰 다운로드 실패:', error);
      alert('쿠폰 다운로드에 실패했습니다. 캡쳐해서 사용해주세요!');
    }
  };

  useEffect(() => {
    const eventEndDate = new Date('2025-12-21T23:59:59');
    const today = new Date();
    const timeDiff = eventEndDate.getTime() - today.getTime();
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDaysLeft(days > 0 ? days : 0);
  }, []);

  // 포스터 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % posterSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="font-bold">
              <span className="text-white text-sm sm:text-lg md:text-xl">군자역</span>{' '}
              <span className="neon-text text-sm sm:text-lg md:text-xl">지니24</span>{' '}
              <span className="text-gray-400 text-xs sm:text-sm md:text-base">스터디카페</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#story" className="text-gray-400 hover:text-[#00FF88] transition">스토리</a>
              <a href="#about" className="text-gray-400 hover:text-[#00FF88] transition">소개</a>
              <a href="#seats" className="text-gray-400 hover:text-[#00FF88] transition">좌석</a>
              <a href="#price" className="text-gray-400 hover:text-[#00FF88] transition">가격표</a>
              <a href="#posters" className="text-gray-400 hover:text-[#00FF88] transition">포스터</a>
              <a href="#location" className="text-gray-400 hover:text-[#00FF88] transition">위치</a>
              <a
                href="https://www.millionz.co.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00FF88] text-black px-5 py-2 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition"
              >
                이용하기
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
              <div className="flex flex-col gap-4">
                <a href="#story" className="text-gray-400" onClick={() => setIsMenuOpen(false)}>스토리</a>
                <a href="#about" className="text-gray-400" onClick={() => setIsMenuOpen(false)}>소개</a>
                <a href="#seats" className="text-gray-400" onClick={() => setIsMenuOpen(false)}>좌석</a>
                <a href="#price" className="text-gray-400" onClick={() => setIsMenuOpen(false)}>가격표</a>
                <a href="#posters" className="text-gray-400" onClick={() => setIsMenuOpen(false)}>포스터</a>
                <a href="#location" className="text-gray-400" onClick={() => setIsMenuOpen(false)}>위치</a>
                <a
                  href="https://www.millionz.co.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00FF88] text-black px-5 py-2 rounded-full text-sm font-bold text-center"
                >
                  이용하기
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[250px] sm:w-[400px] md:w-[600px] h-[250px] sm:h-[400px] md:h-[600px] bg-[#00FF88]/10 rounded-full blur-[80px] sm:blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[180px] sm:w-[300px] md:w-[400px] h-[180px] sm:h-[300px] md:h-[400px] bg-[#00FF88]/5 rounded-full blur-[60px] sm:blur-[120px]" />
        </div>

        {/* Grid pattern - 모바일에서 더 연하게 */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Main Hero Content - Centered */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-20 relative z-10 text-center">
          {/* Promo Banner - 모바일 한 줄로 */}
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

          {/* Main Title - 모바일 더 크고 임팩트 있게 */}
          <h1 className="font-bold leading-tight mb-3 sm:mb-6 md:mb-8">
            <span className="text-white text-xl sm:text-4xl md:text-5xl lg:text-6xl block mb-1 sm:mb-2">집중이 필요한 당신을 위한</span>
            <span className="neon-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl">몰입의 공간</span>
          </h1>

          {/* Subtitle - 모바일 간결하게 */}
          <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            <span className="hidden sm:inline">퇴근 후에도 집중할 수 있는 공간을 찾다가<br /></span>
            <span className="text-white font-medium">직접 만들었습니다</span>
          </p>

          {/* CTA Buttons - 모바일 컴팩트 */}
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

          {/* Free Trial Card - 더 컴팩트하게 */}
          <a
            href="https://map.naver.com/p/entry/place/2024921054?lng=127.0807503&lat=37.5589534&placePath=/booking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#111111]/80 backdrop-blur-md border border-[#00FF88]/40 px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl neon-border animate-float hover:border-[#00FF88] transition-all cursor-pointer group"
          >
            <div className="text-[10px] sm:text-xs text-gray-400 mb-0.5">처음 오시는 분</div>
            <div className="text-base sm:text-xl font-bold text-[#00FF88] group-hover:scale-105 transition-transform">4시간 무료 체험</div>
          </a>

          {/* Hero Photo Gallery - 자동 슬라이딩 */}
          <div className="mt-8 sm:mt-12 md:mt-16">
            <div className="relative overflow-hidden">
              {/* 좌우 그라데이션 페이드 */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

              {/* 무한 슬라이딩 갤러리 */}
              <div className="flex gap-3 sm:gap-4 animate-scroll">
                {[
                  { src: '/images/study-zone.jpg', label: '학습존' },
                  { src: '/images/laptop-zone.jpg', label: '노트북존' },
                  { src: '/images/monitor-zone.jpg', label: '모니터존' },
                  { src: '/images/beanbag-zone.jpg', label: '빈백존' },
                  { src: '/images/study-zone.jpg', label: '학습존' },
                  { src: '/images/laptop-zone.jpg', label: '노트북존' },
                  { src: '/images/monitor-zone.jpg', label: '모니터존' },
                  { src: '/images/beanbag-zone.jpg', label: '빈백존' },
                ].map((photo, index) => (
                  <div key={index} className="flex-shrink-0 relative group">
                    <div className="w-[200px] sm:w-[280px] md:w-[320px] aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
                      <img
                        src={photo.src}
                        alt={photo.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4">
                        <span className="bg-[#00FF88]/90 text-[#0A0A0A] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold">
                          {photo.label}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - 모바일 숨김 */}
        <div className="mt-8 sm:mt-12 flex-col items-center gap-2 text-gray-500 hidden sm:flex">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#00FF88] to-transparent" />
        </div>
      </section>

      {/* Story Section - 웹에서 2열 그리드 */}
      <section id="story" className="py-10 sm:py-16 md:py-24 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              <span className="neon-text">나의 이야기</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-base">왜 스터디카페를 직접 만들게 되었는지</p>
          </div>

          {/* 2열 그리드 레이아웃 */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-5 md:gap-6 text-gray-300 leading-relaxed">
            {/* 시작 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-[#00FF88]/30 transition">
              <div className="flex items-center gap-2 mb-2 sm:mb-4">
                <span className="text-lg sm:text-2xl">🤔</span>
                <div className="text-[#00FF88] text-[10px] sm:text-sm font-medium">Chapter 1</div>
              </div>
              <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-3 text-white">퇴근 후, 갈 곳이 없었다</h3>
              <p className="text-[11px] sm:text-sm md:text-base">
                집에서는 집중이 안 되고, 카페는 시끄럽고...
                <span className="block mt-1.5 sm:mt-2 text-white font-medium text-xs sm:text-sm">"집중할 공간이 왜 없을까?"</span>
              </p>
            </div>

            {/* 깨달음 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-[#00FF88]/30 transition">
              <div className="flex items-center gap-2 mb-2 sm:mb-4">
                <span className="text-lg sm:text-2xl">💡</span>
                <div className="text-[#00FF88] text-[10px] sm:text-sm font-medium">Chapter 2</div>
              </div>
              <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-3 text-white">환경이 곧 생산성이다</h3>
              <p className="text-[11px] sm:text-sm md:text-base">
                의자 하나, 책상 너비가 집중력을 바꿉니다.
                <span className="text-white font-medium"> 직접 만들기로 했습니다.</span>
              </p>
            </div>

            {/* 철학 - 넓게 */}
            <div className="sm:col-span-2 bg-[#1A1A1A] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 hover:border-[#00FF88]/30 transition">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">✨</span>
                <div className="text-[#00FF88] text-xs sm:text-sm font-medium">Chapter 3</div>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-white">디테일에 집착하다</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-start gap-2 sm:gap-3 bg-[#0A0A0A] rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <span className="text-[#00FF88] text-base sm:text-lg">✓</span>
                  <p className="text-xs sm:text-sm">학습존은 <strong className="text-white">시디즈 의자</strong> · 노트북존은 편안한 오피스 의자</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 bg-[#0A0A0A] rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <span className="text-[#00FF88] text-base sm:text-lg">✓</span>
                  <p className="text-xs sm:text-sm">책상은 <strong className="text-white">100cm 이상</strong>. 교재, 노트북, 태블릿 동시에</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 bg-[#0A0A0A] rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <span className="text-[#00FF88] text-base sm:text-lg">✓</span>
                  <p className="text-xs sm:text-sm">화장실은 <strong className="text-white">내부에</strong>. 집중 흐름을 깨지 않도록</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 bg-[#0A0A0A] rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <span className="text-[#00FF88] text-base sm:text-lg">✓</span>
                  <p className="text-xs sm:text-sm"><strong className="text-white">빈백존</strong>에서 몰입하다가 잠시 휴식</p>
                </div>
              </div>
            </div>

            {/* 결과 - 넓게 */}
            <div className="sm:col-span-2 bg-gradient-to-r from-[#00FF88]/10 to-transparent border border-[#00FF88]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🎯</span>
                <div className="text-[#00FF88] text-xs sm:text-sm font-medium">현재</div>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-white">모든 자기계발러들의 아지트</h3>
              <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                직장인, 프리랜서, 이직 준비생, 자격증 공부하시는 분들뿐만 아니라
                집중이 필요한 <span className="text-white font-medium">학생분들도</span> 함께합니다.
                자연스럽게 성숙한 분위기가 형성되어 모두가 더 집중하게 됩니다.
              </p>
              <p className="text-white font-medium text-sm sm:text-base md:text-lg">
                "여기는 다르다"는 말을 들을 때마다, 만들길 잘했다고 생각합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 sm:py-16 md:py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* 몰입 강조 배너 */}
          <div className="bg-gradient-to-r from-[#00FF88]/20 to-transparent border border-[#00FF88]/30 rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-12 md:mb-16 text-center">
            <h2 className="text-base sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
              여러분의 <span className="neon-text">몰입</span>은 저희가 책임질게요
            </h2>
            <p className="text-gray-300 text-xs sm:text-base md:text-lg mb-1 sm:mb-2">
              <span className="text-white font-medium">몸만 오세요.</span> <span className="hidden sm:inline">집중할 수 있는 환경은 저희가 만들어 놨습니다.</span>
            </p>
            <p className="text-gray-500 text-[10px] sm:text-sm">
              직장인 · 이직준비생 · 프리랜서 · <span className="text-[#00FF88]">학생도 환영!</span>
            </p>
            <p className="text-gray-400 text-[10px] sm:text-xs mt-1 sm:mt-2">
              💡 성인 이용자가 많아 <span className="text-white">더 성숙하고 집중된 분위기</span>에서 공부할 수 있어요
            </p>
          </div>

          <div className="text-center mb-6 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              왜 <span className="neon-text">여기</span>여야 하나요?
            </h2>
            <p className="text-gray-400 text-xs sm:text-base max-w-2xl mx-auto">
              환경이 곧 생산성입니다.<span className="hidden sm:inline"> 책상의 너비, 의자의 편안함, 조명과 동선까지 작은 요소들이 집중 지속시간을 크게 좌우합니다.</span>
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
            {[
              { icon: '🪑', title: '맞춤 의자', titleFull: '좌석별 맞춤 의자', description: '학습존은 서울대 시디즈 의자, 노트북존은 편안한 오피스 의자로 구성했습니다.' },
              { icon: '📐', title: '넓은 책상', titleFull: '100cm+ 넓은 책상', description: '교재, 노트북, 태블릿을 동시에 펼쳐도 답답하지 않은 여유로운 공간.' },
              { icon: '📖', title: '독서대', titleFull: '독서대 3종 완비', description: '높낮이 조절형, 대형, 중형 독서대 - 원하는 스타일로 집중하세요.' },
              { icon: '🚽', title: '내부 화장실', titleFull: '내부 화장실', description: '집중 흐름을 깨지 않는 동선. 늦은 밤에도 안전하고 편리하게.' },
              { icon: '🍬', title: '무료 간식', titleFull: '무료 간식 & 음료', description: '다양한 간식과 차 종류를 무료로 제공. 휴게실에서 당 충전하세요.' },
              { icon: '🛋️', title: '빈백존', titleFull: '빈백존', description: '몰입하다가 잠시 쉬어가세요. 편안한 빈백에서 휴식 후 다시 집중!' },
            ].map((feature, index) => (
              <div key={index} className="bg-[#1A1A1A] border border-white/10 rounded-lg sm:rounded-2xl p-3 sm:p-5 md:p-8 text-center hover:border-[#00FF88]/50 transition group">
                <div className="text-xl sm:text-3xl md:text-4xl mb-1.5 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-[10px] sm:text-sm md:text-lg font-bold sm:mb-2 group-hover:text-[#00FF88] transition">
                  <span className="sm:hidden">{feature.title}</span>
                  <span className="hidden sm:inline">{feature.titleFull}</span>
                </h3>
                <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm hidden sm:block">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seats Section */}
      <section id="seats" className="py-10 sm:py-16 md:py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              어떤 <span className="neon-text">좌석</span>이 있나요?
            </h2>
            <p className="text-gray-400 text-xs sm:text-base">
              목적에 맞는 최적의 자리를 골라보세요
            </p>
          </div>

          <div className="space-y-3 sm:space-y-5 md:space-y-6">
            {[
              {
                zone: 'STUDY ZONE',
                title: '학습존',
                image: '/images/study-zone.jpg',
                descShort: '전 좌석 서울대 시디즈 의자, 100cm 이상 넓은 책상',
                description: '가장 오래 머무는 공간이기에 의자와 책상 품질을 최우선으로 고려했습니다. 전 좌석 서울대 시디즈 의자, 100cm 이상 넓은 책상으로 장시간 학습에도 편안한 환경을 제공합니다.',
                features: ['서울대 시디즈 의자', '100cm+ 넓은 책상', '미세 조절된 조명']
              },
              {
                zone: 'LAPTOP ZONE',
                title: '노트북존',
                image: '/images/laptop-zone.jpg',
                descShort: '직장인, 프리랜서를 위한 장시간 작업 구역',
                description: '직장인, 프리랜서를 위한 장시간 작업 구역입니다. 키보드 소리가 불편할 수 있어 학습 공간과 분리했습니다. 퇴근 후 보고서, PPT, 코딩 작업에 최적화되어 있습니다.',
                features: ['창가 좌석 배치', '넉넉한 전원 위치', '키보드 사용 OK']
              },
              {
                zone: 'MONITOR ZONE',
                title: '모니터존',
                image: '/images/monitor-zone.jpg',
                descShort: '24인치급 모니터 제공, 코딩/디자인 최적화',
                description: '24인치급 모니터가 제공되는 좌석입니다. 문서 작업, 코딩, 디자인 작업처럼 모니터 효율이 중요한 분들이 선호합니다. 사이드 프로젝트, 포트폴리오 제작에 최적화되어 있습니다.',
                features: ['24인치 모니터 제공', '기계식 키보드 사용 가능', '개발/디자인 작업 최적화']
              },
              {
                zone: 'BEANBAG ZONE',
                title: '빈백존',
                image: '/images/beanbag-zone.jpg',
                descShort: '노트북존 내 위치한 편안한 휴식 공간',
                description: '노트북존 안에 위치한 편안한 휴식 공간입니다. 집중력을 오래 유지하려면 짧은 휴식이 필수입니다. 부담 없이 잠시 쉬거나 아이디어를 정리하기 좋은 공간입니다.',
                features: ['편안한 빈백 4개', '잠시 눈 감고 휴식', '노트북존 내 위치']
              },
            ].map((seat, index) => (
              <div key={index} className="bg-[#1A1A1A] border border-white/10 rounded-xl sm:rounded-3xl overflow-hidden hover:border-[#00FF88]/30 transition group">
                <div className="grid md:grid-cols-2">
                  <div className={`relative min-h-[160px] sm:min-h-[250px] md:min-h-[400px] overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={seat.image}
                      alt={seat.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#1A1A1A]/50" />
                  </div>
                  <div className={`p-4 sm:p-6 md:p-8 lg:p-12 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="text-[10px] sm:text-sm text-[#00FF88] font-medium mb-0.5 sm:mb-2">{seat.zone}</div>
                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-3 md:mb-4">{seat.title}</h3>
                    <p className="text-gray-400 text-[11px] sm:text-sm md:text-base mb-3 sm:mb-5 md:mb-6 leading-relaxed">
                      <span className="sm:hidden">{seat.descShort}</span>
                      <span className="hidden sm:inline">{seat.description}</span>
                    </p>
                    <ul className="flex flex-wrap gap-1.5 sm:block sm:space-y-2 text-[10px] sm:text-sm">
                      {seat.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-1 sm:gap-2 text-gray-300 bg-white/5 sm:bg-transparent px-2 py-1 sm:p-0 rounded-full sm:rounded-none">
                          <span className="text-[#00FF88]">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Banner */}
      <section className="py-6 sm:py-12 md:py-16 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/10 to-transparent" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* 모바일: 컴팩트 레이아웃 */}
          <div className="sm:hidden">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <div className="text-[10px] text-[#00FF88] mb-1">2차 오픈 이벤트</div>
                <h3 className="text-xl font-bold">최대 <span className="neon-text">36%</span> 할인</h3>
              </div>
              <div className="bg-[#1A1A1A] border border-[#00FF88]/50 rounded-xl px-4 py-2 neon-border">
                <div className="text-2xl font-bold neon-text">D-{daysLeft}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-[#00FF88]/10 border border-[#00FF88]/30 px-3 py-1.5 rounded-full text-[10px] text-[#00FF88]">
                기간권 36%↓
              </div>
              <div className="bg-[#00FF88]/10 border border-[#00FF88]/30 px-3 py-1.5 rounded-full text-[10px] text-[#00FF88]">
                시간권 21%↓
              </div>
              <div className="bg-[#00FF88]/10 border border-[#00FF88]/30 px-3 py-1.5 rounded-full text-[10px] text-[#00FF88]">
                핫팩+아이워머
              </div>
            </div>
          </div>

          {/* 태블릿/데스크탑 */}
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-center">
            <div className="text-center sm:text-left">
              <div className="text-xs sm:text-sm text-[#00FF88] mb-1 sm:mb-2">2차 오픈 이벤트 진행중</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">최대 <span className="neon-text">36%</span> 할인</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                기간권 & 시간권 특별 할인 중!<br />
                12월 8일(월) ~ 12월 21일(일)
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                <div className="bg-[#00FF88]/10 border border-[#00FF88]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-[#00FF88]">
                  기간권 최대 36% 할인
                </div>
                <div className="bg-[#00FF88]/10 border border-[#00FF88]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-[#00FF88]">
                  시간권 최대 21% 할인
                </div>
              </div>
            </div>

            {/* D-Day Counter */}
            <div className="text-center">
              <div className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">이벤트 종료까지</div>
              <div className="bg-[#1A1A1A] border border-[#00FF88]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 neon-border inline-block sm:block">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold neon-text mb-1 sm:mb-2">D-{daysLeft}</div>
                <div className="text-xs sm:text-sm text-gray-500">놓치지 마세요!</div>
              </div>
            </div>

            <div className="text-center hidden md:block">
              <div className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">겨울맞이 이벤트</div>
              <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">🔥😴</div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">핫팩 & 아이워머<br />1개씩 무료 증정!</p>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-2">온열 안대로 잠시 눈 휴식을</p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price" className="py-10 sm:py-16 md:py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-12 md:mb-16">
            <div className="inline-block bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] px-3 py-1 sm:py-2 rounded-full text-[10px] sm:text-sm font-medium mb-2 sm:mb-4">
              2차 오픈 이벤트 진행중
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              얼마에 <span className="neon-text">이용</span>하나요?
            </h2>
            <p className="text-gray-400 text-xs sm:text-base">
              합리적인 가격, 프리미엄 환경
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
            {/* 단기권 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-8 sm:col-span-2 md:col-span-1">
              <h3 className="text-sm sm:text-lg font-bold mb-3 sm:mb-6 text-center">단기권 (1회 이용권)</h3>
              <div className="space-y-1.5 sm:space-y-3 md:space-y-4">
                {[
                  { time: '2시간', price: '3,000' },
                  { time: '4시간', price: '5,000' },
                  { time: '6시간', price: '7,000' },
                  { time: '8시간', price: '9,000' },
                  { time: '12시간', price: '10,000' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-1 sm:py-2 border-b border-white/10 last:border-0">
                    <span className="text-gray-400 text-xs sm:text-base">{item.time}</span>
                    <span className="font-semibold text-xs sm:text-base">{item.price}원</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 기간권 */}
            <div className="bg-[#1A1A1A] border-2 border-[#00FF88]/50 rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative neon-glow">
              <div className="absolute -top-2 sm:-top-3 right-3 sm:right-4 bg-[#00FF88] text-black text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full font-bold">
                최대 36% 할인
              </div>
              <h3 className="text-sm sm:text-lg font-bold mb-3 sm:mb-6 text-center text-[#00FF88]">기간권 (무제한 이용)</h3>
              <div className="space-y-1.5 sm:space-y-3 md:space-y-4">
                {[
                  { time: '3일', original: '30,000', sale: null },
                  { time: '1주', original: '50,000', sale: null },
                  { time: '2주', original: '80,000', sale: null },
                  { time: '4주', original: '140,000', sale: '90,000' },
                  { time: '8주', original: '260,000', sale: '160,000' },
                  { time: '12주', original: '360,000', sale: '230,000' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-1 sm:py-2 border-b border-white/10 last:border-0">
                    <span className="text-gray-400 text-xs sm:text-base">{item.time}</span>
                    <div className="text-right">
                      {item.sale ? (
                        <>
                          <span className="text-gray-600 line-through text-[9px] sm:text-sm mr-1 sm:mr-2">{item.original}</span>
                          <span className="font-bold text-[#00FF88] text-xs sm:text-base">{item.sale}원</span>
                        </>
                      ) : (
                        <span className="font-semibold text-xs sm:text-base">{item.original}원</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 장기권 - 강조 */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-2 border-[#FFD700]/50 rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative" style={{ boxShadow: '0 0 30px rgba(255, 215, 0, 0.15)' }}>
              <div className="absolute -top-2 sm:-top-3 left-3 sm:left-4 bg-[#FFD700] text-[#0A0A0A] text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full font-bold">
                BEST
              </div>
              <div className="absolute -top-2 sm:-top-3 right-3 sm:right-4 bg-[#00FF88] text-[#0A0A0A] text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full font-bold">
                최대 21% 할인
              </div>
              <h3 className="text-sm sm:text-lg font-bold mb-3 sm:mb-6 text-center text-[#FFD700]">충전권 (시간 충전)</h3>
              <div className="space-y-1.5 sm:space-y-3 md:space-y-4">
                {[
                  { time: '50시간', original: '70,000', sale: '55,000' },
                  { time: '100시간', original: '130,000', sale: '95,000' },
                  { time: '200시간', original: '240,000', sale: '185,000' },
                  { time: '300시간', original: '340,000', sale: '275,000' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-1.5 sm:py-3 border-b border-white/10 last:border-0">
                    <span className="text-white font-medium text-xs sm:text-base">{item.time}</span>
                    <div className="text-right">
                      <span className="text-gray-600 line-through text-[9px] sm:text-sm mr-1 sm:mr-2">{item.original}</span>
                      <span className="font-bold text-[#FFD700] text-xs sm:text-base">{item.sale}원</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-2 sm:mt-4 text-center">
                * 유효기간 365일 · 자유롭게 사용
              </p>
            </div>
          </div>

          {/* 홈페이지 전용 쿠폰 - 충전권 추가 혜택 */}
          <div id="coupon" className="mt-4 sm:mt-8 md:mt-10 bg-gradient-to-r from-[#FFD700]/20 via-[#FFD700]/10 to-[#00FF88]/10 border-2 border-[#FFD700]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00FF88]/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🎁</span>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-[#FFD700]">홈페이지 방문자 전용 혜택</h3>
              </div>

              <div className="bg-[#0A0A0A]/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-5 mb-3 sm:mb-4 border border-[#FFD700]/30">
                <div className="text-center mb-2 sm:mb-3">
                  <div className="text-[10px] sm:text-xs text-gray-400 mb-1">충전권 구매 시</div>
                  <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
                    시간 <span className="text-[#FFD700]">추가 증정!</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
                  <div className="bg-[#1A1A1A] rounded-lg p-2 sm:p-3 border border-white/10">
                    <div className="text-[10px] sm:text-xs text-gray-400">200시간 구매 시</div>
                    <div className="text-sm sm:text-lg font-bold text-[#FFD700]">+20시간</div>
                  </div>
                  <div className="bg-[#1A1A1A] rounded-lg p-2 sm:p-3 border border-[#FFD700]/50 relative">
                    <div className="absolute -top-1.5 -right-1.5 bg-[#F04452] text-white text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded-full font-bold">파격</div>
                    <div className="text-[10px] sm:text-xs text-gray-400">300시간 구매 시</div>
                    <div className="text-sm sm:text-lg font-bold text-[#FFD700]">+60시간</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-[10px] sm:text-sm text-gray-300 mb-3 sm:mb-4">
                  쿠폰을 다운로드해서 <span className="text-[#00FF88] font-bold">네이버 톡톡</span>으로 보내주세요!
                </p>

                {/* 쿠폰 이미지 영역 - 다운로드 대상 */}
                <div ref={couponRef} className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg sm:rounded-xl p-4 sm:p-5 text-[#0A0A0A] max-w-sm mx-auto relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#0A0A0A] rounded-r-full" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#0A0A0A] rounded-l-full" />

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
                </div>

                {/* 버튼 그룹 */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mt-3 sm:mt-4">
                  <button
                    onClick={downloadCoupon}
                    className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#0A0A0A] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition"
                  >
                    <span>📥</span> 쿠폰 다운로드
                  </button>
                  <a
                    href="https://talk.naver.com/ct/wc4u8w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#03C75A] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(3,199,90,0.5)] transition"
                  >
                    <span>💬</span> 네이버 톡톡 문의
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 기타 */}
          <div className="mt-3 sm:mt-6 md:mt-8 bg-[#1A1A1A] border border-white/10 rounded-lg sm:rounded-2xl p-3 sm:p-5 md:p-6 text-center">
            <span className="text-[11px] sm:text-sm md:text-base">
              <span className="text-gray-400">사물함: </span>
              <span className="font-semibold">2주 6,000원 / 4주 10,000원</span>
            </span>
          </div>
        </div>
      </section>

      {/* Millions App Section - 결제 앱 안내 */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-4 sm:mb-8">
            <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
              어떻게 <span className="neon-text">결제</span>하나요?
            </h3>
            <p className="text-gray-400 text-[10px] sm:text-sm">
              밀리언즈 앱으로 간편하게 이용하세요
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            {/* 모바일 레이아웃 */}
            <div className="sm:hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00FF88] to-[#00CC6A] rounded-lg flex items-center justify-center text-lg font-bold">
                  M
                </div>
                <div>
                  <div className="font-bold text-white text-sm">밀리언즈</div>
                  <div className="text-[10px] text-gray-400">좌석 예약 · QR 입장 · 결제</div>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://apps.apple.com/kr/app/%EB%B0%80%EB%A6%AC%EC%96%B8%EC%A6%88/id1584855498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-white text-black px-3 py-2 rounded-lg font-medium text-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.millionz.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-white text-black px-3 py-2 rounded-lg font-medium text-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play
                </a>
              </div>
            </div>

            {/* 데스크탑 레이아웃 */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-6 items-center">
              {/* 앱 정보 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00FF88] to-[#00CC6A] rounded-xl flex items-center justify-center text-2xl">
                    M
                  </div>
                  <div>
                    <div className="font-bold text-white text-base sm:text-lg">밀리언즈</div>
                    <div className="text-xs text-gray-400">스터디카페 결제 앱</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  앱 하나로 <strong className="text-white">좌석 예약부터 결제까지</strong> 한 번에!
                  QR코드 입장, 실시간 잔여석 확인, 이용권 구매 모두 가능해요.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#00FF88]/10 text-[#00FF88] px-3 py-1 rounded-full text-xs">QR 입장</span>
                  <span className="bg-[#00FF88]/10 text-[#00FF88] px-3 py-1 rounded-full text-xs">간편 결제</span>
                  <span className="bg-[#00FF88]/10 text-[#00FF88] px-3 py-1 rounded-full text-xs">실시간 현황</span>
                </div>
              </div>

              {/* 다운로드 버튼 */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://apps.apple.com/kr/app/%EB%B0%80%EB%A6%AC%EC%96%B8%EC%A6%88/id1584855498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-medium text-sm hover:bg-gray-100 transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.millionz.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-medium text-sm hover:bg-gray-100 transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poster Gallery Section - 실제 포스터 iframe 미리보기 */}
      <section id="posters" className="py-10 sm:py-16 md:py-24 bg-[#0A0A0A] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
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

          {/* 모바일: 가로 슬라이드 (자동 넘김) */}
          <div className="sm:hidden mb-6">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {posterSlides.map((poster) => (
                  <a
                    key={poster.id}
                    href={poster.href}
                    className="group block flex-shrink-0 w-full px-8"
                  >
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-white/10 relative bg-[#1A1A1A] max-w-[280px] mx-auto">
                      <iframe
                        src={poster.href}
                        className="w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none"
                        style={{ border: 'none' }}
                        loading="lazy"
                        title={poster.title}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-[#00FF88] text-black px-4 py-2 rounded-full text-xs font-bold">
                          보러가기 →
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <div className="text-xs text-[#00FF88]">{poster.category}</div>
                      <div className="text-sm font-medium text-white">{poster.title}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {/* 인디케이터 */}
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
          </div>

          {/* 데스크탑/태블릿: 그리드 */}
          <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {posterSlides.map((poster) => (
              <a
                key={poster.id}
                href={poster.href}
                className="group block"
              >
                <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white/10 relative bg-[#1A1A1A] group-hover:border-[#00FF88]/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] group-hover:scale-[1.02]">
                  <iframe
                    src={poster.href}
                    className="w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none"
                    style={{ border: 'none' }}
                    loading="lazy"
                    title={poster.title}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-[#00FF88] text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold">
                      보러가기 →
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <div className="text-[10px] sm:text-xs text-[#00FF88]">{poster.category}</div>
                  <div className="text-xs sm:text-sm font-medium text-white">{poster.title}</div>
                </div>
              </a>
            ))}
          </div>

          {/* 포스터 모음 바로가기 버튼 */}
          <div className="text-center">
            <a
              href="/posters"
              className="inline-flex items-center gap-2 bg-[#00FF88] text-[#0A0A0A] px-5 sm:px-8 py-2.5 sm:py-4 rounded-full font-bold text-xs sm:text-base hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition"
            >
              전체 포스터 보기 →
            </a>
            <p className="text-gray-500 text-[10px] sm:text-sm mt-2 sm:mt-4">
              PDF/JPG 다운로드 가능
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-10 sm:py-16 md:py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-5 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              <span className="neon-text">어디에 있나요?</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-base">
              군자역 5번 출구 도보 3분
            </p>
          </div>

          {/* 네이버 지도 */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-xl sm:rounded-3xl overflow-hidden mb-3 sm:mb-6 md:mb-8">
            <div className="h-[200px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
              <iframe
                src="https://map.naver.com/p/entry/place/2024921054?c=15.00,0,0,0,dh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* 정보 카드들 - 모바일에서 더 컴팩트하게 */}
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            <div className="bg-[#1A1A1A] border border-white/10 rounded-lg sm:rounded-2xl p-3 sm:p-5 md:p-6 hover:border-[#00FF88]/30 transition col-span-3 sm:col-span-1">
              <h3 className="font-bold mb-1.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base">
                <span className="text-base sm:text-xl">📍</span> 주소
              </h3>
              <p className="text-gray-300 text-[11px] sm:text-base mb-1.5 sm:mb-3">
                서울 광진구 능동로 330 5층<br />
                <span className="text-[10px] sm:text-sm text-gray-500">(군자역 5번 출구)</span>
              </p>
              <a
                href="https://map.naver.com/p/entry/place/2024921054?lng=127.0807503&lat=37.5589534&placePath=/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#00FF88] hover:underline text-[10px] sm:text-sm font-medium"
              >
                길찾기 →
              </a>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 rounded-lg sm:rounded-2xl p-3 sm:p-5 md:p-6 hover:border-[#00FF88]/30 transition">
              <h3 className="font-bold mb-1.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base">
                <span className="text-base sm:text-xl">🕐</span> <span className="hidden sm:inline">운영시간</span><span className="sm:hidden">운영</span>
              </h3>
              <p className="text-gray-300 text-[11px] sm:text-base">
                <span className="font-medium text-[#00FF88]">24시간</span><br />
                <span className="text-[10px] sm:text-sm text-gray-500">연중무휴</span>
              </p>
            </div>

            <a
              href="https://map.naver.com/p/entry/place/2024921054?lng=127.0807503&lat=37.5589534&placePath=/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00FF88] text-black rounded-lg sm:rounded-2xl p-3 sm:p-5 md:p-6 hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition col-span-2 sm:col-span-1 flex flex-col justify-center"
            >
              <h3 className="font-bold mb-0.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base">
                <span className="text-base sm:text-xl">📱</span> 예약
              </h3>
              <span className="text-[10px] sm:text-sm font-bold">네이버 예약 →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-4 sm:mb-8">
            <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
              더 <span className="neon-text">알고</span> 싶다면?
            </h3>
            <p className="text-gray-400 text-[10px] sm:text-sm">
              블로그에서 최신 소식을 확인하세요
            </p>
          </div>

          <a
            href="https://blog.naver.com/gunjastudycafe"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-[#1A1A1A] border border-white/10 rounded-lg sm:rounded-2xl p-3 sm:p-5 md:p-6 hover:border-[#00FF88]/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 sm:gap-4">
                <div className="w-9 sm:w-12 h-9 sm:h-12 bg-[#03C75A] rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-xl">
                  N
                </div>
                <div>
                  <div className="font-bold text-white text-xs sm:text-base mb-0.5">군자 지니24 스터디카페</div>
                  <div className="text-[10px] sm:text-sm text-gray-400">최신 소식 확인</div>
                </div>
              </div>
              <div className="text-[#00FF88] text-lg sm:text-2xl group-hover:translate-x-1 transition-transform">→</div>
            </div>

            <div className="mt-2.5 sm:mt-4 pt-2.5 sm:pt-4 border-t border-white/5 hidden sm:block">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="bg-[#00FF88]/10 text-[#00FF88] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs">#프로모션</span>
                <span className="bg-[#00FF88]/10 text-[#00FF88] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs">#이벤트</span>
                <span className="bg-[#00FF88]/10 text-[#00FF88] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs">#시설안내</span>
                <span className="bg-[#00FF88]/10 text-[#00FF88] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs">#업데이트</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">하고 싶은 <span className="neon-text">말</span> 있나요?</h3>
          <p className="text-gray-400 text-[11px] sm:text-base mb-4 sm:mb-8">
            좋은 점, 아쉬운 점 모두 환영해요
          </p>
          <div className="flex flex-row gap-2 sm:gap-3 justify-center">
            <a
              href="https://forms.gle/fSjeDn8TZ116JHXv5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00FF88] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-[11px] sm:text-sm hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition"
            >
              의견 남기기
            </a>
            <div className="border border-white/20 text-gray-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[11px] sm:text-sm">
              휴게실 게시판
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] border-t border-white/10 py-6 sm:py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* 모바일 Footer */}
          <div className="sm:hidden">
            <div className="text-center mb-4">
              <h4 className="text-sm font-bold mb-1">
                군자역 <span className="text-[#00FF88]">지니24</span>
              </h4>
              <p className="text-gray-500 text-[10px]">서울 광진구 능동로 330 5층</p>
            </div>
            <div className="flex justify-center gap-4 text-[10px] text-gray-500 mb-4">
              <a href="#about" className="hover:text-[#00FF88]">소개</a>
              <a href="#seats" className="hover:text-[#00FF88]">좌석</a>
              <a href="#price" className="hover:text-[#00FF88]">가격표</a>
              <a href="#location" className="hover:text-[#00FF88]">위치</a>
            </div>
            <div className="flex justify-center gap-3 mb-4">
              <a
                href="https://blog.naver.com/gunjastudycafe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] border border-white/10 px-3 py-1.5 rounded-full text-[10px] text-gray-400 hover:text-[#00FF88] transition"
              >
                블로그
              </a>
              <a
                href="https://forms.gle/fSjeDn8TZ116JHXv5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] border border-white/10 px-3 py-1.5 rounded-full text-[10px] text-gray-400 hover:text-[#00FF88] transition"
              >
                의견 남기기
              </a>
            </div>
            <div className="text-center text-[10px] text-gray-600">
              © 2024 군자역 지니24 스터디카페
            </div>
          </div>

          {/* 데스크탑 Footer */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4">
                  군자역 <span className="text-[#00FF88]">지니24</span> 스터디카페
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  성인이 퇴근 후에도 집중이 가능한가?<br />
                  이 질문에서 출발한 프리미엄 공간입니다.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3 sm:mb-4 text-gray-300 text-sm sm:text-base">바로가기</h4>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-500">
                  <a href="#about" className="block hover:text-[#00FF88] transition">소개</a>
                  <a href="#seats" className="block hover:text-[#00FF88] transition">좌석 안내</a>
                  <a href="#price" className="block hover:text-[#00FF88] transition">가격표</a>
                  <a href="#location" className="block hover:text-[#00FF88] transition">오시는 길</a>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-3 sm:mb-4 text-gray-300 text-sm sm:text-base">연락처</h4>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-500">
                  <p>서울 광진구 능동로 330 5층</p>
                  <a
                    href="https://blog.naver.com/gunjastudycafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#00FF88] transition"
                  >
                    네이버 블로그
                  </a>
                  <a
                    href="https://forms.gle/fSjeDn8TZ116JHXv5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#00FF88] transition"
                  >
                    고객의 소리
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-600">
              © 2024 군자역 지니24 스터디카페. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
