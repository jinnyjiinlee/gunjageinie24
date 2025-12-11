interface EventBannerProps {
  daysLeft: number;
}

export default function EventBanner({ daysLeft }: EventBannerProps) {
  return (
    <section className="py-6 sm:py-12 md:py-16 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <MobileEventBanner daysLeft={daysLeft} />
        <DesktopEventBanner daysLeft={daysLeft} />
      </div>
    </section>
  );
}

function MobileEventBanner({ daysLeft }: { daysLeft: number }) {
  return (
    <div className="sm:hidden">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <div className="text-[10px] text-[#00FF88] mb-1">2차 오픈 이벤트</div>
          <h3 className="text-xl font-bold">
            최대 <span className="neon-text">36%</span> 할인
          </h3>
        </div>
        <div className="bg-[#1A1A1A] border border-[#00FF88]/50 rounded-xl px-4 py-2 neon-border">
          <div className="text-2xl font-bold neon-text">D-{daysLeft}</div>
        </div>
      </div>
      <EventTags />
    </div>
  );
}

function EventTags() {
  const tags = ['기간권 36%↓', '시간권 21%↓', '핫팩+아이워머'];

  return (
    <div className="flex gap-2">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="bg-[#00FF88]/10 border border-[#00FF88]/30 px-3 py-1.5 rounded-full text-[10px] text-[#00FF88]"
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

function DesktopEventBanner({ daysLeft }: { daysLeft: number }) {
  return (
    <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-center">
      <EventInfo />
      <DayCounter daysLeft={daysLeft} />
      <WinterEvent />
    </div>
  );
}

function EventInfo() {
  return (
    <div className="text-center sm:text-left">
      <div className="text-xs sm:text-sm text-[#00FF88] mb-1 sm:mb-2">2차 오픈 이벤트 진행중</div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
        최대 <span className="neon-text">36%</span> 할인
      </h3>
      <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
        기간권 & 시간권 특별 할인 중!<br />
        12월 8일(월) ~ 12월 21일(일)
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
        <DiscountBadge text="기간권 최대 36% 할인" />
        <DiscountBadge text="시간권 최대 21% 할인" />
      </div>
    </div>
  );
}

function DiscountBadge({ text }: { text: string }) {
  return (
    <div className="bg-[#00FF88]/10 border border-[#00FF88]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-[#00FF88]">
      {text}
    </div>
  );
}

function DayCounter({ daysLeft }: { daysLeft: number }) {
  return (
    <div className="text-center">
      <div className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">이벤트 종료까지</div>
      <div className="bg-[#1A1A1A] border border-[#00FF88]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 neon-border inline-block sm:block">
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold neon-text mb-1 sm:mb-2">D-{daysLeft}</div>
        <div className="text-xs sm:text-sm text-gray-500">놓치지 마세요!</div>
      </div>
    </div>
  );
}

function WinterEvent() {
  return (
    <div className="text-center hidden md:block">
      <div className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">겨울맞이 이벤트</div>
      <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">🔥😴</div>
      <p className="text-sm sm:text-base md:text-lg text-gray-300">
        핫팩 & 아이워머<br />1개씩 무료 증정!
      </p>
      <p className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-2">온열 안대로 잠시 눈 휴식을</p>
    </div>
  );
}
