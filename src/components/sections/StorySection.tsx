export default function StorySection() {
  return (
    <section id="story" className="py-10 sm:py-16 md:py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader />
        <StoryGrid />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="text-center mb-6 sm:mb-10 md:mb-12">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
        <span className="neon-text">나의 이야기</span>
      </h2>
      <p className="text-gray-400 text-xs sm:text-base">
        왜 스터디카페를 직접 만들게 되었는지
      </p>
    </div>
  );
}

function StoryGrid() {
  return (
    <div className="grid sm:grid-cols-2 gap-3 sm:gap-5 md:gap-6 text-gray-300 leading-relaxed">
      <StoryCard
        emoji="🤔"
        chapter="Chapter 1"
        title="퇴근 후, 갈 곳이 없었다"
        content='집에서는 집중이 안 되고, 카페는 시끄럽고...'
        highlight='"집중할 공간이 왜 없을까?"'
      />
      <StoryCard
        emoji="💡"
        chapter="Chapter 2"
        title="환경이 곧 생산성이다"
        content="의자 하나, 책상 너비가 집중력을 바꿉니다."
        highlight="직접 만들기로 했습니다."
      />
      <DetailCard />
      <ResultCard />
    </div>
  );
}

function StoryCard({ emoji, chapter, title, content, highlight }: {
  emoji: string;
  chapter: string;
  title: string;
  content: string;
  highlight: string;
}) {
  return (
    <div className="bg-[#1A1A1A] border border-white/10 rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-[#00FF88]/30 transition">
      <div className="flex items-center gap-2 mb-2 sm:mb-4">
        <span className="text-lg sm:text-2xl">{emoji}</span>
        <div className="text-[#00FF88] text-[10px] sm:text-sm font-medium">{chapter}</div>
      </div>
      <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-1.5 sm:mb-3 text-white">{title}</h3>
      <p className="text-[11px] sm:text-sm md:text-base">
        {content}
        <span className="block mt-1.5 sm:mt-2 text-white font-medium text-xs sm:text-sm">{highlight}</span>
      </p>
    </div>
  );
}

function DetailCard() {
  const details = [
    { text: '학습존은 <strong class="text-white">시디즈 의자</strong> · 노트북존은 편안한 오피스 의자' },
    { text: '책상은 <strong class="text-white">100cm 이상</strong>. 교재, 노트북, 태블릿 동시에' },
    { text: '화장실은 <strong class="text-white">내부에</strong>. 집중 흐름을 깨지 않도록' },
    { text: '<strong class="text-white">빈백존</strong>에서 몰입하다가 잠시 휴식' },
  ];

  return (
    <div className="sm:col-span-2 bg-[#1A1A1A] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 hover:border-[#00FF88]/30 transition">
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <span className="text-xl sm:text-2xl">✨</span>
        <div className="text-[#00FF88] text-xs sm:text-sm font-medium">Chapter 3</div>
      </div>
      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-white">디테일에 집착하다</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {details.map((item, index) => (
          <div key={index} className="flex items-start gap-2 sm:gap-3 bg-[#0A0A0A] rounded-lg sm:rounded-xl p-3 sm:p-4">
            <span className="text-[#00FF88] text-base sm:text-lg">✓</span>
            <p className="text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: item.text }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultCard() {
  return (
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
        &quot;여기는 다르다&quot;는 말을 들을 때마다, 만들길 잘했다고 생각합니다.
      </p>
    </div>
  );
}
