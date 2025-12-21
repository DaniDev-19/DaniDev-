import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { Services } from "@/components/sections/Services";
import { SocialDonation } from "@/components/sections/SocialDonation";

// Static data for projects
const staticProjects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js, featuring real-time inventory management and secure payment processing.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2070&auto=format&fit=crop",
    tags: [{ tag: "Next.js" }, { tag: "TypeScript" }, { tag: "Stripe" }],
    github: "https://github.com",
    demo: "https://demo.com",
    docs: "/projects/ecommerce-platform-docs",
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
    demo: "https://demo.com",
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
    demo: "https://demo.com",
  },
];

// Static data for skills
const staticSkills = [
  { id: "1", name: "React", category: "frontend" as const, level: 90 },
  { id: "2", name: "Next.js", category: "frontend" as const, level: 95 },
  { id: "3", name: "TypeScript", category: "frontend" as const, level: 85 },
  { id: "4", name: "Tailwind CSS", category: "frontend" as const, level: 90 },
  { id: "5", name: "Node.js", category: "backend" as const, level: 80 },
  { id: "6", name: "Python", category: "backend" as const, level: 75 },
  { id: "7", name: "PostgreSQL", category: "backend" as const, level: 70 },
  { id: "8", name: "MongoDB", category: "backend" as const, level: 75 },
  { id: "9", name: "Docker", category: "devops" as const, level: 70 },
  { id: "10", name: "Git", category: "tools" as const, level: 85 },
];

// Static data for blog posts
const staticPosts = [
  {
    id: "1",
    title: "Building Modern Web Applications with Next.js 15",
    excerpt:
      "Explore the latest features in Next.js 15 and how they can improve your development workflow.",
    slug: "nextjs-15-features",
    publishedDate: "2024-12-15",
    mainImage: {
      url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    },
    tags: [{ tag: "Next.js" }, { tag: "React" }],
  },
  {
    id: "2",
    title: "The Future of Web Development",
    excerpt:
      "Discover emerging trends and technologies that are shaping the future of web development.",
    slug: "future-of-web-dev",
    publishedDate: "2024-12-10",
    mainImage: {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
    },
    tags: [{ tag: "Web Dev" }, { tag: "Trends" }],
  },
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
      <Services />
      <Journey />
      <BlogTeaser posts={staticPosts} />
      <Contact />
      <SocialDonation />
    </div>
  );
}
