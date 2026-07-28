"use client";

import dynamic from "next/dynamic";
import { FadeIn } from "./FadeIn";
import { siteConfig } from "@/lib/data";

const AboutModel = dynamic(
  () => import("./AboutModel").then((mod) => mod.AboutModel),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center text-7xl font-black text-brand/40">
        JD
      </div>
    ),
  }
);

export function About() {
  return (
    <section id="sobre" className="relative py-28 md:py-36 section-glow">
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn direction="left">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
                Quem sou
              </p>
              <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                Sobre mim
              </h2>
              <div className="mt-8 space-y-6 leading-relaxed text-muted text-lg">
                <p>{siteConfig.summary}</p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
                <Stat label="Anos de experiência" value="4+" />
                <Stat label="Empresas & projetos" value="7+" />
                <Stat label="Foco atual" value="Lakehouse" small />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="flex justify-center">
              <div className="relative h-72 w-72 overflow-hidden rounded-3xl glass shadow-2xl shadow-brand/10 sm:h-96 sm:w-96">
                <AboutModel />
                <p className="pointer-events-none absolute bottom-4 left-0 right-0 text-center text-xs font-medium uppercase tracking-widest text-muted">
                  Dados em movimento
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  small,
}: {
  label: string;
  value: string;
  small?: boolean;
}) {
  return (
    <div className="glass rounded-2xl p-4 text-center sm:p-5">
      <p
        className={`font-black text-brand ${
          small ? "text-sm sm:text-xl md:text-2xl" : "text-3xl"
        }`}
      >
        {value}
      </p>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted sm:text-xs">
        {label}
      </p>
    </div>
  );
}
