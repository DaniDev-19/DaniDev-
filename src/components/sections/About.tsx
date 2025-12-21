"use client";

import { motion } from "framer-motion";
import { User, Code2, Coffee, Heart } from "lucide-react";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="relative bg-background py-24 px-4 md:px-6 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Stats/Info */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2
                  className="text-4xl md:text-6xl font-black text-foreground mb-8 leading-tight tracking-tighter"
                  dangerouslySetInnerHTML={{ __html: t.raw("title") }}
                />
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {t("description")}
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: t("stats.experience"),
                    value: t("stats.exp_value"),
                    icon: <User className="text-blue-400" />,
                  },
                  {
                    label: t("stats.projects"),
                    value: t("stats.projects_value"),
                    icon: <Code2 className="text-purple-400" />,
                  },
                  {
                    label: t("stats.coffee"),
                    value: t("stats.coffee_value"),
                    icon: <Coffee className="text-yellow-400" />,
                  },
                  {
                    label: t("stats.ui"),
                    value: t("stats.ui_value"),
                    icon: <Heart className="text-pink-400" />,
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl flex flex-col gap-2 group hover:scale-105 transition-all bg-white dark:bg-white/[0.05] border border-black/5 dark:border-white/5 shadow-lg dark:shadow-none"
                  >
                    <div className="mb-2 transition-transform group-hover:scale-110 group-hover:rotate-3">
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-zinc-600 dark:text-zinc-400 uppercase font-black tracking-[0.2em]">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Bio / Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-950/50 backdrop-blur-2xl shadow-2xl dark:shadow-none">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform">
                  <User size={150} className="text-foreground" />
                </div>

                <div className="space-y-8 relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-500">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    {t("philosophy.title")}
                  </h3>
                  <div className="space-y-6 text-zinc-600 dark:text-gray-400 leading-relaxed text-lg">
                    <p>{t("philosophy.p1")}</p>
                    <p>{t("philosophy.p2")}</p>
                    <div className="pt-8 flex gap-8 border-t border-black/10 dark:border-white/5">
                      <div className="flex flex-col gap-1">
                        <span className="text-zinc-900 dark:text-white font-black text-sm uppercase tracking-widest">
                          {t("philosophy.location_label")}
                        </span>
                        <span className="text-zinc-600 dark:text-gray-400">
                          {t("philosophy.location_value")}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-zinc-900 dark:text-white font-black text-sm uppercase tracking-widest">
                          {t("philosophy.based_label")}
                        </span>
                        <span className="text-zinc-600 dark:text-gray-400">
                          {t("philosophy.based_value")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
