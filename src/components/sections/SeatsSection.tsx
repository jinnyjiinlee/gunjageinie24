'use client';

import { useState } from 'react';

const seats = [
  {
    id: 'study',
    zone: 'STUDY ZONE',
    title: '학습존',
    subtitle: '조용히 집중하고 싶은 분',
    image: '/images/study-zone.jpg',
    description: '전 좌석 서울대 시디즈 의자, 100cm 이상 넓은 책상으로 장시간 학습에도 편안합니다.',
    features: ['서울대 시디즈 의자', '100cm+ 넓은 책상', '미세 조절 조명'],
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    id: 'laptop',
    zone: 'LAPTOP ZONE',
    title: '노트북존',
    subtitle: '자유롭게 타이핑하고 싶은 분',
    image: '/images/laptop-zone.jpg',
    description: '키보드 소리 OK! 키스킨 없이 자유롭게 작업하세요. 퇴근 후 코딩, PPT 작업에 최적화.',
    features: ['키스킨 NO', '넉넉한 전원', '키보드 소리 OK'],
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'monitor',
    zone: 'MONITOR ZONE',
    title: '모니터존',
    subtitle: '넓은 화면이 필요한 분',
    image: '/images/monitor-zone.jpg',
    description: '32인치 대형 모니터 제공. 문서 작업, 코딩, 디자인 작업에 효율적인 듀얼 환경.',
    features: ['32인치 모니터', '기계식 키보드 OK', '듀얼 작업 최적화'],
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'beanbag',
    zone: 'BEANBAG ZONE',
    title: '빈백존',
    subtitle: '잠시 휴식이 필요한 분',
    image: '/images/beanbag-zone.jpg',
    description: '노트북존 내 위치한 휴식 공간. 집중하다 지칠 때 잠시 눈 감고 쉬어가세요.',
    features: ['편안한 빈백', '노트북존 내 위치', '짧은 휴식 최적화'],
    color: 'green',
    gradient: 'from-[#00FF88] to-emerald-500',
  },
];

export default function SeatsSection() {
  const [activeTab, setActiveTab] = useState(seats[0].id);
  const activeSeat = seats.find(s => s.id === activeTab) || seats[0];

  return (
    <section id="seats" className="py-12 sm:py-20 md:py-28 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-[#00FF88] text-xs sm:text-sm font-medium mb-2 tracking-wider">
            SEAT TYPES
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            어떤 <span className="text-[#00FF88]">좌석</span>이 있나요?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            목적에 맞는 최적의 자리를 골라보세요
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-2xl">
            {seats.map((seat) => (
              <button
                key={seat.id}
                onClick={() => setActiveTab(seat.id)}
                className={`relative flex flex-col items-center gap-1 sm:gap-2 px-2 sm:px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-center transition-all ${
                  activeTab === seat.id
                    ? 'bg-[#111111] border-2 border-[#00FF88]'
                    : 'bg-[#111111]/50 border border-white/10 hover:border-white/30'
                }`}
              >
                <span className="text-lg sm:text-2xl">
                  {seat.id === 'study' && '✍️'}
                  {seat.id === 'laptop' && '💻'}
                  {seat.id === 'monitor' && '🖥️'}
                  {seat.id === 'beanbag' && '🛋️'}
                </span>
                <span className={`text-[10px] sm:text-sm font-medium ${activeTab === seat.id ? 'text-[#00FF88]' : 'text-gray-400'}`}>
                  {seat.title}
                </span>
                {activeTab === seat.id && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00FF88] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active Seat Display */}
        <div className="relative">
          {/* Background glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${activeSeat.gradient} opacity-10 blur-3xl rounded-full`} />

          <div className="relative bg-[#111111] border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[200px] sm:min-h-[300px] md:min-h-[400px] overflow-hidden">
                <img
                  src={activeSeat.image}
                  alt={activeSeat.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#111111]" />

                {/* Zone badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${activeSeat.gradient} px-3 py-1.5 sm:px-4 sm:py-2 rounded-full`}>
                    <span className="text-white text-xs sm:text-sm font-bold">{activeSeat.zone}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <p className="text-gray-400 text-sm sm:text-base mb-1 sm:mb-2">
                  {activeSeat.subtitle}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  {activeSeat.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  {activeSeat.description}
                </p>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3">
                  {activeSeat.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-[#0A0A0A] rounded-xl px-4 py-3 border border-white/5"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${activeSeat.gradient} flex items-center justify-center`}>
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-white text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick View - All seats */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {seats.map((seat) => (
            <button
              key={seat.id}
              onClick={() => setActiveTab(seat.id)}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] group ${
                activeTab === seat.id ? 'ring-2 ring-[#00FF88]' : ''
              }`}
            >
              <img
                src={seat.image}
                alt={seat.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                <p className="text-white font-bold text-xs sm:text-sm">{seat.title}</p>
                <p className="text-gray-300 text-[10px] sm:text-xs truncate">{seat.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
