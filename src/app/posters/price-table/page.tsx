'use client';

import { useRef } from 'react';
import { useSearchParams } from 'next/navigation';

// 가격 데이터 - 2차 이벤트
const priceData = {
  unlimited: [
    { name: '4주', days: 28, original: 140000, event2: 90000, tag: '인기' },
    { name: '8주', days: 56, original: 240000, event2: 160000, tag: 'BEST' },
    { name: '12주', days: 84, original: 360000, event2: 239000 },
    { name: '16주', days: 112, original: 448000, event2: 315000 },
    { name: '24주', days: 168, original: 660000, event2: 479000 },
    { name: '36주', days: 252, original: 860000, event2: 655000 },
    { name: '48주', days: 336, original: 1200000, event2: 900000 },
  ],
  hourly: [
    { name: '50시간', original: 70000, event2: 55000 },
    { name: '100시간', original: 130000, event2: 95000, tag: '인기' },
    { name: '200시간', original: 240000, event2: 185000 },
    { name: '300시간', original: 340000, event2: 275000 },
  ]
};

const formatPrice = (price: number) => price.toLocaleString() + '원';
const calcDiscount = (original: number, sale: number) => Math.round((1 - sale / original) * 100);

// 디자인 변형들
type DesignStyle = {
  id: number;
  name: string;
  bgColor: string;
  headerBg: string;
  headerText: string;
  cardBg: string;
  textColor: string;
  accentColor: string;
  badgeColor: string;
};

const designStyles: DesignStyle[] = [
  { id: 1, name: '클래식 화이트', bgColor: '#F9FAFB', headerBg: '#191F28', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#191F28', accentColor: '#3182F6', badgeColor: '#F04452' },
  { id: 2, name: '다크 모드', bgColor: '#1A1A2E', headerBg: '#16213E', headerText: '#FFFFFF', cardBg: '#0F3460', textColor: '#FFFFFF', accentColor: '#E94560', badgeColor: '#FFD93D' },
  { id: 3, name: '민트 프레시', bgColor: '#F0FDF4', headerBg: '#059669', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#064E3B', accentColor: '#10B981', badgeColor: '#F04452' },
  { id: 4, name: '로즈 골드', bgColor: '#FFF5F5', headerBg: '#BE185D', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#831843', accentColor: '#EC4899', badgeColor: '#7C3AED' },
  { id: 5, name: '오션 블루', bgColor: '#EFF6FF', headerBg: '#1E40AF', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#1E3A8A', accentColor: '#3B82F6', badgeColor: '#F04452' },
  { id: 6, name: '퍼플 드림', bgColor: '#FAF5FF', headerBg: '#7C3AED', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#5B21B6', accentColor: '#8B5CF6', badgeColor: '#EC4899' },
  { id: 7, name: '선셋 오렌지', bgColor: '#FFF7ED', headerBg: '#EA580C', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#9A3412', accentColor: '#F97316', badgeColor: '#DC2626' },
  { id: 8, name: '모던 그레이', bgColor: '#F3F4F6', headerBg: '#374151', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#1F2937', accentColor: '#6B7280', badgeColor: '#EF4444' },
  { id: 9, name: '네이비 골드', bgColor: '#F8FAFC', headerBg: '#0F172A', headerText: '#FCD34D', cardBg: '#FFFFFF', textColor: '#0F172A', accentColor: '#EAB308', badgeColor: '#DC2626' },
  { id: 10, name: '스카이 블루', bgColor: '#F0F9FF', headerBg: '#0284C7', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#075985', accentColor: '#0EA5E9', badgeColor: '#E11D48' },
];

export default function PriceTable2ndPage() {
  const posterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const searchParams = useSearchParams();
  const isPreview = searchParams.get('preview') === '1';

  const downloadPDF = (index: number) => {
    const element = posterRefs.current[index];
    if (!element) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('팝업이 차단되었습니다. 팝업을 허용해주세요.');
      return;
    }

    const style = designStyles[index];

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>2차 오픈이벤트 가격표 - ${style.name}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <style>
          @page {
            size: A4;
            margin: 0;
          }
          html, body {
            margin: 0;
            padding: 0;
            width: 210mm;
            height: 297mm;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          body {
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
          }
          @media print {
            html, body {
              width: 210mm;
              height: 297mm;
              margin: 0;
              padding: 0;
            }
            body {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
          }
        </style>
      </head>
      <body>
        ${element.outerHTML}
        <script>
          setTimeout(() => {
            window.print();
            window.close();
          }, 500);
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  const renderPoster = (style: DesignStyle, index: number) => {
    return (
      <div
        key={style.id}
        ref={(el) => { posterRefs.current[index] = el; }}
        data-poster-index={index}
        style={{
          width: '210mm',
          height: '297mm',
          padding: '12mm 14mm',
          background: style.bgColor,
          color: style.textColor,
          fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div
          style={{
            background: style.headerBg,
            color: style.headerText,
            padding: '18px 28px',
            borderRadius: '16px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '11px', opacity: 0.7, marginBottom: '2px' }}>군자 지니24 스터디카페</div>
              <div style={{ fontSize: '24px', fontWeight: 800 }}>특별 할인 가격표</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                background: style.accentColor,
                color: '#fff',
                padding: '6px 14px',
                borderRadius: '14px',
                fontSize: '12px',
                fontWeight: 700,
              }}
            >
              2차 오픈이벤트 진행중
            </div>
            <div style={{ fontSize: '13px', opacity: 0.9 }}>12.08 ~ 12.21</div>
          </div>
        </div>

        {/* 최대 할인 배지 */}
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <span
            style={{
              background: `linear-gradient(135deg, ${style.badgeColor} 0%, ${style.badgeColor}DD 100%)`,
              color: '#fff',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 700,
              display: 'inline-block',
            }}
          >
            최대 40% 할인
          </span>
        </div>

        {/* 가격표 - 2열 레이아웃 */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flex: 1 }}>
          {/* 기간권 */}
          <div
            style={{
              flex: 1,
              background: style.cardBg,
              borderRadius: '14px',
              padding: '18px 20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                fontWeight: 700,
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingBottom: '8px',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <span
                style={{
                  background: style.accentColor,
                  color: '#fff',
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                }}
              >
                ∞
              </span>
              기간권
              <span style={{ fontSize: '9px', fontWeight: 400, opacity: 0.6 }}>24시간 무제한</span>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            {priceData.unlimited.map((item, i) => {
              const discount = calcDiscount(item.original, item.event2);
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 0',
                    borderBottom: i < priceData.unlimited.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontWeight: 600, fontSize: '12px' }}>{item.name}</span>
                    <span style={{ fontSize: '9px', opacity: 0.5 }}>({item.days}일)</span>
                    {item.tag && (
                      <span style={{
                        background: item.tag === 'BEST' ? style.badgeColor : style.accentColor,
                        color: '#fff',
                        padding: '1px 5px',
                        borderRadius: '4px',
                        fontSize: '8px',
                        fontWeight: 700
                      }}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '9px', opacity: 0.4, textDecoration: 'line-through' }}>
                      {formatPrice(item.original)}
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: style.accentColor }}>
                      {formatPrice(item.event2)}
                    </span>
                    <span style={{
                      background: discount >= 35 ? style.badgeColor : style.accentColor,
                      color: '#fff',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: '9px',
                      fontWeight: 700,
                    }}>
                      {discount}%
                    </span>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

          {/* 시간 충전권 */}
          <div
            style={{
              width: '42%',
              background: style.cardBg,
              borderRadius: '14px',
              padding: '18px 20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                fontWeight: 700,
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingBottom: '8px',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <span
                style={{
                  background: style.accentColor,
                  color: '#fff',
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                }}
              >
                ⏱
              </span>
              시간 충전권
              <span style={{ fontSize: '9px', fontWeight: 400, opacity: 0.6 }}>365일</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            {priceData.hourly.map((item, i) => {
              const discount = calcDiscount(item.original, item.event2);
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 0',
                    borderBottom: i < priceData.hourly.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontWeight: 600, fontSize: '12px' }}>{item.name}</span>
                    {item.tag && (
                      <span style={{
                        background: style.accentColor,
                        color: '#fff',
                        padding: '1px 5px',
                        borderRadius: '4px',
                        fontSize: '8px',
                        fontWeight: 700
                      }}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '9px', opacity: 0.4, textDecoration: 'line-through' }}>
                      {formatPrice(item.original)}
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: style.accentColor }}>
                      {formatPrice(item.event2)}
                    </span>
                    <span style={{
                      background: style.accentColor,
                      color: '#fff',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: '9px',
                      fontWeight: 700,
                    }}>
                      {discount}%
                    </span>
                  </div>
                </div>
              );
            })}
            </div>

            {/* 빈 공간 채우기 */}
            <div style={{ flex: 1 }} />

            {/* 시간 충전권 안내 */}
            <div style={{
              background: `${style.accentColor}10`,
              borderRadius: '8px',
              padding: '10px',
              marginTop: '10px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '10px', fontWeight: 600, color: style.accentColor }}>
                시간 충전권 장점
              </div>
              <div style={{ fontSize: '9px', opacity: 0.7, marginTop: '4px' }}>
                유효기간 365일 · 필요할 때만 사용
              </div>
            </div>
          </div>
        </div>

        {/* 경고 */}
        <div
          style={{
            background: `linear-gradient(135deg, #FFFBEB 0%, #FFF5F5 100%)`,
            border: `1.5px solid ${style.badgeColor}30`,
            borderRadius: '12px',
            padding: '14px 18px',
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span style={{ fontSize: '24px' }}>⚠️</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: style.badgeColor }}>
              3차 이벤트(12.22~)부터 가격이 인상됩니다
            </div>
            <div style={{ fontSize: '10px', opacity: 0.6, marginTop: '2px' }}>
              3차 이벤트 되기 전에 결제하세요!
            </div>
          </div>
        </div>

        {/* 안내 */}
        <div
          style={{
            background: style.cardBg,
            borderRadius: '10px',
            padding: '12px 18px',
            marginBottom: '14px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              fontSize: '10px',
              color: style.textColor,
            }}
          >
            <span>2차 이벤트 기간 내 결제 시 할인가 적용</span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ fontWeight: 600, color: style.accentColor }}>밀리언즈 앱 결제</span>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: 'auto' }}>
          <div
            style={{
              display: 'inline-block',
              background: style.headerBg,
              color: style.headerText,
              padding: '12px 28px',
              borderRadius: '24px',
              fontSize: '14px',
              fontWeight: 700,
            }}
          >
            이벤트 마감 <span style={{ color: style.accentColor === '#EAB308' ? '#FCD34D' : style.accentColor }}>D-DAY 12.21</span>
          </div>
        </div>
      </div>
    );
  };

  // Preview 모드: 첫 번째 포스터만 보여줌
  if (isPreview) {
    return (
      <div style={{ background: designStyles[0].bgColor }}>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        {renderPoster(designStyles[0], 0)}
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#E5E7EB', padding: '40px 20px' }}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
      />

      <div style={{ maxWidth: '240mm', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-block',
              background: '#3B82F6',
              color: '#fff',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            2차 오픈이벤트 전용
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#191F28', marginBottom: '12px' }}>
            2차 이벤트 가격표 디자인
          </h1>
          <p style={{ color: '#6B7684', fontSize: '16px' }}>
            10가지 스타일 중 원하는 디자인을 선택하여 PDF로 저장하세요
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {designStyles.map((style, index) => (
            <div key={style.id}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
                  padding: '0 8px',
                }}
              >
                <div>
                  <span
                    style={{
                      background: '#191F28',
                      color: '#fff',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 700,
                      marginRight: '12px',
                    }}
                  >
                    #{style.id}
                  </span>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: '#191F28' }}>
                    {style.name}
                  </span>
                </div>
                <button
                  onClick={() => downloadPDF(index)}
                  style={{
                    background: '#191F28',
                    color: '#fff',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '24px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  PDF 저장
                </button>
              </div>
              <div
                style={{
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                {renderPoster(style, index)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px', paddingBottom: '40px' }}>
          <a
            href="/posters/promo-2nd"
            style={{
              color: '#6B7684',
              textDecoration: 'none',
              fontSize: '14px',
              marginRight: '24px',
            }}
          >
            ← 2차 프로모션 포스터
          </a>
          <a
            href="/posters"
            style={{
              color: '#6B7684',
              textDecoration: 'none',
              fontSize: '14px',
              marginRight: '24px',
            }}
          >
            포스터 모음
          </a>
          <a
            href="/"
            style={{
              color: '#6B7684',
              textDecoration: 'none',
              fontSize: '14px',
            }}
          >
            홈으로
          </a>
        </div>
      </div>
    </div>
  );
}
