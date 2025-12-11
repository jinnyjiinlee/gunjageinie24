'use client';

import { priceData } from '@/data/promo-2nd-prices';
import { formatPrice, PRETENDARD_LINK } from '@/lib/poster-utils';

export default function PreviewPoster() {
  return (
    <div style={{ background: '#FFFFFF' }}>
      <link rel="stylesheet" href={PRETENDARD_LINK} />
      <div
        style={{
          width: '210mm',
          height: '297mm',
          background: '#FFFFFF',
          padding: '12mm 14mm',
          fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
          color: '#191F28',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Header />
        <PriceSection />
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <div
        style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #EF4444 0%, #F97316 100%)',
          color: '#fff',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 700,
          marginBottom: '12px',
        }}
      >
        특별 할인 프로모션
      </div>
      <h1
        style={{
          fontSize: '32px',
          fontWeight: 800,
          margin: '0 0 8px 0',
          background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        2차 오픈이벤트
      </h1>
      <p style={{ color: '#6B7684', fontSize: '13px', margin: 0 }}>
        12월 8일 (월) ~ 12월 21일 (일)
      </p>
    </div>
  );
}

function PriceSection() {
  return (
    <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
      <PriceCard title="기간제 정액권" items={priceData.unlimited} />
      <PriceCard title="시간 충전권" items={priceData.hourly} />
    </div>
  );
}

interface PriceItem {
  name: string;
  price: number;
}

function PriceCard({ title, items }: { title: string; items: PriceItem[] }) {
  return (
    <div
      style={{
        flex: 1,
        background: '#F8FAFC',
        borderRadius: '20px',
        padding: '20px 24px',
        border: '1px solid #E5E8EB',
      }}
    >
      <div style={{ fontSize: '17px', fontWeight: 700, color: '#191F28', marginBottom: '16px' }}>
        {title}
      </div>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 0',
            borderBottom: i < items.length - 1 ? '1px solid #E5E8EB' : 'none',
          }}
        >
          <span style={{ fontSize: '14px', color: '#4E5968' }}>{item.name}</span>
          <span style={{ fontSize: '17px', fontWeight: 700, color: '#2563EB' }}>
            {formatPrice(item.price)}원
          </span>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <div
      style={{
        background: '#F8FAFC',
        borderRadius: '16px',
        padding: '18px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20px',
      }}
    >
      <div>
        <div style={{ fontSize: '12px', color: '#8B95A1' }}>이벤트 마감</div>
        <div style={{ fontSize: '32px', fontWeight: 800, color: '#2563EB' }}>12.21</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: '#191F28' }}>
          12월 8일 (월) ~ 12월 21일 (일)
        </div>
        <div style={{ fontSize: '11px', color: '#8B95A1' }}>
          프로모션 가격은 이벤트 기간에만 적용
        </div>
      </div>
    </div>
  );
}
