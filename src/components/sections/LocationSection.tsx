export default function LocationSection() {
  return (
    <section id="location" className="py-10 sm:py-16 md:py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader />
        <NaverMap />
        <InfoCards />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="text-center mb-5 sm:mb-12 md:mb-16">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
        <span className="neon-text">어디에 있나요?</span>
      </h2>
      <p className="text-gray-400 text-xs sm:text-base">
        군자역 5번 출구 도보 3분 · 세종대입구역 도보 5분
      </p>
      <p className="text-gray-500 text-[10px] sm:text-sm mt-1">
        군자 스터디카페 · 세종대 스터디카페 · 광진구 24시간 독서실
      </p>
    </div>
  );
}

function NaverMap() {
  return (
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
  );
}

function InfoCards() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
      <AddressCard />
      <HoursCard />
      <ReservationCard />
    </div>
  );
}

function AddressCard() {
  return (
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
  );
}

function HoursCard() {
  return (
    <div className="bg-[#1A1A1A] border border-white/10 rounded-lg sm:rounded-2xl p-3 sm:p-5 md:p-6 hover:border-[#00FF88]/30 transition">
      <h3 className="font-bold mb-1.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base">
        <span className="text-base sm:text-xl">🕐</span>
        <span className="hidden sm:inline">운영시간</span>
        <span className="sm:hidden">운영</span>
      </h3>
      <p className="text-gray-300 text-[11px] sm:text-base">
        <span className="font-medium text-[#00FF88]">24시간</span><br />
        <span className="text-[10px] sm:text-sm text-gray-500">연중무휴</span>
      </p>
    </div>
  );
}

function ReservationCard() {
  return (
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
  );
}
