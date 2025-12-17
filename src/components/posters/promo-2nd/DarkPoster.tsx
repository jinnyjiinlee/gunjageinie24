'use client';

import { forwardRef } from 'react';
import { priceData } from '@/data/promo-2nd-prices';
import { formatPrice } from '@/lib/poster-utils';

const DarkPoster = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
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
    <BackgroundGradient />
    <Header />
    <TitleSection />
    <PriceCardsSection />
    <BottomSection />
  </div>
));

DarkPoster.displayName = 'DarkPoster';
export default DarkPoster;

function BackgroundGradient() {
  return (
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
  );
}

function Header() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '20px',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>군자 지니24 스터디카페</div>
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
  );
}

function TitleSection() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
      <div style={{ fontSize: '14px', letterSpacing: '6px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
        2ND OPEN EVENT
      </div>
      <div style={{ fontSize: '42px', fontWeight: 800, marginBottom: '16px', color: '#fff' }}>
        <span style={{ color: '#93C5FD' }}>특별 할인</span> 프로모션
      </div>
      <div style={{
        background: 'rgba(147, 197, 253, 0.15)',
        border: '1px solid rgba(147, 197, 253, 0.4)',
        borderRadius: '16px',
        padding: '16px 32px',
        display: 'inline-block',
      }}>
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '6px' }}>이벤트 기간</div>
        <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff' }}>12.8 (월) ~ 12.21 (일)</div>
      </div>
    </div>
  );
}

function PriceCardsSection() {
  return (
    <div style={{ display: 'flex', gap: '14px', flex: 1, position: 'relative', zIndex: 1 }}>
      <UnlimitedCard />
      <HourlyCard />
    </div>
  );
}

function UnlimitedCard() {
  return (
    <div style={{
      flex: 1,
      background: 'rgba(255,255,255,0.08)',
      borderRadius: '20px',
      padding: '20px 24px',
      border: '1px solid rgba(255,255,255,0.15)',
    }}>
      <CardHeader icon="∞" title="무제한 기간권" subtitle="Unlimited Period Pass" />
      {priceData.unlimited.map((item, i) => (
        <PriceRow key={i} item={item} isLast={i === priceData.unlimited.length - 1} />
      ))}
    </div>
  );
}

function HourlyCard() {
  return (
    <div style={{
      flex: 1,
      background: 'rgba(255,255,255,0.08)',
      borderRadius: '20px',
      padding: '20px 24px',
      border: '1px solid rgba(255,255,255,0.15)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <CardHeader icon="⏱" title="시간 충전권" subtitle="Time Charge Pass" />
      {priceData.hourly.map((item, i) => (
        <PriceRow key={i} item={item} isLast={i === priceData.hourly.length - 1} />
      ))}
      <div style={{ flex: 1 }} />
      <InfoBox />
    </div>
  );
}

function CardHeader({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
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
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '17px', fontWeight: 700, color: '#fff' }}>{title}</div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>{subtitle}</div>
      </div>
    </div>
  );
}

function PriceRow({ item, isLast }: { item: { name: string; original: number; price: number }; isLast: boolean }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.12)',
    }}>
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
  );
}

function InfoBox() {
  return (
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
  );
}

function BottomSection() {
  return (
    <div style={{ position: 'relative', zIndex: 1, marginTop: '24px' }}>
      <WarningBanner />
      <Footer />
      <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
        밀리언즈 앱에서 결제 가능
      </div>
    </div>
  );
}

function WarningBanner() {
  return (
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
  );
}

function Footer() {
  return (
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
      <div style={{ width: '2px', height: '40px', background: 'rgba(255,255,255,0.2)', borderRadius: '1px' }} />
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>이벤트 기간</div>
        <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>12월 8일 (월) ~ 12월 21일 (일)</div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>
          프로모션 가격은 이벤트 기간에만 적용
        </div>
      </div>
    </div>
  );
}
