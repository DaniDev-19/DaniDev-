"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Monitor,
  Code,
  BookOpen,
  Gamepad2,
  Download,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

export default function LearningPage() {
  const mentorships = [
    {
      name: "HTML5 & CSS3",
      level: "Principiante",
      icon: <Monitor className="w-6 h-6 text-orange-500" />,
    },
    {
      name: "JavaScript Moderno",
      level: "Intermedio",
      icon: <Code className="w-6 h-6 text-yellow-400" />,
    },
    {
      name: "PHP & Bases de Datos",
      level: "Avanzado",
      icon: <DatabaseIcon className="w-6 h-6 text-indigo-400" />,
    },
  ];

  return (
    <div className="container mx-auto py-24 px-4 md:px-6 bg-background min-h-screen relative">
      <Link
        href="/"
        className="absolute top-8 left-4 md:left-8 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors z-20"
      >
        <ArrowLeft size={20} />
        <span>Volver al Inicio</span>
      </Link>

      <div className="rounded-[2.5rem] p-8 md:p-12 border border-black/5 dark:border-white/10 bg-white dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black overflow-hidden relative shadow-2xl dark:shadow-none">
        <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[100px] rounded-full" />

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-4 uppercase tracking-wider text-sm">
              <GraduationCap size={16} />
              Zona de Aprendizaje
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-foreground mb-6">
              Mentorías & <span className="text-gradient">Recursos</span>
            </h1>
            <p className="text-zinc-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              Accede a material educativo de alta calidad, ejercicios prácticos
              y juegos didácticos para acelerar tu aprendizaje en programación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold">
                <BookOpen className="mr-2 h-4 w-4" /> Agendar Mentoría
              </Button>
              <Button
                variant="outline"
                className="h-12 px-8 border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-foreground rounded-xl"
              >
                <Gamepad2 className="mr-2 h-4 w-4" /> Juegos Didácticos
              </Button>
            </div>
          </div>

          <div className="bg-zinc-50 dark:bg-white/5 rounded-2xl p-6 border border-black/5 dark:border-white/5">
            <h4 className="text-foreground font-bold mb-6 flex items-center gap-2">
              <Download
                className="text-green-500 dark:text-green-400"
                size={18}
              />
              Recursos Descargables
            </h4>
            <div className="space-y-4">
              {mentorships.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-black/20 hover:bg-zinc-100 dark:hover:bg-black/40 transition-colors border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-zinc-500 dark:text-gray-500">
                        {item.level}
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-500/10"
                  >
                    <Download size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
