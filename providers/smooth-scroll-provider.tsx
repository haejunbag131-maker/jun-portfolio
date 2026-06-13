"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
      smoothWheel: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
