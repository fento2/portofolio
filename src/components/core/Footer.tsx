function Footer() {
  return (
    <div className="relative z-10">
      <footer
        className="py-8 font-mono"
        style={{ borderTop: "1px solid rgba(0,255,156,0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-6 space-y-2 text-center">
          <p
            className="text-sm"
            style={{ color: "#00ff9c", textShadow: "0 0 8px rgba(0,255,156,0.4)" }}
          >
            [fendry@portfolio ~]${" "}
            <span style={{ color: "#e4e4e7" }}>exit</span>
            <span
              style={{
                color: "#00ff9c",
                animation: "cursor-blink 1s step-end infinite",
              }}
            >
              ▋
            </span>
          </p>
          <p className="text-[11px]" style={{ color: "#71717a" }}>
            compiled with ❤ + caffeine &nbsp;//&nbsp; © {new Date().getFullYear()} Fendry Tonrate
            &nbsp;//&nbsp; build 1.0.4
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
