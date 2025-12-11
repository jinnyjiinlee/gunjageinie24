'use client';

import { useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import html2canvas from 'html2canvas';

// 의견 반영 데이터
const feedbackItems = [
  {
    request: '프린트기가 필요해요',
    response: '12월 11일 (목) 프린트기 설치 합니다',
    status: 'done',
    icon: '🖨️',
  },
  {
    request: '스탠드가 필요해요',
    response: '개인 스탠드 5개 구매 완료',
    status: 'done',
    icon: '💡',
  },
  {
    request: '핸드크림이 필요해요',
    response: '주문 완료',
    status: 'done',
    icon: '🧴',
  },
];

// 디자인 스타일
type DesignStyle = {
  id: number;
  name: string;
  bgColor: string;
  headerBg: string;
  headerText: string;
  cardBg: string;
  textColor: string;
  accentColor: string;
  successColor: string;
};

const designStyles: DesignStyle[] = [
  { id: 1, name: '네온 다크', bgColor: '#0F0F1A', headerBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', headerText: '#FFFFFF', cardBg: '#1A1A2E', textColor: '#FFFFFF', accentColor: '#A855F7', successColor: '#22D3EE' },
  { id: 2, name: '글래스모피즘', bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', headerBg: 'rgba(255,255,255,0.2)', headerText: '#FFFFFF', cardBg: 'rgba(255,255,255,0.15)', textColor: '#FFFFFF', accentColor: '#F472B6', successColor: '#34D399' },
  { id: 3, name: '소프트 그라데이션', bgColor: 'linear-gradient(180deg, #FDFBFB 0%, #EBEDEE 100%)', headerBg: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#1F2937', accentColor: '#059669', successColor: '#10B981' },
  { id: 4, name: '선셋 바이브', bgColor: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)', headerBg: 'rgba(0,0,0,0.3)', headerText: '#FFFFFF', cardBg: 'rgba(255,255,255,0.95)', textColor: '#1F2937', accentColor: '#F43F5E', successColor: '#10B981' },
  { id: 5, name: '미니멀 블랙', bgColor: '#FFFFFF', headerBg: '#000000', headerText: '#FFFFFF', cardBg: '#F8F8F8', textColor: '#000000', accentColor: '#000000', successColor: '#16A34A' },
];

function FeedbackPosterContent() {
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
        <title>의견 반영 - ${style.name}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <style>
          @page {
            size: 210mm 210mm;
            margin: 0;
          }
          html, body {
            margin: 0;
            padding: 0;
            width: 210mm;
            height: 210mm;
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
              height: 210mm;
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

  const downloadJPEG = async (index: number) => {
    const element = posterRefs.current[index];
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      const link = document.createElement('a');
      link.download = `의견반영_${designStyles[index].name}.jpg`;
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();
    } catch (error) {
      console.error('JPEG 저장 실패:', error);
      alert('JPEG 저장에 실패했습니다.');
    }
  };

  const renderPoster = (style: DesignStyle, index: number) => {
    const isGlass = style.name === '글래스모피즘';
    const isNeon = style.name === '네온 다크';
    const isMinimal = style.name === '미니멀 블랙';

    return (
      <div
        key={style.id}
        ref={(el) => { posterRefs.current[index] = el; }}
        data-poster-index={index}
        style={{
          width: '210mm',
          height: '210mm',
          padding: '14mm',
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
            padding: '24px 32px',
            borderRadius: isMinimal ? '0' : '20px',
            marginBottom: '16px',
            textAlign: 'center',
            backdropFilter: isGlass ? 'blur(10px)' : 'none',
            border: isGlass ? '1px solid rgba(255,255,255,0.3)' : 'none',
          }}
        >
          <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '8px', letterSpacing: '2px' }}>
            군자 지니24 스터디카페
          </div>
          <div style={{
            fontSize: '36px',
            fontWeight: 800,
            marginBottom: '8px',
            background: isNeon ? 'linear-gradient(90deg, #A855F7, #22D3EE)' : 'none',
            WebkitBackgroundClip: isNeon ? 'text' : 'unset',
            WebkitTextFillColor: isNeon ? 'transparent' : 'unset',
          }}>
            의견 반영 ✨
          </div>
          <div style={{ fontSize: '14px', opacity: 0.9 }}>
            회원님들의 소중한 의견을 반영했습니다
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            background: style.cardBg,
            borderRadius: isMinimal ? '0' : '20px',
            padding: '24px',
            flex: 1,
            backdropFilter: isGlass ? 'blur(10px)' : 'none',
            border: isGlass ? '1px solid rgba(255,255,255,0.2)' : isMinimal ? '2px solid #000' : 'none',
          }}
        >
          {/* 의견 반영 리스트 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {feedbackItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: isGlass
                    ? 'rgba(255,255,255,0.1)'
                    : isNeon
                      ? 'rgba(168, 85, 247, 0.1)'
                      : isMinimal
                        ? '#FFF'
                        : `linear-gradient(135deg, ${style.successColor}15 0%, ${style.successColor}05 100%)`,
                  borderRadius: isMinimal ? '0' : '16px',
                  padding: '20px',
                  border: isMinimal ? '2px solid #000' : isGlass ? '1px solid rgba(255,255,255,0.2)' : `2px solid ${style.successColor}30`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* 번호 뱃지 */}
                <div style={{
                  position: 'absolute',
                  top: isMinimal ? '0' : '12px',
                  right: isMinimal ? '0' : '12px',
                  background: isMinimal ? '#000' : style.successColor,
                  color: '#fff',
                  width: isMinimal ? '32px' : '28px',
                  height: isMinimal ? '32px' : '28px',
                  borderRadius: isMinimal ? '0' : '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 700,
                }}>
                  {i + 1}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    fontSize: '40px',
                    lineHeight: 1,
                    filter: isNeon ? 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.5))' : 'none',
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    {/* 요청 */}
                    <div style={{
                      fontSize: '14px',
                      opacity: 0.7,
                      marginBottom: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}>
                      <span style={{
                        background: style.accentColor,
                        color: '#fff',
                        padding: '2px 8px',
                        borderRadius: isMinimal ? '0' : '8px',
                        fontSize: '9px',
                        fontWeight: 700,
                        letterSpacing: '0.5px',
                      }}>
                        요청
                      </span>
                      "{item.request}"
                    </div>
                    {/* 반영 */}
                    <div style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: style.successColor,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}>
                      <span style={{ fontSize: '20px' }}>→</span>
                      {item.response}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 감사 메시지 */}
          <div style={{
            background: isGlass
              ? 'rgba(255,255,255,0.15)'
              : isNeon
                ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(34, 211, 238, 0.2) 100%)'
                : isMinimal
                  ? '#000'
                  : `linear-gradient(135deg, ${style.accentColor}20 0%, ${style.successColor}20 100%)`,
            borderRadius: isMinimal ? '0' : '16px',
            padding: '18px 24px',
            marginTop: '16px',
            textAlign: 'center',
            border: isGlass ? '1px solid rgba(255,255,255,0.2)' : 'none',
          }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 700,
              color: isMinimal ? '#fff' : style.successColor,
              marginBottom: '4px'
            }}>
              🙏 소중한 의견 감사합니다!
            </div>
            <div style={{
              fontSize: '12px',
              opacity: isMinimal ? 0.8 : 0.6,
              color: isMinimal ? '#fff' : style.textColor,
            }}>
              앞으로도 더 좋은 환경을 위해 의견 보내주세요
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '14px',
          fontSize: '12px',
          opacity: 0.6,
        }}>
          휴게실 소통 공간 & 구글폼으로 의견을 보내주세요 💙
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
              background: '#10B981',
              color: '#fff',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            1:1 정사각형 포스터
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#191F28', marginBottom: '12px' }}>
            의견 반영 포스터
          </h1>
          <p style={{ color: '#6B7684', fontSize: '16px' }}>
            회원님들의 의견이 어떻게 반영되었는지 알려드립니다
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
                <div style={{ display: 'flex', gap: '8px' }}>
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
                  <button
                    onClick={() => downloadJPEG(index)}
                    style={{
                      background: '#3B82F6',
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
                    JPEG 저장
                  </button>
                </div>
              </div>
              <div
                style={{
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  width: 'fit-content',
                  margin: '0 auto',
                }}
              >
                {renderPoster(style, index)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px', paddingBottom: '40px' }}>
          <a
            href="/posters/communication"
            style={{
              color: '#6B7684',
              textDecoration: 'none',
              fontSize: '14px',
              marginRight: '24px',
            }}
          >
            ← 소통 공간 안내
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

export default function FeedbackPosterPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#E5E7EB' }} />}>
      <FeedbackPosterContent />
    </Suspense>
  );
}
