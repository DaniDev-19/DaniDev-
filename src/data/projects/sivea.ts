import { img } from "@/components/image";
import { ProjectDoc } from "../types";

export const siveaProject: ProjectDoc = {
  id: "1",
  projectId: "1",
  title:
    "Sistema de Información para la gestión de Operaciones de Vuelo y estadisticas aeroportuarias en el Aeropuerto Sst. Néstor Arias - San Felipe - Yaracuy",
  slug: "SIVEA",
  description: "Documentación técnica completa del proyecto SIVEA System",
  content: `
            <h2>Resumen del Proyecto</h2>
            <span>La misión (Reto)</span>

            <p>Digitalizar y centralizar el control crítico de las operaciones aéreas y administrativas del Aeropuerto Sst. Néstor Arias en una plataforma segura, rápida y fiable para uso interno en la institución.</p>
            
            <h2>Relación de Solución y Arquitectura</h2>
            <p>Se desarrolló SIVEA System como una aplicación web Full Stack a medida. A diferencia de usar soluciones prefabricadas, se diseñó e implementó una arquitectura MVC propia desde cero para garantizar un rendimiento óptimo en el hardware local y un control total sobre la lógica de negocio aeroportuaria.</p>

            <h2>Stack Tecnológico</h2>
            <span>La magia detrás</span>
            <ul>
                <li><strong>Arquitectura:</strong> Patrón MVC personalizado (Sin Frameworks)</li>
                <li><strong>Backend:</strong> PHP Nativo (Puro) y Programación orientada a objetos (POO)</li>
                <li><strong>Bases de datos:</strong> MySQL Relacional y Normalizada</li>
                <li><strong>Frontend:</strong> JavaScript Vanilla, CSS3 y HTML5 semántico</li>
                <li><strong>Infraestructura:</strong> Despliegue On-Premise vía LAN (XAMPP), con diseño Cloud Ready</li>
            </ul>
            
            <h2>Características Implementadas</h2>
            <ul>
                <li>Sistema de autenticación de Sesiones y contraseñas encriptadas con Bcrypt</li>
                <li>Dashboard con Card Estadísticas</li>
                <li>Integración con Fpdf para Resúmenes Dinámicos de Estadísticas</li>
                <li>Panel de administración y módulos estadísticos visuales</li>
                <li>Alertas dinámicas por acciones y por Status de Protocolos HTTP</li>
                <li>C/I - C/D con Git y GitHub</li>
            </ul>
        `,
  diagrams: [
    {
      name: "Diagrama Modelo Entidad Relación SIVEA System",
      url: img.merSivea,
      type: "architecture",
    },
    {
      name: "Modelo Lógico Relacional (S.I.V.E.A)",
      url: img.mlrSivea,
      type: "architecture",
    },
    {
      name: "Capacitación y implantación (S.I.V.E.A)",
      url: img.capasitaSivea,
      type: "flow",
    },
  ],
  downloads: [
    {
      name: "Manual de usuario",
      url: "/Manual De Usuario Y Sistema (S.I.V.E.A).pdf",
      size: "463 KB",
      type: "application/pdf",
    },
    {
      name: "Ficha Técnica (Wiki GitHub)",
      url: "https://github.com/DaniDev-19/SIVEA-System/wiki",
      size: "Online",
      type: "Documentación Wiki",
    },
  ],
  technologies: ["HTML5", "Css3", "JavaScript", "MySQL", "PHP", "Xampp"],
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
    img.loginSivea,
    img.capasitaSivea,
    img.capasitaSivea2,
    img.equipoSivea,
    img.impleSivea,
    img.impleSivea2,
  ],
  publishedDate: "2024-12-15",
  github: "https://github.com/DaniDev-19/SIVEA-System",
  demo: "#",
};
