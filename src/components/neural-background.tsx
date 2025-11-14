"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    size: 420,
    blur: 140,
    color: "rgba(56, 189, 248, 0.35)",
    initial: { x: -180, y: -120 },
    animate: { x: [-180, -110, -200, -180], y: [-120, -80, -160, -120] },
    duration: 32,
  },
  {
    size: 520,
    blur: 180,
    color: "rgba(190, 242, 100, 0.3)",
    initial: { x: 220, y: -160 },
    animate: { x: [220, 260, 200, 220], y: [-160, -200, -120, -160] },
    duration: 46,
  },
  {
    size: 460,
    blur: 160,
    color: "rgba(244, 114, 182, 0.35)",
    initial: { x: -80, y: 260 },
    animate: { x: [-80, -40, -120, -80], y: [260, 220, 280, 260] },
    duration: 38,
  },
];

export function NeuralBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade opacity-[0.7]" />
      {orbs.map((orb, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full mix-blend-screen"
          style={{
            width: orb.size,
            height: orb.size,
            filter: `blur(${orb.blur}px)`,
            background: orb.color,
          }}
          initial={orb.initial}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0 bg-radial-fade-2 opacity-70"
        animate={{ scale: [1, 1.03, 0.98, 1] }}
        transition={{ duration: 48, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
