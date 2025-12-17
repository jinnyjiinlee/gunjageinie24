'use client';

import { useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { downloadPDF, downloadJPEG, PRETENDARD_LINK } from '@/lib/poster-utils';
import DownloadButtons from '@/components/posters/DownloadButtons';
import PosterNav from '@/components/posters/PosterNav';
import LightPoster from '@/components/posters/promo-2nd/LightPoster';
import DarkPoster from '@/components/posters/promo-2nd/DarkPoster';
import DeadlinePoster from '@/components/posters/promo-2nd/DeadlinePoster';
import PreviewPoster from './PreviewPoster';

function PriceTable2ndPromoContent() {
  const posterRef = useRef<HTMLDivElement | null>(null);
  const posterDarkRef = useRef<HTMLDivElement | null>(null);
  const deadlineRef = useRef<HTMLDivElement | null>(null);
  const searchParams = useSearchParams();
  const isPreview = searchParams.get('preview') === '1';

  if (isPreview) {
    return <PreviewPoster />;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#1a1a2e', padding: '40px 20px' }}>
      <link rel="stylesheet" href={PRETENDARD_LINK} />

      <div style={{ maxWidth: '240mm', margin: '0 auto' }}>
        <PageHeader />

        <DownloadButtons
          onPDF={() => downloadPDF(posterRef.current, '2차 오픈이벤트 프로모션')}
          onJPEG={() => downloadJPEG(posterRef.current, '2차_오픈이벤트_프로모션.jpg')}
        />

        <div style={{ marginTop: '24px' }}>
          <LightPoster ref={posterRef} />
        </div>

        <DarkVersionSection
          posterRef={posterDarkRef}
          onPDF={() => downloadPDF(posterDarkRef.current, '2차 오픈이벤트 프로모션 (다크)')}
          onJPEG={() => downloadJPEG(posterDarkRef.current, '2차_오픈이벤트_프로모션_다크.jpg')}
        />

        <DeadlineSection
          deadlineRef={deadlineRef}
          onPDF={() => downloadPDF(deadlineRef.current, '마감 임박 안내')}
          onJPEG={() => downloadJPEG(deadlineRef.current, '마감임박_안내.jpg')}
        />

        <PosterNav
          links={[
            { href: '/posters/price-table', label: '← 가격표 포스터' },
            { href: '/posters', label: '포스터 모음' },
            { href: '/', label: '홈으로' },
          ]}
        />
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
        2차 오픈이벤트 프로모션
      </h1>
      <p style={{ color: '#8B95A1', fontSize: '16px' }}>트렌디한 다크 테마 가격표</p>
    </div>
  );
}

interface SectionProps {
  posterRef: React.RefObject<HTMLDivElement | null>;
  onPDF: () => void;
  onJPEG: () => void;
}

function DarkVersionSection({ posterRef, onPDF, onJPEG }: SectionProps) {
  return (
    <div style={{ marginTop: '80px' }}>
      <SectionHeader title="다크 버전" subtitle="검정 배경 버전" />
      <DownloadButtons
        onPDF={onPDF}
        onJPEG={onJPEG}
        jpegStyle={{ background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)' }}
      />
      <div style={{ marginTop: '24px' }}>
        <DarkPoster ref={posterRef} />
      </div>
    </div>
  );
}

function DeadlineSection({ deadlineRef, onPDF, onJPEG }: { deadlineRef: React.RefObject<HTMLDivElement | null>; onPDF: () => void; onJPEG: () => void }) {
  return (
    <div style={{ marginTop: '80px' }}>
      <SectionHeader title="마감 임박 안내 포스터" subtitle="할인 마감일을 강조하는 포스터" />
      <DeadlinePoster ref={deadlineRef} />
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px' }}>
        <DownloadButtons
          onPDF={onPDF}
          onJPEG={onJPEG}
          jpegStyle={{ background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)' }}
        />
      </div>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{title}</h2>
      <p style={{ color: '#8B95A1', fontSize: '14px' }}>{subtitle}</p>
    </div>
  );
}

export default function PriceTable2ndPromoPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#0A0A0A' }} />}>
      <PriceTable2ndPromoContent />
    </Suspense>
  );
}
