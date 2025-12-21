"use client";

import { motion } from "framer-motion";
import { Github, Mail, Heart, Smartphone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    url: "https://github.com",
    color: "hover:text-white",
  },
  {
    name: "WhatsApp",
    icon: <Smartphone size={20} />,
    url: "https://wa.me/yournumber",
    color: "hover:text-green-400",
  },
  {
    name: "Telegram",
    icon: <Send size={20} />,
    url: "https://t.me/youruser",
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: <Mail size={20} />,
    url: "mailto:your@email.com",
    color: "hover:text-red-400",
  },
  {
    name: "Discord",
    icon: <span className="font-bold text-lg">Ds</span>,
    url: "https://discord.gg",
    color: "hover:text-indigo-400",
  },
];

export function SocialDonation() {
  return (
    <section className="py-12 border-t border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-black/20 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Redes Sociales */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-sm font-bold text-zinc-500 dark:text-gray-400 uppercase tracking-widest">
            Conectemos
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
            Apoya mi trabajo
          </h3>
          <Button
            size="lg"
            className="h-14 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/20 px-8 border-0"
          >
            <Heart className="mr-2 h-5 w-5 animate-pulse" fill="white" />
            Donar con Zinli
          </Button>
          <p className="text-xs text-zinc-500 dark:text-gray-500">
            Los aportes ayudan a crear más contenido educativo gratuito.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
