import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Calendar,
  Code,
  Database,
  FileText,
  Share2,
  Layers,
  Cpu,
  CheckCircle,
  Maximize2,
  Image as ImageIcon,
} from "lucide-react";
import { projectDocs } from "@/data/projectDocs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectImageGallery } from "@/components/projects/ProjectImageGallery";
import { GalleryTrigger } from "@/components/projects/GalleryTrigger";
import { OpenGalleryButton } from "@/components/projects/OpenGalleryButton";

export default async function ProjectDocPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  // Buscar la documentación del proyecto por slug
  const project = projectDocs.find((p) => p.slug === slug);

  if (!project) {
    // En un caso real, podrías mostrar un fallback o redirigir
    return notFound();
  }

  return (
    <ProjectImageGallery images={project.images} diagrams={project.diagrams}>
      <div className="min-h-screen bg-background pt-24 pb-32 transition-colors duration-300">
        {/* Header con gradiente - sutil en light mode */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-500/10 dark:from-blue-900/20 to-transparent -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          {/* Navegación y Breadcrumbs */}
          <div className="flex items-center gap-4 mb-8 text-sm text-zinc-500 dark:text-gray-400 font-medium">
            <Link
              href="/"
              className="hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              Portafolio
            </Link>
            <span>/</span>
            <span className="text-zinc-900 dark:text-white font-bold">
              Documentación
            </span>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white mb-12 group transition-colors px-6 py-3 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-white/10 shadow-sm font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Volver al inicio
          </Link>

          {/* Encabezado del Proyecto */}
          <header className="max-w-5xl mx-auto mb-16">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge
                variant="outline"
                className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 px-3 py-1 font-bold"
              >
                <Code className="mr-2 h-3 w-3" /> Documentación Técnica
              </Badge>
              <span className="flex items-center gap-2 text-zinc-500 dark:text-gray-400 text-sm font-medium">
                <Calendar size={14} />
                Actualizado:{" "}
                {new Date(project.publishedDate).toLocaleDateString()}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
              {project.title}
            </h1>

            <p className="text-xl text-zinc-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-8 border-l-4 border-blue-500 pl-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-zinc-100 dark:bg-white/10 hover:bg-zinc-200 dark:hover:bg-white/20 text-zinc-700 dark:text-gray-200 border-0"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </header>

          {/* Contenido Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Columna Izquierda: Contenido y Diagramas */}
            <div className="lg:col-span-2 space-y-12">
              {/* Descripción Detallada (HTML) */}
              <div className="project-content max-w-none p-10 md:p-14 rounded-[2.5rem] bg-white dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 shadow-2xl dark:shadow-none">
                <div
                  dangerouslySetInnerHTML={{ __html: project.content }}
                  className="text-zinc-800 dark:text-zinc-300"
                />
              </div>

              {/* Galería de Diagramas */}
              <section>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                  <Share2 className="text-purple-600 dark:text-purple-400" />{" "}
                  Diagramas de Arquitectura
                </h3>
                <div className="grid gap-6">
                  {project.diagrams.map((diagram, i) => (
                    <div
                      key={i}
                      className="group relative rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-50 dark:bg-black/20 cursor-zoom-in"
                    >
                      <GalleryTrigger imageUrl={diagram.url}>
                        <div className="absolute top-4 left-4 z-10">
                          <Badge className="bg-white/80 dark:bg-black/50 backdrop-blur-md border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white font-bold">
                            {diagram.type === "database" ? (
                              <Database size={12} className="mr-1" />
                            ) : (
                              <Layers size={12} className="mr-1" />
                            )}
                            {diagram.name}
                          </Badge>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
                          <div className="bg-white/90 dark:bg-black/90 p-3 rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                            <Maximize2 className="text-blue-600 dark:text-blue-400" />
                          </div>
                        </div>

                        <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-900/50 flex items-center justify-center">
                          <div className="w-full h-full p-4 md:p-8 flex items-center justify-center">
                            <Image
                              src={diagram.url}
                              alt={diagram.name}
                              className="object-contain w-full h-full max-h-[500px] rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                          </div>
                        </div>
                      </GalleryTrigger>
                    </div>
                  ))}
                </div>
              </section>

              {/* Aprendizajes y Desafíos */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-500/5 border border-blue-100 dark:border-blue-500/10 shadow-sm">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-4 flex items-center gap-2">
                    <Cpu className="text-blue-600 dark:text-blue-400" />{" "}
                    Aprendizajes Clave
                  </h3>
                  <ul className="space-y-3">
                    {project.learnings.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-zinc-700 dark:text-gray-300 text-sm"
                      >
                        <CheckCircle className="flex-shrink-0 text-blue-500 h-5 w-5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-500/5 border border-purple-100 dark:border-purple-500/10 shadow-sm">
                  <h3 className="text-xl font-bold text-purple-900 dark:text-purple-200 mb-4 flex items-center gap-2">
                    <Layers className="text-purple-600 dark:text-purple-400" />{" "}
                    Desafíos Superados
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-zinc-700 dark:text-gray-300 text-sm"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-500 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Descargas y Recursos */}
            <div className="lg:col-span-1 space-y-8">
              {/* Panel de Descargas */}
              <div className="sticky top-24 p-6 rounded-3xl bg-white dark:bg-zinc-900/80 border border-black/5 dark:border-zinc-800 shadow-2xl dark:shadow-none">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                  <Download className="text-green-600 dark:text-green-400" />{" "}
                  Recursos Descargables
                </h3>

                <div className="space-y-4">
                  {project.downloads.map((file, i) => (
                    <div
                      key={i}
                      className="group p-4 rounded-xl bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 transition-all shadow-sm"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-blue-500/20 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <FileText size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">
                              {file.name}
                            </p>
                            <p className="text-xs text-zinc-500 dark:text-gray-500">
                              {file.size} • {file.type}
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white border-0 font-bold"
                        size="sm"
                        asChild
                      >
                        {/* <a href={file.url} download={file.name}>
                          <Download size={14} className="mr-2" /> Descargar Archivo
                        </a> */}
                        <a
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={14} className="mr-2" /> Abrir
                          Archivo
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/10">
                  <h4 className="text-sm text-zinc-500 dark:text-gray-400 mb-4 uppercase tracking-widest font-black">
                    Enlaces del Proyecto
                  </h4>
                  <div className="space-y-3">
                    {project.demo && project.demo !== "#" && (
                      <Button
                        variant="outline"
                        className="w-full justify-start h-12 border-black/10 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5 text-zinc-700 dark:text-gray-300 font-bold"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4 text-blue-600" />{" "}
                          Ver Demo en Vivo
                        </a>
                      </Button>
                    )}
                    {project.github && project.github !== "#" && (
                      <Button
                        variant="outline"
                        className="w-full justify-start h-12 border-black/10 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5 text-zinc-700 dark:text-gray-300 font-bold"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code className="mr-2 h-4 w-4 text-purple-600" /> Ver
                          Código en GitHub
                        </a>
                      </Button>
                    )}
                    <OpenGalleryButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectImageGallery>
  );
}
