"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 px-4 md:px-6">
      {/* Background animated elements */}
      <div className="absolute inset-0 z-0 opacity-50 dark:opacity-100">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold mb-8 uppercase tracking-widest backdrop-blur-md shadow-lg shadow-blue-500/5"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />
              <span>{t("badge")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9]"
              dangerouslySetInnerHTML={{ __html: t.raw("title") }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Button
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-blue-600/20"
              >
                {t("cta_work")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-foreground font-medium"
              >
                {t("cta_contact")}
              </Button>
            </motion.div>
          </div>

          {/* Image/Blob Area */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto flex h-[350px] w-[350px] md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[550px] items-center justify-center"
            >
              <div className="absolute inset-0 animate-float">
                <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl" />
                <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-full border-2 border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-2xl flex items-center justify-center group transform transition-transform hover:scale-105 duration-500">
                  <div className="relative z-10 text-center p-8">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      DaniDev
                    </div>
                    <div className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
                      Backend Developer
                    </div>
                    <div className="text-xs md:text-sm font-medium text-gray-400 italic bg-white/10 px-4 py-1 rounded-full inline-block backdrop-blur-sm border border-white/5">
                      &quot;Enseñando también se aprende&quot;
                    </div>
                  </div>

                  {/* Circles decorations */}
                  <div className="absolute inset-0 border border-blue-500/5 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-4 border border-purple-500/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
