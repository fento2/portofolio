export default function CyberBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Gradient latar belakang */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0033] via-[#24005a] to-[#000000] opacity-90" />

      {/* Neon glow kiri */}
      <div className="absolute w-80 h-80 bg-[#00f0ff] rounded-full blur-[100px] opacity-20 top-[35%] left-[25%]" />

      {/* Neon glow kanan */}
      <div className="absolute w-80 h-80 bg-[#ff00d4] rounded-full blur-[100px] opacity-15 top-[55%] left-[60%]" />

      {/* Grid pattern dengan dua warna */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(0,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
}
