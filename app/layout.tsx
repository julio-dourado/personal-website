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
  title: "Julio Cesar Almeida Dourado | Data Engineer",
  description:
    "Portfólio de Julio Cesar Almeida Dourado, Engenheiro de Dados especializado em Databricks, AWS, Azure, Airflow, Python e arquiteturas Data Lakehouse.",
  keywords: [
    "Engenheiro de Dados",
    "Data Engineer",
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
    title: "Julio Cesar Almeida Dourado | Data Engineer",
    description:
      "Engenheiro de Dados especializado em Databricks, AWS, Azure, Airflow e arquiteturas Lakehouse.",
    url: "https://juliodourado.com.br",
    siteName: "Julio Cesar Almeida Dourado",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Cesar Almeida Dourado | Data Engineer",
    description:
      "Engenheiro de Dados especializado em Databricks, AWS, Azure, Airflow e arquiteturas Lakehouse.",
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
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
