"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string; // El nombre del archivo sin extensión o con extensión original (ej: "mi-foto.png" o "mi-foto")
  fallbackSrc?: string;
}

export function OptimizedImage({
  src,
  fallbackSrc,
  alt,
  ...props
}: OptimizedImageProps) {
  // Limpiar extensión si existe y asegurar ruta a webp
  const cleanName = src.split(".").slice(0, -1).join(".") || src;
  const webpSrc = `/images/optimized/${cleanName}.webp`;

  const [imgSrc, setImgSrc] = useState(webpSrc);

  // Si la imagen ya es una URL completa (http...), usarla tal cual
  if (src.startsWith("http")) {
    return <Image src={src} alt={alt} {...props} />;
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        // Si falla la carga del webp, intentar cargar el original o un fallback
        if (fallbackSrc) setImgSrc(fallbackSrc);
      }}
    />
  );
}
