"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SpaceBackground = dynamic(
  () => import("./SpaceBackground").then((mod) => mod.SpaceBackground),
  { ssr: false, loading: () => <div className="absolute inset-0 bg-background" /> }
);

export function HeroBackground() {
  const [hasVideo, setHasVideo] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    fetch("/videos/space-hero.mp4", { method: "HEAD" })
      .then((res) => setHasVideo(res.status === 200))
      .catch(() => setHasVideo(false));

    return () => observer.disconnect();
  }, []);

  // Light mode: clean gradient background
  if (theme === "light") {
    return (
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, var(--hero-gradient-start) 0%, var(--hero-gradient-end) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,54,33,0.08),_transparent_50%)]" />
      </div>
    );
  }

  // Dark mode with video or Three.js
  if (hasVideo) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/space-hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/space-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>
    );
  }

  return <SpaceBackground />;
}
