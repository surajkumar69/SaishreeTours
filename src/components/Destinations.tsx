"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Calendar,
  Sparkles,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { POPULAR_DESTINATIONS } from "@/lib/constants";
import { getDestinationWhatsAppUrl } from "@/lib/whatsapp";

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-[#0d1017] relative border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/20 text-[#d4a843] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Top Weekend & Holiday Getaways
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Popular Destinations From Pune
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
            Explore scenic hill stations, coastal beaches, and sacred pilgrimage circuits
            with our dedicated outstation cabs and tour packages.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {POPULAR_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="group bg-[#12161f] border border-gray-800 hover:border-[#d4a843]/50 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between"
            >
              <div>
                {/* Destination Image */}
                <div className="relative aspect-[16/9] w-full bg-[#0a0c10] overflow-hidden rounded-t-3xl">
                  <Image
                    src={dest.image}
                    alt={`${dest.name} Tour Package - Saishree Tours`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12161f] via-[#12161f]/40 to-transparent" />

                  {/* Distance Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-black/80 backdrop-blur-md text-[#f3cf7a] border border-[#d4a843]/30">
                      <MapPin className="w-3 h-3 text-[#d4a843]" />
                      {dest.distanceFromPune}
                    </span>
                  </div>

                  {/* Travel Time Pill */}
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/80 backdrop-blur-md text-gray-300 border border-gray-700">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      {dest.travelTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#f3cf7a] transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-[#d4a843] font-medium mt-0.5">
                      {dest.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {dest.description}
                  </p>

                  {/* Attractions Tags */}
                  <div className="space-y-1.5 pt-2 border-t border-gray-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Top Spots:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {dest.popularFor.map((spot, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-gray-800/80 text-gray-300 border border-gray-700/60"
                        >
                          {spot}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Best Season */}
                  <div className="text-[11px] text-gray-400 flex items-center gap-1 pt-1">
                    <Calendar className="w-3.5 h-3.5 text-[#d4a843]" />
                    <span>Best time: <strong className="text-gray-200">{dest.bestTime}</strong></span>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-5 pt-0">
                <a
                  href={getDestinationWhatsAppUrl(dest.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Get Tour Package on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
