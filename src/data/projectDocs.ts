// Tipos para la documentación de proyectos
export interface ProjectDoc {
  id: string;
  projectId: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  diagrams: DiagramFile[];
  downloads: DownloadFile[];
  technologies: string[];
  learnings: string[];
  challenges: string[];
  images: string[];
  publishedDate: string;
}

export interface DiagramFile {
  name: string;
  url: string;
  type: "architecture" | "database" | "flow" | "other";
}

export interface DownloadFile {
  name: string;
  url: string;
  size: string;
  type: string;
}

// Datos estáticos de documentación de proyectos
export const projectDocs: ProjectDoc[] = [
  {
    id: "1",
    projectId: "1",
    title: "E-Commerce Platform - Documentación Completa",
    slug: "ecommerce-platform-docs",
    description:
      "Documentación técnica completa del proyecto E-Commerce Platform",
    content: `
            <h2>Resumen del Proyecto</h2>
            <p>Plataforma de comercio electrónico moderna construida con Next.js y Stripe para pagos.</p>
            
            <h2>Arquitectura</h2>
            <p>El proyecto utiliza una arquitectura de microservicios con Next.js como frontend y API routes para el backend.</p>
            
            <h2>Características Implementadas</h2>
            <ul>
                <li>Sistema de autenticación con NextAuth</li>
                <li>Carrito de compras con persistencia</li>
                <li>Integración con Stripe para pagos</li>
                <li>Panel de administración</li>
                <li>Gestión de inventario en tiempo real</li>
            </ul>
        `,
    diagrams: [
      {
        name: "Arquitectura del Sistema",
        url: "/docs/ecommerce/architecture.webp",
        type: "architecture",
      },
      {
        name: "Diagrama de Base de Datos",
        url: "/docs/ecommerce/database.webp",
        type: "database",
      },
    ],
    downloads: [
      {
        name: "Código Fuente Completo",
        url: "/downloads/ecommerce-source.zip",
        size: "15 MB",
        type: "application/zip",
      },
      {
        name: "Documentación PDF",
        url: "/downloads/ecommerce-docs.pdf",
        size: "2.5 MB",
        type: "application/pdf",
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
    ],
    learnings: [
      "Implementación de pagos seguros con Stripe",
      "Manejo de estado global con Zustand",
      "Optimización de imágenes con Next/Image",
      "SEO avanzado para e-commerce",
    ],
    challenges: [
      "Sincronización de inventario en tiempo real",
      "Manejo de transacciones fallidas",
      "Optimización de rendimiento con grandes catálogos",
    ],
    images: [
      "/docs/ecommerce/screenshot1.webp",
      "/docs/ecommerce/screenshot2.webp",
      "/docs/ecommerce/screenshot3.webp",
    ],
    publishedDate: "2024-12-15",
  },
];
