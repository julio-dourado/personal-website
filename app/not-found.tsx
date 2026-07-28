import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center bg-background">
      <h1 className="text-8xl font-black text-brand">404</h1>
      <h2 className="mt-6 text-3xl font-bold text-foreground">
        Página não encontrada
      </h2>
      <p className="mt-3 max-w-md text-muted">
        O conteúdo que você procura não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-white hover:bg-brand-hover transition-colors"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
