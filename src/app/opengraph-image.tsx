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
          overflow: 'hidden',
        }}
      >
        {/* 배경 글로우 효과들 */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,136,0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,136,0.2) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* 좌측 메인 콘텐츠 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 70px',
            width: '60%',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* 프로모션 배지 */}
          <div
            style={{
              display: 'flex',
              marginBottom: 30,
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #FF4757 0%, #FF6B81 100%)',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 50,
                fontSize: 20,
                fontWeight: 800,
              }}
            >
              🔥 2차 프로모션 최대 36% 할인
            </div>
          </div>

          {/* 로고 타이틀 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div
              style={{
                fontSize: 42,
                fontWeight: 600,
                color: '#888888',
                letterSpacing: '-1px',
              }}
            >
              군자역
            </div>
            <div
              style={{
                fontSize: 100,
                fontWeight: 900,
                color: '#00FF88',
                letterSpacing: '-4px',
                lineHeight: 1,
              }}
            >
              지니24
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 500,
                color: '#444444',
                letterSpacing: '6px',
                marginTop: 8,
              }}
            >
              STUDYCAFE
            </div>
          </div>

          {/* 태그라인 */}
          <div
            style={{
              fontSize: 26,
              color: '#AAAAAA',
              marginTop: 32,
              lineHeight: 1.5,
            }}
          >
            집중이 필요한 당신을 위한
            <br />
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>몰입의 공간</span>
          </div>
        </div>

        {/* 우측 카드 영역 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40%',
            padding: '40px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* 무료 체험 카드 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'linear-gradient(145deg, rgba(0,255,136,0.15) 0%, rgba(0,255,136,0.05) 100%)',
              border: '2px solid rgba(0,255,136,0.4)',
              borderRadius: 28,
              padding: '36px 48px',
              marginBottom: 28,
            }}
          >
            <div style={{ fontSize: 18, color: '#00FF88', marginBottom: 8, fontWeight: 600 }}>
              처음 오시는 분
            </div>
            <div style={{ fontSize: 56, fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>
              4시간
            </div>
            <div style={{ fontSize: 32, fontWeight: 700, color: '#00FF88', marginTop: 4 }}>
              무료 체험
            </div>
          </div>

          {/* 특징 태그들 */}
          <div style={{ display: 'flex', gap: 12 }}>
            <div
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 20,
                padding: '12px 20px',
                fontSize: 16,
                color: '#CCCCCC',
                fontWeight: 500,
              }}
            >
              ⏰ 24시간
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 20,
                padding: '12px 20px',
                fontSize: 16,
                color: '#CCCCCC',
                fontWeight: 500,
              }}
            >
              🪑 시디즈
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 20,
                padding: '12px 20px',
                fontSize: 16,
                color: '#CCCCCC',
                fontWeight: 500,
              }}
            >
              📐 100cm
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
            height: 56,
            background: 'linear-gradient(90deg, rgba(0,255,136,0.1) 0%, rgba(0,0,0,0.5) 100%)',
            borderTop: '1px solid rgba(0,255,136,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 70px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#777777', fontSize: 18 }}>
            <span style={{ color: '#00FF88' }}>📍</span>
            군자역 5번출구 도보 3분
          </div>
          <div style={{ color: '#555555', fontSize: 16 }}>
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
