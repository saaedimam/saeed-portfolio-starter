import { ImageResponse } from "@vercel/og";
export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Saaed Imam";
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #0B1F3A 0%, #00A3B4 100%)",
          color: "white",
          padding: "60px",
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        <div style={{ fontSize: 32, opacity: 0.8 }}>Platform Architect & Founder</div>
        <div>{title}</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
