"use client";

import { Button } from "@/components/ui/button";
import { Image as ImageIcon } from "lucide-react";

export function OpenGalleryButton() {
  const handleOpenGallery = () => {
    if (typeof window !== "undefined") {
      (window as any).openGallery();
    }
  };

  return (
    <Button
      variant="outline"
      className="w-full justify-start h-12 border-black/10 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5 text-zinc-700 dark:text-gray-300 font-bold"
      onClick={handleOpenGallery}
    >
      <ImageIcon className="mr-2 h-4 w-4 text-pink-600" /> Ver Galería del
      Proyecto
    </Button>
  );
}
