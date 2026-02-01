"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Mail,
  Heart,
  Smartphone,
  Send,
  X,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Diccionario de iconos
const socialLinks = [
  {
    name: "GitHub",
    icon: <Github size={20} />,
    url: "https://github.com/DaniDev-19",
    color: "hover:text-white",
  },
  {
    name: "WhatsApp",
    icon: <Smartphone size={20} />,
    url: "https://wa.me/584121698315?text=Hola,%20vengo%20de%20tu%20sitio%20web",
    color: "hover:text-green-400",
  },
  {
    name: "Telegram",
    icon: <Send size={20} />,
    url: "https://t.me/BadOmensDEV",
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: <Mail size={20} />,
    url: "mailto:baddevprograming@gmail.com",
    color: "hover:text-red-400",
  },
  {
    name: "Discord",
    icon: <span className="font-bold text-lg">Ds</span>,
    url: "https://discordapp.com/users/894678781418147870",
    color: "hover:text-indigo-400",
  },
];

export function SocialDonation() {
  const t = useTranslations("Footer");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const zinliEmail = "jesusperdomojunior@gmail.com";

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(zinliEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 border-t border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-black/20 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Redes Sociales */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-sm font-bold text-zinc-500 dark:text-gray-400 uppercase tracking-widest">
            {t("connect")}
          </h3>
          <div className="flex gap-4">
            <TooltipProvider>
              {socialLinks.map((link, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`h-12 w-12 rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/5 flex items-center justify-center text-zinc-600 dark:text-gray-400 transition-all hover:scale-110 hover:shadow-md dark:hover:bg-white/10 ${link.color}`}
                    >
                      {link.icon}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>

        {/* Donaciones / Zinli */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center md:items-end gap-4"
        >
          <h3 className="text-sm font-bold text-zinc-500 dark:text-gray-400 uppercase tracking-widest">
            {t("support")}
          </h3>
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="h-14 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/20 px-8 border-0"
          >
            <Heart className="mr-2 h-5 w-5 animate-pulse" fill="white" />
            {t("donate_button")}
          </Button>
          <p className="text-xs text-zinc-500 dark:text-gray-500">
            {t("donate_desc")}
          </p>
        </motion.div>
      </div>

      {/* Modal de Zinli */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ willChange: "transform, opacity" }}
              className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Heart fill="currentColor" size={24} />
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                  {t("zinli_modal.title")}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                  {t("zinli_modal.description")}
                </p>

                <div className="space-y-4">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    {t("zinli_modal.account_label")}
                  </label>
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-black/5 dark:border-white/5">
                    <Mail className="text-emerald-500 shrink-0" size={20} />
                    <span className="flex-1 font-mono text-sm text-zinc-900 dark:text-white truncate">
                      {zinliEmail}
                    </span>
                    <button
                      onClick={handleCopy}
                      className="p-2 rounded-xl bg-white dark:bg-zinc-700 shadow-sm hover:shadow-md transition-all text-emerald-600 active:scale-95"
                    >
                      {copied ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 h-12 rounded-xl border-zinc-200 dark:border-zinc-800"
                  >
                    {t("zinli_modal.close")}
                  </Button>
                  <Button
                    onClick={handleCopy}
                    className="flex-1 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white border-0 shadow-lg shadow-emerald-500/20"
                  >
                    {copied
                      ? t("zinli_modal.copied")
                      : t("zinli_modal.copy_button")}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
