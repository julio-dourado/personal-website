"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";
import { Post } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

interface BlogPreviewClientProps {
  posts: Post[];
}

export function BlogPreviewClient({ posts }: BlogPreviewClientProps) {
  return (
    <section id="blog" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,54,33,0.05),_transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <FadeIn className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
              Conteúdo
            </p>
            <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Blog
            </h2>
            <p className="mt-4 max-w-xl text-muted text-lg">
              Conteúdo técnico sobre engenharia de dados, cloud e boas práticas.
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-hover transition-colors"
          >
            Ver todos{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>

        {posts.length === 0 ? (
          <FadeIn>
            <div className="rounded-3xl border border-dashed border-border bg-surface-solid p-16 text-center">
              <p className="text-muted">
                Em breve publicações sobre Databricks, AWS e Engenharia de Dados.
              </p>
            </div>
          </FadeIn>
        ) : (
          <StaggerContainer
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            stagger={0.1}
          >
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="group flex h-full flex-col rounded-3xl glass p-7 transition-all hover:border-brand/30 hover:bg-brand-light"
                >
                  <div className="mb-5 flex items-center gap-2 text-sm text-muted">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                    <span className="mx-1">•</span>
                    {post.readingTime}
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-brand transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-4 flex-1 text-muted line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-muted border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
