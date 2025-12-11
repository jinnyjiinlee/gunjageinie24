const seats = [
  {
    zone: 'STUDY ZONE',
    title: '학습존',
    image: '/images/study-zone.jpg',
    descShort: '전 좌석 서울대 시디즈 의자, 100cm 이상 넓은 책상',
    description: '가장 오래 머무는 공간이기에 의자와 책상 품질을 최우선으로 고려했습니다. 전 좌석 서울대 시디즈 의자, 100cm 이상 넓은 책상으로 장시간 학습에도 편안한 환경을 제공합니다.',
    features: ['서울대 시디즈 의자', '100cm+ 넓은 책상', '미세 조절된 조명'],
  },
  {
    zone: 'LAPTOP ZONE',
    title: '노트북존',
    image: '/images/laptop-zone.jpg',
    descShort: '직장인, 프리랜서를 위한 장시간 작업 구역',
    description: '직장인, 프리랜서를 위한 장시간 작업 구역입니다. 키보드 소리가 불편할 수 있어 학습 공간과 분리했습니다. 퇴근 후 보고서, PPT, 코딩 작업에 최적화되어 있습니다.',
    features: ['창가 좌석 배치', '넉넉한 전원 위치', '키보드 사용 OK'],
  },
  {
    zone: 'MONITOR ZONE',
    title: '모니터존',
    image: '/images/monitor-zone.jpg',
    descShort: '24인치급 모니터 제공, 코딩/디자인 최적화',
    description: '24인치급 모니터가 제공되는 좌석입니다. 문서 작업, 코딩, 디자인 작업처럼 모니터 효율이 중요한 분들이 선호합니다. 사이드 프로젝트, 포트폴리오 제작에 최적화되어 있습니다.',
    features: ['24인치 모니터 제공', '기계식 키보드 사용 가능', '개발/디자인 작업 최적화'],
  },
  {
    zone: 'BEANBAG ZONE',
    title: '빈백존',
    image: '/images/beanbag-zone.jpg',
    descShort: '노트북존 내 위치한 편안한 휴식 공간',
    description: '노트북존 안에 위치한 편안한 휴식 공간입니다. 집중력을 오래 유지하려면 짧은 휴식이 필수입니다. 부담 없이 잠시 쉬거나 아이디어를 정리하기 좋은 공간입니다.',
    features: ['편안한 빈백 4개', '잠시 눈 감고 휴식', '노트북존 내 위치'],
  },
];

export default function SeatsSection() {
  return (
    <section id="seats" className="py-10 sm:py-16 md:py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader />
        <SeatsList />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="text-center mb-6 sm:mb-12 md:mb-16">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
        어떤 <span className="neon-text">좌석</span>이 있나요?
      </h2>
      <p className="text-gray-400 text-xs sm:text-base">목적에 맞는 최적의 자리를 골라보세요</p>
    </div>
  );
}

function SeatsList() {
  return (
    <div className="space-y-3 sm:space-y-5 md:space-y-6">
      {seats.map((seat, index) => (
        <SeatCard key={index} seat={seat} isReversed={index % 2 === 1} />
      ))}
    </div>
  );
}

function SeatCard({ seat, isReversed }: { seat: typeof seats[0]; isReversed: boolean }) {
  return (
    <div className="bg-[#1A1A1A] border border-white/10 rounded-xl sm:rounded-3xl overflow-hidden hover:border-[#00FF88]/30 transition group">
      <div className="grid md:grid-cols-2">
        <SeatImage seat={seat} isReversed={isReversed} />
        <SeatInfo seat={seat} isReversed={isReversed} />
      </div>
    </div>
  );
}

function SeatImage({ seat, isReversed }: { seat: typeof seats[0]; isReversed: boolean }) {
  return (
    <div className={`relative min-h-[160px] sm:min-h-[250px] md:min-h-[400px] overflow-hidden ${isReversed ? 'md:order-2' : ''}`}>
      <img
        src={seat.image}
        alt={seat.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#1A1A1A]/50" />
    </div>
  );
}

function SeatInfo({ seat, isReversed }: { seat: typeof seats[0]; isReversed: boolean }) {
  return (
    <div className={`p-4 sm:p-6 md:p-8 lg:p-12 ${isReversed ? 'md:order-1' : ''}`}>
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
  );
}
