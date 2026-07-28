"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";
import { IconSkill } from "./IconSkill";
import { skills } from "@/lib/data";

export function Skills() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,54,33,0.06),_transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <FadeIn className="text-center mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            Stack técnica
          </p>
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Skills & Tecnologias
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted text-lg">
            Ferramentas e linguagens que uso no dia a dia para entregar dados
            com qualidade e escalabilidade.
          </p>
        </FadeIn>

        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <FadeIn key={category} delay={catIndex * 0.1}>
              <div>
                <h3 className="mb-8 text-xl font-bold text-foreground flex items-center gap-3">
                  <span className="h-px flex-1 bg-gradient-to-r from-brand/50 to-transparent" />
                  {category}
                  <span className="h-px flex-1 bg-gradient-to-l from-brand/50 to-transparent" />
                </h3>
                <StaggerContainer
                  className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                  stagger={0.05}
                >
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <StaggerItem key={skill.name}>
                        <motion.div
                          whileHover={{ y: -5, scale: 1.02 }}
                          className="group flex flex-col items-center gap-4 rounded-2xl glass p-5 text-center transition-all hover:border-brand/30 hover:bg-brand-light"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                            <IconSkill
                              name={skill.name}
                              iconKey={skill.icon}
                              className="h-6 w-6"
                            />
                          </div>
                          <span className="text-sm font-semibold text-foreground">
                            {skill.name}
                          </span>
                        </motion.div>
                      </StaggerItem>
                    ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
