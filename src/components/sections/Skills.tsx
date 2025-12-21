"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
import {
  Database,
  Layout,
  Rocket,
  ShieldCheck,
  Server,
  Globe,
  Wrench,
} from "lucide-react";
import { useTranslations } from "next-intl";

// Interface for the Payload Doc
export interface SkillDoc {
  id: string;
  name: string;
  category: "frontend" | "backend" | "devops" | "tools";
  icon?: string;
}

interface SkillsProps {
  skills: SkillDoc[];
}

export function Skills({ skills = [] }: SkillsProps) {
  const t = useTranslations("Skills");

  // Organize skills by category
  interface Skill {
    id: string;
    name: string;
    category: string;
  }

  interface SkillCategory {
    id: "frontend" | "backend" | "devops" | "tools";
    name: string;
    icon: React.ReactNode;
    skills: Skill[];
  }

  const categorizedSkills: Record<string, SkillCategory> = {
    frontend: {
      id: "frontend",
      name: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      skills: [],
    },
    backend: {
      id: "backend",
      name: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [],
    },
    devops: {
      id: "devops",
      name: "DevOps",
      icon: <Globe className="w-6 h-6" />,
      skills: [],
    },
    tools: {
      id: "tools",
      name: "Herramientas",
      icon: <Wrench className="w-6 h-6" />,
      skills: [],
    },
  };

  // Populate items
  if (skills && skills.length > 0) {
    skills.forEach((skill) => {
      const cat = skill.category as keyof typeof categorizedSkills;
      if (categorizedSkills[cat]) {
        categorizedSkills[cat].skills.push(skill);
      }
    });
  } else {
    // Fallback for demo if no data
    categorizedSkills.frontend.skills = [
      { id: "react", name: "React", category: "frontend" },
      { id: "nextjs", name: "Next.js", category: "frontend" },
      { id: "tailwind", name: "Tailwind CSS", category: "frontend" },
      { id: "typescript", name: "TypeScript", category: "frontend" },
    ];
    categorizedSkills.backend.skills = [
      { id: "nodejs", name: "Node.js", category: "backend" },
      { id: "bun", name: "Bun", category: "backend" },
      { id: "payloadcms", name: "Payload CMS", category: "backend" },
      { id: "postgresql", name: "PostgreSQL", category: "backend" },
    ];
    categorizedSkills.devops.skills = [
      { id: "docker", name: "Docker", category: "devops" },
      { id: "aws", name: "AWS", category: "devops" },
      { id: "cicd", name: "CI/CD", category: "devops" },
      { id: "vercel", name: "Vercel", category: "devops" },
    ];
    categorizedSkills.tools.skills = [
      { id: "git", name: "Git", category: "tools" },
      { id: "figma", name: "Figma", category: "tools" },
      { id: "prisma", name: "Prisma", category: "tools" },
      { id: "eslint", name: "ESLint", category: "tools" },
    ];
  }

  const displaySkills = Object.values(categorizedSkills);

  const getCategoryIcon = (
    categoryId: "frontend" | "backend" | "devops" | "tools"
  ) => {
    return categorizedSkills[categoryId].icon;
  };

  return (
    <section
      id="skills"
      className="relative bg-background pt-24 pb-80 px-4 md:px-6 overflow-hidden transition-colors duration-300"
    >
      {/* Background glow and Floating Icons */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <FloatingIcons />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t("title")}
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displaySkills.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/50 dark:bg-black/40 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-3xl p-6 hover:border-blue-500/30 transition-all group shadow-lg dark:shadow-none"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  {getCategoryIcon(category.id)}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {t(`categories.${category.id}`)}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill.id} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-zinc-600 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
