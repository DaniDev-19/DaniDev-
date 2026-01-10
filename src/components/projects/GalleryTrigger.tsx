"use client";

interface GalleryTriggerProps {
  children: React.ReactNode;
  imageUrl: any;
}

export function GalleryTrigger({ children, imageUrl }: GalleryTriggerProps) {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      (window as any).openLightbox(imageUrl);
    }
  };

  return (
    <div onClick={handleClick} className="contents cursor-zoom-in">
      {children}
    </div>
  );
}
