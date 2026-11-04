"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Sparkles, Compass, Pause, Play } from "lucide-react";
import { MAHABALESHWAR_SLIDES, DestinationSlide } from "@/lib/images";

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = MAHABALESHWAR_SLIDES.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Continuous automatic rotation every 4.5 seconds
  useEffect(() => {
    if (isPaused) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, 4500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, goToNext]);

  // Touch Swipe Handlers for Mobile Devices
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Minimum swipe threshold of 45px
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setTouchStartX(null);
    setIsPaused(false);
  };

  const currentSlide = MAHABALESHWAR_SLIDES[currentIndex];
  // Calculate next index for preloading
  const nextIndex = (currentIndex + 1) % totalSlides;

  return (
    <div
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 relative z-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Section Header Accent */}
      <div className="flex items-center justify-between mb-3 px-1 text-left">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#a0cc28] border border-white/15 text-xs font-black tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
            Mahabaleshwar Getaways
          </span>
          <span className="hidden sm:inline text-xs font-medium text-gray-300">
            Top 11 Iconic Sightseeing Destinations
          </span>
        </div>

        {/* Slide Counter & Pause/Play Indicator */}
        <div className="flex items-center gap-2 text-xs font-bold text-gray-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-[#a0cc28]">{String(currentIndex + 1).padStart(2, "0")}</span>
          <span className="text-gray-500">/</span>
          <span>{String(totalSlides).padStart(2, "0")}</span>
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="ml-1 text-gray-400 hover:text-white transition-colors"
            title={isPaused ? "Resume slideshow" : "Pause slideshow"}
            aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play className="w-3 h-3 text-[#a0cc28]" /> : <Pause className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Main Slideshow Frame */}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black/80 group">
        {/* Render all slides with smooth crossfade and Ken Burns zoom on active slide */}
        {MAHABALESHWAR_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          const isNext = index === nextIndex;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Ken Burns Zoom Effect */}
              <div
                className={`relative w-full h-full transition-transform duration-[6000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={`${slide.name} - Saishree Tours Mahabaleshwar Sightseeing`}
                  fill
                  priority={index === 0 || isActive || isNext}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  className="object-cover object-center"
                />
              </div>

              {/* Ambient Cinematic Vignette and Contrast Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40 pointer-events-none" />
            </div>
          );
        })}

        {/* Dynamic Glassmorphism Slide Info Card (Bottom-Left) */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 z-20 sm:max-w-md pointer-events-auto">
          <div className="bg-black/60 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-2xl text-left shadow-2xl text-white transform transition-all duration-500">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#a0cc28] uppercase tracking-wider bg-[#a0cc28]/15 px-2.5 py-0.5 rounded-full border border-[#a0cc28]/30">
                <MapPin className="w-3 h-3 text-[#a0cc28]" />
                {currentSlide.location}
              </span>
              <span className="text-xs text-gray-300 font-medium hidden sm:inline">
                {currentSlide.tagline}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug drop-shadow-md">
              {currentSlide.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 mt-1 leading-relaxed font-normal">
              {currentSlide.description}
            </p>
          </div>
        </div>

        {/* Manual Navigation Arrows (Left / Right) */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous destination"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-[#a0cc28] text-white hover:text-black border border-white/20 hover:border-[#a0cc28] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          aria-label="Next destination"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-[#a0cc28] text-white hover:text-black border border-white/20 hover:border-[#a0cc28] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Slide Progress / Indicators (Bottom Center) */}
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 flex items-center gap-1.5 sm:gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
          {MAHABALESHWAR_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.name}`}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-6 sm:w-8 h-2 bg-[#a0cc28] shadow-xs shadow-[#a0cc28]"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
