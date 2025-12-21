"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, FileText } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Define interface for Project based on Payload collection
export interface Project {
  id: string;
  title: string;
  description: string;
  image: any; // payload media object
  tags?: { tag: string; id?: string }[];
  github?: string;
  demo?: string;
  docs?: string; // Link to project documentation
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects = [] }: ProjectsProps) {
  const t = useTranslations("Projects");

  // Fallback projects if CMS is empty
  const displayProjects =
    projects.length > 0
      ? projects
      : [
          {
            id: "fallback-1",
            title: t("fallbackTitle"),
            description: t("fallbackDesc"),
            image:
              "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=2070&auto=format&fit=crop",
            tags: [{ tag: "Payload" }, { tag: "Next.js" }],
            github: "#",
            demo: "#",
          },
          {
            id: "fallback-2",
            title: t("fallbackTitle"),
            description: t("fallbackDesc"),
            image:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            tags: [{ tag: "React" }, { tag: "Bun" }],
            github: "#",
            demo: "#",
          },
        ];

  // Helper to get image URL
  const getImageUrl = (image: any) => {
    if (typeof image === "string") return image;
    return image?.sizes?.card?.url || image?.url || "";
  };

  const getAlt = (image: any) => {
    if (typeof image === "string") return t("imageAlt");
    return image?.alt || t("imageAlt");
  };

  return (
    <section
      id="projects"
      className="bg-background py-24 px-4 md:px-6 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-foreground md:text-6xl tracking-tight"
            dangerouslySetInnerHTML={{ __html: t.raw("title") }}
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            className="mx-auto mt-6 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          />
        </div>

        <div className="relative pt-10">
          {/* Swiper Container */}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="pb-20 !overflow-visible"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1200: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            {displayProjects.map((project, index) => (
              <SwiperSlide key={project.id || index} className="max-w-[450px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-[2.5rem] p-px bg-gradient-to-b from-white/10 to-transparent overflow-hidden h-full shadow-2xl"
                >
                  <div className="glass-card relative z-10 h-full rounded-[2.5rem] bg-white dark:bg-zinc-950/50 backdrop-blur-md border border-neutral-200 dark:border-white/10 overflow-hidden flex flex-col shadow-xl">
                    {/* Image wrapper */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={getImageUrl(project.image)}
                        alt={getAlt(project.image)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-115"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Top badges */}
                      <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                        {project.tags?.slice(0, 2).map((tagItem, idx) => (
                          <Badge
                            key={idx}
                            className="bg-black/80 dark:bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1"
                          >
                            {tagItem.tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed mb-8 font-medium line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex gap-2 mt-auto">
                        {project.github && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex-1 h-9 border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 rounded-xl text-xs md:text-sm font-bold text-zinc-700 dark:text-white"
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-3.5 w-3.5" />{" "}
                              {t("viewCode")}
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button
                            size="sm"
                            className="flex-1 h-9 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-all rounded-xl text-xs md:text-sm font-bold shadow-lg shadow-blue-600/20 text-white border-0"
                            asChild
                          >
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-3.5 w-3.5" />{" "}
                              {t("viewDemo")}
                            </a>
                          </Button>
                        )}
                        {project.docs && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 h-9 border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 rounded-xl text-xs md:text-sm font-bold"
                            asChild
                          >
                            <a
                              href={project.docs}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FileText className="mr-2 h-3.5 w-3.5" /> Docs
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Neon border effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-1" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Style helper */}
          <style jsx global>{`
            .swiper-pagination-bullet {
              background: currentColor !important;
              opacity: 0.3 !important;
            }
            .swiper-pagination-bullet-active {
              background: #3b82f6 !important;
              opacity: 1 !important;
              width: 24px !important;
              border-radius: 4px !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
