"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export function Journey() {
  const t = useTranslations("Journey");

  // Get events from translations
  const events = t.raw("events") as Array<{
    title: string;
    company: string;
    description: string;
  }>;

  // Years and colors are still static (or could be moved to JSON if needed)
  const eventMetadata = [
    {
      year: "2024 - Present",
      icon: <Briefcase size={20} />,
      color: "bg-blue-500",
    },
    {
      year: "2022 - 2024",
      icon: <Briefcase size={20} />,
      color: "bg-purple-500",
    },
    { year: "2020 - 2022", icon: <Star size={20} />, color: "bg-pink-500" },
    {
      year: "2016 - 2020",
      icon: <GraduationCap size={20} />,
      color: "bg-green-500",
    },
  ];

  return (
    <section id="journey" className="bg-background py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-foreground md:text-5xl"
            dangerouslySetInnerHTML={{ __html: t.raw("title") }}
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="mx-auto mt-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-blue-600 via-purple-600 to-transparent md:left-1/2 md:-ml-[1px]" />

          <div className="space-y-16">
            {events.map((event, index) => {
              const meta = eventMetadata[index] || eventMetadata[0];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Connection Point */}
                  <div className="absolute left-4 top-2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border-2 border-black/10 dark:border-white/10 md:left-1/2 z-20 shadow-sm">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${meta.color} shadow-[0_0_10px_currentColor] animate-pulse`}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}
                  >
                    <div className="rounded-3xl p-8 bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:shadow-xl dark:hover:bg-white/10 transition-all group overflow-hidden relative shadow-sm">
                      <div className="absolute top-0 right-0 p-4 text-zinc-200 dark:text-white/5 opacity-50 dark:opacity-5 group-hover:opacity-10 dark:group-hover:opacity-10 transition-opacity">
                        {meta.icon}
                      </div>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-700 dark:text-blue-400 border border-blue-500/20">
                          {meta.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1 tracking-tight">
                        {event.title}
                      </h3>
                      <p className="mb-4 text-sm font-semibold text-purple-700 dark:text-purple-400 tracking-wide uppercase">
                        {event.company}
                      </p>
                      <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed border-t border-black/10 dark:border-white/5 pt-4">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
