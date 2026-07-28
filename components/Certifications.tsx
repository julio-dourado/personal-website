"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, ExternalLink, Target } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";
import { certifications, type Certification } from "@/lib/data";

export function Certifications() {
  const done = certifications.filter((c) => c.status === "done");
  const goals = certifications.filter((c) => c.status === "goal");

  return (
    <section id="certificacoes" className="relative py-28 md:py-36 section-glow">
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <FadeIn className="text-center mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            Credenciais
          </p>
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Certificações
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted text-lg">
            Certificações e capacitações que validam minha trajetória técnica —
            e as metas que estou perseguindo agora.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {done.map((cert) => (
            <StaggerItem key={cert.title}>
              <CertCard cert={cert} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {goals.length > 0 && (
          <>
            <FadeIn className="mt-20 mb-10">
              <h3 className="flex items-center gap-3 text-xl font-bold text-foreground">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-brand/50" />
                <span className="inline-flex items-center gap-2">
                  <Target className="h-5 w-5 text-brand" />
                  Próximas metas
                </span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-brand/50" />
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-center text-muted">
                Certificações em preparação para aprofundar minha atuação em
                Databricks e AWS.
              </p>
            </FadeIn>

            <StaggerContainer
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.08}
            >
              {goals.map((cert) => (
                <StaggerItem key={cert.title}>
                  <CertCard cert={cert} goal />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </>
        )}
      </div>
    </section>
  );
}

function CertCard({
  cert,
  goal,
}: {
  cert: Certification;
  goal?: boolean;
}) {
  const Card = (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      className={`group relative h-full overflow-hidden rounded-3xl p-7 transition-all hover:shadow-2xl hover:shadow-brand/10 ${
        goal
          ? "border border-dashed border-brand/40 bg-surface-solid/50 hover:border-brand"
          : "glass hover:border-brand/30"
      }`}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/10 blur-2xl transition-all group-hover:bg-brand/20" />
      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div
            className={`inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl p-3 transition-colors ${
              goal
                ? "border border-brand/40 bg-brand-light text-brand"
                : "bg-brand-light text-brand group-hover:bg-brand group-hover:text-white"
            }`}
          >
            {goal ? <Target className="h-6 w-6" /> : <Award className="h-6 w-6" />}
          </div>
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
              goal
                ? "bg-brand-light text-brand"
                : "bg-surface-solid text-muted border border-border"
            }`}
          >
            {goal ? "Em preparação" : cert.category}
          </span>
        </div>
        <h3 className="text-lg font-bold leading-snug text-foreground">
          {cert.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted">{cert.issuer}</p>
        {cert.date && (
          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-brand">
            {cert.date}
          </p>
        )}
        {cert.url && (
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand">
            Ver credencial <ExternalLink className="h-4 w-4" />
          </div>
        )}
      </div>
    </motion.div>
  );

  return cert.url ? (
    <Link
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {Card}
    </Link>
  ) : (
    Card
  );
}
