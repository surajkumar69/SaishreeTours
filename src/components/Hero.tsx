"use client";

import React from "react";
import Image from "next/image";
import {
  Shield,
  Star,
  Clock,
  Phone,
  MessageCircle,
  MapPin,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import BookingForm from "./BookingForm";
import { BUSINESS_INFO } from "@/lib/constants";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-8 pb-16 lg:py-20 overflow-hidden">
      {/* Background Image with Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="Saishree Tours Premium Fleet on Western Ghats Highway at Sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.42] contrast-[1.08] scale-105 transition-transform duration-1000"
        />
        {/* Gradients to blend into background and keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-[#0b0d10]/60 to-[#0b0d10]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d10]/90 via-[#0b0d10]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Trust Badges, Value Props */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 text-left">
            {/* Careem-inspired Location Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161a22]/80 border border-[#d4a843]/30 backdrop-blur-md shadow-lg">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-gray-200 tracking-wide">
                Premier Pune Cab & Bus Service
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-xs text-[#f3cf7a] font-bold">
                New Sangvi, Pune
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Your Journey, <br className="hidden sm:inline" />
                <span className="gold-gradient-text drop-shadow-md">
                  Our Responsibility.
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal max-w-2xl pt-2 leading-relaxed">
                Comfortable, Safe & Reliable Travel Services for Every Journey.
                From daily Pune-Mumbai expressway cabs to luxury tempo travellers
                and holiday tours across India.
              </p>
            </div>

            {/* Trust Highlights Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-black/40 border border-gray-800/80 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-xl bg-[#d4a843]/15 text-[#d4a843] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">24/7 Available</div>
                  <div className="text-[10px] text-gray-400">On-Time Pickup</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-black/40 border border-gray-800/80 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Verified Drivers</div>
                  <div className="text-[10px] text-gray-400">Safe Highway Pros</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-black/40 border border-gray-800/80 backdrop-blur-sm col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-xl bg-[#ff4d4d]/15 text-[#ff6b6b] flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 fill-[#ff6b6b]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">4.9 / 5.0 Rating</div>
                  <div className="text-[10px] text-gray-400">10,000+ Trips Done</div>
                </div>
              </div>
            </div>

            {/* Direct Call / Contact Quick Action */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] shadow-lg shadow-emerald-950/40 transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Quote</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-gray-200 bg-gray-900/80 hover:bg-gray-800 border border-gray-700/80 transition-all hover:border-[#d4a843]"
              >
                <Phone className="w-4 h-4 text-[#d4a843]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Quick Fleet Indicators */}
            <div className="pt-2 text-xs text-gray-400 flex items-center gap-2">
              <span className="text-gray-300 font-medium">Fleet includes:</span>
              <span className="text-gray-400">
                Swift Dzire • Ertiga • Innova Crysta • Scorpio • 17-Seater Tempo • Luxury Buses
              </span>
            </div>
          </div>

          {/* Right Column: Modern Rounded Booking Form */}
          <div className="lg:col-span-6 xl:col-span-5">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
