import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { rehypePrettyCode } from "rehype-pretty-code";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Julio Cesar Almeida Dourado`,
    description: post.summary,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="relative min-h-screen bg-background py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,54,33,0.05),_transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-4">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brand transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao blog
          </Link>

          <header className="mb-14">
            <div className="mb-6 flex flex-wrap items-center gap-5 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-xl text-muted leading-relaxed">
              {post.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-light px-4 py-1.5 text-xs font-semibold text-muted border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="prose prose-lg">
            <MDXRemote
              source={post.content}
              options={{
                parseFrontmatter: false,
                mdxOptions: {
                  rehypePlugins: [
                    [
                      rehypePrettyCode,
                      {
                        theme: "github-dark",
                      },
                    ],
                  ],
                },
              }}
            />
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
