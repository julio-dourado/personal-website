import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Julio Cesar Almeida Dourado",
  description:
    "Artigos sobre Engenharia de Dados, Databricks, AWS, Azure, Airflow, Python e boas práticas de dados.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="relative min-h-screen bg-background py-28 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,54,33,0.05),_transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <FadeIn>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brand transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>

          <h1 className="text-5xl font-black tracking-tight text-foreground">
            Blog
          </h1>
          <p className="mt-5 max-w-2xl text-muted text-lg leading-relaxed">
            Conteúdo técnico sobre engenharia de dados, cloud e boas práticas.
          </p>
        </FadeIn>

        <div className="mt-16 space-y-8">
          {posts.length === 0 ? (
            <FadeIn>
              <div className="rounded-3xl border border-dashed border-border bg-surface-solid p-16 text-center">
                <p className="text-muted">
                  Nenhum post publicado ainda. Volte em breve!
                </p>
              </div>
            </FadeIn>
          ) : (
            <StaggerContainer stagger={0.1}>
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <article className="group rounded-3xl glass p-8 transition-all hover:-translate-y-1 hover:border-brand/30 hover:bg-brand-light">
                    <div className="mb-4 flex items-center gap-2 text-sm text-muted">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.date)}
                      <span className="mx-1">•</span>
                      {post.readingTime}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground group-hover:text-brand transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="mt-4 text-muted leading-relaxed">
                      {post.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-muted border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </div>
    </section>
  );
}
