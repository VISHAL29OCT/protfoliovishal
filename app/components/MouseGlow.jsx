"use client";
import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!glowRef.current) return;

      glowRef.current.style.setProperty("--x", `${e.clientX}px`);
      glowRef.current.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background: `
          radial-gradient(
            400px at var(--x) var(--y),
            rgba(168, 85, 247, 0.18),
            transparent 60%
          )
        `,
      }}
    />
  );
}
