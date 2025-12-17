export default function StorySection() {
  return (
    <section id="story" className="py-12 sm:py-20 md:py-28 bg-[#111111] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader />
        <StoryTimeline />
        <ResultCard />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="text-center mb-10 sm:mb-16">
      <p className="text-[#00FF88] text-xs sm:text-sm font-medium mb-2 sm:mb-3 tracking-wider">
        FOUNDER&apos;S STORY
      </p>
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
        나의 이야기
      </h2>
      <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
        왜 스터디카페를 직접 만들게 되었는지
      </p>
    </div>
  );
}

function StoryTimeline() {
  const stories = [
    {
      number: '01',
      title: '퇴근 후, 갈 곳이 없었다',
      content: '집에서는 집중이 안 되고, 카페는 시끄럽고...',
      highlight: '"집중할 공간이 왜 없을까?"',
      mood: 'problem',
    },
    {
      number: '02',
      title: '노트북존? 키스킨 필수래요',
      content: '드디어 노트북존 있는 스터디카페를 찾았는데...',
      highlight: '"키스킨 꼭 써주세요" 불편했다.',
      mood: 'frustration',
    },
    {
      number: '03',
      title: '직접 만들기로 했다',
      content: '환경이 곧 생산성. 의자, 책상, 모든 디테일까지.',
      highlight: '노트북존은 자유롭게, 학습존은 조용하게.',
      mood: 'solution',
    },
  ];

  const details = [
    { icon: '🪑', text: '시디즈 의자 & 오피스 의자' },
    { icon: '📐', text: '100cm 넓은 책상' },
    { icon: '🚻', text: '내부 화장실' },
    { icon: '🛋️', text: '빈백 휴식존' },
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00FF88]/50 via-[#00FF88]/20 to-transparent sm:-translate-x-px" />

      {/* Story items */}
      <div className="space-y-8 sm:space-y-12">
        {stories.map((story, index) => (
          <div
            key={index}
            className={`relative flex items-start gap-6 sm:gap-12 ${
              index % 2 === 1 ? 'sm:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 sm:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#0A0A0A] border-2 border-[#00FF88] sm:-translate-x-1/2 z-10 mt-1.5">
              <div className="absolute inset-0.5 rounded-full bg-[#00FF88] animate-pulse" />
            </div>

            {/* Content */}
            <div className={`ml-10 sm:ml-0 sm:w-[calc(50%-2rem)] ${index % 2 === 1 ? 'sm:text-right' : ''}`}>
              <div className={`inline-flex items-center gap-2 mb-2 ${index % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}>
                <span className={`text-3xl sm:text-4xl font-bold ${
                  story.mood === 'problem' ? 'text-gray-600' :
                  story.mood === 'frustration' ? 'text-red-500/50' :
                  'text-[#00FF88]'
                }`}>
                  {story.number}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                {story.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-2">
                {story.content}
              </p>
              <p className={`font-medium text-sm sm:text-base ${
                story.mood === 'solution' ? 'text-[#00FF88]' : 'text-white/80'
              }`}>
                {story.highlight}
              </p>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
          </div>
        ))}

        {/* Detail section */}
        <div className="relative flex items-start gap-6 sm:gap-12">
          <div className="absolute left-4 sm:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#00FF88] sm:-translate-x-1/2 z-10 mt-1.5" />

          <div className="ml-10 sm:ml-0 sm:w-full sm:px-8">
            <div className="bg-[#1A1A1A]/50 backdrop-blur border border-white/10 rounded-2xl p-5 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-[#00FF88]">04</span>
                <span className="text-white font-bold text-lg sm:text-xl">디테일에 집착하다</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {details.map((detail, index) => (
                  <div
                    key={index}
                    className="bg-[#0A0A0A] rounded-xl p-3 sm:p-4 text-center hover:bg-[#00FF88]/5 hover:border-[#00FF88]/30 border border-transparent transition-all"
                  >
                    <div className="text-2xl sm:text-3xl mb-2">{detail.icon}</div>
                    <p className="text-xs sm:text-sm text-gray-300">{detail.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultCard() {
  return (
    <div className="mt-12 sm:mt-16 relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#00FF88]/10 blur-3xl rounded-full" />

      <div className="relative bg-gradient-to-br from-[#00FF88]/20 via-[#00FF88]/5 to-transparent border border-[#00FF88]/30 rounded-3xl p-6 sm:p-10 text-center">
        <div className="inline-flex items-center gap-2 bg-[#00FF88]/20 px-4 py-1.5 rounded-full mb-4">
          <span className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
          <span className="text-[#00FF88] text-xs sm:text-sm font-medium">현재</span>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
          모든 자기계발러들의 아지트
        </h3>

        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-4 sm:mb-6 leading-relaxed">
          직장인, 프리랜서, 이직 준비생, 자격증 공부하시는 분들뿐만 아니라
          집중이 필요한 <span className="text-white font-medium">학생분들도</span> 함께합니다.
        </p>

        <p className="text-white font-bold text-lg sm:text-xl md:text-2xl">
          &quot;여기는 다르다&quot;
        </p>
        <p className="text-gray-400 text-sm sm:text-base mt-1">
          이 말을 들을 때마다, 만들길 잘했다고 생각합니다.
        </p>
      </div>
    </div>
  );
}
