import { ImageResponse } from "next/og";
export const runtime     = "edge";
export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div style={{ background:"#0A0A0A", width:"100%", height:"100%", display:"flex",
      flexDirection:"column", justifyContent:"center", padding:"80px", fontFamily:"sans-serif", position:"relative" }}>
      <div style={{ position:"absolute", inset:0,
        backgroundImage:"linear-gradient(#10B98108 1px, transparent 1px), linear-gradient(90deg, #10B98108 1px, transparent 1px)",
        backgroundSize:"80px 80px" }} />
      <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"48px" }}>
        <span style={{ color:"#10B981", fontSize:"28px", fontWeight:700, fontFamily:"monospace" }}>HV_</span>
      </div>
      <h1 style={{ color:"#FFFFFF", fontSize:"72px", fontWeight:800, margin:0, lineHeight:1.1, letterSpacing:"-2px" }}>
        Harley Vásquez
      </h1>
      <p style={{ color:"#10B981", fontSize:"32px", fontWeight:500, margin:"16px 0 0" }}>Software Engineer</p>
      <div style={{ position:"absolute", bottom:"80px", right:"80px", color:"rgba(255,255,255,0.3)", fontSize:"18px" }}>
        harleyvasquez.dev
      </div>
    </div>,
    { ...size }
  );
}
