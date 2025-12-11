'use client';

import { forwardRef } from 'react';

const DeadlinePoster = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
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
    <BackgroundGlow />
    <TopBadge />
    <EventBadge />
    <MainContent />
    <BottomText />
  </div>
));

DeadlinePoster.displayName = 'DeadlinePoster';
export default DeadlinePoster;

function BackgroundGlow() {
  return (
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
  );
}

function TopBadge() {
  return (
    <div style={{
      position: 'absolute',
      top: '16mm',
      left: '16mm',
      fontSize: '14px',
      color: 'rgba(255,255,255,0.7)',
    }}>
      군자 지니24 스터디카페
    </div>
  );
}

function EventBadge() {
  return (
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
  );
}

function MainContent() {
  return (
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

      <div style={{ fontSize: '48px', fontWeight: 800, marginBottom: '40px' }}>
        <span style={{ color: '#22C55E' }}>12.21</span>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '32px', marginLeft: '12px' }}>(일)</span>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '24px', marginLeft: '8px' }}>까지</span>
      </div>

      <PeriodBox />
      <WarningBox />
    </div>
  );
}

function PeriodBox() {
  return (
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
  );
}

function WarningBox() {
  return (
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
  );
}

function BottomText() {
  return (
    <div style={{
      position: 'absolute',
      bottom: '16mm',
      fontSize: '14px',
      color: 'rgba(255,255,255,0.5)',
    }}>
      밀리언즈 앱에서 결제 가능
    </div>
  );
}
