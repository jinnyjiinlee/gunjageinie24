import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = '군자역 지니24 스터디카페 - 24시간 프리미엄 스터디카페';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundColor: '#0A0A0A',
          position: 'relative',
        }}
      >
        {/* 배경 그라데이션 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '60%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(0,255,136,0.08) 0%, transparent 60%)',
          }}
        />

        {/* 좌측 메인 콘텐츠 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 80px',
            width: '58%',
          }}
        >
          {/* 프로모션 배지 */}
          <div
            style={{
              display: 'flex',
              marginBottom: 24,
            }}
          >
            <div
              style={{
                background: '#FF4757',
                color: '#fff',
                padding: '10px 24px',
                borderRadius: 30,
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              2차 프로모션 최대 36% 할인
            </div>
          </div>

          {/* 로고 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: 36,
                fontWeight: 500,
                color: '#666666',
              }}
            >
              군자역
            </div>
            <div
              style={{
                fontSize: 96,
                fontWeight: 900,
                color: '#00FF88',
                lineHeight: 1.1,
              }}
            >
              지니24
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 400,
                color: '#444444',
                letterSpacing: 4,
                marginTop: 4,
              }}
            >
              STUDYCAFE
            </div>
          </div>

          {/* 태그라인 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 28,
              fontSize: 22,
              color: '#888888',
            }}
          >
            <span>집중이 필요한 당신을 위한</span>
            <span style={{ color: '#FFFFFF', fontWeight: 600, marginTop: 4 }}>몰입의 공간</span>
          </div>
        </div>

        {/* 우측 카드 영역 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42%',
            paddingRight: 60,
          }}
        >
          {/* 무료 체험 카드 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(0,255,136,0.1)',
              border: '2px solid #00FF88',
              borderRadius: 24,
              padding: '32px 56px',
              marginBottom: 24,
            }}
          >
            <div style={{ fontSize: 16, color: '#00FF88', marginBottom: 4, fontWeight: 600 }}>
              처음 오시는 분
            </div>
            <div style={{ fontSize: 52, fontWeight: 900, color: '#FFFFFF' }}>
              4시간
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#00FF88' }}>
              무료 체험
            </div>
          </div>

          {/* 특징 태그들 */}
          <div style={{ display: 'flex', gap: 10 }}>
            <div
              style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 16,
                padding: '10px 18px',
                fontSize: 14,
                color: '#AAAAAA',
                fontWeight: 500,
              }}
            >
              24시간
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 16,
                padding: '10px 18px',
                fontSize: 14,
                color: '#AAAAAA',
                fontWeight: 500,
              }}
            >
              시디즈의자
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 16,
                padding: '10px 18px',
                fontSize: 14,
                color: '#AAAAAA',
                fontWeight: 500,
              }}
            >
              100cm책상
            </div>
          </div>
        </div>

        {/* 하단 바 */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 50,
            background: 'rgba(0,255,136,0.05)',
            borderTop: '1px solid rgba(0,255,136,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 80px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', color: '#666666', fontSize: 16 }}>
            군자역 5번출구 도보 3분
          </div>
          <div style={{ color: '#444444', fontSize: 14 }}>
            gunjageinie24.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
