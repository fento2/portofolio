function Logo() {
  return (
    <div
      className="flex items-center gap-1 font-mono text-xl lg:text-2xl select-none"
      style={{ color: "#00ff9c" }}
    >
      <span style={{ color: "#00d4ff" }}>&gt;</span>
      <span
        className="font-bold tracking-tight"
        style={{
          color: "#00ff9c",
          textShadow: "0 0 12px rgba(0,255,156,0.6)",
        }}
      >
        fenStack
      </span>
      <span
        className="font-bold"
        style={{
          color: "#00ff9c",
          animation: "cursor-blink 1s step-end infinite",
          textShadow: "0 0 8px #00ff9c",
        }}
      >
        _
      </span>
    </div>
  );
}

export default Logo;
