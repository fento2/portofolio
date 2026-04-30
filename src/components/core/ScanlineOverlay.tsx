"use client";

export default function ScanlineOverlay() {
  return (
    <>
      {/* Fixed horizontal scanlines across entire viewport */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
        }}
      />
      {/* Moving scanline beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden"
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(transparent, rgba(0,255,156,0.03), transparent)",
            animation: "scanline 8s linear infinite",
          }}
        />
      </div>
    </>
  );
}
