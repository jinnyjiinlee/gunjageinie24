import Copyright from './Copyright';

export default function DesktopFooter() {
  return (
    <div className="hidden sm:block">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        <BrandInfo />
        <QuickLinks />
        <ContactInfo />
      </div>
      <Copyright />
    </div>
  );
}

function BrandInfo() {
  return (
    <div className="col-span-2 md:col-span-1">
      <h4 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4">
        군자역 <span className="text-[#00FF88]">지니24</span> 스터디카페
      </h4>
      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
        성인이 퇴근 후에도 집중이 가능한가?<br />
        이 질문에서 출발한 프리미엄 공간입니다.
      </p>
    </div>
  );
}

function QuickLinks() {
  const links = [
    { href: '#about', label: '소개' },
    { href: '#seats', label: '좌석 안내' },
    { href: '#price', label: '가격표' },
    { href: '#location', label: '오시는 길' },
  ];

  return (
    <div>
      <h4 className="font-bold mb-3 sm:mb-4 text-gray-300 text-sm sm:text-base">바로가기</h4>
      <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-500">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="block hover:text-[#00FF88] transition">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div>
      <h4 className="font-bold mb-3 sm:mb-4 text-gray-300 text-sm sm:text-base">연락처</h4>
      <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-500">
        <p>서울 광진구 능동로 330 5층</p>
        <a
          href="https://blog.naver.com/gunjastudycafe"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-[#00FF88] transition"
        >
          네이버 블로그
        </a>
        <a
          href="https://forms.gle/fSjeDn8TZ116JHXv5"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-[#00FF88] transition"
        >
          고객의 소리
        </a>
      </div>
    </div>
  );
}
