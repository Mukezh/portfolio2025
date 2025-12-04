import React, { useRef, useState } from "react";

interface TorchRevealProps {
  frontImage: string; // animated image
  backImage: string; // real image
  radius?: number; // spotlight radius
  softness?: number; // blurred edge
  className?: string; // optional wrapper class
}

const TorchReveal: React.FC<TorchRevealProps> = ({
  frontImage = "/hike.jpg",
  backImage = "hike_animated.jpg",
  radius = 120,
  softness = 20,
  className = "",
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });
  };

  return (
    <div
      ref={wrapperRef}
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMove}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "8px",
        cursor: "none", // optional
      }}
    >
      {/* BACK IMAGE (real photo) */}
      <img
        src={backImage}
        alt="real-photo"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* FRONT IMAGE (animated) */}
      <img
        src={frontImage}
        alt="animated"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "mask 0.15s ease-out",

          maskImage: hover
            ? `radial-gradient(
                circle ${radius}px at ${mousePos.x}px ${mousePos.y}px,
                transparent 0%,
                transparent ${Math.max(0, 100 - softness)}%,
                black 100%
              )`
            : "none",

          WebkitMaskImage: hover
            ? `radial-gradient(
                circle ${radius}px at ${mousePos.x}px ${mousePos.y}px,
                transparent 0%,
                transparent ${Math.max(0, 100 - softness)}%,
                black 100%
              )`
            : "none",
        }}
      />
    </div>
  );
};

export default TorchReveal;
