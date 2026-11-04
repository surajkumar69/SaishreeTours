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
  Phone,
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

  // 5 Featured Fleet Archetypes directly matching the reference screenshot row:
  // Economy, Max, Prime / Family, Business, First Class
  const featuredArchetypes = [
    {
      id: "swift-dzire",
      title: "Economy",
      model: "Swift Dzire / Xcent",
      capacity: "4 Passengers",
      image: "/images/fleet-swift-dzire.jpg",
      tag: "Best City & Highway Value",
      price: "From ₹11/km",
    },
    {
      id: "mahindra-scorpio",
      title: "Max",
      model: "Mahindra Scorpio / XUV500",
      capacity: "6-7 Passengers",
      image: "/images/fleet-mahindra-scorpio.jpg",
      tag: "High Ground Clearance",
      price: "From ₹15/km",
    },
    {
      id: "maruti-ertiga",
      title: "Prime / Family",
      model: "Maruti Suzuki Ertiga",
      capacity: "6-7 Passengers",
      image: "/images/fleet-maruti-ertiga.jpg",
      tag: "Family Favorite MPV",
      price: "From ₹14/km",
    },
    {
      id: "innova-crysta",
      title: "Business",
      model: "Toyota Innova Crysta",
      capacity: "6-7 Passengers",
      image: "/images/fleet-innova-crysta.jpg",
      tag: "Executive VIP Luxury",
      price: "From ₹18/km",
    },
    {
      id: "tempo-traveller-17",
      title: "First Class",
      model: "17 Seater Tempo & Coaches",
      capacity: "17-45 Passengers",
      image: "/images/fleet-tempo-traveller-17.jpg",
      tag: "Pushback Group Travel",
      price: "From ₹25/km",
    },
  ];

  return (
    <section id="fleet" className="py-20 sm:py-24 bg-[#f8f9fb] text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Exact match for reference: THE FLEET + subtitle) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-900">
            The Fleet
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 font-normal">
            Get a ride that matches your style and budget
          </p>

          {/* Reference Blueprint Featured Row: 5 Clean Vehicles Across */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-10">
            {featuredArchetypes.map((item) => (
              <a
                key={item.id}
                href={getVehicleWhatsAppUrl(item.model, item.capacity)}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-4 border border-gray-200/80 hover:border-[#a0cc28] shadow-xs hover:shadow-md transition-all text-center flex flex-col justify-between"
              >
                <div>
                  {/* Clean Vehicle Photo */}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-gray-50 mb-3">
                    <Image
                      src={item.image}
                      alt={`${item.title} - ${item.model}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-extrabold text-gray-900 group-hover:text-[#a0cc28] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    {item.model}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1">
                    {item.capacity}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#a0cc28]">
                    {item.price}
                  </span>
                  <span className="text-[10px] font-bold text-gray-700 bg-gray-100 group-hover:bg-[#a0cc28] group-hover:text-black px-2 py-0.5 rounded-full transition-colors">
                    Book
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Detailed Fleet Browser: All 11 Verified Vehicles Preserved */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Explore Full Vehicle Specifications
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                All 11 vehicles are commercially licensed, sanitised, and chauffeur driven
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-[#a0cc28] text-black shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat === "All" ? "All (11)" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Complete Fleet Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group bg-white border border-gray-200 hover:border-[#a0cc28] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Distinct High-Res Vehicle Photograph */}
                  <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} (${vehicle.category}) - Saishree Tours Pune`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Overlay Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-gray-900 border border-gray-200 shadow-sm">
                        {vehicle.category}
                      </span>
                      {vehicle.tag && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-[#a0cc28] text-black shadow-sm">
                          {vehicle.tag}
                        </span>
                      )}
                    </div>

                    {vehicle.ac && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
                          <Wind className="w-3 h-3 text-emerald-600" />
                          Dual AC
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Vehicle Details */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#a0cc28] transition-colors">
                        {vehicle.name}
                      </h4>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {vehicle.description}
                    </p>

                    {/* Capacity & Luggage Badges */}
                    <div className="grid grid-cols-2 gap-2 p-3 bg-gray-50 rounded-2xl mb-4 border border-gray-100 text-xs">
                      <div className="flex items-center gap-2 text-gray-700 font-semibold">
                        <Users className="w-4 h-4 text-[#a0cc28] shrink-0" />
                        <span>{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 font-semibold">
                        <Briefcase className="w-4 h-4 text-gray-400 shrink-0" />
                        <span>{vehicle.luggage}</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-1.5">
                      {vehicle.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-gray-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  <a
                    href={getVehicleWhatsAppUrl(vehicle.name, vehicle.capacity)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-sm transition-all transform group-hover:scale-101"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire Rates on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
