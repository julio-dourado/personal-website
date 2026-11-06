export const siteConfig = {
  name: "Julio Cesar Almeida Dourado",
  fullName: "Julio Cesar Almeida Dourado",
  role: "Engenheiro de Software · IA & Dados",
  headline: "Software & AI Engineer | NLP | Hugging Face | Python | AWS",
  email: "juliodourado419@gmail.com",
  linkedin: "https://www.linkedin.com/in/juliodourado",
  github: "https://github.com/julio-dourado",
  whatsapp: "https://wa.me/5561991814759",
  portfolio: "https://juliodourado.com.br",
  domain: "https://juliodourado.com.br",
  cv: "/cv/Julio-Cesar-Almeida-Dourado.pdf",
  location: "Brasília, Distrito Federal, Brasil",
  summary:
    "Estudante de Engenharia de Software na UnB (FCTE). Construo o software ao redor de modelos de IA: APIs de inferência, coleta de feedback humano e observabilidade de modelos de linguagem. Comecei isso no AI.lab UnB, no Projeto Sabiá com o Tribunal Superior do Trabalho. Trago também a base de Engenharia de Dados na AWS (Spark, Airflow, Lakehouse) da Stefanini e da BrBPO, porque modelo bom depende de dado confiável. Publico modelos e código abertos no Hugging Face e no GitHub.",
  summaryShort:
    "Software para IA em produção: modelos de NLP, APIs de inferência, human-in-the-loop e os pipelines de dados que sustentam tudo isso.",
};

export type Skill = {
  name: string;
  category: string;
  icon?: string;
};

export const skills: Skill[] = [
  // IA & NLP
  { name: "PyTorch", category: "IA & NLP", icon: "pytorch" },
  { name: "Hugging Face", category: "IA & NLP", icon: "huggingface" },
  { name: "Transformers (BERT)", category: "IA & NLP" },
  { name: "scikit-learn", category: "IA & NLP", icon: "scikitlearn" },
  { name: "Streamlit", category: "IA & NLP", icon: "streamlit" },
  { name: "Monitoramento de modelos", category: "IA & NLP" },
  // Cloud & Big Data
  { name: "Databricks", category: "Cloud & Big Data", icon: "databricks" },
  { name: "Delta Lake", category: "Cloud & Big Data" },
  { name: "Unity Catalog", category: "Cloud & Big Data" },
  { name: "Apache Spark", category: "Cloud & Big Data", icon: "apachespark" },
  { name: "AWS S3", category: "Cloud & Big Data", icon: "amazons3" },
  { name: "AWS Glue", category: "Cloud & Big Data" },
  { name: "Amazon Redshift", category: "Cloud & Big Data", icon: "amazonredshift" },
  { name: "Amazon MWAA", category: "Cloud & Big Data" },
  { name: "Azure", category: "Cloud & Big Data", icon: "microsoftazure" },
  // Engenharia de Dados
  { name: "Python", category: "Engenharia de Dados", icon: "python" },
  { name: "SQL", category: "Engenharia de Dados" },
  { name: "Apache Airflow", category: "Engenharia de Dados", icon: "apacheairflow" },
  { name: "PostgreSQL", category: "Engenharia de Dados", icon: "postgresql" },
  { name: "MySQL", category: "Engenharia de Dados", icon: "mysql" },
  { name: "Pandas", category: "Engenharia de Dados", icon: "pandas" },
  { name: "Power BI", category: "Engenharia de Dados", icon: "powerbi" },
  // Engenharia de Software & DevOps
  { name: "TypeScript", category: "Engenharia de Software & DevOps", icon: "typescript" },
  { name: "React", category: "Engenharia de Software & DevOps", icon: "react" },
  { name: "React Native", category: "Engenharia de Software & DevOps", icon: "react" },
  { name: "Node.js", category: "Engenharia de Software & DevOps", icon: "nodedotjs" },
  { name: "FastAPI", category: "Engenharia de Software & DevOps", icon: "fastapi" },
  { name: "Docker", category: "Engenharia de Software & DevOps", icon: "docker" },
  { name: "Git", category: "Engenharia de Software & DevOps", icon: "git" },
  { name: "GitHub Actions", category: "Engenharia de Software & DevOps", icon: "githubactions" },
  { name: "pytest", category: "Engenharia de Software & DevOps", icon: "pytest" },
];

export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
  /** "done" = concluída, "goal" = próxima meta */
  status: "done" | "goal";
  category: "Dados & Cloud" | "Engenharia de Software" | "Fundamentos";
  featured?: boolean;
};

export const certifications: Certification[] = [
  {
    title: "Power BI",
    issuer: "Curso de Business Intelligence",
    status: "done",
    category: "Dados & Cloud",
    featured: true,
  },
  {
    title: "Desenvolvimento Back-end com Node.js",
    issuer: "Digital Innovation One",
    status: "done",
    category: "Engenharia de Software",
    featured: true,
  },
  {
    title: "Capacitação em Concepção de Software e Prototipagem",
    issuer: "Programa de capacitação",
    status: "done",
    category: "Engenharia de Software",
  },
  {
    title: "Lógica de Programação Essencial",
    issuer: "Digital Innovation One",
    status: "done",
    category: "Fundamentos",
  },
  {
    title: "Introdução à Lógica de Programação",
    issuer: "Digital Innovation One",
    status: "done",
    category: "Fundamentos",
  },
  // Próximas metas
  {
    title: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    status: "goal",
    category: "Dados & Cloud",
    featured: true,
  },
  {
    title: "AWS Certified Data Engineer – Associate",
    issuer: "Amazon Web Services",
    status: "goal",
    category: "Dados & Cloud",
    featured: true,
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    status: "goal",
    category: "Dados & Cloud",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    company: "Stefanini Group",
    role: "Engenheiro de Dados Pleno",
    period: "fev 2026 — mai 2026",
    location: "Projeto Sescoop/OCB",
    description:
      "Atuei na estabilização de uma infraestrutura AWS que exigia maior eficiência computacional. Realizei troubleshooting avançado, reescrevi lógicas de transformação complexas e orquestrei rotinas de alta disponibilidade com Amazon MWAA, integrando fluxos com mensageria cloud (SQS e SNS). O resultado foi uma operação de dados mais estável, com custos de nuvem reduzidos e relatórios operacionais entregues com velocidade e precisão.",
    tags: ["AWS", "MWAA", "Airflow", "SQS/SNS", "Python", "SQL"],
  },
  {
    company: "BrBPO",
    role: "Engenheiro de Dados",
    period: "jul 2024 — jan 2026",
    location: "Brasília, DF",
    description:
      "Desenvolvimento de pipelines de dados, otimização de consultas SQL e automações com RPA (Robotic Process Automation), garantindo fluxos de dados confiáveis para as áreas de negócio.",
    tags: ["Pipelines", "SQL", "RPA", "Python"],
  },
  {
    company: "BrBPO",
    role: "Analista de BI Pleno",
    period: "jul 2024 — dez 2024",
    location: "Brasília, DF",
    description:
      "Tratamento de grandes volumes de dados e construção de dashboards interativos em Power BI amplamente utilizados para embasar decisões estratégicas da companhia.",
    tags: ["Power BI", "SQL", "ETL", "Dashboards"],
  },
  {
    company: "AI.lab UnB",
    role: "Pesquisador Bolsista — Backend para NLP",
    period: "set 2023 — mai 2024",
    location: "Projeto Sabiá · Tribunal Superior do Trabalho",
    description:
      "Construí a base PostgreSQL e as APIs em FastAPI do backend que sustenta os modelos de NLP usados na análise de processos do TST (sistema Bem-te-vi), refatorando o banco para o novo módulo de AIRR. Implementei os endpoints de feedback de modelos, para os servidores avaliarem as predições, e painéis em Streamlit para acompanhar treinamentos e performance dos modelos de linguagem. Time ágil (Scrum), com Docker e GitLab.",
    tags: ["NLP", "Python", "FastAPI", "PostgreSQL", "Docker", "Streamlit"],
  },
  {
    company: "Migoc2",
    role: "Desenvolvedor Front-end",
    period: "mar 2023 — ago 2023",
    location: "Brasília, DF",
    description:
      "Desenvolvimento de aplicativos de alta qualidade com React Native e TypeScript, integração com back-end em Node.js e prototipagem de interfaces no Figma.",
    tags: ["React Native", "TypeScript", "Node.js", "Figma"],
  },
  {
    company: "ITRAC",
    role: "Pesquisador",
    period: "jan 2023 — jun 2023",
    location: "Brasília, DF",
    description:
      "Desenvolvimento de ferramenta interna em React e Java para o programa Startup GOV.BR, com documentação de engenharia de requisitos e um questionário gerador de PDFs com dicas de gestão. O programa beneficiou 26 startups.",
    tags: ["React", "Java", "Requisitos", "GovTech"],
  },
];

export const education = [
  {
    institution: "Universidade de Brasília (UnB) — FCTE",
    degree: "Bacharelado em Engenharia de Software",
    period: "2021 — 2027 (previsto)",
  },
];

export const journey = [
  {
    title: "Início na Tecnologia",
    description:
      "Comecei atuando com desenvolvimento Front-end e prototipagem, o que me deu uma base sólida em resolver problemas e entregar valor rápido para usuários.",
    icon: "code",
  },
  {
    title: "Dados e Business Intelligence",
    description:
      "Transitei para a área de dados como Analista de BI, trabalhando com grandes volumes de dados, dashboards interativos no Power BI e SQL avançado.",
    icon: "barChart",
  },
  {
    title: "Engenharia de Dados",
    description:
      "Aprofundei-me em Engenharia de Dados construindo pipelines, orquestrando rotinas com Airflow e trabalhando com infraestrutura AWS e Databricks.",
    icon: "database",
  },
  {
    title: "Lakehouse, Governança e FinOps",
    description:
      "Trabalhei com arquiteturas Lakehouse, governança de dados, Unity Catalog, Delta Lake e observabilidade de custos em nuvem (FinOps).",
    icon: "cloud",
  },
  {
    title: "IA em produção",
    description:
      "Hoje foco em levar modelos de IA para produção: fine-tuning de modelos de linguagem, APIs de inferência, feedback humano e monitoramento de drift, juntando o que aprendi no AI.lab com a base de dados.",
    icon: "brain",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  image?: string;
  icon: "finops" | "lakehouse" | "airflow" | "api" | "web" | "rpa" | "ai" | "model";
};

export const projects: Project[] = [
  {
    title: "Legal NLP Feedback Engine",
    description:
      "Classificador jurídico em produção com human-in-the-loop: registra cada predição, coleta a validação do revisor, mede acurácia online e latência e detecta drift (PSI) contra o perfil offline do modelo. As correções viram dataset para o próximo fine-tuning.",
    tags: ["FastAPI", "Streamlit", "Hugging Face", "Docker", "MLOps"],
    repoUrl: "https://github.com/julio-dourado/legal-nlp-feedback-engine",
    demoUrl: "https://legal-nlp-feedback-engine.streamlit.app",
    icon: "ai",
  },
  {
    title: "BERTimbau Legal Judgment PT-BR",
    description:
      "Fine-tuning do BERTimbau para prever o desfecho de recursos em 4.043 decisões do TJAL: F1-macro 0,68 e acurácia 74% no teste. O truncamento head+tail em 512 tokens rendeu +15 pontos de F1 sobre o baseline.",
    tags: ["PyTorch", "Transformers", "NLP", "Hugging Face"],
    demoUrl: "https://huggingface.co/juliodourado1/bertimbau-legal-judgment-ptbr",
    icon: "model",
  },
  {
    title: "Todo App",
    description:
      "Um dos meus primeiros projetos: lista de tarefas em React, feita quando eu estava começando a desenvolver para a web.",
    tags: ["React", "CSS"],
    repoUrl: "https://github.com/julio-dourado/todoReact",
    demoUrl: "https://github.com/julio-dourado/todoReact",
    icon: "web",
  },
  {
    title: "Remediário",
    description:
      "Aplicativo mobile para controle de medicamentos, desenvolvido em equipe na disciplina de Requisitos da UnB.",
    tags: ["React Native", "Local Storage"],
    repoUrl: "https://mdsreq-fga-unb.github.io/2023.1-Remediario/",
    demoUrl:
      "https://expo.dev/accounts/luanmq/projects/remediario/builds/0bf548bb-8e18-4635-88e9-d3e8d68b4c8d",
    icon: "web",
  },
  {
    title: "Vambora!",
    description:
      "Aplicativo de caronas universitárias feito em equipe na UnB, com autenticação e banco de dados em tempo real.",
    tags: ["React Native", "Firebase"],
    repoUrl: "https://github.com/fga-eps-mds/2022-2-Vambora",
    demoUrl: "https://github.com/fga-eps-mds/2022-2-Vambora/releases/tag/v1.0.0",
    icon: "web",
  },
  {
    title: "Observabilidade FinOps em Nuvem",
    description:
      "Métricas de observabilidade de custos em nuvem com detecção de anomalias e monitoramento contínuo, usando Python, SQL avançado e ferramentas de visualização para manter a plataforma financeiramente sustentável.",
    tags: ["FinOps", "Python", "SQL", "AWS"],
    icon: "finops",
  },
  {
    title: "Plataforma Data Lakehouse",
    description:
      "Arquitetura Lakehouse com camadas bronze, silver e gold no Databricks, usando Delta Lake e Unity Catalog para governança, catalogação e qualidade dos dados.",
    tags: ["Databricks", "Delta Lake", "Unity Catalog", "Spark"],
    icon: "lakehouse",
  },
  {
    title: "Orquestração de Pipelines com Airflow",
    description:
      "Rotinas de alta disponibilidade orquestradas com Apache Airflow e Amazon MWAA, integradas a mensageria cloud (SQS/SNS) para processamento resiliente de dados.",
    tags: ["Airflow", "MWAA", "SQS", "SNS", "AWS"],
    icon: "airflow",
  },
  {
    title: "API REST para Análise de Modelos de IA",
    description:
      "APIs RESTful com FastAPI e PostgreSQL, implantação com Docker e dashboards em Streamlit para análise detalhada do desempenho de modelos de IA no AI.lab da UnB.",
    tags: ["FastAPI", "PostgreSQL", "Docker", "Streamlit"],
    icon: "api",
  },
  {
    title: "Automação de Dados com RPA",
    description:
      "Automações de rotinas operacionais de dados com RPA, eliminando trabalho manual repetitivo e aumentando a confiabilidade dos fluxos de informação.",
    tags: ["RPA", "Python", "Automação"],
    icon: "rpa",
  },
  {
    title: "Portfólio Pessoal com Blog",
    description:
      "Este site: evolução do meu primeiro portfólio (HTML, CSS e JS puros) para Next.js, com blog em MDX, fundo interativo em Three.js e exportação estática para o GitHub Pages.",
    tags: ["Next.js", "Three.js", "Tailwind", "MDX", "TypeScript"],
    repoUrl: "https://github.com/julio-dourado/personal-website",
    demoUrl: "https://juliodourado.com.br/",
    icon: "web",
  },
];

export const socialLinks = [
  { name: "LinkedIn", url: siteConfig.linkedin, icon: "linkedin" },
  { name: "GitHub", url: siteConfig.github, icon: "github" },
  { name: "E-mail", url: `mailto:${siteConfig.email}`, icon: "mail" },
];
