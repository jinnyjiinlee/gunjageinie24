import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = '군자역 지니24 스터디카페 - 성인 자기계발러를 위한 24시간 프리미엄 공간';
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
        {/* 배경 그라데이션 원 - 더 대담하게 */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 800,
            height: 800,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,136,0.25) 0%, transparent 60%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -300,
            left: -200,
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,136,0.15) 0%, transparent 60%)',
          }}
        />

        {/* 그리드 패턴 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.08,
            backgroundImage: 'linear-gradient(rgba(0,255,136,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* 좌측 콘텐츠 영역 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 80px',
            width: '65%',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* 상단 배지 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(0,255,136,0.15)',
                border: '2px solid rgba(0,255,136,0.4)',
                color: '#00FF88',
                padding: '10px 20px',
                borderRadius: 30,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: '#00FF88',
                  borderRadius: '50%',
                }}
              />
              24시간 운영
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: 30,
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              2차 프로모션 진행중
            </div>
          </div>

          {/* 메인 타이틀 */}
          <div
            style={{
              fontSize: 76,
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginBottom: 16,
              letterSpacing: '-3px',
            }}
          >
            군자역
          </div>
          <div
            style={{
              fontSize: 86,
              fontWeight: 900,
              color: '#00FF88',
              lineHeight: 1,
              marginBottom: 24,
              letterSpacing: '-3px',
            }}
          >
            지니24
          </div>
          <div
            style={{
              fontSize: 42,
              fontWeight: 600,
              color: '#888888',
              marginBottom: 40,
            }}
          >
            스터디카페
          </div>

          {/* 태그라인 */}
          <div
            style={{
              fontSize: 24,
              color: '#CCCCCC',
              lineHeight: 1.5,
            }}
          >
            성인 자기계발러를 위한 최적의 공간
          </div>
        </div>

        {/* 우측 강조 영역 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '35%',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* 큰 네온 박스 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,255,136,0.1)',
              border: '3px solid rgba(0,255,136,0.4)',
              borderRadius: 30,
              padding: '40px 50px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: 22,
                color: '#00FF88',
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              처음 오시는 분
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 900,
                color: '#FFFFFF',
                marginBottom: 8,
              }}
            >
              4시간
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: '#00FF88',
              }}
            >
              무료 체험
            </div>
          </div>

          {/* 특징 아이콘들 */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              marginTop: 30,
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 12,
                padding: '12px 16px',
                fontSize: 14,
                color: '#AAAAAA',
              }}
            >
              시디즈 의자
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 12,
                padding: '12px 16px',
                fontSize: 14,
                color: '#AAAAAA',
              }}
            >
              100cm 책상
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
            height: 60,
            background: 'linear-gradient(90deg, rgba(0,255,136,0.2) 0%, rgba(0,255,136,0.05) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: '#666666',
              fontSize: 16,
            }}
          >
            <span style={{ color: '#00FF88' }}>📍</span> 군자역 5번출구 도보 3분
          </div>
          <div
            style={{
              color: '#555555',
              fontSize: 14,
            }}
          >
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
