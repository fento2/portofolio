function Logo() {
  return (
    <div className="flex items-center space-x-2 font-mono text-[#4EC9B0] text-2xl ld:text-3xl">
      <div className="w-3 h-3 bg-[#4EC9B0] rounded-full animate-pulse"></div>
      <span className="text-white text-flicker-in-glow">fenStack</span>
    </div>
  );
}

export default Logo;