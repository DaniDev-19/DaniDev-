"use client";

import { motion } from "framer-motion";
import { Users, Wrench, Code, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ServicesPage() {
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
  ];

  return (
    <div className="container mx-auto py-24 px-4 md:px-6 bg-background min-h-screen relative">
      <Link
        href="/"
        className="absolute top-8 left-4 md:left-8 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Volver al Inicio</span>
      </Link>

      <div className="text-center mb-16 pt-8">
        <h1 className="text-5xl font-black text-foreground mb-4">
          Servicios <span className="text-gradient">Profesionales</span>
        </h1>
        <p className="text-zinc-600 dark:text-gray-400 max-w-2xl mx-auto text-xl">
          Soluciones integrales para tus necesidades digitales, desde el
          desarrollo hasta la formación.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl backdrop-blur-xl border bg-white/50 dark:bg-white/5 border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-all group shadow-lg dark:shadow-none"
          >
            <div className="mb-6 p-4 rounded-2xl bg-black/5 dark:bg-white/5 w-fit group-hover:scale-110 transition-transform text-white dark:text-inherit">
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
    </div>
  );
}
