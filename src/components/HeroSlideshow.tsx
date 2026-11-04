"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Compass, Pause, Play } from "lucide-react";
import { MAHABALESHWAR_SLIDES } from "@/lib/images";

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

  // Mobile Touch Swipe Handlers for iPhone & Android
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Minimum swipe threshold of 40px
    if (Math.abs(diff) > 40) {
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
      className="w-full max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 mb-6 sm:mb-12 relative z-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Accent & Controls */}
      <div className="flex items-center justify-between mb-2 sm:mb-3 px-1 text-left">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#a0cc28] border border-white/15 text-[11px] sm:text-xs font-black tracking-wider uppercase">
            <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
            Mahabaleshwar Getaways
          </span>
          <span className="hidden sm:inline text-xs font-medium text-gray-300">
            Top 11 Iconic Sightseeing Destinations
          </span>
        </div>

        {/* Slide Counter & Pause/Play Indicator */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-gray-300 bg-black/50 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/15 shadow-sm">
          <span className="text-[#a0cc28]">{String(currentIndex + 1).padStart(2, "0")}</span>
          <span className="text-gray-500">/</span>
          <span>{String(totalSlides).padStart(2, "0")}</span>
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="ml-1 text-gray-300 hover:text-white transition-colors"
            title={isPaused ? "Resume slideshow" : "Pause slideshow"}
            aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play className="w-3 h-3 text-[#a0cc28]" /> : <Pause className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Main Slideshow Frame:
          - Mobile: 75-80svh full-screen height (min 480px, max 78svh) for maximum immersion
          - Desktop (md+): 480px - 520px (Preserved 100% identically)
      */}
      <div className="relative w-full h-[75vh] h-[78svh] min-h-[480px] md:min-h-0 md:h-[480px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-[#0d1117] group">
        {/* Render all 11 destination slides with crossfade transitions */}
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
              {/* 1. Mobile Matching Ambient Blur Background:
                     Fills the tall 78svh mobile screen with the authentic natural colors
                     of the destination (lake blues, strawberry reds/greens, sunsets, etc.)
              */}
              <div className="absolute inset-0 overflow-hidden md:hidden">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover object-center filter blur-2xl scale-125 opacity-55"
                  aria-hidden="true"
                />
                {/* Contrast Vignette to make foreground photograph pop */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/85" />
              </div>

              {/* 2. Foreground Destination Photograph:
                     - Mobile: object-contain displays the ENTIRE photograph without ANY cropping
                     - Desktop: md:object-cover md:scale-105 retains the exact wide cinematic look
              */}
              <div
                className={`relative w-full h-full transition-transform duration-[6000ms] ease-out flex items-center justify-center p-2 sm:p-0 ${
                  isActive ? "scale-100 md:scale-105" : "scale-100"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={`${slide.name} - Saishree Tours Mahabaleshwar Sightseeing`}
                  fill
                  priority={index === 0 || isActive || isNext}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  className="object-contain md:object-cover object-center drop-shadow-2xl rounded-xl md:rounded-none"
                />
              </div>

              {/* Desktop Ambient Vignette & Gradients (Hidden on mobile to preserve photo brightness) */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40 pointer-events-none" />
            </div>
          );
        })}

        {/* Mobile Top-Right Mini Dots Indicator (Prevents overlap with bottom card) */}
        <div className="sm:hidden absolute top-3.5 right-3.5 z-20 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/15">
          {MAHABALESHWAR_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-4 h-1.5 bg-[#a0cc28]"
                    : "w-1.5 h-1.5 bg-white/40"
                }`}
              />
            );
          })}
        </div>

        {/* Dynamic Glassmorphism Slide Info Card:
            - Mobile: Compact floating badge at bottom of 78svh frame
            - Desktop: Spacious card at bottom-left
        */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-6 sm:left-6 sm:right-auto z-20 sm:max-w-md pointer-events-auto">
          <div className="bg-black/75 sm:bg-black/65 backdrop-blur-md border border-white/20 p-3 sm:p-5 rounded-xl sm:rounded-2xl text-left shadow-2xl text-white transform transition-all duration-500">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-extrabold text-[#a0cc28] uppercase tracking-wider bg-[#a0cc28]/15 px-2 py-0.5 rounded-full border border-[#a0cc28]/30">
                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#a0cc28]" />
                {currentSlide.location}
              </span>
              <span className="text-[11px] sm:text-xs text-gray-300 font-medium truncate max-w-[200px]">
                {currentSlide.tagline}
              </span>
            </div>
            <h3 className="text-base sm:text-2xl font-black text-white tracking-tight leading-snug drop-shadow-md">
              {currentSlide.name}
            </h3>
            <p className="text-[11px] sm:text-sm text-gray-200 line-clamp-2 mt-0.5 sm:mt-1 leading-relaxed font-normal">
              {currentSlide.description}
            </p>
          </div>
        </div>

        {/* Manual Navigation Arrows (Left / Right) */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous destination"
          className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#a0cc28] text-white hover:text-black border border-white/20 hover:border-[#a0cc28] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl opacity-90 sm:opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-90"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          aria-label="Next destination"
          className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#a0cc28] text-white hover:text-black border border-white/20 hover:border-[#a0cc28] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl opacity-90 sm:opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-90"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Desktop Slide Progress / Indicators (Bottom Right, untouched for desktop) */}
        <div className="hidden sm:flex absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 items-center gap-1.5 sm:gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
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
