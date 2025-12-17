export default function FeedbackSection() {
  return (
    <section className="py-12 sm:py-20 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/10 via-purple-500/10 to-[#00FF88]/10 blur-3xl opacity-50 rounded-full" />

          <div className="relative bg-[#111111]/80 backdrop-blur border border-white/10 rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#00FF88]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

            {/* Icon */}
            <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#00FF88]/20 to-purple-500/20 rounded-2xl mb-6">
              <span className="text-3xl sm:text-4xl">💬</span>
            </div>

            {/* Content */}
            <h3 className="relative text-xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              하고 싶은 <span className="text-[#00FF88]">말</span> 있나요?
            </h3>
            <p className="relative text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto">
              좋은 점, 아쉬운 점 모두 환영해요.<br className="hidden sm:block" />
              여러분의 피드백이 더 나은 공간을 만듭니다.
            </p>

            {/* Buttons */}
            <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a
                href="https://forms.gle/fSjeDn8TZ116JHXv5"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-[#00FF88] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all hover:scale-105"
              >
                <span>의견 남기기</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                <span>또는 휴게실 게시판에 남겨주세요</span>
              </div>
            </div>

            {/* Stats or social proof */}
            <div className="relative mt-10 sm:mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-xs sm:text-sm mb-4">
                지금까지 받은 소중한 피드백
              </p>
              <div className="flex justify-center gap-8 sm:gap-12">
                <div className="text-center">
                  <p className="text-[#00FF88] text-2xl sm:text-3xl font-bold">50+</p>
                  <p className="text-gray-500 text-xs sm:text-sm">건의 의견</p>
                </div>
                <div className="text-center">
                  <p className="text-[#00FF88] text-2xl sm:text-3xl font-bold">30+</p>
                  <p className="text-gray-500 text-xs sm:text-sm">개선 반영</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
