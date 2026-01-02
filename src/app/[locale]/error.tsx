"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("Errors.500");

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="relative w-full max-w-2xl text-center">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/10 rounded-full blur-[100px] animate-pulse" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-8 md:p-12 rounded-3xl border border-white/5 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-2xl"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 text-red-500 mb-8">
            <AlertCircle size={40} />
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            {t("title")}
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            {t("message")}
          </p>

          <Button
            onClick={() => reset()}
            size="lg"
            variant="outline"
            className="h-14 px-8 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-foreground font-medium"
          >
            {t("button")}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
