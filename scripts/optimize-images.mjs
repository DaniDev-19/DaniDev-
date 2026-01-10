import sharp from "sharp";
import fs from "fs";
import path from "path";

// Configuración
const RAW_DIR = "src/images";
const OUTPUT_DIR = "public/images/optimized";
const QUALITY = 80;

// Crear directorios si no existen
if (!fs.existsSync(RAW_DIR)) fs.mkdirSync(RAW_DIR);
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

async function processImages() {
  console.log("🚀 Iniciando optimización de imágenes...");

  // Leer archivos
  const files = fs.readdirSync(RAW_DIR);

  if (files.length === 0) {
    console.log('⚠️ No hay imágenes en la carpeta "images".');
    console.log("👉 Coloca tus fotos (.jpg, .png) ahí y vuelve a ejecutar.");
    return;
  }

  let count = 0;

  for (const file of files) {
    // Filtrar solo imágenes
    if (!file.match(/\.(jpg|jpeg|png|webp|gif|avif)$/i)) continue;

    const inputPath = path.join(RAW_DIR, file);
    const nameWithoutExt = path.parse(file).name;
    const outputPath = path.join(OUTPUT_DIR, `${nameWithoutExt}.webp`);

    try {
      // Verificar si ya existe para no reprocesar (opcional, aquí sobrescribimos para asegurar cambios)
      await sharp(inputPath)
        .webp({ quality: QUALITY })
        .resize(1920, null, {
          // Max width 1920px, auto height
          withoutEnlargement: true,
          fit: "inside",
        })
        .toFile(outputPath);

      console.log(`✅ ${file} -> ${nameWithoutExt}.webp`);
      count++;
    } catch (error) {
      console.error(`❌ Error procesando ${file}:`, error);
    }
  }

  console.log(`✨ Proceso completado. ${count} imágenes optimizadas.`);
}

processImages();
