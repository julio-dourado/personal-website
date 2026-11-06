import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://juliodourado.com.br"),
  alternates: {
    canonical: "/",
  },
  title: "Julio Cesar Almeida Dourado | Software & AI Engineer",
  description:
    "Portfólio de Julio Cesar Almeida Dourado, Engenheiro de Software focado em IA: modelos de NLP, Hugging Face, APIs de inferência, MLOps e pipelines de dados na AWS.",
  keywords: [
    "AI Engineer",
    "Engenharia de Software",
    "NLP",
    "Hugging Face",
    "MLOps",
    "Engenheiro de Dados",
    "Databricks",
    "AWS",
    "Azure",
    "Airflow",
    "Python",
    "SQL",
    "Lakehouse",
  ],
  authors: [{ name: "Julio Cesar Almeida Dourado" }],
  openGraph: {
    title: "Julio Cesar Almeida Dourado | Software & AI Engineer",
    description:
      "Engenheiro de Software focado em IA: NLP, Hugging Face, MLOps e pipelines de dados na AWS.",
    url: "https://juliodourado.com.br",
    siteName: "Julio Cesar Almeida Dourado",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Cesar Almeida Dourado | Software & AI Engineer",
    description:
      "Engenheiro de Software focado em IA: NLP, Hugging Face, MLOps e pipelines de dados na AWS.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Julio Cesar Almeida Dourado",
              jobTitle: "Engenheiro de Software (IA & Dados)",
              url: "https://juliodourado.com.br",
              email: "mailto:juliodourado419@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brasília",
                addressRegion: "DF",
                addressCountry: "BR",
              },
              knowsAbout: [
                "Inteligência Artificial",
                "Processamento de Linguagem Natural",
                "Hugging Face",
                "MLOps",
                "Engenharia de Dados",
                "Databricks",
                "AWS",
                "Azure",
                "Airflow",
                "Python",
                "SQL",
                "Data Lakehouse",
              ],
              sameAs: [
                "https://www.linkedin.com/in/juliodourado",
                "https://github.com/julio-dourado",
                "https://huggingface.co/juliodourado1",
              ],
            }),
          }}
        />
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
