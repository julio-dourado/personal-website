import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-solid/50 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-black text-foreground">
              Julio Cesar Almeida Dourado
            </p>
            <p className="mt-1 text-sm text-muted">
              Data Engineer | Databricks | AWS | Azure
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SocialLink href={siteConfig.github} icon={<Github className="h-5 w-5" />} label="GitHub" />
            <SocialLink href={siteConfig.linkedin} icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
            <SocialLink href={`mailto:${siteConfig.email}`} icon={<Mail className="h-5 w-5" />} label="E-mail" />
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8 text-center text-sm text-muted">
          <p>© {currentYear} Julio Cesar Almeida Dourado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full glass text-muted hover:border-brand/50 hover:text-brand hover:bg-brand-light transition-all"
    >
      {icon}
    </Link>
  );
}
