export const techCardItems = [
  {
    title: "NextJS",
    description: "React Framework",
    imageUrl: "/img/svg/nextjsDark.svg",
    bgColor: "bg-white/10",
  },
  {
    title: "Typescript",
    description: "JavaScript superset",
    imageUrl: "/img/svg/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
  },
  {
    title: "React",
    description: "JavaScript Library",
    imageUrl: "/img/svg/react.svg",
    bgColor: "bg-[#61DAFB]/20",
  },
  {
    title: "Tailwind CSS",
    description: "CSS Framework",
    imageUrl: "/img/svg/tailwind.svg",
    bgColor: "bg-[#0EA5E9]/20",
  },
  {
    title: "PostgreSQL",
    description: "OR Database",
    imageUrl: "/img/svg/postgresql.svg",
    bgColor: "bg-[#336791]/20",
  },
  {
    title: "Prisma",
    description: "ORM",
    imageUrl: "/img/svg/prisma.svg",
    bgColor: "bg-[#0C344B]/20",
  },
  {
    title: "NodeJS",
    description: "Backend Runtime",
    imageUrl: "/img/svg/node-js.svg",
    bgColor: "bg-[#689F63]/20",
  },
  {
    title: "Figma",
    description: "Design tool",
    imageUrl: "/img/svg/figma-logo.svg",
    bgColor: "bg-[#0ACF83]/20",
  },
];

export const portfolioProjects = [
  {
    id: "agencyspeedindex",
    heading: "Agency Speed Index",
    subheading: "A modern performance website",
    description: "A SaaS platform monitoring Core Web Vitals for digital agencies. Automated performance tracking using Google Lightouse API",
    imageUrl: "/img/projects/agencyspeedindex.png",
    status: "Live Beta",
    techStack: [
        "NextJS",
        "TypeScript",
        "Supabase",
        "Tailwind CSS"
    ],
    liveDemoUrl: "https://agencyspeedindex.com",
    githubUrl: ""
  },
  {
    id: "netflix-semantic-search",
    heading: "Netflix Semantic Search",
    subheading: "AI-powered search engine",
    description: "A semantic search engine for Netflix content using OpenAI embeddings and Pinecone vector database for enhanced search relevance.",
    status: "Offline",
    techStack: [
        "NextJS",
        "TypeScript",
        "OpenAI API",
        "Pinecone",
        "Tailwind CSS"
    ],
    liveDemoUrl: "",
    githubUrl: ""
  }
]
