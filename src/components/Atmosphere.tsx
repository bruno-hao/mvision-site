import { wordGridBackgroundImage } from "@/lib/wordGrid";

export function Atmosphere({ opacity = 0.035 }: { opacity?: number }) {
  const backgroundImage = wordGridBackgroundImage("#33463A", "#FF6A3D");

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        backgroundImage,
        backgroundSize: "544px 544px",
        opacity,
      }}
    />
  );
}
