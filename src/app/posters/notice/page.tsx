'use client';

import { useRef } from 'react';

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
  warningColor: string;
};

const designStyles: DesignStyle[] = [
  { id: 1, name: '클래식 화이트', bgColor: '#F9FAFB', headerBg: '#191F28', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#191F28', accentColor: '#3182F6', warningColor: '#F04452' },
  { id: 2, name: '다크 모드', bgColor: '#1A1A2E', headerBg: '#16213E', headerText: '#FFFFFF', cardBg: '#0F3460', textColor: '#FFFFFF', accentColor: '#E94560', warningColor: '#FFD93D' },
  { id: 3, name: '민트 프레시', bgColor: '#F0FDF4', headerBg: '#059669', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#064E3B', accentColor: '#10B981', warningColor: '#F04452' },
  { id: 4, name: '오션 블루', bgColor: '#EFF6FF', headerBg: '#1E40AF', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#1E3A8A', accentColor: '#3B82F6', warningColor: '#DC2626' },
  { id: 5, name: '모던 그레이', bgColor: '#F3F4F6', headerBg: '#374151', headerText: '#FFFFFF', cardBg: '#FFFFFF', textColor: '#1F2937', accentColor: '#6B7280', warningColor: '#EF4444' },
];

export default function NoticePosterPage() {
  const posterRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        <title>공지사항 - ${style.name}</title>
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
          padding: '14mm 16mm',
          background: style.bgColor,
          color: style.textColor,
          fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: style.headerBg,
            color: style.headerText,
            padding: '28px 32px',
            borderRadius: '20px',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '10px' }}>군자 지니24 스터디카페</div>
          <div style={{ fontSize: '42px', fontWeight: 800 }}>📋 공지사항</div>
        </div>

        {/* Main Content */}
        <div
          style={{
            background: style.cardBg,
            borderRadius: '20px',
            padding: '28px 32px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          }}
        >
          {/* 퇴실 처리 */}
          <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '2px solid rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ fontSize: '28px' }}>🚪</span>
              <span style={{ fontSize: '22px', fontWeight: 700 }}>퇴실 처리 필수</span>
            </div>
            <div style={{ fontSize: '16px', lineHeight: 1.8, paddingLeft: '40px' }}>
              귀가하실 때는 항상 <strong>퇴실 처리</strong> 부탁드립니다.
            </div>
          </div>

          {/* 좌석 맡기 금지 */}
          <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '2px solid rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ fontSize: '28px' }}>⛔</span>
              <span style={{ fontSize: '22px', fontWeight: 700 }}>좌석 맡기 금지</span>
            </div>
            <div style={{ fontSize: '16px', lineHeight: 1.8, paddingLeft: '40px' }}>
              좌석 맡기는 금지이며, <strong>2시간 이상 자리를 비울 시</strong><br />
              좌석을 정리해주시고 퇴실 처리 바랍니다.
            </div>
            <div style={{ fontSize: '13px', color: style.warningColor, paddingLeft: '40px', marginTop: '8px' }}>
              ※ 자리가 정리될 수 있으며, 분실 시 책임지지 않습니다.
            </div>
          </div>

          {/* 외출 시간 */}
          <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '2px solid rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ fontSize: '28px' }}>⏰</span>
              <span style={{ fontSize: '22px', fontWeight: 700 }}>외출 시간 제한</span>
            </div>
            <div style={{ fontSize: '16px', lineHeight: 1.8, paddingLeft: '40px' }}>
              외출은 <strong>최대 2시간</strong>까지 허용됩니다.<br />
              2시간 초과 시 퇴실 처리됩니다.
            </div>
          </div>

          {/* 원격 입실 금지 */}
          <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '2px solid rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ fontSize: '28px' }}>🏠</span>
              <span style={{ fontSize: '22px', fontWeight: 700 }}>원격 입실 금지</span>
            </div>
            <div style={{ fontSize: '16px', lineHeight: 1.8, paddingLeft: '40px' }}>
              집에서 입실하는 것은 <strong>허용되지 않습니다.</strong><br />
              반드시 매장에서 입실해주세요.
            </div>
          </div>

          {/* 사석화 금지 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ fontSize: '28px' }}>🪑</span>
              <span style={{ fontSize: '22px', fontWeight: 700 }}>사석화 금지</span>
            </div>
            <div style={{ fontSize: '16px', lineHeight: 1.8, paddingLeft: '40px' }}>
              좌석 사석화는 금지됩니다.<br />
              모든 이용자가 공평하게 이용할 수 있도록 협조 부탁드립니다.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            background: `linear-gradient(135deg, ${style.warningColor}15 0%, ${style.accentColor}15 100%)`,
            borderRadius: '16px',
            padding: '20px 24px',
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '15px', fontWeight: 700, color: style.warningColor, marginBottom: '6px' }}>
            위 사항 미준수 시 이용에 제한이 있을 수 있습니다
          </div>
          <div style={{ fontSize: '13px', opacity: 0.7 }}>
            쾌적한 스터디카페 환경을 위해 협조 부탁드립니다 🙏
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: '#E5E7EB', padding: '40px 20px' }}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
      />

      <div style={{ maxWidth: '240mm', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#191F28', marginBottom: '12px' }}>
            공지사항 포스터
          </h1>
          <p style={{ color: '#6B7684', fontSize: '16px' }}>
            5가지 스타일 중 원하는 디자인을 선택하여 PDF로 저장하세요
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
