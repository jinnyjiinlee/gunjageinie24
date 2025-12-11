export default function MillionsAppSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader />
        <AppCard />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="text-center mb-4 sm:mb-8">
      <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
        어떻게 <span className="neon-text">결제</span>하나요?
      </h3>
      <p className="text-gray-400 text-[10px] sm:text-sm">밀리언즈 앱으로 간편하게 이용하세요</p>
    </div>
  );
}

function AppCard() {
  return (
    <div className="bg-[#1A1A1A] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
      <MobileLayout />
      <DesktopLayout />
    </div>
  );
}

function MobileLayout() {
  return (
    <div className="sm:hidden">
      <div className="flex items-center gap-3 mb-3">
        <AppIcon />
        <div>
          <div className="font-bold text-white text-sm">밀리언즈</div>
          <div className="text-[10px] text-gray-400">좌석 예약 · QR 입장 · 결제</div>
        </div>
      </div>
      <div className="flex gap-2">
        <AppStoreButton compact />
        <GooglePlayButton compact />
      </div>
    </div>
  );
}

function DesktopLayout() {
  return (
    <div className="hidden sm:grid sm:grid-cols-2 gap-6 items-center">
      <AppInfo />
      <div className="flex flex-col gap-3">
        <AppStoreButton />
        <GooglePlayButton />
      </div>
    </div>
  );
}

function AppIcon() {
  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00FF88] to-[#00CC6A] rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-2xl font-bold">
      M
    </div>
  );
}

function AppInfo() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <AppIcon />
        <div>
          <div className="font-bold text-white text-base sm:text-lg">밀리언즈</div>
          <div className="text-xs text-gray-400">스터디카페 결제 앱</div>
        </div>
      </div>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        앱 하나로 <strong className="text-white">좌석 예약부터 결제까지</strong> 한 번에!
        QR코드 입장, 실시간 잔여석 확인, 이용권 구매 모두 가능해요.
      </p>
      <AppFeatures />
    </div>
  );
}

function AppFeatures() {
  const features = ['QR 입장', '간편 결제', '실시간 현황'];

  return (
    <div className="flex flex-wrap gap-2">
      {features.map((feature) => (
        <span key={feature} className="bg-[#00FF88]/10 text-[#00FF88] px-3 py-1 rounded-full text-xs">
          {feature}
        </span>
      ))}
    </div>
  );
}

function AppStoreButton({ compact }: { compact?: boolean }) {
  return (
    <a
      href="https://apps.apple.com/kr/app/%EB%B0%80%EB%A6%AC%EC%96%B8%EC%A6%88/id1584855498"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-${compact ? '1.5' : '2'} bg-white text-black px-${compact ? '3' : '5'} py-${compact ? '2' : '3'} rounded-${compact ? 'lg' : 'xl'} font-medium text-${compact ? 'xs' : 'sm'} ${compact ? 'flex-1' : 'hover:bg-gray-100 transition'}`}
    >
      <AppleIcon />
      App Store
    </a>
  );
}

function GooglePlayButton({ compact }: { compact?: boolean }) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.millionz.app"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-${compact ? '1.5' : '2'} bg-white text-black px-${compact ? '3' : '5'} py-${compact ? '2' : '3'} rounded-${compact ? 'lg' : 'xl'} font-medium text-${compact ? 'xs' : 'sm'} ${compact ? 'flex-1' : 'hover:bg-gray-100 transition'}`}
    >
      <GooglePlayIcon />
      Google Play
    </a>
  );
}

function AppleIcon() {
  return (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  );
}
