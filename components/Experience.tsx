"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";
import { experiences, education } from "@/lib/data";

export function Experience() {
  return (
    <section id="experiencia" className="relative py-28 md:py-36 section-glow">
      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <FadeIn className="text-center mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            Carreira
          </p>
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Experiência Profissional
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted text-lg">
            Onde apliquei engenharia de dados e de software na prática.
          </p>
        </FadeIn>

        <StaggerContainer className="relative" stagger={0.12}>
          {/* Linha vertical da timeline */}
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand via-brand/40 to-transparent sm:left-6"
          />

          {experiences.map((exp) => (
            <StaggerItem key={`${exp.company}-${exp.role}`}>
              <div className="relative mb-10 pl-14 sm:pl-20">
                {/* Marcador da timeline */}
                <div className="absolute left-4 top-8 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30 sm:left-6 sm:h-11 sm:w-11">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                <motion.article
                  whileHover={{ y: -4 }}
                  className="rounded-3xl glass p-6 transition-all hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 sm:p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-base font-semibold text-brand">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-sm font-bold uppercase tracking-wider text-foreground">
                        {exp.period}
                      </p>
                      <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 leading-relaxed text-muted">
                    {exp.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-muted border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Formação acadêmica */}
        <FadeIn delay={0.1} className="mt-4">
          <div className="relative pl-14 sm:pl-20">
            <div className="absolute left-4 top-8 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-xl border border-brand/40 bg-surface-solid text-brand sm:left-6 sm:h-11 sm:w-11">
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="rounded-3xl border border-dashed border-border bg-surface-solid/50 p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {education[0].degree}
                  </h3>
                  <p className="mt-1 text-base font-semibold text-brand">
                    {education[0].institution}
                  </p>
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-foreground">
                  {education[0].period}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
