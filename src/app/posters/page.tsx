'use client';

import Link from 'next/link';

// 모든 포스터 데이터
const allPosters = [
  {
    category: '가격표/이벤트',
    categoryIcon: '💰',
    categoryColor: '#00FF88',
    items: [
      {
        id: 'promo-2nd',
        title: '2차 프로모션 포스터',
        description: '흰색/다크 버전 + 마감 임박 포스터',
        href: '/posters/promo-2nd',
        badge: 'NEW',
        badgeColor: '#F04452',
        count: '3종',
      },
      {
        id: 'price-table',
        title: '가격표 포스터',
        description: '2차 이벤트 가격표 다양한 스타일',
        href: '/posters/price-table',
        badge: 'HOT',
        badgeColor: '#FF6B6B',
        count: '10종',
      },
    ],
  },
  {
    category: '안내/공지',
    categoryIcon: '📋',
    categoryColor: '#F59E0B',
    items: [
      {
        id: 'notice',
        title: '공지사항 포스터',
        description: '퇴실 처리, 좌석 맡기 금지, 외출 시간 등',
        href: '/posters/notice',
        badge: '',
        badgeColor: '',
        count: '5종',
      },
    ],
  },
  {
    category: '소통/피드백',
    categoryIcon: '💬',
    categoryColor: '#8B5CF6',
    items: [
      {
        id: 'communication',
        title: '소통 공간 안내',
        description: '휴게실 게시판, 구글폼 안내 포스터',
        href: '/posters/communication',
        badge: '',
        badgeColor: '',
        count: '3종',
      },
      {
        id: 'feedback',
        title: '의견 반영 포스터',
        description: '회원 의견 반영 안내 트렌디한 디자인',
        href: '/posters/feedback',
        badge: '',
        badgeColor: '',
        count: '5종',
      },
    ],
  },
];

export default function PostersPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]" style={{ fontFamily: "'Pretendard', -apple-system, sans-serif" }}>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00FF88] transition mb-6">
            <span>←</span> 홈으로 돌아가기
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-[#00FF88] text-sm mb-4">
              <span className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
              지니24가 직접 만드는 홍보물
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              <span className="text-[#00FF88]">포스터</span> 모음
            </h1>
            <p className="text-gray-400">
              총 <span className="text-white font-bold">26종</span>의 포스터 · PDF/JPEG 다운로드 가능
            </p>
          </div>
        </div>
      </div>

      {/* Content - 분류별 포스터 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {allPosters.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            {/* 카테고리 헤더 */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: `${category.categoryColor}20` }}
              >
                {category.categoryIcon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{category.category}</h2>
                <p className="text-sm text-gray-500">{category.items.length}개 포스터 세트</p>
              </div>
            </div>

            {/* 포스터 카드 그리드 */}
            <div className="grid md:grid-cols-2 gap-4">
              {category.items.map((poster) => (
                <Link key={poster.id} href={poster.href}>
                  <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00FF88]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)] group">
                    {/* 포스터 미리보기 */}
                    <div className="relative h-48 bg-[#111111] overflow-hidden">
                      <iframe
                        src={poster.href}
                        className="w-[300%] h-[300%] origin-top-left scale-[0.33] pointer-events-none"
                        style={{ border: 'none' }}
                        loading="lazy"
                        title={poster.title}
                      />
                      {/* 호버 오버레이 */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-[#00FF88] text-[#0A0A0A] px-6 py-3 rounded-full font-bold">
                          보러가기 →
                        </span>
                      </div>
                      {/* 배지 */}
                      {poster.badge && (
                        <span
                          className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold text-white"
                          style={{ background: poster.badgeColor }}
                        >
                          {poster.badge}
                        </span>
                      )}
                    </div>

                    {/* 포스터 정보 */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-white group-hover:text-[#00FF88] transition">
                          {poster.title}
                        </h3>
                        <span
                          className="text-xs px-2 py-1 rounded-full font-medium"
                          style={{ background: `${category.categoryColor}20`, color: category.categoryColor }}
                        >
                          {poster.count}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{poster.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* 사용 안내 */}
        <div className="bg-gradient-to-r from-[#00FF88]/10 to-transparent border border-[#00FF88]/30 rounded-2xl p-6 mt-8">
          <div className="font-bold text-white mb-3 flex items-center gap-2">
            <span>💡</span> 사용 안내
          </div>
          <div className="text-sm text-gray-400 leading-relaxed grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-2">
              <span className="text-[#00FF88]">✓</span>
              <span>모든 포스터는 <strong className="text-white">PDF, JPEG</strong>로 다운로드 가능</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#00FF88]">✓</span>
              <span><strong className="text-white">A4 사이즈</strong>에 최적화되어 바로 인쇄 가능</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#00FF88]">✓</span>
              <span>스터디카페 운영에 <strong className="text-white">자유롭게</strong> 활용하세요</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 border-t border-white/5">
        <div className="text-sm text-gray-500 mb-4">
          군자 지니24 스터디카페
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#00FF88] text-[#0A0A0A] px-6 py-3 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition"
        >
          🏠 홈으로
        </Link>
      </div>
    </div>
  );
}
