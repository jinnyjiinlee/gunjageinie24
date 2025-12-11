const features = [
  { icon: '🪑', title: '맞춤 의자', titleFull: '좌석별 맞춤 의자', description: '학습존은 서울대 시디즈 의자, 노트북존은 편안한 오피스 의자로 구성했습니다.' },
  { icon: '📐', title: '넓은 책상', titleFull: '100cm+ 넓은 책상', description: '교재, 노트북, 태블릿을 동시에 펼쳐도 답답하지 않은 여유로운 공간.' },
  { icon: '📖', title: '독서대', titleFull: '독서대 3종 완비', description: '높낮이 조절형, 대형, 중형 독서대 - 원하는 스타일로 집중하세요.' },
  { icon: '🚽', title: '내부 화장실', titleFull: '내부 화장실', description: '집중 흐름을 깨지 않는 동선. 늦은 밤에도 안전하고 편리하게.' },
  { icon: '🍬', title: '무료 간식', titleFull: '무료 간식 & 음료', description: '다양한 간식과 차 종류를 무료로 제공. 휴게실에서 당 충전하세요.' },
  { icon: '🛋️', title: '빈백존', titleFull: '빈백존', description: '몰입하다가 잠시 쉬어가세요. 편안한 빈백에서 휴식 후 다시 집중!' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-10 sm:py-16 md:py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FocusBanner />
        <SectionHeader />
        <FeatureGrid />
      </div>
    </section>
  );
}

function FocusBanner() {
  return (
    <div className="bg-gradient-to-r from-[#00FF88]/20 to-transparent border border-[#00FF88]/30 rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-12 md:mb-16 text-center">
      <h2 className="text-base sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
        여러분의 <span className="neon-text">몰입</span>은 저희가 책임질게요
      </h2>
      <p className="text-gray-300 text-xs sm:text-base md:text-lg mb-1 sm:mb-2">
        <span className="text-white font-medium">몸만 오세요.</span>{' '}
        <span className="hidden sm:inline">집중할 수 있는 환경은 저희가 만들어 놨습니다.</span>
      </p>
      <p className="text-gray-500 text-[10px] sm:text-sm">
        직장인 · 이직준비생 · 프리랜서 · <span className="text-[#00FF88]">학생도 환영!</span>
      </p>
      <p className="text-gray-400 text-[10px] sm:text-xs mt-1 sm:mt-2">
        💡 성인 이용자가 많아 <span className="text-white">더 성숙하고 집중된 분위기</span>에서 공부할 수 있어요
      </p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="text-center mb-6 sm:mb-12 md:mb-16">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
        왜 <span className="neon-text">여기</span>여야 하나요?
      </h2>
      <p className="text-gray-400 text-xs sm:text-base max-w-2xl mx-auto">
        환경이 곧 생산성입니다.
        <span className="hidden sm:inline">
          {' '}책상의 너비, 의자의 편안함, 조명과 동선까지 작은 요소들이 집중 지속시간을 크게 좌우합니다.
        </span>
      </p>
    </div>
  );
}

function FeatureGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}

function FeatureCard({ icon, title, titleFull, description }: {
  icon: string;
  title: string;
  titleFull: string;
  description: string;
}) {
  return (
    <div className="bg-[#1A1A1A] border border-white/10 rounded-lg sm:rounded-2xl p-3 sm:p-5 md:p-8 text-center hover:border-[#00FF88]/50 transition group">
      <div className="text-xl sm:text-3xl md:text-4xl mb-1.5 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-[10px] sm:text-sm md:text-lg font-bold sm:mb-2 group-hover:text-[#00FF88] transition">
        <span className="sm:hidden">{title}</span>
        <span className="hidden sm:inline">{titleFull}</span>
      </h3>
      <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm hidden sm:block">{description}</p>
    </div>
  );
}
