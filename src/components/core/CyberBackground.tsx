export default function CyberBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#000] opacity-90" />
      <div className="absolute w-72 h-72 bg-[#00fff7] rounded-full blur-[80px] opacity-15 top-[40%] left-[60%]" />
    </div>
  );
}
