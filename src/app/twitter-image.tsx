import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = '군자역 지니24 스터디카페';
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
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
          position: 'relative',
        }}
      >
        {/* 배경 그라디언트 */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,136,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,136,0.1) 0%, transparent 70%)',
          }}
        />

        {/* 그리드 패턴 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: 'linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* 메인 콘텐츠 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* 뱃지 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              border: '2px solid rgba(0,255,136,0.5)',
              color: '#00FF88',
              padding: '12px 24px',
              borderRadius: 50,
              fontSize: 20,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                backgroundColor: '#00FF88',
                borderRadius: '50%',
              }}
            />
            24시간 연중무휴 운영
          </div>

          {/* 타이틀 */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: 16,
              letterSpacing: '-2px',
            }}
          >
            군자역 지니24
          </div>

          {/* 네온 서브타이틀 */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#00FF88',
              marginBottom: 40,
              textShadow: '0 0 30px rgba(0,255,136,0.5), 0 0 60px rgba(0,255,136,0.3)',
            }}
          >
            스터디카페
          </div>

          {/* 태그라인 */}
          <div
            style={{
              fontSize: 28,
              color: '#888888',
              marginBottom: 48,
            }}
          >
            성인 자기계발러를 위한 최적의 공간
          </div>

          {/* 특징 태그들 */}
          <div
            style={{
              display: 'flex',
              gap: 16,
            }}
          >
            <div
              style={{
                background: 'rgba(0,255,136,0.15)',
                border: '1px solid rgba(0,255,136,0.3)',
                color: '#00FF88',
                padding: '12px 24px',
                borderRadius: 30,
                fontSize: 18,
              }}
            >
              서울대 시디즈 의자
            </div>
            <div
              style={{
                background: 'rgba(0,255,136,0.15)',
                border: '1px solid rgba(0,255,136,0.3)',
                color: '#00FF88',
                padding: '12px 24px',
                borderRadius: 30,
                fontSize: 18,
              }}
            >
              100cm+ 넓은 책상
            </div>
            <div
              style={{
                background: 'rgba(0,255,136,0.15)',
                border: '1px solid rgba(0,255,136,0.3)',
                color: '#00FF88',
                padding: '12px 24px',
                borderRadius: 30,
                fontSize: 18,
              }}
            >
              군자역 도보 3분
            </div>
          </div>
        </div>

        {/* 하단 URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            color: '#555555',
            fontSize: 18,
          }}
        >
          gunjageinie24.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
