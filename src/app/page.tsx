'use client';

import { useState, useEffect } from 'react';

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-lg md:text-xl font-bold">
              <span className="text-white">군자역</span>{' '}
              <span className="neon-text">지니24</span>{' '}
              <span className="text-white text-sm md:text-base">스터디카페</span>
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
                href="https://map.naver.com/p/entry/place/2024921054?lng=127.0807503&lat=37.5589534&placePath=/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00FF88] text-black px-5 py-2 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition"
              >
                좌석 예약
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
                  href="https://map.naver.com/p/entry/place/2024921054?lng=127.0807503&lat=37.5589534&placePath=/booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00FF88] text-black px-5 py-2 rounded-full text-sm font-bold text-center"
                >
                  좌석 예약
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00FF88]/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00FF88]/5 rounded-full blur-[120px]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Main Hero Content - Centered */}
        <div className="max-w-6xl mx-auto px-4 py-20 relative z-10 text-center">
          {/* Promo Banner */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-8">
            <div className="inline-flex items-center gap-2 border border-[#00FF88]/50 text-[#00FF88] px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-sm bg-[#00FF88]/5">
              <span className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
              24시간 연중무휴 운영
            </div>
            <div className="inline-flex items-center gap-3 bg-[#00FF88]/10 border border-[#00FF88]/30 px-5 py-2.5 rounded-full backdrop-blur-sm">
              <span className="text-[#00FF88] font-bold text-lg">D-{daysLeft}</span>
              <span className="text-gray-300 text-sm">2차 프로모션 진행중 · ~12/21</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="text-white animate-fade-in-up">집중이 필요한 당신을 위한</span><br />
            <span className="neon-text text-5xl sm:text-6xl md:text-8xl animate-text-glow">몰입의 공간</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            퇴근 후에도 집중할 수 있는 공간을 찾다가<br />
            <span className="text-white font-medium">직접 만들었습니다</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16">
            <a
              href="https://map.naver.com/p/entry/place/2024921054?lng=127.0807503&lat=37.5589534&placePath=/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#00FF88] text-[#0A0A0A] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] transition-all duration-300 hover:scale-105"
            >
              지금 바로 예약하기
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#seats"
              className="border-2 border-[#00FF88]/50 text-[#00FF88] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-medium text-base sm:text-lg hover:bg-[#00FF88]/10 hover:border-[#00FF88] transition-all duration-300 animate-border-flow"
            >
              공간 둘러보기
            </a>
          </div>

          {/* Free Trial Card - Floating style */}
          <div className="inline-block bg-[#111111]/80 backdrop-blur-md border border-[#00FF88]/40 p-6 sm:p-8 rounded-3xl neon-border max-w-md mx-auto animate-float animate-glow-pulse">
            <div className="text-sm text-gray-400 mb-2 tracking-wide">처음 오시는 분들께</div>
            <div className="text-2xl sm:text-3xl font-bold text-[#00FF88] mb-3">4시간 무료 체험권</div>
            <div className="text-gray-500 text-sm sm:text-base">직접 경험해보고 결정하세요.<br />자신있습니다.</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#00FF88] to-transparent" />
        </div>
      </section>

      {/* Story Section - 웹에서 2열 그리드 */}
      <section id="story" className="py-24 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="neon-text">나의 이야기</span>
            </h2>
            <p className="text-gray-400">왜 스터디카페를 직접 만들게 되었는지</p>
          </div>

          {/* 2열 그리드 레이아웃 */}
          <div className="grid md:grid-cols-2 gap-6 text-gray-300 leading-relaxed">
            {/* 시작 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-[#00FF88]/30 transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🤔</span>
                <div className="text-[#00FF88] text-sm font-medium">Chapter 1</div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-white">퇴근 후, 갈 곳이 없었다</h3>
              <p className="text-sm md:text-base">
                집에서는 집중이 안 되고, 카페는 시끄럽고, 기존 스터디카페는 분위기가 맞지 않았습니다.
                <span className="block mt-2 text-white font-medium">"제대로 집중할 수 있는 공간이 왜 없을까?"</span>
              </p>
            </div>

            {/* 깨달음 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-[#00FF88]/30 transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💡</span>
                <div className="text-[#00FF88] text-sm font-medium">Chapter 2</div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-white">환경이 곧 생산성이다</h3>
              <p className="text-sm md:text-base">
                의자 하나, 책상 너비 10cm가 하루 집중력을 완전히 바꿔놓습니다.
                그래서 <span className="text-white font-medium">내가 가고 싶은 스터디카페</span>를 직접 만들기로 했습니다.
              </p>
            </div>

            {/* 철학 - 넓게 */}
            <div className="md:col-span-2 bg-[#1A1A1A] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-[#00FF88]/30 transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✨</span>
                <div className="text-[#00FF88] text-sm font-medium">Chapter 3</div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4 text-white">디테일에 집착하다</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 bg-[#0A0A0A] rounded-xl p-4">
                  <span className="text-[#00FF88] text-lg">✓</span>
                  <p className="text-sm">학습존은 <strong className="text-white">시디즈 의자</strong> · 노트북존은 편안한 오피스 의자</p>
                </div>
                <div className="flex items-start gap-3 bg-[#0A0A0A] rounded-xl p-4">
                  <span className="text-[#00FF88] text-lg">✓</span>
                  <p className="text-sm">책상은 <strong className="text-white">100cm 이상</strong>. 교재, 노트북, 태블릿 동시에</p>
                </div>
                <div className="flex items-start gap-3 bg-[#0A0A0A] rounded-xl p-4">
                  <span className="text-[#00FF88] text-lg">✓</span>
                  <p className="text-sm">화장실은 <strong className="text-white">내부에</strong>. 집중 흐름을 깨지 않도록</p>
                </div>
                <div className="flex items-start gap-3 bg-[#0A0A0A] rounded-xl p-4">
                  <span className="text-[#00FF88] text-lg">✓</span>
                  <p className="text-sm"><strong className="text-white">빈백존</strong>에서 몰입하다가 잠시 휴식</p>
                </div>
              </div>
            </div>

            {/* 결과 - 넓게 */}
            <div className="md:col-span-2 bg-gradient-to-r from-[#00FF88]/10 to-transparent border border-[#00FF88]/30 rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎯</span>
                <div className="text-[#00FF88] text-sm font-medium">현재</div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-white">모든 자기계발러들의 아지트</h3>
              <p className="text-sm md:text-base mb-4">
                직장인, 프리랜서, 이직 준비생, 자격증 공부하시는 분들뿐만 아니라
                집중이 필요한 <span className="text-white font-medium">학생분들도</span> 함께합니다.
                자연스럽게 성숙한 분위기가 형성되어 모두가 더 집중하게 됩니다.
              </p>
              <p className="text-white font-medium text-lg">
                "여기는 다르다"는 말을 들을 때마다, 만들길 잘했다고 생각합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4">
          {/* 몰입 강조 배너 */}
          <div className="bg-gradient-to-r from-[#00FF88]/20 to-transparent border border-[#00FF88]/30 rounded-3xl p-8 mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              여러분의 <span className="neon-text">몰입</span>은 저희가 책임질게요
            </h2>
            <p className="text-gray-300 text-lg mb-2">
              <span className="text-white font-medium">몸만 오세요.</span> 집중할 수 있는 환경은 저희가 만들어 놨습니다.
            </p>
            <p className="text-gray-500 text-sm">
              직장인 · 이직준비생 · 대학생 · 고시생 · 자격증 · 프리랜서 모두 환영합니다
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              왜 <span className="neon-text">군자 지니24</span>인가요?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              환경이 곧 생산성입니다.
              책상의 너비, 의자의 편안함, 조명과 동선까지 작은 요소들이 집중 지속시간을 크게 좌우합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🪑', title: '좌석별 맞춤 의자', description: '학습존은 서울대 시디즈 의자, 노트북존은 편안한 오피스 의자로 구성했습니다.' },
              { icon: '📐', title: '100cm+ 넓은 책상', description: '교재, 노트북, 태블릿을 동시에 펼쳐도 답답하지 않은 여유로운 공간.' },
              { icon: '🛋️', title: '빈백존', description: '몰입하다가 잠시 쉬어가세요. 편안한 빈백에서 휴식 후 다시 집중!' },
              { icon: '🚽', title: '내부 화장실', description: '집중 흐름을 깨지 않는 동선. 늦은 밤에도 안전하고 편리하게.' },
              { icon: '🍬', title: '무료 간식 & 음료', description: '다양한 간식과 차 종류를 무료로 제공. 휴게실에서 당 충전하세요.' },
              { icon: '🕐', title: '24시간 365일', description: '언제든 원할 때 공부할 수 있는 24시간 연중무휴 운영.' },
            ].map((feature, index) => (
              <div key={index} className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:border-[#00FF88]/50 transition group hover-lift tilt-card">
                <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-[#00FF88] transition">{feature.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seats Section */}
      <section id="seats" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="neon-text">좌석별</span> 특징
            </h2>
            <p className="text-gray-400">
              목적에 맞는 최적의 좌석을 선택하세요
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                zone: 'STUDY ZONE',
                title: '학습존',
                image: '/images/study-zone.jpg',
                description: '가장 오래 머무는 공간이기에 의자와 책상 품질을 최우선으로 고려했습니다. 전 좌석 서울대 시디즈 의자, 100cm 이상 넓은 책상으로 장시간 학습에도 편안한 환경을 제공합니다.',
                features: ['서울대 시디즈 의자', '100cm+ 넓은 책상', '미세 조절된 조명']
              },
              {
                zone: 'LAPTOP ZONE',
                title: '노트북존',
                image: '/images/laptop-zone.jpg',
                description: '직장인, 프리랜서를 위한 장시간 작업 구역입니다. 키보드 소리가 불편할 수 있어 학습 공간과 분리했습니다. 퇴근 후 보고서, PPT, 코딩 작업에 최적화되어 있습니다.',
                features: ['창가 좌석 배치', '넉넉한 전원 위치', '키보드 사용 OK']
              },
              {
                zone: 'MONITOR ZONE',
                title: '모니터존',
                image: '/images/monitor-zone.jpg',
                description: '24인치급 모니터가 제공되는 좌석입니다. 문서 작업, 코딩, 디자인 작업처럼 모니터 효율이 중요한 분들이 선호합니다. 사이드 프로젝트, 포트폴리오 제작에 최적화되어 있습니다.',
                features: ['24인치 모니터 제공', '기계식 키보드 사용 가능', '개발/디자인 작업 최적화']
              },
              {
                zone: 'BEANBAG ZONE',
                title: '빈백존',
                image: '/images/beanbag-zone.jpg',
                description: '노트북존 안에 위치한 편안한 휴식 공간입니다. 집중력을 오래 유지하려면 짧은 휴식이 필수입니다. 부담 없이 잠시 쉬거나 아이디어를 정리하기 좋은 공간입니다.',
                features: ['편안한 빈백 4개', '잠시 눈 감고 휴식', '노트북존 내 위치']
              },
            ].map((seat, index) => (
              <div key={index} className="bg-[#1A1A1A] border border-white/10 rounded-3xl overflow-hidden hover:border-[#00FF88]/30 transition group">
                <div className="grid md:grid-cols-2">
                  <div className={`relative min-h-[300px] md:min-h-[400px] overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={seat.image}
                      alt={seat.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#1A1A1A]/50" />
                  </div>
                  <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="text-sm text-[#00FF88] font-medium mb-2">{seat.zone}</div>
                    <h3 className="text-2xl font-bold mb-4">{seat.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{seat.description}</p>
                    <ul className="space-y-2 text-sm">
                      {seat.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
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
      <section className="py-16 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/10 to-transparent" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="text-sm text-[#00FF88] mb-2">2차 오픈 이벤트 진행중</div>
              <h3 className="text-3xl font-bold mb-4">최대 <span className="neon-text">36%</span> 할인</h3>
              <p className="text-gray-400 mb-6">
                기간권 & 시간권 특별 할인 중!<br />
                12월 8일(월) ~ 12월 21일(일)
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-[#00FF88]/10 border border-[#00FF88]/30 px-4 py-2 rounded-full text-sm text-[#00FF88]">
                  기간권 최대 36% 할인
                </div>
                <div className="bg-[#00FF88]/10 border border-[#00FF88]/30 px-4 py-2 rounded-full text-sm text-[#00FF88]">
                  시간권 최대 21% 할인
                </div>
              </div>
            </div>

            {/* D-Day Counter */}
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">이벤트 종료까지</div>
              <div className="bg-[#1A1A1A] border border-[#00FF88]/50 rounded-2xl p-8 neon-border">
                <div className="text-6xl font-bold neon-text mb-2">D-{daysLeft}</div>
                <div className="text-sm text-gray-500">놓치지 마세요!</div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-sm text-gray-400 mb-3">겨울맞이 이벤트</div>
              <div className="text-5xl mb-4">🔥😴</div>
              <p className="text-lg text-gray-300">핫팩 & 아이워머<br />1개씩 무료 증정!</p>
              <p className="text-xs text-gray-500 mt-2">온열 안대로 잠시 눈 휴식을</p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] px-4 py-2 rounded-full text-sm font-medium mb-4">
              2차 오픈 이벤트 진행중
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="neon-text">가격표</span>
            </h2>
            <p className="text-gray-400">
              합리적인 가격으로 프리미엄 환경을 경험하세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 단기권 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-8">
              <h3 className="text-lg font-bold mb-6 text-center">단기권 (1회 이용권)</h3>
              <div className="space-y-4">
                {[
                  { time: '2시간', price: '3,000' },
                  { time: '4시간', price: '5,000' },
                  { time: '6시간', price: '7,000' },
                  { time: '8시간', price: '9,000' },
                  { time: '12시간', price: '10,000' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-gray-400">{item.time}</span>
                    <span className="font-semibold">{item.price}원</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 기간권 */}
            <div className="bg-[#1A1A1A] border-2 border-[#00FF88]/50 rounded-3xl p-8 relative neon-glow">
              <div className="absolute -top-3 right-4 bg-[#00FF88] text-black text-xs px-3 py-1 rounded-full font-bold">
                최대 36% 할인
              </div>
              <h3 className="text-lg font-bold mb-6 text-center text-[#00FF88]">기간권 (무제한 이용)</h3>
              <div className="space-y-4">
                {[
                  { time: '3일', original: '30,000', sale: null },
                  { time: '1주', original: '50,000', sale: null },
                  { time: '2주', original: '80,000', sale: null },
                  { time: '4주', original: '140,000', sale: '90,000' },
                  { time: '8주', original: '260,000', sale: '160,000' },
                  { time: '12주', original: '360,000', sale: '230,000' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-gray-400">{item.time}</span>
                    <div className="text-right">
                      {item.sale ? (
                        <>
                          <span className="text-gray-600 line-through text-sm mr-2">{item.original}</span>
                          <span className="font-bold text-[#00FF88]">{item.sale}원</span>
                        </>
                      ) : (
                        <span className="font-semibold">{item.original}원</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 장기권 */}
            <div className="bg-[#1A1A1A] border-2 border-[#00FF88]/30 rounded-3xl p-8 relative">
              <div className="absolute -top-3 right-4 bg-[#00FF88] text-[#0A0A0A] text-xs px-3 py-1 rounded-full font-bold">
                최대 21% 할인
              </div>
              <h3 className="text-lg font-bold mb-6 text-center">장기권 (시간 충전권)</h3>
              <div className="space-y-4">
                {[
                  { time: '50시간', original: '70,000', sale: '55,000' },
                  { time: '100시간', original: '130,000', sale: '95,000' },
                  { time: '200시간', original: '240,000', sale: '185,000' },
                  { time: '300시간', original: '340,000', sale: '275,000' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                    <span className="text-white font-medium">{item.time}</span>
                    <div className="text-right">
                      <span className="text-gray-600 line-through text-sm mr-2">{item.original}</span>
                      <span className="font-bold text-[#00FF88]">{item.sale}원</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                * 유효기간 365일
              </p>
            </div>
          </div>

          {/* 기타 */}
          <div className="mt-8 bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 text-center">
            <span className="text-gray-400">사물함: </span>
            <span className="font-semibold">2주 6,000원 / 4주 10,000원</span>
            <span className="text-gray-600 mx-4">|</span>
            <span className="text-gray-400">6개월 장기권, 현금 결제는 따로 연락주세요 :)</span>
          </div>
        </div>
      </section>

      {/* Poster Gallery Section - 실제 포스터 iframe 미리보기 */}
      <section id="posters" className="py-24 bg-[#111111] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-[#00FF88] text-sm mb-4">
              <span className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
              지니24가 직접 만드는 홍보물
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="neon-text">포스터</span> 갤러리
            </h2>
            <p className="text-gray-400 text-sm">실제 제작한 포스터들을 확인하세요</p>
          </div>

          {/* 실제 포스터 미리보기 그리드 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {posterSlides.map((poster) => (
              <a
                key={poster.id}
                href={poster.href}
                className="group block"
              >
                {/* 포스터 iframe 미리보기 */}
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-white/10 relative bg-[#1A1A1A] group-hover:border-[#00FF88]/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]">
                  {/* iframe으로 실제 포스터 미리보기 */}
                  <iframe
                    src={poster.href}
                    className="w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none"
                    style={{ border: 'none' }}
                    loading="lazy"
                    title={poster.title}
                  />

                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="bg-[#00FF88] text-[#0A0A0A] px-4 py-2 rounded-full text-xs font-bold">
                      자세히 보기 →
                    </span>
                  </div>
                </div>

                {/* 포스터 정보 */}
                <div className="mt-3 text-center">
                  <div className="text-xs text-[#00FF88] mb-1">{poster.category}</div>
                  <div className="text-sm font-medium text-white">{poster.title}</div>
                </div>
              </a>
            ))}
          </div>

          {/* 포스터 모음 바로가기 버튼 */}
          <div className="text-center">
            <a
              href="/posters"
              className="inline-flex items-center gap-2 bg-[#00FF88] text-[#0A0A0A] px-8 py-4 rounded-full font-bold hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition"
            >
              전체 포스터 모음 보기 →
            </a>
            <p className="text-gray-500 text-sm mt-4">
              PDF/JPG 다운로드 가능 · 자유롭게 활용하세요
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="neon-text">오시는 길</span>
            </h2>
            <p className="text-gray-400">
              군자역 5번 출구에서 도보 3분
            </p>
          </div>

          {/* 네이버 지도 크게 */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl overflow-hidden mb-8">
            <div className="h-[400px] md:h-[500px]">
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

          {/* 정보 카드들 */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 hover:border-[#00FF88]/30 transition">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-xl">📍</span> 주소
              </h3>
              <p className="text-gray-300 mb-3">
                서울 광진구 능동로 330 5층<br />
                <span className="text-sm text-gray-500">(군자역 5번 출구 도보 3분)</span>
              </p>
              <a
                href="https://map.naver.com/p/entry/place/2024921054?lng=127.0807503&lat=37.5589534&placePath=/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00FF88] hover:underline text-sm font-medium"
              >
                네이버 지도에서 길찾기 →
              </a>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 hover:border-[#00FF88]/30 transition">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-xl">🕐</span> 운영시간
              </h3>
              <p className="text-gray-300">
                <span className="font-medium text-[#00FF88]">24시간 연중무휴</span><br />
                <span className="text-sm text-gray-500">언제든 원할 때 이용 가능합니다</span>
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 hover:border-[#00FF88]/30 transition">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-xl">📱</span> 예약 방법
              </h3>
              <a
                href="https://map.naver.com/p/entry/place/2024921054?lng=127.0807503&lat=37.5589534&placePath=/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#00FF88] text-black px-6 py-3 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition"
              >
                네이버 예약 바로가기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              <span className="neon-text">블로그</span> 소식
            </h3>
            <p className="text-gray-400 text-sm">
              최신 소식과 이벤트를 블로그에서 확인하세요
            </p>
          </div>

          <a
            href="https://blog.naver.com/gunjastudycafe"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 hover:border-[#00FF88]/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#03C75A] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  N
                </div>
                <div>
                  <div className="font-bold text-white mb-1">군자 지니24 스터디카페</div>
                  <div className="text-sm text-gray-400">네이버 블로그에서 최신 소식을 확인하세요</div>
                </div>
              </div>
              <div className="text-[#00FF88] text-2xl group-hover:translate-x-1 transition-transform">→</div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#00FF88]/10 text-[#00FF88] px-3 py-1 rounded-full text-xs">#프로모션</span>
                <span className="bg-[#00FF88]/10 text-[#00FF88] px-3 py-1 rounded-full text-xs">#이벤트</span>
                <span className="bg-[#00FF88]/10 text-[#00FF88] px-3 py-1 rounded-full text-xs">#시설안내</span>
                <span className="bg-[#00FF88]/10 text-[#00FF88] px-3 py-1 rounded-full text-xs">#업데이트</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">고객의 <span className="neon-text">소리</span></h3>
          <p className="text-gray-400 mb-8">
            여러분의 소중한 의견을 듣고 싶습니다.<br />
            좋은 점, 개선점 모두 환영합니다!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/fSjeDn8TZ116JHXv5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00FF88] text-black px-8 py-4 rounded-full font-bold hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition"
            >
              구글폼으로 의견 남기기
            </a>
            <div className="border border-white/20 text-gray-400 px-8 py-4 rounded-full">
              휴게실 포스트잇 보드 이용
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">
                군자역 <span className="text-[#00FF88]">지니24</span> 스터디카페
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                성인이 퇴근 후에도 집중이 가능한가?<br />
                이 질문에서 출발한 프리미엄 공간입니다.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-300">바로가기</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <a href="#about" className="block hover:text-[#00FF88] transition">소개</a>
                <a href="#seats" className="block hover:text-[#00FF88] transition">좌석 안내</a>
                <a href="#price" className="block hover:text-[#00FF88] transition">가격표</a>
                <a href="#location" className="block hover:text-[#00FF88] transition">오시는 길</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-300">연락처</h4>
              <div className="space-y-2 text-sm text-gray-500">
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
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-600">
            © 2024 군자역 지니24 스터디카페. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
