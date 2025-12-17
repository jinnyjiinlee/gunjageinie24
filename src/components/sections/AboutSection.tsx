'use client';

import { useState } from 'react';

const features = [
  {
    id: 'chair',
    icon: '🪑',
    title: '맞춤 의자',
    shortDesc: '좌석별 최적화된 의자',
    description: '학습존은 서울대 도서관에서 사용하는 시디즈 의자, 노트북존은 장시간 작업에 적합한 편안한 오피스 의자로 구성했습니다.',
    highlight: '시디즈 T50 / 오피스 의자',
  },
  {
    id: 'desk',
    icon: '📐',
    title: '넓은 책상',
    shortDesc: '100cm 이상 여유 공간',
    description: '교재, 노트북, 태블릿을 동시에 펼쳐도 답답하지 않은 여유로운 공간. 책상이 넓어야 생각도 넓어집니다.',
    highlight: '100cm+ 폭',
  },
  {
    id: 'stand',
    icon: '📖',
    title: '독서대',
    shortDesc: '3종 독서대 완비',
    description: '높낮이 조절형, 대형, 중형 독서대를 준비했습니다. 원하는 스타일로 목과 허리 부담 없이 집중하세요.',
    highlight: '높낮이 조절형 포함',
  },
  {
    id: 'restroom',
    icon: '🚽',
    title: '내부 화장실',
    shortDesc: '동선 최적화',
    description: '집중 흐름을 깨지 않는 동선 설계. 늦은 밤에도 외부로 나가지 않고 안전하게 이용하세요.',
    highlight: '24시간 안전',
  },
  {
    id: 'snack',
    icon: '🍬',
    title: '무료 간식',
    shortDesc: '간식 & 음료 무제한',
    description: '다양한 간식과 차 종류를 무료로 제공합니다. 휴게실에서 당 충전하고 다시 집중 모드로!',
    highlight: '커피, 차, 간식 무료',
  },
  {
    id: 'beanbag',
    icon: '🛋️',
    title: '빈백존',
    shortDesc: '휴식 공간',
    description: '몰입하다가 잠시 쉬어가세요. 편안한 빈백에서 짧은 휴식 후 다시 집중력을 회복하세요.',
    highlight: '노트북존 내 위치',
  },
];

export default function AboutSection() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <section id="about" className="py-12 sm:py-20 md:py-28 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Focus Banner */}
        <div className="relative mb-12 sm:mb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/20 via-[#00FF88]/5 to-transparent blur-3xl" />
          <div className="relative bg-[#111111]/50 backdrop-blur border border-[#00FF88]/20 rounded-3xl p-6 sm:p-10 text-center">
            <div className="inline-flex items-center gap-2 bg-[#00FF88]/10 px-4 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
              <span className="text-[#00FF88] text-xs sm:text-sm font-medium">OUR PROMISE</span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              여러분의 <span className="text-[#00FF88]">몰입</span>은 저희가 책임질게요
            </h2>
            <p className="text-gray-300 text-sm sm:text-lg mb-2">
              <span className="text-white font-medium">몸만 오세요.</span>{' '}
              집중할 수 있는 환경은 저희가 만들어 놨습니다.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              직장인 · 이직준비생 · 프리랜서 · 학생 모두 환영
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-[#00FF88] text-xs sm:text-sm font-medium mb-2 tracking-wider">
            FACILITIES
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            왜 <span className="text-[#00FF88]">여기</span>여야 하나요?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            환경이 곧 생산성입니다. 작은 디테일이 집중 시간을 바꿉니다.
          </p>
        </div>

        {/* Feature Grid - Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative bg-[#111111] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer
                ${index === 0 || index === 5 ? 'md:col-span-1' : ''}
                ${activeFeature === feature.id ? 'border-[#00FF88]/50 scale-[1.02]' : 'hover:border-[#00FF88]/30'}
              `}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-[#00FF88]/10 to-transparent opacity-0 transition-opacity ${activeFeature === feature.id ? 'opacity-100' : 'group-hover:opacity-50'}`} />

              <div className="relative p-4 sm:p-6">
                {/* Icon */}
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-lg font-bold text-white mb-1 group-hover:text-[#00FF88] transition-colors">
                  {feature.title}
                </h3>

                {/* Short description (always visible) */}
                <p className="text-gray-500 text-xs sm:text-sm">
                  {feature.shortDesc}
                </p>

                {/* Expanded content on hover (desktop) */}
                <div className={`hidden sm:block overflow-hidden transition-all duration-300 ${activeFeature === feature.id ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[#00FF88] text-xs font-medium">
                    <span>✓</span>
                    <span>{feature.highlight}</span>
                  </div>
                </div>
              </div>

              {/* Bottom highlight line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00FF88] to-emerald-500 transform origin-left transition-transform duration-300 ${activeFeature === feature.id ? 'scale-x-100' : 'scale-x-0'}`} />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            💡 성인 이용자가 많아 <span className="text-white">더 성숙하고 집중된 분위기</span>에서 공부할 수 있어요
          </p>
        </div>
      </div>
    </section>
  );
}
