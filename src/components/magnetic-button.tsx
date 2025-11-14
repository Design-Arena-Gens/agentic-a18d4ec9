"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { PropsWithChildren } from "react";
import clsx from "clsx";

type MagneticButtonProps = PropsWithChildren<{
  href: string;
  className?: string;
  icon?: React.ReactNode;
}>;

export function MagneticButton({ href, children, className, icon }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  const transform = useMotionTemplate`translate3d(${springX}px, ${springY}px, 0)`;

  return (
    <Link href={href} className="relative inline-flex" scroll={false}>
      <motion.span
        style={{ transform }}
        className={clsx(
          "group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-medium tracking-wide text-white shadow-neural-edge backdrop-blur-md transition duration-500 hover:border-white/25 hover:bg-white/[0.08]",
          className,
        )}
        onPointerMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          const offsetX = event.clientX - (bounds.left + bounds.width / 2);
          const offsetY = event.clientY - (bounds.top + bounds.height / 2);
          x.set(offsetX * 0.45);
          y.set(offsetY * 0.45);
        }}
        onPointerLeave={() => {
          x.set(0);
          y.set(0);
        }}
      >
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            transform: "translateX(-100%)",
          }}
          animate={{
            transform: ["translateX(-100%)", "translateX(100%)"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {icon && (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200 transition duration-500 group-hover:border-white/30 group-hover:bg-white/10">
            {icon}
          </span>
        )}

        <span className="relative z-10">{children}</span>
      </motion.span>
    </Link>
  );
}
