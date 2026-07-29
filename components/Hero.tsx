"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(2rem,9vw,2.5rem)] leading-tight font-black tracking-tight text-foreground sm:text-7xl md:text-8xl"
        >
          Julio <span className="text-gradient-brand">Dourado</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-muted sm:text-xl leading-relaxed"
        >
          Engenheiro de Dados: construo plataformas eficientes e
          sustentáveis com{" "}
          <span className="text-foreground font-medium">Databricks</span>,{" "}
          <span className="text-foreground font-medium">AWS</span>,{" "}
          <span className="text-foreground font-medium">Azure</span>,{" "}
          <span className="text-foreground font-medium">Airflow</span> e{" "}
          <span className="text-foreground font-medium">Python</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 hover:bg-brand-hover hover:shadow-brand/50 hover:-translate-y-1 transition-all"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Link>
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-bold text-foreground hover:border-brand/50 hover:text-brand hover:-translate-y-1 transition-all"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-bold text-foreground hover:border-brand/50 hover:text-brand hover:-translate-y-1 transition-all"
          >
            <Mail className="h-4 w-4" />
            E-mail
          </Link>
          <a
            href={siteConfig.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-bold text-foreground hover:border-brand/50 hover:text-brand hover:-translate-y-1 transition-all"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <Link
          href="#sobre"
          className="flex flex-col items-center gap-2 text-muted hover:text-brand transition-colors"
          aria-label="Rolar para baixo"
        >
          <span className="text-xs uppercase tracking-widest">Explorar</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
