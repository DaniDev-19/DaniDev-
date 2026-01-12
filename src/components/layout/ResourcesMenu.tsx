"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  GraduationCap,
  BookOpen,
  ChevronDown,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ResourcesMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Navbar");

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const items = [
    {
      title: t("services_menu"),
      description: t("services_desc"),
      icon: <Briefcase className="w-5 h-5 text-blue-500" />,
      href: "/services",
      color: "bg-blue-500/10 border-blue-500/20",
    },
    {
      title: t("learning"),
      description: t("learning_desc"),
      icon: <GraduationCap className="w-5 h-5 text-purple-500" />,
      href: "/learning",
      color: "bg-purple-500/10 border-purple-500/20",
    },
    {
      title: t("blog"),
      description: t("blog_desc"),
      icon: <BookOpen className="w-5 h-5 text-green-500" />,
      href: "/blog",
      color: "bg-green-500/10 border-green-500/20",
    },
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
          "bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 hover:border-blue-500/40",
          "text-blue-600 dark:text-blue-400 hover:scale-105",
          isOpen && "ring-2 ring-blue-500/20"
        )}
      >
        <span>{t("explore_button")}</span>
        <ChevronDown
          size={16}
          className={cn(
            "transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-80 md:w-96 p-2 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-2xl z-50 overflow-hidden"
          >
            <div className="grid gap-2">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
                >
                  <div
                    className={cn(
                      "p-3 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110",
                      item.color
                    )}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground text-sm mb-1 flex items-center gap-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
