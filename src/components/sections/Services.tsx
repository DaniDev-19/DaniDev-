"use client";

import { motion } from "framer-motion";
import {
  Users,
  Wrench,
  GraduationCap,
  Code,
  Smartphone,
  Monitor,
  Download,
  Gamepad2,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Services() {
  const services = [
    {
      title: "Desarrollo Web Full Stack",
      description:
        "Creación de aplicaciones web modernas, rápidas y escalables.",
      icon: <Code className="w-8 h-8 text-blue-400" />,
      tags: ["Apps Web", "E-commerce", "Landing Pages", "App-movil"],
    },
    {
      title: "Manejo de Redes Sociales",
      description:
        "Estrategias de contenido y gestión de redes para potenciar tu marca personal o negocio.",
      icon: <Users className="w-8 h-8 text-purple-400" />,
      tags: ["Instagram", "LinkedIn", "Content", "Marketing digital", "Blog"],
    },
    {
      title: "Servicio Técnico",
      description:
        "Diagnóstico, reparación y optimización de equipos informáticos, instalación de software y hardware.",
      icon: <Wrench className="w-8 h-8 text-green-400" />,
      tags: [
        "Mantenimiento",
        "Redes",
        "Optimización",
        "Seguridad",
        "Monitorización",
        "Instalación de Cámaras",
      ],
    },
    {
      title: "Mentorías y Clases",
      description:
        "Aprende programación desde cero con clases personalizadas y material práctico.",
      icon: <GraduationCap className="w-8 h-8 text-pink-400" />,
      tags: ["Clases 1:1", "Cursos", "Asesoría", "Proyectos"],
      highlight: true,
    },
  ];

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
    <section
      id="services"
      className="py-24 px-4 md:px-6 bg-background relative overflow-hidden transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-foreground mb-4">
            Servicios Profesionales
          </h2>
          <p className="text-zinc-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluciones integrales para tus necesidades digitales, desde el
            desarrollo hasta la formación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl backdrop-blur-xl border transition-all group shadow-lg dark:shadow-none
                                ${
                                  service.highlight
                                    ? "bg-blue-500/10 border-blue-500/20 dark:bg-blue-500/10 dark:border-blue-500/20"
                                    : "bg-white/50 dark:bg-white/5 border-black/5 dark:border-white/5 hover:border-blue-500/30"
                                }`}
            >
              <div className="mb-6 p-4 rounded-2xl bg-black/5 dark:bg-white/5 w-fit group-hover:scale-110 transition-transform text-white dark:text-inherit">
                {/* Ensure icon uses correct colors if passed directly */}
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs text-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección de Mentorías */}
        <div className="rounded-[2.5rem] p-8 md:p-12 border border-black/5 dark:border-white/10 bg-white dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black overflow-hidden relative shadow-2xl dark:shadow-none">
          <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[100px] rounded-full" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-4 uppercase tracking-wider text-sm">
                <GraduationCap size={16} />
                Zona de Aprendizaje
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                Mentorías & <span className="text-gradient">Recursos</span>
              </h3>
              <p className="text-zinc-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                Accede a material educativo de alta calidad, ejercicios
                prácticos y juegos didácticos para acelerar tu aprendizaje en
                programación.
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
    </section>
  );
}

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
