import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Saaed Imam'
    const description = searchParams.get('description') || 'Platform Architect & Founder'

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
            backgroundColor: '#F4FBF7',
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(22, 163, 74, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(0, 163, 180, 0.1) 0%, transparent 50%)
            `,
            padding: '60px',
            position: 'relative',
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.05,
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  #16A34A,
                  #16A34A 2px,
                  transparent 2px,
                  transparent 20px
                )
              `,
            }}
          />

          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              backgroundColor: '#16A34A',
              borderRadius: '20px',
              marginBottom: '40px',
              color: 'white',
              fontSize: '32px',
              fontWeight: 'bold',
            }}
          >
            SI
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#0E2A22',
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: '20px',
              maxWidth: '900px',
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '32px',
              color: '#0E2A22',
              textAlign: 'center',
              opacity: 0.7,
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            {description}
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '8px',
              background: 'linear-gradient(90deg, #16A34A 0%, #00A3B4 100%)',
            }}
          />

          {/* Floating Elements */}
          <div
            style={{
              position: 'absolute',
              top: '100px',
              right: '100px',
              width: '40px',
              height: '40px',
              backgroundColor: '#22C55E',
              borderRadius: '50%',
              opacity: 0.3,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '120px',
              left: '80px',
              width: '30px',
              height: '30px',
              backgroundColor: '#00A3B4',
              borderRadius: '50%',
              opacity: 0.3,
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.log(`Error: ${e instanceof Error ? e.message : 'Unknown error'}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
