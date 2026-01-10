"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Maximize2,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectImageGalleryProps {
  images: any[];
  diagrams: { name: string; url: any; type: string }[];
  children?: React.ReactNode;
}

export function ProjectImageGallery({
  images,
  diagrams,
  children,
}: ProjectImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Close with Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setIsGalleryOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const openLightbox = (img: any) => {
    setSelectedImage(img);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="contents">
        {/* We expose functionality via window or context if needed, 
            but for now we'll handle clicks on specific elements passed as children if we use a provider pattern.
            Actually, let's just use it as a wrapper that provides functions to its children via a custom event or similar 
            OR just keep it simple and handle the gallery opening button here. */}
        {children}
      </div>

      {/* Global Gallery Trigger (can be called from outside via a custom event or just rendered here) */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col p-4 md:p-8"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="text-white">
                <h2 className="text-2xl font-black flex items-center gap-2">
                  <ImageIcon className="text-blue-500" /> Galería del Proyecto
                </h2>
                <p className="text-zinc-500 text-sm">
                  {currentIndex + 1} de {images.length} imágenes
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsGalleryOpen(false)}
                className="text-white hover:bg-white/10 rounded-full h-12 w-12"
              >
                <X size={24} />
              </Button>
            </div>

            <div className="flex-1 relative flex items-center justify-center">
              <button
                onClick={prevImage}
                className="absolute left-0 z-10 p-4 text-white/50 hover:text-white transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={48} />
              </button>

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full h-full max-h-[70vh] aspect-video"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Imagen ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              <button
                onClick={nextImage}
                className="absolute right-0 z-10 p-4 text-white/50 hover:text-white transition-colors"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={48} />
              </button>
            </div>

            <div className="mt-8 flex gap-2 overflow-x-auto pb-4 justify-center">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative h-20 w-32 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    currentIndex === idx
                      ? "border-blue-500 scale-105"
                      : "border-transparent opacity-50"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Miniatura ${idx}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for single images (diagrams) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-7xl h-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:bg-white/10"
              >
                <X size={24} />
              </Button>
              <Image
                src={selectedImage}
                alt="Vista ampliada"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exposed Open Functions via window for integration in HTML or deep nested components */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.openGallery = () => {
              const event = new CustomEvent("open-project-gallery");
              window.dispatchEvent(event);
            };
            window.openLightbox = (url) => {
              const event = new CustomEvent("open-project-lightbox", { detail: { url } });
              window.dispatchEvent(event);
            };
          `,
        }}
      />

      <GalleryEventHandler
        onGalleryOpen={() => setIsGalleryOpen(true)}
        onLightboxOpen={(url) => setSelectedImage(url)}
      />
    </>
  );
}

// Internal helper to listen to events
function GalleryEventHandler({
  onGalleryOpen,
  onLightboxOpen,
}: {
  onGalleryOpen: () => void;
  onLightboxOpen: (url: any) => void;
}) {
  useEffect(() => {
    const handleGallery = () => onGalleryOpen();
    const handleLightbox = (e: any) => onLightboxOpen(e.detail.url);

    window.addEventListener("open-project-gallery", handleGallery);
    window.addEventListener("open-project-lightbox", handleLightbox);

    return () => {
      window.removeEventListener("open-project-gallery", handleGallery);
      window.removeEventListener("open-project-lightbox", handleLightbox);
    };
  }, [onGalleryOpen, onLightboxOpen]);

  return null;
}
