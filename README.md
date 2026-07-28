# Portfólio + Blog — Julio Cesar Almeida Dourado

Site pessoal premium construído com **Next.js 16**, **TypeScript**, **Tailwind CSS**, **Three.js** e **Framer Motion**, voltado para Engenharia de Dados, Engenharia de Software e certificações.

Esta branch (`v2-nextjs`) é a evolução do meu primeiro portfólio — que era HTML, CSS e JS puros e continua na branch `main` — misturando a autenticidade do original com uma stack moderna.

## Seções

- **Hero** — fundo espacial interativo em Three.js (constelação de partículas com parallax de mouse)
- **Sobre** — resumo profissional + objeto 3D animado em Three.js (`AboutModel`)
- **Experiência** — timeline profissional completa (Stefanini, BrBPO, AI.lab UnB, etc.) + formação acadêmica
- **Skills** — stack técnica organizada por categoria com ícones
- **Certificações** — certificações conquistadas + "próximas metas" (roadmap Databricks/AWS)
- **Jornada** — marcos da trajetória na área de dados
- **Projetos** — soluções de engenharia de dados e software
- **Blog** — posts em MDX com syntax highlighting
- **Contato** — links diretos

## Stack

- [Next.js](https://nextjs.org/) — App Router, exportação estática
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Three.js](https://threejs.org/) + React Three Fiber — fundo espacial no hero e modelo 3D no Sobre
- [Framer Motion](https://www.framer.com/motion/) — animações premium
- [MDX](https://mdxjs.com/) — posts em `content/posts/`
- [Simple Icons](https://simpleicons.org/) — ícones de tecnologias
- [Lucide React](https://lucide.dev/) — ícones de UI

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Vídeo de fundo no hero (opcional)

O site já vem com um fundo espacial procedural em Three.js. Se quiser adicionar um vídeo de universo/nebulosa por cima:

1. Baixe um vídeo MP4 gratuito (Pexels, Pixabay, Coverr).
2. Coloque o arquivo em `public/videos/space-hero.mp4`.
3. (Opcional) Adicione um poster em `public/videos/space-hero-poster.jpg`.
4. O componente `HeroBackground.tsx` detecta automaticamente o vídeo e o usa no lugar do Three.js.

Recomendado: vídeo curto em loop, otimizado para web (H.264, até ~5 MB).

## Como publicar um post no blog

1. Crie um arquivo `.mdx` dentro de `content/posts/`.
2. Use o frontmatter no topo do arquivo:

```mdx
---
title: "Título do post"
date: "2026-07-11"
summary: "Resumo curto do post"
tags: ["databricks", "aws"]
---

Conteúdo do post aqui...
```

3. Faça commit e push. O GitHub Actions faz o deploy automaticamente.

## Como atualizar dados pessoais

Edite o arquivo `lib/data.ts` para alterar nome, cargo, resumo, skills, experiências, certificações (incluindo metas), projetos, formação e links sociais.

Para marcar uma certificação como conquistada, mude `status: "goal"` para `status: "done"` e adicione `date` e `url` da credencial.

## Build de produção

```bash
npm run build
```

O site é publicado em `https://juliodourado.com.br/` pelo workflow `.github/workflows/deploy.yml`, que roda a cada push nesta branch.

Configuração única necessária no repositório:

1. Vá em **Settings > Pages**.
2. Em **Build and deployment > Source**, selecione **GitHub Actions**.
3. Em **Custom domain**, digite `juliodourado.com.br` e salve.
4. Marque **Enforce HTTPS** após a verificação do domínio.

O `next.config.ts` está sem `basePath` para servir na raiz do domínio próprio, e o `public/CNAME` garante que o GitHub Pages reconheça o domínio no artefato do workflow.

## DNS no Registro.br

Para apontar `juliodourado.com.br` e `www.juliodourado.com.br` para o GitHub Pages:

- **A @** → `185.199.108.153`
- **A @** → `185.199.109.153`
- **A @** → `185.199.110.153`
- **A @** → `185.199.111.153`
- **CNAME www** → `julio-dourado.github.io.`

(Se o Registro.br não aceitar vários registros A para o mesmo @, coloque apenas o primeiro: `185.199.108.153`.)

---

Desenvolvido por Julio Cesar Almeida Dourado.
