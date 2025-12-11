'use client';

import { useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import html2canvas from 'html2canvas';

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
};

const designStyles: DesignStyle[] = [
  { id: 1, name: '클래식 화이트', bgColor: '#F9FAFB', headerBg: '#191F28', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#191F28', accentColor: '#3182F6' },
  { id: 2, name: '따뜻한 베이지', bgColor: '#FFFBF5', headerBg: '#92400E', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#78350F', accentColor: '#F59E0B' },
  { id: 3, name: '민트 프레시', bgColor: '#F0FDF4', headerBg: '#059669', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#064E3B', accentColor: '#10B981' },
];

export default function CommunicationPosterPage() {
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
        <title>소통 공간 안내 - ${style.name}</title>
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
      link.download = `소통공간안내_${designStyles[index].name}.jpg`;
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();
    } catch (error) {
      console.error('JPEG 저장 실패:', error);
      alert('JPEG 저장에 실패했습니다.');
    }
  };

  const renderPoster = (style: DesignStyle, index: number) => {
    return (
      <div
        key={style.id}
        ref={(el) => { posterRefs.current[index] = el; }}
        data-poster-index={index}
        style={{
          width: '210mm',
          height: '210mm',
          padding: '16mm',
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
            borderRadius: '20px',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>군자 지니24 스터디카페</div>
          <div style={{ fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>
            💬 회원 소통 공간 개설!
          </div>
          <div style={{ fontSize: '16px', opacity: 0.9 }}>
            여러분의 소중한 의견을 듣고 싶습니다
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            background: style.cardBg,
            borderRadius: '16px',
            padding: '20px 24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* 소통 중요성 */}
          <div style={{
            textAlign: 'center',
            marginBottom: '16px',
            paddingBottom: '16px',
            borderBottom: '2px solid rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px', color: style.accentColor }}>
              저희는 회원님들과의 소통을 중요하게 생각합니다
            </div>
            <div style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.5 }}>
              더 나은 스터디카페를 만들기 위해 여러분의 목소리에 귀 기울이겠습니다
            </div>
          </div>

          {/* 소통 방법들 */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flex: 1 }}>
            {/* 휴게실 소통 공간 */}
            <div style={{
              flex: 1,
              background: `linear-gradient(135deg, ${style.accentColor}10 0%, ${style.accentColor}05 100%)`,
              borderRadius: '12px',
              padding: '16px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>📝</div>
              <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>휴게실 소통 공간</div>
              <div style={{ fontSize: '12px', opacity: 0.7, lineHeight: 1.5 }}>
                휴게실에 설치된<br />
                <strong>소통 게시판</strong>을 이용해주세요
              </div>
              <div style={{
                marginTop: '10px',
                background: style.accentColor,
                color: '#fff',
                padding: '6px 14px',
                borderRadius: '16px',
                fontSize: '11px',
                fontWeight: 600,
              }}>
                자유롭게 작성 가능
              </div>
            </div>

            {/* 구글폼 */}
            <div style={{
              flex: 1,
              background: `linear-gradient(135deg, #10B98110 0%, #10B98105 100%)`,
              borderRadius: '12px',
              padding: '16px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>📱</div>
              <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>구글폼 의견 접수</div>
              <div style={{ fontSize: '12px', opacity: 0.7, lineHeight: 1.5 }}>
                온라인으로도<br />
                <strong>항시 의견 접수</strong> 중입니다
              </div>
              <div style={{
                marginTop: '10px',
                background: '#10B981',
                color: '#fff',
                padding: '6px 14px',
                borderRadius: '16px',
                fontSize: '11px',
                fontWeight: 600,
              }}>
                휴게실 QR 스캔
              </div>
            </div>
          </div>

          {/* 환영 메시지 */}
          <div style={{
            background: `linear-gradient(135deg, #FEF3C7 0%, #FFF5F5 100%)`,
            borderRadius: '12px',
            padding: '16px 20px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#92400E', marginBottom: '4px' }}>
              🙌 좋은 점, 개선점 모두 환영합니다!
            </div>
            <div style={{ fontSize: '13px', opacity: 0.7 }}>
              칭찬, 건의사항, 불편한 점 무엇이든 말씀해주세요
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '12px',
          fontSize: '12px',
          opacity: 0.6,
        }}>
          쾌적한 스터디 환경을 위해 함께 만들어가요 💙
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
              background: '#3182F6',
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
            소통 공간 안내 포스터
          </h1>
          <p style={{ color: '#6B7684', fontSize: '16px' }}>
            회원들과의 소통 공간 안내 포스터입니다
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
            href="/posters"
            style={{
              color: '#6B7684',
              textDecoration: 'none',
              fontSize: '14px',
              marginRight: '24px',
            }}
          >
            ← 포스터 모음
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
