"use client";

import { motion } from "framer-motion";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
import {
  Database,
  Layout,
  Server,
  Globe,
  Wrench,
  Cpu,
  Layers,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Interface for the Payload Doc
export interface SkillDoc {
  id: string;
  name: string;
  category:
    | "frontend"
    | "backend"
    | "frameworks"
    | "database"
    | "orm"
    | "devops"
    | "tools";
  icon?: string;
}

interface SkillsProps {
  skills: SkillDoc[];
}

export function Skills({ skills = [] }: SkillsProps) {
  const t = useTranslations("Skills");

  interface Skill {
    id: string;
    name: string;
    category: string;
  }

  interface SkillCategory {
    id: string;
    name: string;
    icon: React.ReactNode;
    skills: Skill[];
  }

  const categorizedSkills: Record<string, SkillCategory> = {
    frontend: {
      id: "frontend",
      name: "Frontend",
      icon: <Layout className="w-5 h-5" />,
      skills: [],
    },
    backend: {
      id: "backend",
      name: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: [],
    },
    frameworks: {
      id: "frameworks",
      name: "Frameworks",
      icon: <Cpu className="w-5 h-5" />,
      skills: [],
    },
    database: {
      id: "database",
      name: "Bases de Datos",
      icon: <Database className="w-5 h-5" />,
      skills: [],
    },
    orm: {
      id: "orm",
      name: "ORMs",
      icon: <Layers className="w-5 h-5" />,
      skills: [],
    },
    devops: {
      id: "devops",
      name: "DevOps",
      icon: <Globe className="w-5 h-5" />,
      skills: [],
    },
    tools: {
      id: "tools",
      name: "Herramientas",
      icon: <Wrench className="w-5 h-5" />,
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
  }

  const displaySkills = Object.values(categorizedSkills).filter(
    (cat) => cat.skills.length > 0
  );

  return (
    <section
      id="skills"
      className="relative bg-background pt-16 pb-96 px-4 md:px-6 overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[200px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="absolute inset-x-0 bottom-0 h-[500px] z-0 pointer-events-none opacity-25">
        <FloatingIcons />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t("title")}
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
          </h2>
        </motion.div>

        <div className="skills-carousel-container relative mt-8">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={25}
            slidesPerView={1}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-32 !px-12"
          >
            {displaySkills.map((category) => (
              <SwiperSlide key={category.id} className="!h-auto flex">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900/50 dark:bg-black/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-blue-500/30 transition-all group shadow-2xl h-full min-h-[280px] w-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 transition-colors shadow-inner">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {t(`categories.${category.id}`)}
                    </h3>
                  </div>

                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3.5 text-left content-start items-start flex-grow">
                    {category.skills.map((skill) => (
                      <li key={skill.id} className="flex items-center gap-2.5">
                        <div className="min-w-[6px] h-1.5 w-1.5 rounded-full bg-blue-500/60 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                        <span className="text-zinc-400 dark:text-zinc-300 text-sm font-medium group-hover:text-blue-400 transition-colors truncate">
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .swiper-button-next,
            .swiper-button-prev {
              color: #3b82f6 !important;
              transform: scale(0.6);
            }
            .swiper-pagination-bullet {
              background: #3b82f6 !important;
              opacity: 0.4;
              width: 10px;
              height: 10px;
              margin: 0 6px !important;
            }
            .swiper-pagination-bullet-active {
              opacity: 1;
              width: 28px;
              border-radius: 6px;
            }
            .swiper-pagination {
              bottom: -40px !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
