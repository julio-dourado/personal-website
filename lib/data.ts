export const siteConfig = {
  name: "Julio Cesar Almeida Dourado",
  fullName: "Julio Cesar Almeida Dourado",
  role: "Engenheiro de Dados",
  headline: "Data Engineer | Databricks | Airflow | AWS | Azure",
  email: "juliodourado419@gmail.com",
  linkedin: "https://www.linkedin.com/in/juliodourado",
  github: "https://github.com/julio-dourado",
  whatsapp: "https://wa.me/5561991814759",
  portfolio: "https://juliodourado.com.br",
  domain: "https://juliodourado.com.br",
  cv: "/cv/Julio-Cesar-Almeida-Dourado.pdf",
  location: "Brasília, Distrito Federal, Brasil",
  summary:
    "Engenheiro de Dados com forte atuação em plataformas Cloud (AWS e ecossistema Databricks), especializado em arquiteturas Data Lakehouse, governança de dados e FinOps. Meu foco técnico transcende a criação de pipelines: atuo na construção de capacidades que garantem plataformas de dados eficientes, transparentes e financeiramente sustentáveis. Possuo ampla experiência no monitoramento de custos de nuvem, detecção de anomalias e desenvolvimento de métricas de observabilidade utilizando Python, SQL Avançado e ferramentas de visualização.",
  summaryShort:
    "Plataformas de dados eficientes, transparentes e financeiramente sustentáveis com Databricks, AWS e arquiteturas Lakehouse.",
};

export type Skill = {
  name: string;
  category: string;
  icon?: string;
};

export const skills: Skill[] = [
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
  { name: "Streamlit", category: "Engenharia de Software & DevOps", icon: "streamlit" },
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
    role: "Pesquisador / Desenvolvedor Full Stack",
    period: "set 2023 — mai 2024",
    location: "Brasília, DF",
    description:
      "Desenvolvimento de APIs REST com Python, FastAPI e PostgreSQL, implantação com Docker e criação de análises em Streamlit sobre o desempenho de modelos de IA. Atuação em time ágil (Scrum) com colaboração via GitLab.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "Streamlit", "Scrum"],
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
    institution: "Universidade de Brasília (UnB)",
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
      "Hoje foco em arquiteturas Lakehouse, governança de dados, Unity Catalog, Delta Lake e observabilidade de custos em nuvem (FinOps).",
    icon: "cloud",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  image?: string;
  icon: "finops" | "lakehouse" | "airflow" | "api" | "web" | "rpa";
};

export const projects: Project[] = [
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
