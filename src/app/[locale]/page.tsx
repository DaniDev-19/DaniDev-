import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { SocialDonation } from "@/components/sections/SocialDonation";
import { img } from "@/components/image";

// Static data for projects
const staticProjects = [
  {
    id: "1",
    title: "SIVEA System",
    description:
      "Sistema de Información para las operaciones de vuelo y estadisticas aeroportuarias en el aeropuerto Sst. Néstor Arias.",
    image: img.loginSivea,
    tags: [
      { tag: "Html" },
      { tag: "Css" },
      { tag: "JavaScript" },
      { tag: "php" },
      { tag: "Mysql" },
    ],
    github: "https://github.com/DaniDev-19/SIVEA-System",
    demo: "#",
    docs: "/projects/SIVEA",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    tags: [{ tag: "React" }, { tag: "Node.js" }, { tag: "MongoDB" }],
    github: "https://github.com",
    demo: "#",
  },
  {
    id: "3",
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool that helps create engaging blog posts, social media content, and marketing copy.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    tags: [{ tag: "OpenAI" }, { tag: "Python" }, { tag: "FastAPI" }],
    github: "https://github.com",
    demo: "#",
  },
];

// Static data for skills
const staticSkills: any[] = [
  // Frontend
  { id: "s1", name: "HTML", category: "frontend" },
  { id: "s2", name: "CSS", category: "frontend" },
  { id: "s3", name: "JavaScript", category: "frontend" },
  // Backend
  { id: "s4", name: "PHP", category: "backend" },
  { id: "s5", name: "C++", category: "backend" },
  { id: "s6", name: "Python", category: "backend" },
  // Frameworks
  { id: "s7", name: "React", category: "frameworks" },
  { id: "s8", name: "Tailwind", category: "frameworks" },
  { id: "s9", name: "NextJS", category: "frameworks" },
  { id: "s10", name: "NodeJS", category: "frameworks" },
  { id: "s11", name: "Laravel", category: "frameworks" },
  { id: "s12", name: "FastAPI", category: "frameworks" },
  { id: "s13", name: "Express", category: "frameworks" },
  // Database
  { id: "s13", name: "PostgreSQL", category: "database" },
  { id: "s14", name: "MySQL", category: "database" },
  { id: "s15", name: "MongoDB", category: "database" },
  { id: "s16", name: "Redis", category: "database" },
  { id: "s17", name: "SQLite", category: "database" },
  // ORMs
  { id: "s18", name: "Sequelize", category: "orm" },
  { id: "s19", name: "Eloquent", category: "orm" },
  { id: "s20", name: "SQLAlchemy", category: "orm" },
  { id: "s21", name: "Prisma", category: "orm" },
  // DevOps
  { id: "s22", name: "Docker", category: "devops" },
  { id: "s23", name: "CI/CD", category: "devops" },
  { id: "s24", name: "Railway", category: "devops" },
  { id: "s25", name: "Vercel", category: "devops" },
  { id: "s26", name: "Render", category: "devops" },
  { id: "s27", name: "Neon", category: "devops" },
  // Tools
  { id: "s28", name: "Git", category: "tools" },
  { id: "s29", name: "Figma", category: "tools" },
  { id: "s30", name: "Postman", category: "tools" },
  { id: "s31", name: "ThunderClient", category: "tools" },
  { id: "s32", name: "ESLint", category: "tools" },
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <About />
      <Skills skills={staticSkills} />
      <Projects projects={staticProjects} />
      <Journey />
      <Contact />
      <SocialDonation />
    </div>
  );
}
