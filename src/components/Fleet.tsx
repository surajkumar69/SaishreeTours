"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  Briefcase,
  Wind,
  Check,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { FLEET_DATA, Vehicle } from "@/lib/constants";
import { getVehicleWhatsAppUrl } from "@/lib/whatsapp";

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Sedan", "MPV", "SUV", "Minibus", "Luxury Coach"];

  const filteredVehicles =
    activeCategory === "All"
      ? FLEET_DATA
      : FLEET_DATA.filter((v) => v.category === activeCategory);

  return (
    <section id="fleet" className="py-20 bg-[#0b0d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/20 text-[#d4a843] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Executive & Economy Options
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Premium Fleet
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
            From city sedans and luxury Innova Crystas to 17-seater Tempo Travellers
            and multi-axle luxury tourist coaches — maintained to spotless showroom standards.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#d4a843] text-black shadow-lg shadow-[#d4a843]/20 font-bold scale-105"
                    : "bg-[#141822] text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-800"
                }`}
              >
                {cat === "All" ? "All Vehicles (11)" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group bg-[#12161f] border border-gray-800/80 hover:border-[#d4a843]/50 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4a843]/10 flex flex-col justify-between"
            >
              <div>
                {/* Vehicle Image Container */}
                <div className="relative h-56 sm:h-64 w-full bg-[#0a0c10] overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} - Saishree Tours Pune`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-black/75 backdrop-blur-md text-[#f3cf7a] border border-[#d4a843]/40">
                      {vehicle.category}
                    </span>
                    {vehicle.tag && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-[#d32f2f] text-white shadow-md">
                        {vehicle.tag}
                      </span>
                    )}
                  </div>

                  {/* AC badge */}
                  {vehicle.ac && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800 backdrop-blur-sm">
                        <Wind className="w-3 h-3" />
                        A/C Chilled
                      </span>
                    </div>
                  )}

                  {/* Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12161f] via-transparent to-transparent opacity-80" />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Name */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#f3cf7a] transition-colors">
                      {vehicle.name}
                    </h3>
                  </div>

                  {/* Specs Bar (Capacity & Luggage) */}
                  <div className="flex items-center gap-4 py-2.5 px-3.5 bg-[#090b0e] rounded-2xl border border-gray-800 text-xs text-gray-300">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#d4a843]" />
                      <span className="font-semibold text-white">{vehicle.capacity}</span>
                    </div>
                    <span className="text-gray-700">|</span>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-gray-400" />
                      <span>{vehicle.luggage}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2">
                    {vehicle.description}
                  </p>

                  {/* Features Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {vehicle.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-gray-800/80 text-gray-300 border border-gray-700/50"
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 sm:p-6 pt-0">
                <a
                  href={getVehicleWhatsAppUrl(vehicle.name, vehicle.capacity)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] flex items-center justify-center gap-2 shadow-md shadow-emerald-950/40 hover:shadow-emerald-900/50 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Book {vehicle.name.split(" ")[0]} on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Bottom Note */}
        <div className="mt-12 text-center text-xs text-gray-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#d4a843]" />
          <span>All vehicles are commercial RTO registered, fully insured, sanitized, and tracked via GPS.</span>
        </div>
      </div>
    </section>
  );
}
