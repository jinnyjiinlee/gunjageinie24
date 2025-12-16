'use client';

import { useState } from 'react';

const targets = [
  {
    id: 'worker',
    icon: '👨‍💻',
    label: '직장인',
    title: '퇴근 후에도 성장하고 싶은',
    subtitle: '직장인',
    description: '사이드 프로젝트, 자기계발, 이직 준비까지. 퇴근 후 시간을 알차게 쓰고 싶은 분들을 위한 공간.',
    zone: '노트북존',
    zoneDesc: '키스킨 없이 자유롭게 타이핑',
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
  },
  {
    id: 'student',
    icon: '✍️',
    label: '수험생',
    title: '합격을 향해 달리는',
    subtitle: '수험생',
    description: '고시, 공무원, 자격증 준비. 조용하고 집중된 환경에서 오직 공부에만 몰입하세요.',
    zone: '학습존',
    zoneDesc: '시디즈 의자 + 넓은 책상',
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
  },
  {
    id: 'jobseeker',
    icon: '📚',
    label: '취준생',
    title: '새로운 시작을 준비하는',
    subtitle: '취준생',
    description: '자소서 작성, 포트폴리오 제작, 코딩 테스트 준비. 넓은 모니터로 효율적인 작업을.',
    zone: '모니터존',
    zoneDesc: '32인치 대형 모니터 제공',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
  },
  {
    id: 'developer',
    icon: '💻',
    label: '개발자',
    title: '코드에 몰입하고 싶은',
    subtitle: '개발자',
    description: '기계식 키보드 OK, 타건음 눈치 NO. 대형 모니터에서 편하게 코딩하세요.',
    zone: '노트북존 + 모니터존',
    zoneDesc: '타건음 자유 + 대형 모니터',
    gradient: 'from-[#00FF88] to-emerald-500',
    bgGradient: 'from-[#00FF88]/10 via-[#00FF88]/5 to-transparent',
  },
];

const painPoints = [
  { text: '키스킨 필수', icon: '⌨️' },
  { text: '노트북존 없음', icon: '💻' },
  { text: '콘센트 부족', icon: '🔌' },
  { text: '좁은 책상', icon: '📐' },
];

export default function TargetSection() {
  const [activeTarget, setActiveTarget] = useState(targets[0]);

  return (
    <section className="py-12 sm:py-20 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[#00FF88] text-xs sm:text-sm font-medium mb-2 tracking-wider">
            WHO IS IT FOR?
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            이런 분들께 <span className="text-[#00FF88]">딱!</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            당신은 어떤 목표를 가지고 계신가요?
          </p>
        </div>

        {/* Target Selector - Tab Style */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex bg-[#111111] rounded-full p-1.5 border border-white/10">
            {targets.map((target) => (
              <button
                key={target.id}
                onClick={() => setActiveTarget(target)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTarget.id === target.id
                    ? 'bg-[#00FF88] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="text-base sm:text-lg">{target.icon}</span>
                <span className="hidden sm:inline">{target.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Target Card */}
        <div className="relative max-w-3xl mx-auto">
          {/* Background glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${activeTarget.bgGradient} blur-3xl opacity-50 rounded-full`} />

          <div className="relative bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 overflow-hidden">
            {/* Gradient line at top */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${activeTarget.gradient}`} />

            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
              {/* Icon */}
              <div className={`flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${activeTarget.gradient} flex items-center justify-center text-3xl sm:text-5xl shadow-lg`}>
                {activeTarget.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-gray-400 text-sm sm:text-base mb-1">
                  {activeTarget.title}
                </p>
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
                  {activeTarget.subtitle}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  {activeTarget.description}
                </p>

                {/* Recommended Zone */}
                <div className="inline-flex items-center gap-3 bg-[#0A0A0A] rounded-xl px-4 py-3 border border-white/10">
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5">추천 좌석</p>
                    <p className="text-[#00FF88] font-bold text-sm sm:text-base">{activeTarget.zone}</p>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <p className="text-gray-400 text-xs sm:text-sm">{activeTarget.zoneDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pain Points - What we solved */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-gray-500 text-xs sm:text-sm">
              다른 스터디카페에서 느꼈던 불편함, 여기선 없습니다
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="flex items-center gap-2 bg-[#111111] border border-white/10 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 hover:border-[#00FF88]/30 transition-all">
                  <span className="text-sm sm:text-base">{point.icon}</span>
                  <span className="text-red-400/60 line-through text-xs sm:text-sm">{point.text}</span>
                  <span className="text-[#00FF88] text-xs sm:text-sm font-bold">
                    ✓ 해결
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
