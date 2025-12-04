import TorchReveal from "./Photo/TorchEffectComponent";

export default function HeroSection() {
  return (
    <div className="w-[420px] h-[260px]">
      <TorchReveal
        frontImage="/hike_animated.jpg"
        backImage="/hike.jpg"
        radius={150}
        softness={50}
      />
    </div>
  );
}
