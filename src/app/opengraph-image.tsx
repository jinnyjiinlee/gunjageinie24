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
          flexDirection: 'column',
          backgroundColor: '#0A0A0A',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 배경 네온 효과 */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 900,
            height: 900,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,136,0.15) 0%, transparent 50%)',
          }}
        />

        {/* 상단 장식 라인 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #00FF88 0%, #00CC6A 50%, #00FF88 100%)',
          }}
        />

        {/* 메인 컨텐츠 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            padding: '40px 60px',
            textAlign: 'center',
          }}
        >
          {/* 이벤트 배지 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
                color: '#fff',
                padding: '12px 28px',
                borderRadius: 50,
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: '-0.5px',
              }}
            >
              2차 프로모션 최대 36% 할인
            </div>
          </div>

          {/* 메인 타이틀 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 28,
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: 8,
                letterSpacing: '-1px',
              }}
            >
              군자역
            </div>
            <div
              style={{
                fontSize: 120,
                fontWeight: 900,
                color: '#00FF88',
                lineHeight: 1,
                letterSpacing: '-4px',
                textShadow: '0 0 60px rgba(0,255,136,0.5)',
              }}
            >
              지니24
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 500,
                color: '#666666',
                marginTop: 8,
                letterSpacing: '8px',
              }}
            >
              STUDYCAFE
            </div>
          </div>

          {/* 서브 타이틀 */}
          <div
            style={{
              fontSize: 28,
              color: '#AAAAAA',
              marginBottom: 40,
              fontWeight: 500,
            }}
          >
            집중이 필요한 당신을 위한 몰입의 공간
          </div>

          {/* 특징 태그들 */}
          <div
            style={{
              display: 'flex',
              gap: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(0,255,136,0.1)',
                border: '2px solid rgba(0,255,136,0.3)',
                borderRadius: 50,
                padding: '14px 28px',
                fontSize: 20,
                color: '#00FF88',
                fontWeight: 600,
              }}
            >
              <span style={{ fontSize: 24 }}>⏰</span> 24시간 운영
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,0.05)',
                border: '2px solid rgba(255,255,255,0.15)',
                borderRadius: 50,
                padding: '14px 28px',
                fontSize: 20,
                color: '#FFFFFF',
                fontWeight: 600,
              }}
            >
              <span style={{ fontSize: 24 }}>🎁</span> 4시간 무료체험
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,0.05)',
                border: '2px solid rgba(255,255,255,0.15)',
                borderRadius: 50,
                padding: '14px 28px',
                fontSize: 20,
                color: '#FFFFFF',
                fontWeight: 600,
              }}
            >
              <span style={{ fontSize: 24 }}>🪑</span> 시디즈 의자
            </div>
          </div>
        </div>

        {/* 하단 정보 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
            padding: '24px 60px',
            background: 'rgba(0,255,136,0.05)',
            borderTop: '1px solid rgba(0,255,136,0.2)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              color: '#888888',
              fontSize: 20,
            }}
          >
            <span style={{ color: '#00FF88', fontSize: 24 }}>📍</span>
            군자역 5번출구 도보 3분
          </div>
          <div
            style={{
              width: 2,
              height: 24,
              background: 'rgba(255,255,255,0.2)',
            }}
          />
          <div
            style={{
              color: '#666666',
              fontSize: 18,
            }}
          >
            서울 광진구 능동로 330 5층
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
