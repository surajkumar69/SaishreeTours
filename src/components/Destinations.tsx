"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Calendar,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { POPULAR_DESTINATIONS } from "@/lib/constants";
import { getDestinationWhatsAppUrl } from "@/lib/whatsapp";

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 sm:py-24 bg-[#f8f9fb] text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 h-px bg-gray-300" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a0cc28]">
              TOUR PACKAGES &amp; GETAWAYS
            </span>
            <span className="w-10 h-px bg-gray-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-900">
            Popular Destinations
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 font-normal leading-relaxed">
            Explore scenic hill stations, coastal beaches, and sacred pilgrimage circuits
            with our dedicated outstation cabs and tour packages from Pune.
          </p>
        </div>

        {/* Destination Cards Grid (Preserves all 8 destinations) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {POPULAR_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-3xl border border-gray-200 hover:border-[#a0cc28] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Destination Photo */}
                <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={`${dest.name} Tour Package - Saishree Tours Pune`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Distance badge */}
                  <div className="absolute top-3 left-3">
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-gray-900 shadow-sm border border-gray-200">
                      <MapPin className="w-3 h-3 text-[#a0cc28]" />
                      {dest.distanceFromPune}
                    </span>
                  </div>

                  {/* Travel time */}
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/75 text-white backdrop-blur-xs">
                      <Clock className="w-3 h-3 text-[#a0cc28]" />
                      {dest.travelTime}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#a0cc28] transition-colors mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-[#6e9418] mb-2.5">
                    {dest.tagline}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3.5 line-clamp-2">
                    {dest.description}
                  </p>

                  {/* Popular spots */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {dest.popularFor.map((spot, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-gray-50 text-gray-600 border border-gray-100"
                      >
                        {spot}
                      </span>
                    ))}
                  </div>

                  {/* Best season */}
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-500 pt-2 border-t border-gray-100">
                    <Calendar className="w-3.5 h-3.5 text-[#a0cc28]" />
                    <span>Best Time: {dest.bestTime}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <a
                  href={getDestinationWhatsAppUrl(dest.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20be5b] shadow-xs transition-transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Book Tour Package</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
