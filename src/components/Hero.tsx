"use client";

import React from "react";
import Image from "next/image";
import { Clock, Shield, Sparkles } from "lucide-react";
import BookingForm from "./BookingForm";
import { COMMON_IMAGES } from "@/lib/images";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col items-center justify-between pt-10 sm:pt-14 pb-12 sm:pb-16 overflow-hidden bg-[#10141c]">
      {/* City Highway Traffic Background (Matching reference) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={COMMON_IMAGES.heroBanner}
          alt="Saishree Tours Highway Night Traffic in Pune Mumbai"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.52] contrast-[1.12]"
        />
        {/* Soft Vignette & Contrast Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#10141c]/80 via-black/40 to-[#10141c]/90" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex-1 flex flex-col items-center justify-center">
        {/* Main Headline (Exact match for the typography and uppercase bold layout in reference) */}
        <div className="max-w-4xl mx-auto space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08] uppercase drop-shadow-xl">
            Book Your Comfortable &amp; <br className="hidden sm:inline" />
            Hassle-Free Ride
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-gray-200 drop-shadow-md">
            In Pune, Mumbai &amp; Outstation in Seconds!
          </p>
        </div>

        {/* Centerpiece: Careem-Themed Map Pin Booking Form */}
        <BookingForm />
      </div>

      {/* Stylized Curving Road Graphic (Exact match for reference road looping across bottom) */}
      <div className="curved-road-bg">
        <svg
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Main dark asphalt road ribbon */}
          <path
            d="M -50,60 C 250,140 500,120 720,70 C 940,20 1200,60 1490,40 L 1490,140 L -50,140 Z"
            fill="#262c36"
            stroke="#475569"
            strokeWidth="3"
          />
          {/* Dashed white highway lane stripes */}
          <path
            d="M -50,100 C 250,175 500,155 720,105 C 940,55 1200,95 1490,75"
            stroke="#ffffff"
            strokeWidth="4"
            strokeDasharray="24 20"
            strokeOpacity="0.85"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
