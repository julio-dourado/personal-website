"use client";

import { motion } from "framer-motion";
import { Code, BarChart3, Database, Cloud } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";
import { journey } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="h-6 w-6" />,
  barChart: <BarChart3 className="h-6 w-6" />,
  database: <Database className="h-6 w-6" />,
  cloud: <Cloud className="h-6 w-6" />,
};

export function Journey() {
  return (
    <section id="jornada" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,54,33,0.05),_transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <FadeIn className="text-center mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            Trajetória
          </p>
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Minha Jornada
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted text-lg">
            Os marcos que moldaram minha trajetória na área de dados.
          </p>
        </FadeIn>

        <StaggerContainer className="relative" stagger={0.15}>
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand via-brand/50 to-transparent md:left-1/2" />
          {journey.map((step, index) => (
            <StaggerItem key={step.title}>
              <div
                className={`relative mb-12 flex flex-col gap-6 pl-20 md:flex-row md:items-center md:pl-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="rounded-3xl glass p-7 text-left"
                  >
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                <div className="absolute left-8 top-6 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30 md:left-1/2">
                  {iconMap[step.icon]}
                </div>

                <div className="hidden flex-1 md:block" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
