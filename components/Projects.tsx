"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Coins,
  Database,
  Workflow,
  Server,
  Globe,
  Bot,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";
import { projects } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  finops: <Coins className="h-7 w-7" />,
  lakehouse: <Database className="h-7 w-7" />,
  airflow: <Workflow className="h-7 w-7" />,
  api: <Server className="h-7 w-7" />,
  web: <Globe className="h-7 w-7" />,
  rpa: <Bot className="h-7 w-7" />,
};

export function Projects() {
  return (
    <section id="projetos" className="relative py-28 md:py-36 section-glow">
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <FadeIn className="text-center mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            Trabalhos
          </p>
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Projetos em Destaque
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted text-lg">
            Soluções de engenharia de dados e de software que desenvolvi na
            prática.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.12}
        >
          {projects.map((project) => (
            <StaggerItem key={project.title} className="h-full">
              <motion.article
                whileHover={{ y: -10 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl glass transition-all hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/10"
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-brand to-brand-hover text-white">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-xl" />
                  <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-black/10 blur-xl" />
                  <div className="relative transition-transform duration-300 group-hover:scale-110">
                    {iconMap[project.icon]}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-muted border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {(project.repoUrl || project.demoUrl) && (
                    <div className="mt-7 flex gap-3">
                      {project.repoUrl && (
                        <Link
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface-solid px-4 py-2.5 text-sm font-semibold text-foreground hover:border-brand/50 hover:text-brand transition-colors"
                        >
                          <Github className="h-4 w-4" /> Código
                        </Link>
                      )}
                      {project.demoUrl && (
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" /> Demo
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
