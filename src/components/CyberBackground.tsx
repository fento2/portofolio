export default function CyberBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    
      <div className="absolute inset-0 bg-cyber-grid" />

   
      <div className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-3xl opacity-30 top-[10%] left-[10%]" />
      <div className="absolute w-[500px] h-[500px] bg-cyan-400 rounded-full blur-2xl opacity-20 top-[60%] left-[70%]" />
      <div className="absolute w-[300px] h-[300px] bg-violet-500 rounded-full blur-2xl opacity-30 top-[80%] left-[20%]" />
      <div className="absolute w-[200px] h-[200px] bg-orange-400 rounded-full blur-2xl opacity-20 top-[30%] left-[60%]" />
    </div>
  );
}
