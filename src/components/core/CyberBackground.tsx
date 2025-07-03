"use client";

import { motion } from "framer-motion";

export default function CyberBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      
      <div className="absolute inset-0 bg-cyber-grid" />

      
      <motion.div
        className="absolute w-[450px] h-[450px] bg-[#ff00cc] rounded-full blur-[150px] opacity-25 top-[5%] left-[10%]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] bg-[#00fff7] rounded-full blur-[180px] opacity-20 top-[60%] left-[65%]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] bg-[#ff1493] rounded-full blur-[120px] opacity-30 top-[80%] left-[15%]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] bg-[#00ff00] rounded-full blur-[100px] opacity-25 top-[30%] left-[55%]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] bg-[#9400d3] rounded-full blur-[90px] opacity-35 top-[50%] left-[5%]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[180px] h-[180px] bg-[#ffcc00] rounded-full blur-[70px] opacity-30 top-[20%] left-[70%]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[220px] h-[220px] bg-[#39ff14] rounded-full blur-[100px] opacity-20 top-[75%] left-[40%]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
