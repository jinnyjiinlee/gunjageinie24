export default function BlogSection() {
  const tags = ['#프로모션', '#이벤트', '#시설안내', '#업데이트'];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader />
        <BlogCard tags={tags} />
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="text-center mb-4 sm:mb-8">
      <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
        더 <span className="neon-text">알고</span> 싶다면?
      </h3>
      <p className="text-gray-400 text-[10px] sm:text-sm">블로그에서 최신 소식을 확인하세요</p>
    </div>
  );
}

function BlogCard({ tags }: { tags: string[] }) {
  return (
    <a
      href="https://blog.naver.com/gunjastudycafe"
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-[#1A1A1A] border border-white/10 rounded-lg sm:rounded-2xl p-3 sm:p-5 md:p-6 hover:border-[#00FF88]/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <BlogInfo />
        <div className="text-[#00FF88] text-lg sm:text-2xl group-hover:translate-x-1 transition-transform">→</div>
      </div>
      <BlogTags tags={tags} />
    </a>
  );
}

function BlogInfo() {
  return (
    <div className="flex items-center gap-2.5 sm:gap-4">
      <div className="w-9 sm:w-12 h-9 sm:h-12 bg-[#03C75A] rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-xl">
        N
      </div>
      <div>
        <div className="font-bold text-white text-xs sm:text-base mb-0.5">군자 지니24 스터디카페</div>
        <div className="text-[10px] sm:text-sm text-gray-400">최신 소식 확인</div>
      </div>
    </div>
  );
}

function BlogTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-2.5 sm:mt-4 pt-2.5 sm:pt-4 border-t border-white/5 hidden sm:block">
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#00FF88]/10 text-[#00FF88] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
