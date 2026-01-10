import { ProjectDoc } from "../types";

export const proyecto2: ProjectDoc = {
  id: "2",
  projectId: "2",
  title: "Nombre de tu Próximo Proyecto",
  slug: "proyecto-2",
  description:
    "Una breve descripción de lo que trata este nuevo proyecto extraordinario.",
  content: `
            <h2>Detalles del Proyecto</h2>
            <p>Aquí puedes empezar a escribir toda la magia técnica de tu segundo proyecto.</p>
            
            <h2>Objetivos</h2>
            <ul>
                <li>Primer objetivo alcanzado</li>
                <li>Segundo hito tecnológico</li>
            </ul>
        `,
  diagrams: [],
  downloads: [],
  technologies: ["React", "TypeScript"],
  learnings: ["Aprendizaje 1", "Aprendizaje 2"],
  challenges: ["Desafío 1", "Desafío 2"],
  images: [],
  publishedDate: new Date().toISOString().split("T")[0],
  github: "#",
  demo: "#",
};
