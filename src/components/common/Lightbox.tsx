import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { EventGalleryImage } from '@/data/events';

export interface LightboxProps {
  images: EventGalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const isOpen = currentIndex !== null && images.length > 0;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || currentIndex === null) return null;

  const currentImage = images[currentIndex];
  if (!currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900]"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-slate-300">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#FF9900] text-white hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900]"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Image container */}
      <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
        <img
          src={currentImage.url}
          alt={currentImage.alt}
          className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl border border-white/10"
        />
        {currentImage.caption && (
          <p className="mt-4 text-center text-sm text-slate-300 max-w-xl">
            {currentImage.caption}
          </p>
        )}
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#FF9900] text-white hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900]"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
