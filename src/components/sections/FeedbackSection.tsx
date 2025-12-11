export default function FeedbackSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">
          하고 싶은 <span className="neon-text">말</span> 있나요?
        </h3>
        <p className="text-gray-400 text-[11px] sm:text-base mb-4 sm:mb-8">
          좋은 점, 아쉬운 점 모두 환영해요
        </p>
        <FeedbackButtons />
      </div>
    </section>
  );
}

function FeedbackButtons() {
  return (
    <div className="flex flex-row gap-2 sm:gap-3 justify-center">
      <a
        href="https://forms.gle/fSjeDn8TZ116JHXv5"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#00FF88] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-[11px] sm:text-sm hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition"
      >
        의견 남기기
      </a>
      <div className="border border-white/20 text-gray-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[11px] sm:text-sm">
        휴게실 게시판
      </div>
    </div>
  );
}
