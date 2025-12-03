import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

/**
 * Gear5LuffyWalker
 * - A lightweight, drop-in React component that floats a "Gear 5 Luffy - inspired" mascot
 *   around the page. Uses an inline SVG so there are no external assets.
 * - Tailwind classes are used for layout/styling so it fits inside a shadcn project easily.
 * - Respects prefers-reduced-motion.
 *
 * Usage:
 *   <Gear5LuffyWalker enabled={true} maxSpeed={600} />
 *
 * Notes:
 * - This is a stylized homage / playful mascot animation. If you want different art,
 *   replace the inline SVG with your own vector or Lottie animation.
 */

type Props = {
  enabled?: boolean;
  // maximum time (ms) to take moving across the viewport; smaller = faster movement
  maxSpeed?: number;
  // minimum time (ms)
  minSpeed?: number;
  // maximum offset from edges in px
  margin?: number;
};

export default function Gear5LuffyWalker({
  enabled = true,
  maxSpeed = 7000,
  minSpeed = 3000,
  margin = 40,
}: Props) {
  const controls = useAnimation();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  // clamp helper
  const clamp = (n: number, a: number, b: number) =>
    Math.max(a, Math.min(b, n));

  useEffect(() => {
    if (!enabled || reducedMotion) return;

    let mounted = true;

    function getViewportBounds() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      return { w, h };
    }

    function randomBetween(a: number, b: number) {
      return Math.random() * (b - a) + a;
    }

    async function animateLoop() {
      // start from a random spot
      const { w, h } = getViewportBounds();
      const startX = randomBetween(margin, w - margin);
      const startY = randomBetween(margin, h - margin);

      // place instantly at start
      await controls.set({ x: startX - w / 2, y: startY - h / 2 });

      while (mounted) {
        const nextX = randomBetween(margin, w - margin) - w / 2;
        const nextY = randomBetween(margin, h - margin) - h / 2;
        const duration =
          clamp(randomBetween(minSpeed, maxSpeed), minSpeed, maxSpeed) / 1000; // seconds

        // animate to next point with spring-like motion
        controls.start({
          x: nextX,
          y: nextY,
          transition: {
            type: "spring",
            damping: 16,
            stiffness: 60,
            duration,
          },
        });

        // wait for a bit of that duration plus a small pause
        await new Promise((res) =>
          setTimeout(res, duration * 700 + randomBetween(200, 1200)),
        );

        // if viewport size changed recalc
        const bounds = getViewportBounds();
        if (bounds.w !== w || bounds.h !== h) {
          // update locally
        }
      }
    }

    animateLoop();

    return () => {
      mounted = false;
    };
  }, [enabled, reducedMotion, controls, maxSpeed, minSpeed, margin]);

  // Limb animation variants (subtle waving)
  const limbVariants = {
    idle: {
      rotate: [0, -12, 0, 10, 0],
      transition: { duration: 2.6, repeat: Infinity, ease: "easeInOut" },
    },
    reduced: { rotate: 0 },
  } as const;

  const floatBob = {
    animate: reducedMotion
      ? { y: 0 }
      : {
          y: [0, -8, 0, -6, 0],
          transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
        },
  };

  return (
    <div
      ref={wrapperRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 overflow-visible"
    >
      <motion.div
        // center the sprite by moving the coordinate system to the center of the viewport
        initial={{ x: 0, y: 0 }}
        animate={controls}
        style={{ translateX: "-50%", translateY: "-50%" }}
        className="absolute left-1/2 top-1/2 will-change-transform"
      >
        {/* The mascot container: scales down on small screens */}
        <motion.div
          className="select-none pointer-events-none"
          variants={floatBob}
          animate={"animate"}
        >
          {/* Inline SVG: a stylized Gear 5 Luffy - inspired mascot. Swap this for your own art if you like. */}
          <img
            src="../../public/cute_luffy3.png" // replace with your actual public path or import
            alt="Luffy silhouette"
            className="w-40 h-40 object-contain drop-shadow-xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
