'use client';

import { useRef } from 'react';
import html2canvas from 'html2canvas';

// 가격 데이터 - 2차 이벤트 (정가 + 이벤트가)
const priceData = {
  unlimited: [
    { name: '4주', original: 140000, price: 90000 },
    { name: '8주', original: 240000, price: 160000 },
    { name: '12주', original: 360000, price: 239000 },
    { name: '16주', original: 448000, price: 315000 },
    { name: '24주', original: 660000, price: 479000 },
    { name: '36주', original: 860000, price: 655000 },
    { name: '48주', original: 1200000, price: 900000 },
  ],
  hourly: [
    { name: '50시간', original: 70000, price: 55000 },
    { name: '100시간', original: 130000, price: 95000 },
    { name: '200시간', original: 240000, price: 185000 },
    { name: '300시간', original: 340000, price: 275000 },
  ]
};

const formatPrice = (price: number) => price.toLocaleString();

export default function PriceTable2ndPromoPage() {
  const posterRef = useRef<HTMLDivElement | null>(null);
  const posterDarkRef = useRef<HTMLDivElement | null>(null);
  const deadlineRef = useRef<HTMLDivElement | null>(null);

  const downloadPDF = () => {
    const element = posterRef.current;
    if (!element) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('팝업이 차단되었습니다. 팝업을 허용해주세요.');
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>2차 오픈이벤트 프로모션</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <style>
          @page { size: A4; margin: 0; }
          html, body { margin: 0; padding: 0; width: 210mm; height: 297mm; }
          * { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif; }
        </style>
      </head>
      <body>
        ${element.outerHTML}
        <script>setTimeout(() => { window.print(); window.close(); }, 500);</script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  const downloadJPEG = async () => {
    const element = posterRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      const link = document.createElement('a');
      link.download = '2차_오픈이벤트_프로모션.jpg';
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();
    } catch (error) {
      console.error('JPEG 저장 실패:', error);
      alert('JPEG 저장에 실패했습니다.');
    }
  };

  const downloadDarkPDF = () => {
    const element = posterDarkRef.current;
    if (!element) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('팝업이 차단되었습니다. 팝업을 허용해주세요.');
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>2차 오픈이벤트 프로모션 (다크)</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <style>
          @page { size: A4; margin: 0; }
          html, body { margin: 0; padding: 0; width: 210mm; height: 297mm; }
          * { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif; }
        </style>
      </head>
      <body>
        ${element.outerHTML}
        <script>setTimeout(() => { window.print(); window.close(); }, 500);</script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  const downloadDarkJPEG = async () => {
    const element = posterDarkRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      const link = document.createElement('a');
      link.download = '2차_오픈이벤트_프로모션_다크.jpg';
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();
    } catch (error) {
      console.error('JPEG 저장 실패:', error);
      alert('JPEG 저장에 실패했습니다.');
    }
  };

  const downloadDeadlinePDF = () => {
    const element = deadlineRef.current;
    if (!element) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('팝업이 차단되었습니다. 팝업을 허용해주세요.');
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>마감 임박 안내</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <style>
          @page { size: A4; margin: 0; }
          html, body { margin: 0; padding: 0; width: 210mm; height: 297mm; }
          * { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif; }
        </style>
      </head>
      <body>
        ${element.outerHTML}
        <script>setTimeout(() => { window.print(); window.close(); }, 500);</script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  const downloadDeadlineJPEG = async () => {
    const element = deadlineRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      const link = document.createElement('a');
      link.download = '마감임박_안내.jpg';
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();
    } catch (error) {
      console.error('JPEG 저장 실패:', error);
      alert('JPEG 저장에 실패했습니다.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#1a1a2e', padding: '40px 20px' }}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
      />

      <div style={{ maxWidth: '240mm', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
            2차 오픈이벤트 프로모션
          </h1>
          <p style={{ color: '#8B95A1', fontSize: '16px', marginBottom: '20px' }}>
            트렌디한 다크 테마 가격표
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button
              onClick={downloadPDF}
              style={{
                background: '#fff',
                color: '#1a1a2e',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '28px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              PDF 저장
            </button>
            <button
              onClick={downloadJPEG}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '28px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              JPEG 저장
            </button>
          </div>
        </div>

        {/* 포스터 */}
        <div
          ref={posterRef}
          style={{
            width: '210mm',
            height: '297mm',
            background: '#FFFFFF',
            margin: '0 auto',
            padding: '12mm 14mm',
            fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
            color: '#191F28',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* 배경 그라데이션 효과 */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '150%',
            height: '150%',
            background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '20px',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{ fontSize: '14px', color: '#6B7684' }}>
              군자 지니24 스터디카페
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #F04452 0%, #E8344A 100%)',
              padding: '10px 20px',
              borderRadius: '25px',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '1px',
            }}>
              LIMITED 14 DAYS
            </div>
          </div>

          {/* Title Section */}
          <div style={{
            textAlign: 'center',
            marginBottom: '20px',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{
              fontSize: '14px',
              letterSpacing: '6px',
              color: '#6B7684',
              marginBottom: '10px',
            }}>
              2ND OPEN EVENT
            </div>
            <div style={{
              fontSize: '42px',
              fontWeight: 800,
              marginBottom: '16px',
              color: '#191F28',
            }}>
              <span style={{ color: '#3B82F6' }}>특별 할인</span> 프로모션
            </div>
            {/* 기간 크게 표시 */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '16px',
              padding: '16px 32px',
              display: 'inline-block',
            }}>
              <div style={{ fontSize: '13px', color: '#6B7684', marginBottom: '6px' }}>
                이벤트 기간
              </div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#191F28' }}>
                12.8 (월) ~ 12.21 (일)
              </div>
            </div>
          </div>

          {/* Price Cards */}
          <div style={{
            display: 'flex',
            gap: '14px',
            flex: 1,
            position: 'relative',
            zIndex: 1,
          }}>
            {/* 기간권 */}
            <div style={{
              flex: 1,
              background: '#F8FAFC',
              borderRadius: '20px',
              padding: '20px 24px',
              border: '1px solid #E5E8EB',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px',
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                }}>
                  ∞
                </div>
                <div>
                  <div style={{ fontSize: '17px', fontWeight: 700, color: '#191F28' }}>무제한 기간권</div>
                  <div style={{ fontSize: '11px', color: '#8B95A1' }}>Unlimited Period Pass</div>
                </div>
              </div>

              {priceData.unlimited.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 0',
                    borderBottom: i < priceData.unlimited.length - 1 ? '1px solid #E5E8EB' : 'none',
                  }}
                >
                  <span style={{ fontSize: '14px', color: '#4E5968' }}>{item.name}</span>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '12px', color: '#8B95A1', textDecoration: 'line-through', marginRight: '8px' }}>
                      {formatPrice(item.original)}원
                    </span>
                    <span style={{ fontSize: '17px', fontWeight: 700, color: '#2563EB' }}>
                      {formatPrice(item.price)}<span style={{ fontSize: '12px', fontWeight: 400, color: '#6B7684' }}>원</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 시간 충전권 */}
            <div style={{
              flex: 1,
              background: '#F8FAFC',
              borderRadius: '20px',
              padding: '20px 24px',
              border: '1px solid #E5E8EB',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px',
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                }}>
                  ⏱
                </div>
                <div>
                  <div style={{ fontSize: '17px', fontWeight: 700, color: '#191F28' }}>시간 충전권</div>
                  <div style={{ fontSize: '11px', color: '#8B95A1' }}>Time Charge Pass</div>
                </div>
              </div>

              {priceData.hourly.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 0',
                    borderBottom: i < priceData.hourly.length - 1 ? '1px solid #E5E8EB' : 'none',
                  }}
                >
                  <span style={{ fontSize: '14px', color: '#4E5968' }}>{item.name}</span>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '12px', color: '#8B95A1', textDecoration: 'line-through', marginRight: '8px' }}>
                      {formatPrice(item.original)}원
                    </span>
                    <span style={{ fontSize: '17px', fontWeight: 700, color: '#2563EB' }}>
                      {formatPrice(item.price)}<span style={{ fontSize: '12px', fontWeight: 400, color: '#6B7684' }}>원</span>
                    </span>
                  </div>
                </div>
              ))}

              <div style={{ flex: 1 }} />

              {/* 안내 박스 */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.1) 100%)',
                borderRadius: '12px',
                padding: '14px 16px',
                marginTop: '16px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '12px', color: '#6B7684' }}>이벤트 기간 구매 시</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#2563EB' }}>구매일 기준 기간 적용</div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div style={{ position: 'relative', zIndex: 1, marginTop: '24px' }}>
            {/* Warning Banner */}
            <div style={{
              background: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)',
              border: '1px solid #FECACA',
              borderRadius: '14px',
              padding: '14px 20px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}>
              <span style={{ fontSize: '24px' }}>⚠️</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#DC2626' }}>
                  3차 이벤트(12.22~)부터 가격이 인상됩니다
                </div>
                <div style={{ fontSize: '11px', color: '#991B1B', marginTop: '2px' }}>
                  3차 이벤트 되기 전에 결제하세요!
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '18px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1px solid #E5E8EB',
            }}>
              <div>
                <div style={{ fontSize: '12px', color: '#8B95A1', marginBottom: '4px' }}>이벤트 마감</div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#2563EB' }}>12.21</div>
              </div>
              <div style={{
                width: '2px',
                height: '40px',
                background: '#E5E8EB',
                borderRadius: '1px',
              }} />
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '12px', color: '#8B95A1', marginBottom: '4px' }}>이벤트 기간</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#191F28' }}>12월 8일 (월) ~ 12월 21일 (일)</div>
                <div style={{ fontSize: '11px', color: '#8B95A1', marginTop: '2px' }}>프로모션 가격은 이벤트 기간에만 적용</div>
              </div>
            </div>

            {/* Bottom Text */}
            <div style={{
              textAlign: 'center',
              marginTop: '14px',
              fontSize: '12px',
              color: '#8B95A1',
            }}>
              밀리언즈 앱에서 결제 가능
            </div>
          </div>
        </div>

        {/* 검정 버전 포스터 */}
        <div style={{ marginTop: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
              다크 버전
            </h2>
            <p style={{ color: '#8B95A1', fontSize: '14px' }}>
              검정 배경 버전
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '24px' }}>
            <button
              onClick={downloadDarkPDF}
              style={{
                background: '#fff',
                color: '#1a1a2e',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '28px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              PDF 저장
            </button>
            <button
              onClick={downloadDarkJPEG}
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                color: '#fff',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '28px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              JPEG 저장
            </button>
          </div>

          {/* 다크 포스터 */}
          <div
            ref={posterDarkRef}
            style={{
              width: '210mm',
              height: '297mm',
              background: '#0F0F0F',
              margin: '0 auto',
              padding: '12mm 14mm',
              fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* 배경 그라데이션 효과 */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '150%',
              height: '150%',
              background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '20px',
              position: 'relative',
              zIndex: 1,
            }}>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
                군자 지니24 스터디카페
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #F04452 0%, #E8344A 100%)',
                padding: '10px 20px',
                borderRadius: '25px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '1px',
              }}>
                LIMITED 14 DAYS
              </div>
            </div>

            {/* Title Section */}
            <div style={{
              textAlign: 'center',
              marginBottom: '20px',
              position: 'relative',
              zIndex: 1,
            }}>
              <div style={{
                fontSize: '14px',
                letterSpacing: '6px',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '10px',
              }}>
                2ND OPEN EVENT
              </div>
              <div style={{
                fontSize: '42px',
                fontWeight: 800,
                marginBottom: '16px',
                color: '#fff',
              }}>
                <span style={{ color: '#93C5FD' }}>특별 할인</span> 프로모션
              </div>
              {/* 기간 크게 표시 */}
              <div style={{
                background: 'rgba(147, 197, 253, 0.15)',
                border: '1px solid rgba(147, 197, 253, 0.4)',
                borderRadius: '16px',
                padding: '16px 32px',
                display: 'inline-block',
              }}>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '6px' }}>
                  이벤트 기간
                </div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff' }}>
                  12.8 (월) ~ 12.21 (일)
                </div>
              </div>
            </div>

            {/* Price Cards */}
            <div style={{
              display: 'flex',
              gap: '14px',
              flex: 1,
              position: 'relative',
              zIndex: 1,
            }}>
              {/* 기간권 */}
              <div style={{
                flex: 1,
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '20px 24px',
                border: '1px solid rgba(255,255,255,0.15)',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                  }}>
                    ∞
                  </div>
                  <div>
                    <div style={{ fontSize: '17px', fontWeight: 700, color: '#fff' }}>무제한 기간권</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Unlimited Period Pass</div>
                  </div>
                </div>

                {priceData.unlimited.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 0',
                      borderBottom: i < priceData.unlimited.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                    }}
                  >
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>{item.name}</span>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through', marginRight: '8px' }}>
                        {formatPrice(item.original)}원
                      </span>
                      <span style={{ fontSize: '17px', fontWeight: 700, color: '#93C5FD' }}>
                        {formatPrice(item.price)}<span style={{ fontSize: '12px', fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}>원</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 시간 충전권 */}
              <div style={{
                flex: 1,
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '20px 24px',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                  }}>
                    ⏱
                  </div>
                  <div>
                    <div style={{ fontSize: '17px', fontWeight: 700, color: '#fff' }}>시간 충전권</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Time Charge Pass</div>
                  </div>
                </div>

                {priceData.hourly.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 0',
                      borderBottom: i < priceData.hourly.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                    }}
                  >
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>{item.name}</span>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through', marginRight: '8px' }}>
                        {formatPrice(item.original)}원
                      </span>
                      <span style={{ fontSize: '17px', fontWeight: 700, color: '#93C5FD' }}>
                        {formatPrice(item.price)}<span style={{ fontSize: '12px', fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}>원</span>
                      </span>
                    </div>
                  </div>
                ))}

                <div style={{ flex: 1 }} />

                {/* 안내 박스 */}
                <div style={{
                  background: 'rgba(147, 197, 253, 0.15)',
                  borderRadius: '12px',
                  padding: '14px 16px',
                  marginTop: '16px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>이벤트 기간 구매 시</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#93C5FD' }}>구매일 기준 기간 적용</div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div style={{ position: 'relative', zIndex: 1, marginTop: '24px' }}>
              {/* Warning Banner */}
              <div style={{
                background: 'rgba(252, 165, 165, 0.15)',
                border: '1px solid rgba(252, 165, 165, 0.4)',
                borderRadius: '14px',
                padding: '14px 20px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}>
                <span style={{ fontSize: '24px' }}>⚠️</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#FCA5A5' }}>
                    3차 이벤트(12.22~)부터 가격이 인상됩니다
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>
                    3차 이벤트 되기 전에 결제하세요!
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div style={{
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '18px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid rgba(255,255,255,0.15)',
              }}>
                <div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>이벤트 마감</div>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: '#93C5FD' }}>12.21</div>
                </div>
                <div style={{
                  width: '2px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '1px',
                }} />
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>이벤트 기간</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>12월 8일 (월) ~ 12월 21일 (일)</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>프로모션 가격은 이벤트 기간에만 적용</div>
                </div>
              </div>

              {/* Bottom Text */}
              <div style={{
                textAlign: 'center',
                marginTop: '14px',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.6)',
              }}>
                밀리언즈 앱에서 결제 가능
              </div>
            </div>
          </div>
        </div>

        {/* 마감 임박 포스터 */}
        <div style={{ marginTop: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
              마감 임박 안내 포스터
            </h2>
            <p style={{ color: '#8B95A1', fontSize: '14px' }}>
              할인 마감일을 강조하는 포스터
            </p>
          </div>
          <div
            ref={deadlineRef}
            style={{
              width: '210mm',
              height: '297mm',
              background: 'linear-gradient(180deg, #0a0f0a 0%, #0d1f0d 50%, #0a0f0a 100%)',
              margin: '0 auto',
              padding: '16mm',
              fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* 배경 효과 */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '150%',
              height: '150%',
              background: 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.25) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />

            {/* 상단 뱃지 */}
            <div style={{
              position: 'absolute',
              top: '16mm',
              left: '16mm',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.7)',
            }}>
              군자 지니24 스터디카페
            </div>
            <div style={{
              position: 'absolute',
              top: '16mm',
              right: '16mm',
              background: 'linear-gradient(135deg, #F04452 0%, #E8344A 100%)',
              padding: '10px 20px',
              borderRadius: '25px',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '1px',
            }}>
              2ND OPEN EVENT
            </div>

            {/* 메인 콘텐츠 */}
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '20px',
                letterSpacing: '4px',
              }}>
                특별 할인 마감까지
              </div>

              <div style={{
                fontSize: '180px',
                fontWeight: 900,
                color: '#22C55E',
                lineHeight: 1,
                marginBottom: '20px',
                textShadow: '0 0 60px rgba(34, 197, 94, 0.5)',
              }}>
                D-13
              </div>

              <div style={{
                fontSize: '48px',
                fontWeight: 800,
                marginBottom: '40px',
              }}>
                <span style={{ color: '#22C55E' }}>12.21</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '32px', marginLeft: '12px' }}>(일)</span>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '24px', marginLeft: '8px' }}>까지</span>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '24px 48px',
                marginBottom: '30px',
              }}>
                <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                  이벤트 기간
                </div>
                <div style={{ fontSize: '28px', fontWeight: 700 }}>
                  12월 8일 (월) ~ 12월 21일 (일)
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, rgba(240, 68, 82, 0.3) 0%, rgba(240, 68, 82, 0.1) 100%)',
                border: '2px solid rgba(240, 68, 82, 0.5)',
                borderRadius: '16px',
                padding: '20px 40px',
              }}>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#F87171' }}>
                  3차 이벤트(12.22~)부터 가격 인상!
                </div>
                <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginTop: '8px' }}>
                  지금이 가장 저렴한 가격입니다
                </div>
              </div>
            </div>

            {/* 하단 텍스트 */}
            <div style={{
              position: 'absolute',
              bottom: '16mm',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
            }}>
              밀리언즈 앱에서 결제 가능
            </div>
          </div>

          {/* 다운로드 버튼 */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px' }}>
            <button
              onClick={downloadDeadlinePDF}
              style={{
                background: '#fff',
                color: '#1a1a2e',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '28px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              PDF 저장
            </button>
            <button
              onClick={downloadDeadlineJPEG}
              style={{
                background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                color: '#fff',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '28px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              JPEG 저장
            </button>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px', paddingBottom: '40px' }}>
          <a href="/posters/price-table" style={{ color: '#8B95A1', textDecoration: 'none', fontSize: '14px', marginRight: '24px' }}>
            ← 가격표 포스터
          </a>
          <a href="/posters" style={{ color: '#8B95A1', textDecoration: 'none', fontSize: '14px', marginRight: '24px' }}>
            포스터 모음
          </a>
          <a href="/" style={{ color: '#8B95A1', textDecoration: 'none', fontSize: '14px' }}>
            홈으로
          </a>
        </div>
      </div>
    </div>
  );
}
