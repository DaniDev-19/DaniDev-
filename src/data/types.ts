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
  images: any[];
  publishedDate: string;
  github?: string;
  demo?: string;
}

export interface DiagramFile {
  name: string;
  url: any;
  type: "architecture" | "database" | "flow" | "other";
}

export interface DownloadFile {
  name: string;
  url: string;
  size: string;
  type: string;
}
