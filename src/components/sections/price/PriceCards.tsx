export function PriceCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
      <ShortTermCard />
      <PeriodCard />
      <ChargeCard />
    </div>
  );
}

function ShortTermCard() {
  const items = [
    { time: '2시간', price: '3,000' },
    { time: '4시간', price: '5,000' },
    { time: '6시간', price: '7,000' },
    { time: '8시간', price: '9,000' },
    { time: '12시간', price: '10,000' },
  ];

  return (
    <div className="bg-[#1A1A1A] border border-white/10 rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-8 sm:col-span-2 md:col-span-1">
      <h3 className="text-sm sm:text-lg font-bold mb-3 sm:mb-6 text-center">단기권 (1회 이용권)</h3>
      <div className="space-y-1.5 sm:space-y-3 md:space-y-4">
        {items.map((item, index) => (
          <PriceRow key={index} time={item.time} price={item.price} />
        ))}
      </div>
    </div>
  );
}

function PeriodCard() {
  const items = [
    { time: '3일', original: '30,000', sale: null },
    { time: '1주', original: '50,000', sale: null },
    { time: '2주', original: '80,000', sale: null },
    { time: '4주', original: '140,000', sale: '90,000' },
    { time: '8주', original: '260,000', sale: '160,000' },
    { time: '12주', original: '360,000', sale: '230,000' },
  ];

  return (
    <div className="bg-[#1A1A1A] border-2 border-[#00FF88]/50 rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative neon-glow">
      <Badge text="최대 36% 할인" position="right" color="green" />
      <h3 className="text-sm sm:text-lg font-bold mb-3 sm:mb-6 text-center text-[#00FF88]">기간권 (무제한 이용)</h3>
      <div className="space-y-1.5 sm:space-y-3 md:space-y-4">
        {items.map((item, index) => (
          <PriceRowWithSale key={index} {...item} color="#00FF88" />
        ))}
      </div>
    </div>
  );
}

function ChargeCard() {
  const items = [
    { time: '50시간', original: '70,000', sale: '55,000' },
    { time: '100시간', original: '130,000', sale: '95,000' },
    { time: '200시간', original: '240,000', sale: '185,000' },
    { time: '300시간', original: '340,000', sale: '275,000' },
  ];

  return (
    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-2 border-[#FFD700]/50 rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative" style={{ boxShadow: '0 0 30px rgba(255, 215, 0, 0.15)' }}>
      <Badge text="BEST" position="left" color="gold" />
      <Badge text="최대 21% 할인" position="right" color="green" />
      <h3 className="text-sm sm:text-lg font-bold mb-3 sm:mb-6 text-center text-[#FFD700]">충전권 (시간 충전)</h3>
      <div className="space-y-1.5 sm:space-y-3 md:space-y-4">
        {items.map((item, index) => (
          <PriceRowWithSale key={index} {...item} color="#FFD700" />
        ))}
      </div>
      <p className="text-[10px] sm:text-xs text-gray-500 mt-2 sm:mt-4 text-center">
        * 유효기간 365일 · 자유롭게 사용
      </p>
    </div>
  );
}

function Badge({ text, position, color }: { text: string; position: 'left' | 'right'; color: 'green' | 'gold' }) {
  const bgColor = color === 'green' ? 'bg-[#00FF88]' : 'bg-[#FFD700]';
  const posClass = position === 'left' ? 'left-3 sm:left-4' : 'right-3 sm:right-4';

  return (
    <div className={`absolute -top-2 sm:-top-3 ${posClass} ${bgColor} text-[#0A0A0A] text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full font-bold`}>
      {text}
    </div>
  );
}

function PriceRow({ time, price }: { time: string; price: string }) {
  return (
    <div className="flex justify-between items-center py-1 sm:py-2 border-b border-white/10 last:border-0">
      <span className="text-gray-400 text-xs sm:text-base">{time}</span>
      <span className="font-semibold text-xs sm:text-base">{price}원</span>
    </div>
  );
}

function PriceRowWithSale({ time, original, sale, color }: { time: string; original: string; sale: string | null; color: string }) {
  return (
    <div className="flex justify-between items-center py-1 sm:py-2 border-b border-white/10 last:border-0">
      <span className="text-gray-400 text-xs sm:text-base">{time}</span>
      <div className="text-right">
        {sale ? (
          <>
            <span className="text-gray-600 line-through text-[9px] sm:text-sm mr-1 sm:mr-2">{original}</span>
            <span className="font-bold text-xs sm:text-base" style={{ color }}>{sale}원</span>
          </>
        ) : (
          <span className="font-semibold text-xs sm:text-base">{original}원</span>
        )}
      </div>
    </div>
  );
}
