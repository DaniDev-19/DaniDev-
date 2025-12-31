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
    title: "Sistema de Información para la gestión de Operaciones de Vuelo y estadisticas aeroportuarias en el Aeropuerto Sst. Néstor Arias - San Felipe - Yaracuy",
    slug: "SIVEA",
    description:
      "Documentación técnica completa del proyecto SIVEA System",
    content: `
            <h2>Resumen del Proyecto</h2>
            <span>La misión (Reto)</span>

            <p>Digitalizar y centralizar el control crítico de las operaciones aéreas y administrativas del Aeropuerto Sst. Néstor Arias en una plataforma segura, rápida y fiable para uso interno en la institución.</p>
            
            <h2>Solución y Arquitectura</h2>
            <p>Se Desarrollo SIVEA System, una aplicación web Full Stack a medida. A diferencia de usar soluciones prefabricadas, se diseño e implemento una arquitectura MVC propia desde cero para garantizar un rendimiento óptimo en el hardware local y un control total sobre la lógica de negocio aeroportuaria</p>

            h2>stack Tecnológico (La magia detrás)</h2>
            <ul>
                <li>Arquitectura: Patrón MVC personalizado (Sin Frameworks)</li>
            </ul>
            <ul>
                <li>Backend: PHP Nativo (Puro) y programación orientada a objetos (POO)</li>
            </ul>
            <ul>
                <li>Bases de datos: Mysql Relacional/Normalizada</li>
            </ul>
            <ul>
                <li>Frontend: JavaScript Vanilla, Css3, HTML5 semántico</li>
            </ul>
            <ul>
                <li>infraestructura: Despliegue On-Promise vía LAN (XAMPP), con diseño Cloud Ready</li>
            </ul>
            
            <h2>Características Implementadas</h2>
            <ul>
                <li>Sistema de autenticación de Sesiones y contraseñas encriptadas con Bcrypt</li>
                <li>Dashboard con Card Estadisticas</li>
                <li>Integración con Fpdf para Resumenes Dinamicos de Estadisticas en formato PDF</li>
                <li>Panel de administración y modulos Estadisticos para resumenes dinámicos mediante gráficas visuales y exportaciones</li>
                <li>Alertas dinámicas por acciones y por Status para Protocolos HTTP</li>
                <li>C/I - C/D con Git y Github</li>
            </ul>
        `,
    diagrams: [
      {
        name: "Diagrama Modelo Entidad Relación SIVEA System",
        url: "/docs/ecommerce/architecture.webp",
        type: "architecture",
      },
      {
        name: "Tablas Maestros y Relaciones SIVEA System",
        url: "/docs/ecommerce/architecture.webp",
        type: "architecture",
      },
      {
        name: "Diagrama Modelo Lógico de Base de datos SIVEA System",
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
      "HTML5",
      "Css3",
      "JavaScript",
      "MySQL",
      "PHP",
      "Xampp",
    ],
    learnings: [
      "Implementación de CRUD Seguros",
      "Manejo de Sesiones y Autenticación",
      "Optimización de exportaciones PDF dinámicas",
      "Instalacion Lan y despliegue On-Promise",
    ],
    challenges: [
      "Sincronización de datos",
      "Manejo de grandes volúmenes de datos",
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
