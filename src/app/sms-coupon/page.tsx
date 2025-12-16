'use client';

import { useState } from 'react';

const benefitData = [
  {
    day: 'D+1',
    label: '무료체험 다음날',
    highlight: true,
    benefits: [
      { plan: '4주', bonus: '+5일' },
      { plan: '8주', bonus: '+12일', best: true },
      { plan: '100시간', bonus: '+20시간' },
      { plan: '200시간', bonus: '+60시간', best: true },
    ],
  },
  {
    day: 'D+2',
    label: '2일 후',
    highlight: false,
    benefits: [
      { plan: '4주', bonus: '+3일' },
      { plan: '8주', bonus: '+7일' },
      { plan: '100시간', bonus: '+10시간' },
      { plan: '200시간', bonus: '+40시간' },
    ],
  },
  {
    day: 'D+3',
    label: '3일 후',
    highlight: false,
    benefits: [
      { plan: '4주', bonus: '+1일' },
      { plan: '8주', bonus: '+3일' },
      { plan: '100시간', bonus: '+5시간' },
      { plan: '200시간', bonus: '+15시간' },
    ],
  },
];

type CouponStyle = 'dark' | 'gold' | 'minimal';

export default function SmsCouponPage() {
  const [selectedStyle, setSelectedStyle] = useState<CouponStyle>('dark');

  const downloadImage = (style: CouponStyle) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 50KB 이하 유지를 위해 2배 스케일
    const scale = 2;
    const width = 320;
    const height = 420;
    canvas.width = width * scale;
    canvas.height = height * scale;

    ctx.imageSmoothingEnabled = true;
    ctx.scale(scale, scale);

    if (style === 'dark') {
      drawDarkStyle(ctx);
    } else if (style === 'gold') {
      drawGoldStyle(ctx);
    } else {
      drawMinimalStyle(ctx);
    }

    const link = document.createElement('a');
    const styleNames: Record<CouponStyle, string> = {
      dark: '다크',
      gold: '골드',
      minimal: '미니멀'
    };
    link.download = `LMS_신규고객_이벤트_${styleNames[style]}.jpg`;
    // 50KB 이하 유지를 위해 품질 0.5
    link.href = canvas.toDataURL('image/jpeg', 0.5);
    link.click();
  };

  // 스타일 1: 다크 테마 (개선된 버전)
  function drawDarkStyle(ctx: CanvasRenderingContext2D) {
    // 배경
    ctx.fillStyle = '#0A0A0A';
    ctx.fillRect(0, 0, 320, 420);

    // 헤더 배경 (그라데이션)
    const headerGrad = ctx.createLinearGradient(0, 0, 320, 0);
    headerGrad.addColorStop(0, '#00FF88');
    headerGrad.addColorStop(1, '#00CC6A');
    ctx.fillStyle = headerGrad;
    ctx.fillRect(0, 0, 320, 90);

    // 헤더 텍스트
    ctx.fillStyle = '#0A0A0A';
    ctx.textAlign = 'center';
    ctx.font = 'bold 10px -apple-system, sans-serif';
    ctx.fillText('군자역 지니24 스터디카페', 160, 20);
    ctx.font = 'bold 18px -apple-system, sans-serif';
    ctx.fillText('무료체험 감사 혜택', 160, 44);
    ctx.fillStyle = 'rgba(10,10,10,0.7)';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.fillText('빠른 결제 = 더 많은 보너스!', 160, 62);

    // 2차 프로모션 뱃지
    ctx.fillStyle = '#0A0A0A';
    roundRect(ctx, 95, 70, 130, 16, 8);
    ctx.fill();
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 9px -apple-system, sans-serif';
    ctx.fillText('2차 프로모션과 중복 적용!', 160, 81);

    // D+1 카드
    ctx.fillStyle = 'rgba(0,255,136,0.15)';
    roundRect(ctx, 12, 100, 296, 90, 12);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,255,136,0.5)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // D+1 헤더
    ctx.fillStyle = '#00FF88';
    ctx.textAlign = 'left';
    ctx.font = 'bold 14px -apple-system, sans-serif';
    ctx.fillText('D+1', 24, 120);
    ctx.fillStyle = '#888';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.fillText('무료체험 다음날', 55, 120);

    // 최대혜택 뱃지
    ctx.fillStyle = '#F04452';
    roundRect(ctx, 240, 107, 55, 16, 8);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.font = 'bold 8px -apple-system, sans-serif';
    ctx.fillText('최대혜택', 267, 118);

    // D+1 혜택 (추천 표시 개선)
    drawBenefitRowImproved(ctx, 24, 135, benefitData[0].benefits, true);

    // D+2 카드
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    roundRect(ctx, 12, 200, 296, 70, 12);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.stroke();

    ctx.fillStyle = '#888';
    ctx.textAlign = 'left';
    ctx.font = 'bold 14px -apple-system, sans-serif';
    ctx.fillText('D+2', 24, 222);
    ctx.fillStyle = '#666';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.fillText('2일 후', 55, 222);

    drawBenefitRowImproved(ctx, 24, 235, benefitData[1].benefits, false);

    // D+3 카드
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    roundRect(ctx, 12, 280, 296, 70, 12);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.stroke();

    ctx.fillStyle = '#888';
    ctx.textAlign = 'left';
    ctx.font = 'bold 14px -apple-system, sans-serif';
    ctx.fillText('D+3', 24, 302);
    ctx.fillStyle = '#666';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.fillText('3일 후', 55, 302);

    drawBenefitRowImproved(ctx, 24, 315, benefitData[2].benefits, false);

    // 푸터
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.fillRect(0, 360, 320, 60);

    ctx.fillStyle = '#FFD700';
    ctx.textAlign = 'center';
    ctx.font = 'bold 12px -apple-system, sans-serif';
    ctx.fillText('네이버 톡톡으로 문의하세요!', 160, 385);
    ctx.fillStyle = '#666';
    ctx.font = '9px -apple-system, sans-serif';
    ctx.fillText('무료체험일 기준 · 쿠폰 제시 필수', 160, 402);
  }

  // 스타일 2: 골드 프리미엄 테마
  function drawGoldStyle(ctx: CanvasRenderingContext2D) {
    // 배경 (다크 네이비)
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, 320, 420);

    // 상단 골드 라인
    const goldGrad = ctx.createLinearGradient(0, 0, 320, 0);
    goldGrad.addColorStop(0, '#FFD700');
    goldGrad.addColorStop(0.5, '#FFA500');
    goldGrad.addColorStop(1, '#FFD700');
    ctx.fillStyle = goldGrad;
    ctx.fillRect(0, 0, 320, 4);

    // 스토리텔링 헤더
    ctx.fillStyle = '#888';
    ctx.textAlign = 'center';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.fillText('노트북을 자유롭게 쓸 수 있는', 160, 22);
    ctx.fillText('스터디카페를 찾고 있었다면?', 160, 36);

    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 18px -apple-system, sans-serif';
    ctx.fillText('✦ 지니24 ✦', 160, 60);

    ctx.fillStyle = 'rgba(255,215,0,0.6)';
    ctx.font = '9px -apple-system, sans-serif';
    ctx.fillText('노트북존 분리 · 키스킨 NO · 개별 콘센트', 160, 78);

    // 중복 적용 뱃지
    ctx.fillStyle = '#FFD700';
    roundRect(ctx, 85, 85, 150, 18, 9);
    ctx.fill();
    ctx.fillStyle = '#1a1a2e';
    ctx.font = 'bold 9px -apple-system, sans-serif';
    ctx.fillText('2차 프로모션과 중복 적용!', 160, 97);

    // D+1 카드 (골드 테두리)
    ctx.fillStyle = 'rgba(255,215,0,0.1)';
    roundRect(ctx, 12, 115, 296, 85, 12);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,215,0,0.5)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#FFD700';
    ctx.textAlign = 'left';
    ctx.font = 'bold 14px -apple-system, sans-serif';
    ctx.fillText('D+1', 24, 135);
    ctx.fillStyle = '#aaa';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.fillText('무료체험 다음날', 55, 135);

    // BEST 뱃지
    ctx.fillStyle = '#F04452';
    roundRect(ctx, 245, 122, 50, 16, 8);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.font = 'bold 8px -apple-system, sans-serif';
    ctx.fillText('BEST', 270, 133);

    drawGoldBenefitRow(ctx, 24, 150, benefitData[0].benefits, true);

    // D+2 카드
    ctx.fillStyle = 'rgba(255,255,255,0.03)';
    roundRect(ctx, 12, 210, 296, 65, 12);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = '#888';
    ctx.textAlign = 'left';
    ctx.font = 'bold 14px -apple-system, sans-serif';
    ctx.fillText('D+2', 24, 232);
    ctx.fillStyle = '#666';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.fillText('2일 후', 55, 232);

    drawGoldBenefitRow(ctx, 24, 245, benefitData[1].benefits, false);

    // D+3 카드
    ctx.fillStyle = 'rgba(255,255,255,0.03)';
    roundRect(ctx, 12, 285, 296, 65, 12);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.stroke();

    ctx.fillStyle = '#888';
    ctx.textAlign = 'left';
    ctx.font = 'bold 14px -apple-system, sans-serif';
    ctx.fillText('D+3', 24, 307);
    ctx.fillStyle = '#666';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.fillText('3일 후', 55, 307);

    drawGoldBenefitRow(ctx, 24, 320, benefitData[2].benefits, false);

    // 푸터
    ctx.fillStyle = goldGrad;
    ctx.fillRect(0, 360, 320, 4);

    ctx.fillStyle = '#FFD700';
    ctx.textAlign = 'center';
    ctx.font = 'bold 12px -apple-system, sans-serif';
    ctx.fillText('네이버 톡톡으로 문의하세요!', 160, 388);
    ctx.fillStyle = '#666';
    ctx.font = '9px -apple-system, sans-serif';
    ctx.fillText('무료체험일 기준 · 쿠폰 제시 필수', 160, 405);
  }

  // 스타일 3: 미니멀 클린 테마
  function drawMinimalStyle(ctx: CanvasRenderingContext2D) {
    // 배경 (밝은 그레이)
    ctx.fillStyle = '#FAFAFA';
    ctx.fillRect(0, 0, 320, 420);

    // 상단 컬러 바
    ctx.fillStyle = '#00D68F';
    ctx.fillRect(0, 0, 320, 6);

    // 헤더 영역
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.fillText('군자역 지니24 스터디카페', 160, 28);

    ctx.fillStyle = '#111';
    ctx.font = 'bold 22px -apple-system, sans-serif';
    ctx.fillText('무료체험 감사 혜택', 160, 55);

    ctx.fillStyle = '#666';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.fillText('빠른 결제 = 더 많은 보너스', 160, 75);

    // 중복 적용 태그
    ctx.fillStyle = '#00D68F';
    roundRect(ctx, 95, 85, 130, 18, 4);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 9px -apple-system, sans-serif';
    ctx.fillText('2차 프로모션 중복 적용', 160, 97);

    // D+1 카드
    ctx.fillStyle = '#fff';
    roundRect(ctx, 12, 115, 296, 80, 8);
    ctx.fill();
    ctx.shadowColor = 'rgba(0,0,0,0.08)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 2;

    ctx.shadowColor = 'transparent';
    ctx.fillStyle = '#00D68F';
    ctx.textAlign = 'left';
    ctx.font = 'bold 13px -apple-system, sans-serif';
    ctx.fillText('D+1', 24, 135);
    ctx.fillStyle = '#999';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.fillText('무료체험 다음날', 55, 135);

    // 추천 태그 (우측 상단)
    ctx.fillStyle = '#FF6B6B';
    roundRect(ctx, 248, 122, 48, 14, 3);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.font = 'bold 8px -apple-system, sans-serif';
    ctx.fillText('최대혜택', 272, 132);

    drawMinimalBenefitRow(ctx, 24, 150, benefitData[0].benefits, true);

    // D+2 카드
    ctx.fillStyle = '#fff';
    roundRect(ctx, 12, 205, 296, 65, 8);
    ctx.fill();

    ctx.fillStyle = '#666';
    ctx.textAlign = 'left';
    ctx.font = 'bold 13px -apple-system, sans-serif';
    ctx.fillText('D+2', 24, 228);
    ctx.fillStyle = '#999';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.fillText('2일 후', 55, 228);

    drawMinimalBenefitRow(ctx, 24, 243, benefitData[1].benefits, false);

    // D+3 카드
    ctx.fillStyle = '#fff';
    roundRect(ctx, 12, 280, 296, 65, 8);
    ctx.fill();

    ctx.fillStyle = '#666';
    ctx.textAlign = 'left';
    ctx.font = 'bold 13px -apple-system, sans-serif';
    ctx.fillText('D+3', 24, 303);
    ctx.fillStyle = '#999';
    ctx.font = '10px -apple-system, sans-serif';
    ctx.fillText('3일 후', 55, 303);

    drawMinimalBenefitRow(ctx, 24, 318, benefitData[2].benefits, false);

    // 푸터
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 355, 320, 65);

    ctx.fillStyle = '#00D68F';
    ctx.textAlign = 'center';
    ctx.font = 'bold 12px -apple-system, sans-serif';
    ctx.fillText('네이버 톡톡으로 문의하세요!', 160, 380);
    ctx.fillStyle = '#999';
    ctx.font = '9px -apple-system, sans-serif';
    ctx.fillText('무료체험일 기준 · 쿠폰 제시 필수', 160, 398);
  }

  function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  // 개선된 혜택 행 (다크 스타일)
  function drawBenefitRowImproved(ctx: CanvasRenderingContext2D, x: number, y: number, benefits: typeof benefitData[0]['benefits'], highlight: boolean) {
    const colWidth = 70;
    benefits.forEach((b, i) => {
      const cx = x + i * colWidth + colWidth / 2;

      ctx.textAlign = 'center';

      // 추천 항목은 배경으로 강조 (뱃지 대신)
      if (highlight && b.best) {
        ctx.fillStyle = 'rgba(255,215,0,0.15)';
        roundRect(ctx, cx - 30, y - 5, 60, 42, 6);
        ctx.fill();
      }

      ctx.fillStyle = highlight && b.best ? '#FFD700' : '#888';
      ctx.font = b.best && highlight ? 'bold 9px -apple-system, sans-serif' : '9px -apple-system, sans-serif';
      ctx.fillText(b.plan, cx, y + 8);

      ctx.fillStyle = highlight ? (b.best ? '#FFD700' : '#00FF88') : '#fff';
      ctx.font = b.best && highlight ? 'bold 14px -apple-system, sans-serif' : 'bold 12px -apple-system, sans-serif';
      ctx.fillText(b.bonus, cx, y + 26);
    });
  }

  // 골드 스타일 혜택 행
  function drawGoldBenefitRow(ctx: CanvasRenderingContext2D, x: number, y: number, benefits: typeof benefitData[0]['benefits'], highlight: boolean) {
    const colWidth = 70;
    benefits.forEach((b, i) => {
      const cx = x + i * colWidth + colWidth / 2;

      ctx.textAlign = 'center';

      if (highlight && b.best) {
        ctx.fillStyle = 'rgba(255,215,0,0.2)';
        roundRect(ctx, cx - 30, y - 3, 60, 38, 6);
        ctx.fill();
      }

      ctx.fillStyle = highlight && b.best ? '#FFD700' : '#888';
      ctx.font = '9px -apple-system, sans-serif';
      ctx.fillText(b.plan, cx, y + 8);

      ctx.fillStyle = highlight ? (b.best ? '#FFD700' : '#fff') : '#ccc';
      ctx.font = b.best && highlight ? 'bold 14px -apple-system, sans-serif' : 'bold 12px -apple-system, sans-serif';
      ctx.fillText(b.bonus, cx, y + 24);
    });
  }

  // 미니멀 스타일 혜택 행
  function drawMinimalBenefitRow(ctx: CanvasRenderingContext2D, x: number, y: number, benefits: typeof benefitData[0]['benefits'], highlight: boolean) {
    const colWidth = 70;
    benefits.forEach((b, i) => {
      const cx = x + i * colWidth + colWidth / 2;

      ctx.textAlign = 'center';

      if (highlight && b.best) {
        ctx.fillStyle = '#00D68F';
        roundRect(ctx, cx - 30, y - 3, 60, 36, 4);
        ctx.fill();
        ctx.fillStyle = '#fff';
      } else {
        ctx.fillStyle = '#999';
      }
      ctx.font = '9px -apple-system, sans-serif';
      ctx.fillText(b.plan, cx, y + 8);

      if (highlight && b.best) {
        ctx.fillStyle = '#fff';
      } else {
        ctx.fillStyle = highlight ? '#00D68F' : '#333';
      }
      ctx.font = b.best && highlight ? 'bold 13px -apple-system, sans-serif' : 'bold 11px -apple-system, sans-serif';
      ctx.fillText(b.bonus, cx, y + 24);
    });
  }

  const styles: { id: CouponStyle; name: string; desc: string }[] = [
    { id: 'dark', name: '다크', desc: '기본 그린 테마' },
    { id: 'gold', name: '골드', desc: '프리미엄 느낌' },
    { id: 'minimal', name: '미니멀', desc: '깔끔한 화이트' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-white mb-2">LMS 발송용 쿠폰</h1>
          <p className="text-gray-400 text-xs mb-1">4시간 무료체험 이용자 대상</p>
          <p className="text-gray-500 text-[10px]">스타일 선택 후 다운로드</p>
        </div>

        {/* 스타일 선택 탭 */}
        <div className="flex gap-2 mb-6 justify-center">
          {styles.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedStyle(s.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedStyle === s.id
                  ? 'bg-[#00FF88] text-black'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* 다운로드 버튼 */}
        <div className="text-center mb-6">
          <button
            onClick={() => downloadImage(selectedStyle)}
            className="bg-[#00FF88] text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-[#00DD77] transition"
          >
            {styles.find(s => s.id === selectedStyle)?.name} 스타일 다운로드
          </button>
        </div>

        {/* 미리보기 영역 */}
        <div className="space-y-8">
          {/* 스타일 1: 다크 */}
          <CouponPreview
            title="스타일 1: 다크"
            isSelected={selectedStyle === 'dark'}
            onSelect={() => setSelectedStyle('dark')}
          >
            <DarkCouponPreview />
          </CouponPreview>

          {/* 스타일 2: 골드 */}
          <CouponPreview
            title="스타일 2: 골드"
            isSelected={selectedStyle === 'gold'}
            onSelect={() => setSelectedStyle('gold')}
          >
            <GoldCouponPreview />
          </CouponPreview>

          {/* 스타일 3: 미니멀 */}
          <CouponPreview
            title="스타일 3: 미니멀"
            isSelected={selectedStyle === 'minimal'}
            onSelect={() => setSelectedStyle('minimal')}
          >
            <MinimalCouponPreview />
          </CouponPreview>
        </div>
      </div>
    </div>
  );
}

function CouponPreview({
  title,
  isSelected,
  onSelect,
  children
}: {
  title: string;
  isSelected: boolean;
  onSelect: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`cursor-pointer transition ${isSelected ? 'ring-2 ring-[#00FF88] rounded-2xl' : 'opacity-70 hover:opacity-100'}`}
      onClick={onSelect}
    >
      <div className="text-center text-gray-400 text-xs mb-2">{title}</div>
      {children}
    </div>
  );
}

// 다크 스타일 미리보기
function DarkCouponPreview() {
  return (
    <div
      className="bg-[#0A0A0A] rounded-2xl overflow-hidden mx-auto"
      style={{ width: '320px', fontFamily: 'Pretendard, -apple-system, sans-serif' }}
    >
      <div className="bg-gradient-to-r from-[#00FF88] to-[#00CC6A] p-4 text-center">
        <div className="text-[#0A0A0A] text-[10px] font-medium mb-1">군자역 지니24 스터디카페</div>
        <div className="text-[#0A0A0A] text-lg font-black">무료체험 감사 혜택</div>
        <div className="text-[#0A0A0A]/70 text-[10px] mt-1">빠른 결제 = 더 많은 보너스!</div>
        <div className="mt-2 inline-block bg-[#0A0A0A] text-[#FFD700] text-[9px] px-2 py-1 rounded-full font-bold">
          2차 프로모션과 중복 적용!
        </div>
      </div>
      <div className="p-4 space-y-3">
        {benefitData.map((item, idx) => (
          <BenefitRowDark key={idx} {...item} />
        ))}
      </div>
      <div className="bg-white/5 p-3 text-center border-t border-white/10">
        <div className="text-[#FFD700] font-bold text-xs mb-1">네이버 톡톡으로 문의하세요!</div>
        <div className="text-gray-500 text-[9px]">무료체험일 기준 · 쿠폰 제시 필수</div>
      </div>
    </div>
  );
}

// 골드 스타일 미리보기
function GoldCouponPreview() {
  return (
    <div
      className="bg-[#1a1a2e] rounded-2xl overflow-hidden mx-auto"
      style={{ width: '320px', fontFamily: 'Pretendard, -apple-system, sans-serif' }}
    >
      <div className="h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700]" />
      <div className="p-4 text-center">
        <div className="text-gray-400 text-[10px] leading-relaxed">
          노트북을 자유롭게 쓸 수 있는<br />스터디카페를 찾고 있었다면?
        </div>
        <div className="text-[#FFD700] text-lg font-black mt-1">✦ 지니24 ✦</div>
        <div className="text-[#FFD700]/60 text-[9px] mt-1">노트북존 분리 · 키스킨 NO · 개별 콘센트</div>
        <div className="mt-2 inline-block bg-[#FFD700] text-[#1a1a2e] text-[9px] px-3 py-1 rounded-full font-bold">
          2차 프로모션과 중복 적용!
        </div>
      </div>
      <div className="px-3 pb-3 space-y-2">
        {benefitData.map((item, idx) => (
          <BenefitRowGold key={idx} {...item} />
        ))}
      </div>
      <div className="h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700]" />
      <div className="p-3 text-center">
        <div className="text-[#FFD700] font-bold text-xs mb-1">네이버 톡톡으로 문의하세요!</div>
        <div className="text-gray-500 text-[9px]">무료체험일 기준 · 쿠폰 제시 필수</div>
      </div>
    </div>
  );
}

// 미니멀 스타일 미리보기
function MinimalCouponPreview() {
  return (
    <div
      className="bg-[#FAFAFA] rounded-2xl overflow-hidden mx-auto"
      style={{ width: '320px', fontFamily: 'Pretendard, -apple-system, sans-serif' }}
    >
      <div className="h-1.5 bg-[#00D68F]" />
      <div className="p-4 text-center">
        <div className="text-gray-500 text-[10px] mb-1">군자역 지니24 스터디카페</div>
        <div className="text-gray-900 text-xl font-black">무료체험 감사 혜택</div>
        <div className="text-gray-500 text-[10px] mt-1">빠른 결제 = 더 많은 보너스</div>
        <div className="mt-2 inline-block bg-[#00D68F] text-white text-[9px] px-3 py-1 rounded font-bold">
          2차 프로모션 중복 적용
        </div>
      </div>
      <div className="px-3 pb-3 space-y-2">
        {benefitData.map((item, idx) => (
          <BenefitRowMinimal key={idx} {...item} />
        ))}
      </div>
      <div className="bg-gray-100 p-3 text-center">
        <div className="text-[#00D68F] font-bold text-xs mb-1">네이버 톡톡으로 문의하세요!</div>
        <div className="text-gray-400 text-[9px]">무료체험일 기준 · 쿠폰 제시 필수</div>
      </div>
    </div>
  );
}

// 다크 스타일 혜택 행
function BenefitRowDark({ day, label, highlight, benefits }: typeof benefitData[0]) {
  return (
    <div className={`rounded-xl p-3 ${highlight ? 'bg-[#00FF88]/15 border border-[#00FF88]/50' : 'bg-white/5 border border-white/10'}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className={`text-sm font-black ${highlight ? 'text-[#00FF88]' : 'text-gray-400'}`}>{day}</span>
          <span className="text-gray-500 text-[10px]">{label}</span>
        </div>
        {highlight && (
          <span className="bg-[#F04452] text-white text-[8px] px-2 py-0.5 rounded-full font-bold">최대혜택</span>
        )}
      </div>
      <div className="grid grid-cols-4 gap-1">
        {benefits.map((b, i) => (
          <div key={i} className={`text-center p-1.5 rounded ${highlight && b.best ? 'bg-[#FFD700]/15' : ''}`}>
            <div className={`text-[8px] ${highlight && b.best ? 'text-[#FFD700] font-bold' : 'text-gray-500'}`}>{b.plan}</div>
            <div className={`font-bold text-xs ${highlight ? (b.best ? 'text-[#FFD700]' : 'text-[#00FF88]') : 'text-white'}`}>{b.bonus}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 골드 스타일 혜택 행
function BenefitRowGold({ day, label, highlight, benefits }: typeof benefitData[0]) {
  return (
    <div className={`rounded-xl p-3 ${highlight ? 'bg-[#FFD700]/10 border border-[#FFD700]/50' : 'bg-white/[0.03] border border-white/10'}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className={`text-sm font-black ${highlight ? 'text-[#FFD700]' : 'text-gray-400'}`}>{day}</span>
          <span className="text-gray-500 text-[10px]">{label}</span>
        </div>
        {highlight && (
          <span className="bg-[#F04452] text-white text-[8px] px-2 py-0.5 rounded-full font-bold">BEST</span>
        )}
      </div>
      <div className="grid grid-cols-4 gap-1">
        {benefits.map((b, i) => (
          <div key={i} className={`text-center p-1.5 rounded ${highlight && b.best ? 'bg-[#FFD700]/20' : ''}`}>
            <div className={`text-[8px] ${highlight && b.best ? 'text-[#FFD700]' : 'text-gray-500'}`}>{b.plan}</div>
            <div className={`font-bold text-xs ${highlight ? (b.best ? 'text-[#FFD700]' : 'text-white') : 'text-gray-400'}`}>{b.bonus}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 미니멀 스타일 혜택 행
function BenefitRowMinimal({ day, label, highlight, benefits }: typeof benefitData[0]) {
  return (
    <div className={`rounded-lg p-3 bg-white shadow-sm ${highlight ? 'ring-1 ring-[#00D68F]/30' : ''}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className={`text-sm font-black ${highlight ? 'text-[#00D68F]' : 'text-gray-400'}`}>{day}</span>
          <span className="text-gray-400 text-[10px]">{label}</span>
        </div>
        {highlight && (
          <span className="bg-[#FF6B6B] text-white text-[8px] px-2 py-0.5 rounded font-bold">최대혜택</span>
        )}
      </div>
      <div className="grid grid-cols-4 gap-1">
        {benefits.map((b, i) => (
          <div key={i} className={`text-center p-1.5 rounded ${highlight && b.best ? 'bg-[#00D68F] text-white' : ''}`}>
            <div className={`text-[8px] ${highlight && b.best ? 'text-white' : 'text-gray-400'}`}>{b.plan}</div>
            <div className={`font-bold text-xs ${highlight && b.best ? 'text-white' : (highlight ? 'text-[#00D68F]' : 'text-gray-700')}`}>{b.bonus}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
