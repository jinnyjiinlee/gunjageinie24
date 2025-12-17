export default function PriceHeader() {
  return (
    <div className="text-center mb-6 sm:mb-12 md:mb-16">
      <div className="inline-block bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] px-3 py-1 sm:py-2 rounded-full text-[10px] sm:text-sm font-medium mb-2 sm:mb-4">
        2차 오픈 이벤트 진행중
      </div>
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
        얼마에 <span className="neon-text">이용</span>하나요?
      </h2>
      <p className="text-gray-400 text-xs sm:text-base">합리적인 가격, 프리미엄 환경</p>
    </div>
  );
}
