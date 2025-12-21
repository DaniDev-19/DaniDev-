# 🚀 Portafolio Personal - Next.js 15

Un portafolio moderno y profesional construido con Next.js 15, completamente estático y optimizado para rendimiento.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz elegante con glassmorphism, gradientes y animaciones suaves
- **🌍 Multiidioma**: Soporte completo para Español e Inglés con next-intl
- **🌓 Modo Oscuro/Claro**: Cambio de tema con persistencia
- **📱 Responsive**: Diseño adaptable a todos los dispositivos
- **⚡ Optimizado**: Build estático para máxima velocidad de carga
- **🎯 SEO Friendly**: Metadatos optimizados y estructura semántica

## 🛠️ Tecnologías

- **Framework**: Next.js 15.1.3
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Internacionalización**: next-intl
- **Carrusel**: Swiper

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <tu-repo>

# Instalar dependencias
bun install

# Ejecutar en desarrollo
bun run dev

# Construir para producción
bun run build

# Ejecutar en producción
bun start
```

## 📁 Estructura del Proyecto

```
portafolioV2/
├── src/
│   ├── app/
│   │   └── [locale]/          # Rutas con soporte multiidioma
│   │       ├── page.tsx        # Página principal
│   │       └── blog/           # Sección de blog
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # Secciones del portafolio
│   │   └── ui/                 # Componentes reutilizables
│   ├── lib/                    # Utilidades
│   └── messages/               # Traducciones (es.json, en.json)
├── public/                     # Archivos estáticos
└── next.config.mjs            # Configuración de Next.js
```

## 🎨 Secciones del Portafolio

1. **Hero**: Presentación principal con animaciones
2. **Stats**: Estadísticas destacadas
3. **About**: Información personal
4. **Projects**: Proyectos destacados con carrusel
5. **Skills**: Habilidades técnicas categorizadas
6. **Journey**: Trayectoria profesional
7. **Blog**: Artículos técnicos
8. **Contact**: Formulario de contacto

## 📝 Personalización

### Datos Estáticos

Los datos del portafolio se encuentran en `src/app/[locale]/page.tsx`:

- **Proyectos**: `staticProjects`
- **Habilidades**: `staticSkills`
- **Blog**: `staticPosts`

### Traducciones

Edita los archivos en `src/messages/`:
- `es.json` - Español
- `en.json` - Inglés

### Estilos

Los estilos globales y variables CSS están en:
- `src/app/globals.css` - Variables de tema y estilos base
- `tailwind.config.ts` - Configuración de Tailwind

## 🚀 Despliegue

Este proyecto puede desplegarse en:

- **Vercel** (Recomendado)
- **Netlify**
- **Cloudflare Pages**
- Cualquier plataforma que soporte Next.js

```bash
# Build para producción
bun run build

# El output estará en .next/
```

## 📄 Licencia

MIT

## 👨‍💻 Autor

Tu Nombre - [Tu Email]

---

⭐ Si te gusta este proyecto, ¡dale una estrella!
