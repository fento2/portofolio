"use client";

export default function CyberBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #0d0d20 0%, #0a0a0f 60%, #050507 100%)",
        }}
      />

      {/* Animated perspective grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,156,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,156,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.8) 60%, transparent 100%)",
          animation: "grid-move 4s linear infinite",
        }}
      />

      {/* Horizon glow line */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: "62%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(0,255,156,0.25), rgba(0,212,255,0.25), transparent)",
        }}
      />

      {/* Green blob — left */}
      <div
        className="absolute"
        style={{
          top: "15%",
          left: "-5%",
          width: "45%",
          height: "55%",
          background:
            "radial-gradient(ellipse, rgba(0,255,156,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Magenta blob — right */}
      <div
        className="absolute"
        style={{
          top: "40%",
          right: "-5%",
          width: "45%",
          height: "55%",
          background:
            "radial-gradient(ellipse, rgba(255,0,128,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Cyan top accent */}
      <div
        className="absolute"
        style={{
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "30%",
          background:
            "radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Vertical decorative lines */}
      {[12, 33, 67, 88].map((pos) => (
        <div
          key={pos}
          className="absolute top-0 bottom-0"
          style={{
            left: `${pos}%`,
            width: "1px",
            background:
              "linear-gradient(to bottom, transparent, rgba(0,255,156,0.08) 40%, rgba(0,212,255,0.08) 70%, transparent)",
          }}
        />
      ))}
    </div>
  );
}
