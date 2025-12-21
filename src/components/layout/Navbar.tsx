"use client";

import { useState } from "react";
import { Link } from "@/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const navLinks = [
  { name: "about", href: "#about" },
  { name: "projects", href: "#projects" },
  { name: "blog", href: "/blog" },
  { name: "skills", href: "#skills" },
  { name: "journey", href: "#journey" },
  { name: "contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/20 backdrop-blur-lg transition-all">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            P
          </div>
          <span className="text-xl font-bold tracking-tighter text-foreground">
            Portfolio
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group"
            >
              {t(link.name)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </Link>
          ))}
          <Button className="bg-primary/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 backdrop-blur-md rounded-xl">
            {t("resume")}
          </Button>
          <LocaleSwitcher />
          <ModeToggle />
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-foreground/70 hover:bg-primary/10 dark:hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {t(link.name)}
                </Link>
              ))}
              <Button
                variant="ghost"
                className="w-full border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 hover:text-white"
              >
                {t("resume")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
