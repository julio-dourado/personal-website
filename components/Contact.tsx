"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, MapPin, MessageCircle } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { siteConfig } from "@/lib/data";

export function Contact() {
  return (
    <section id="contato" className="relative py-28 md:py-36 section-glow">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            Contato
          </p>
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Tem alguma ideia?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted text-lg leading-relaxed">
            Vamos construí-la juntos! Estou aberto a oportunidades,
            colaborações e trocas sobre engenharia de dados. Me chama no
            WhatsApp, LinkedIn ou envie um e-mail.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ y: -4 }}>
              <Link
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand/30 hover:bg-brand-hover transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -4 }}>
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-base font-bold text-foreground hover:border-brand/50 hover:text-brand transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -4 }}>
              <Link
                href={`mailto:${siteConfig.email}?subject=Vamos criar um projeto!&body=Olá, vim pelo seu website! Gostaria de conversar sobre novos projetos!`}
                className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-base font-bold text-foreground hover:border-brand/50 hover:text-brand transition-colors"
              >
                <Mail className="h-5 w-5" />
                E-mail
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -4 }}>
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-base font-bold text-foreground hover:border-brand/50 hover:text-brand transition-colors"
              >
                <Github className="h-5 w-5" />
                GitHub
              </Link>
            </motion.div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-muted">
            <Link
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-brand transition-colors"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </Link>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {siteConfig.location}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
