import Copyright from './Copyright';

export default function MobileFooter() {
  return (
    <div className="sm:hidden">
      <div className="text-center mb-4">
        <h4 className="text-sm font-bold mb-1">
          군자역 <span className="text-[#00FF88]">지니24</span>
        </h4>
        <p className="text-gray-500 text-[10px]">서울 광진구 능동로 330 5층</p>
      </div>
      <MobileNav />
      <MobileLinks />
      <Copyright mobile />
    </div>
  );
}

function MobileNav() {
  const links = ['소개', '좌석', '가격표', '위치'];
  const hrefs = ['#about', '#seats', '#price', '#location'];

  return (
    <div className="flex justify-center gap-4 text-[10px] text-gray-500 mb-4">
      {links.map((link, i) => (
        <a key={link} href={hrefs[i]} className="hover:text-[#00FF88]">
          {link}
        </a>
      ))}
    </div>
  );
}

function MobileLinks() {
  return (
    <div className="flex justify-center gap-3 mb-4">
      <a
        href="https://blog.naver.com/gunjastudycafe"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1A1A1A] border border-white/10 px-3 py-1.5 rounded-full text-[10px] text-gray-400 hover:text-[#00FF88] transition"
      >
        블로그
      </a>
      <a
        href="https://forms.gle/fSjeDn8TZ116JHXv5"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1A1A1A] border border-white/10 px-3 py-1.5 rounded-full text-[10px] text-gray-400 hover:text-[#00FF88] transition"
      >
        의견 남기기
      </a>
    </div>
  );
}
