import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SanMarina Global Solutions';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #09090b 0%, #1a1a2e 50%, #09090b 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                fontWeight: 800,
                color: 'white',
              }}
            >
              S
            </div>
            <span
              style={{
                fontSize: '48px',
                fontWeight: 800,
                color: 'white',
                letterSpacing: '-0.03em',
              }}
            >
              SanMarina Global
            </span>
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#a1a1aa',
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              fontWeight: 600,
            }}
          >
            Web Dev · App Dev · Marketing · SEO · AI Video · AI Automation
          </div>
          <div
            style={{
              marginTop: '16px',
              padding: '12px 32px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #7C3AED, #8B5CF6)',
              color: 'white',
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            sanmarinaglobal.eu
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
