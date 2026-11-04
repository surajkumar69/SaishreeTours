"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Compass,
  Pause,
  Play,
  Palmtree,
  Mountain,
  Waves,
  Sparkles,
  Shield,
  ArrowRight,
} from "lucide-react";
import { PDF_DESTINATIONS, DestinationSlide } from "@/lib/images";

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = PDF_DESTINATIONS.length;

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

  // Touch Swipe Handlers for mobile smartphones
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

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

  const currentSlide = PDF_DESTINATIONS[currentIndex];
  const nextIndex = (currentIndex + 1) % totalSlides;

  // Filter categories from the PDF
  const categories = [
    { name: "All", label: "All 16 Destinations", icon: Compass },
    { name: "Beach Tours", label: "Beach Tours (4)", icon: Palmtree },
    { name: "Hill Station Tours", label: "Hill Stations (3)", icon: Mountain },
    { name: "Konkan Tours", label: "Konkan Coast (3)", icon: Waves },
    { name: "Religious Tours", label: "Jyotirlinga (3)", icon: Sparkles },
    { name: "Fort & Historical Tours", label: "Forts (3)", icon: Shield },
  ];

  const handleCategorySelect = (categoryName: string) => {
    setActiveCategory(categoryName);
    if (categoryName === "All") return;
    const firstIndex = PDF_DESTINATIONS.findIndex((d) => d.category === categoryName);
    if (firstIndex !== -1) {
      setCurrentIndex(firstIndex);
    }
  };

  return (
    <div
      className="w-full max-w-7xl mx-auto px-0 sm:px-4 md:px-6 lg:px-8 mb-6 sm:mb-10 relative z-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Category Pills Filter Bar */}
      <div className="px-3 sm:px-1 mb-3 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar py-1">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected =
              activeCategory === cat.name ||
              (activeCategory === "All" && currentSlide.category === cat.name);
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => handleCategorySelect(cat.name)}
                className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-[#a0cc28] text-black shadow-md shadow-[#a0cc28]/30 font-extrabold scale-[1.02]"
                    : "bg-white/10 hover:bg-white/15 text-gray-200 border border-white/10"
                }`}
              >
                <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Slide Counter & Play/Pause */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-gray-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shrink-0">
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
          - Mobile: Large near-full-screen height (72vh / 72svh, min-h 500px), edge-to-edge full width
          - Desktop: 520px - 580px wide cinematic widescreen
      */}
      <div className="relative w-full h-[72vh] h-[72svh] min-h-[500px] md:min-h-0 md:h-[520px] lg:h-[580px] sm:rounded-3xl overflow-hidden shadow-2xl border-y sm:border border-white/15 bg-black group">
        {/* Render all 16 destination slides with smooth crossfades */}
        {PDF_DESTINATIONS.map((slide, index) => {
          const isActive = index === currentIndex;
          const isNext = index === nextIndex;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Full-width, full-cover destination photograph with Ken Burns zoom */}
              <div
                className={`relative w-full h-full transition-transform duration-[6000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={`${slide.name} (${slide.nameHindi}) - Saishree Tours Maharashtra`}
                  fill
                  priority={index === 0 || isActive || isNext}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1400px"
                  className="object-cover"
                  style={{ objectPosition: slide.focalPosition || "center center" }}
                />
              </div>

              {/* Cinematic Vignette Gradients: ensures text contrast over bright skies & oceans */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 via-50% to-black/25 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40 pointer-events-none" />
            </div>
          );
        })}

        {/* Top Floating Badges (Category & Counter on Mobile) */}
        <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-[#a0cc28] border border-white/20 text-xs font-black uppercase tracking-wider shadow-lg">
            <Compass className="w-3.5 h-3.5 text-[#a0cc28]" />
            {currentSlide.category}
          </span>

          <div className="sm:hidden flex items-center gap-1.5 bg-black/65 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-extrabold text-white shadow-lg pointer-events-auto">
            <span className="text-[#a0cc28]">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="text-gray-400">/</span>
            <span>{String(totalSlides).padStart(2, "0")}</span>
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="ml-1 text-gray-300"
              aria-label="Toggle auto play"
            >
              {isPaused ? <Play className="w-3 h-3 text-[#a0cc28]" /> : <Pause className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Destination Information Overlay (Bottom-anchored, highly readable) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 md:p-8 pointer-events-auto">
          <div className="max-w-3xl">
            {/* Location Pill */}
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#a0cc28] text-black text-[11px] sm:text-xs font-black uppercase tracking-wider">
                <MapPin className="w-3 h-3 fill-black text-black" />
                {currentSlide.location}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-200">
                {currentSlide.tagline}
              </span>
            </div>

            {/* Destination Name in English and Hindi from PDF */}
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-2">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-xl uppercase">
                {currentSlide.name}
              </h2>
              <span className="text-lg sm:text-2xl font-bold text-[#a0cc28] drop-shadow-md">
                ({currentSlide.nameHindi})
              </span>
            </div>

            {/* Authentic Hindi Description from the PDF */}
            <p className="text-sm sm:text-base text-white/95 font-medium leading-relaxed drop-shadow-md line-clamp-2 sm:line-clamp-none max-w-2xl mb-1">
              {currentSlide.hindiDescription}
            </p>

            {/* English Supporting Detail */}
            <p className="text-xs sm:text-sm text-gray-300 line-clamp-1 max-w-2xl">
              {currentSlide.description}
            </p>

            {/* Quick Action Pill to scroll to booking form */}
            <div className="mt-3 flex items-center gap-3">
              <a
                href="#booking-form"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#a0cc28] hover:bg-[#8eb822] text-black font-extrabold text-xs sm:text-sm transition-transform active:scale-95 shadow-lg"
              >
                <span>Book Cab for {currentSlide.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] sm:text-xs text-gray-300 hidden sm:inline">
                Reliable AC Cabs &bull; 24/7 Pickup from Pune &amp; Mumbai
              </span>
            </div>
          </div>
        </div>

        {/* Manual Navigation Arrows (Left / Right) */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous destination"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#a0cc28] text-white hover:text-black border border-white/20 hover:border-[#a0cc28] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl active:scale-90"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          aria-label="Next destination"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#a0cc28] text-white hover:text-black border border-white/20 hover:border-[#a0cc28] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-xl active:scale-90"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Slide Indicators (Dots on Bottom Right) */}
        <div className="hidden md:flex absolute bottom-6 right-6 z-20 items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-2 rounded-full border border-white/15">
          {PDF_DESTINATIONS.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.name}`}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-6 h-1.5 bg-[#a0cc28] shadow-xs shadow-[#a0cc28]"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
