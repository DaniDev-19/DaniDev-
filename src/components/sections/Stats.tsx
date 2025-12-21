"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Star, BookOpen, Activity } from "lucide-react";
import { getGithubStats } from "@/actions/github";
import { useTranslations } from "next-intl";

export function Stats() {
  const t = useTranslations("Stats");
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    getGithubStats().then(setStats);
  }, []);

  if (!stats) return null;

  const items = [
    {
      label: t("commits"),
      value: stats.commits,
      icon: <Activity className="text-green-400" />,
    },
    {
      label: t("repos"),
      value: stats.repos,
      icon: <GitBranch className="text-blue-400" />,
    },
    {
      label: t("stars"),
      value: stats.stars,
      icon: <Star className="text-yellow-400" />,
    },
    {
      label: t("blog"),
      value: t("posts", { count: 3 }),
      icon: <BookOpen className="text-purple-400" />,
    },
  ];

  return (
    <section className="bg-background/50 backdrop-blur-md py-12 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="p-3 bg-primary/5 rounded-2xl mb-2">
                {item.icon}
              </div>
              <span className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                {item.value}
              </span>
              <span className="text-[10px] text-zinc-600 dark:text-zinc-400 font-black uppercase tracking-[0.2em]">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
