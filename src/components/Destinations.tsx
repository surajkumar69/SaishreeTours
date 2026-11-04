"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Calendar,
  MessageCircle,
  Sparkles,
  Waves,
  BedDouble,
  Utensils,
  Wifi,
  Palmtree,
  Car,
  Phone,
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
            Explore scenic hill stations, coastal beaches, luxury resorts, and sacred pilgrimage circuits
            with our dedicated outstation cabs and tour packages from Pune.
          </p>
        </div>

        {/* Destination Cards Grid */}
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

        {/* Featured Beach Stay Partner: Diveagar Beach View Resort */}
        <div className="mt-14 bg-white rounded-3xl border border-gray-200/90 hover:border-[#a0cc28] shadow-md overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Full High-Resolution Poster / Photograph */}
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto w-full min-h-[280px] lg:min-h-[420px] bg-gray-900 overflow-hidden">
              <Image
                src="/images/diveagar-beach-resort.jpg"
                alt="Diveagar Beach View Resort - Diveagar Maharashtra"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#a0cc28] text-black shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-black" />
                  Featured Beach Stay Partner
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-black/80 text-white backdrop-blur-md">
                  <MapPin className="w-3.5 h-3.5 text-[#a0cc28]" />
                  Diveagar, Maharashtra
                </span>
              </div>
            </div>

            {/* Right: Resort Details & Verified Amenities */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-white via-white to-gray-50/50">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6e9418] mb-2">
                  <span>Konkan Coastal Getaway</span>
                  <span>&bull;</span>
                  <span>160 km from Pune</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
                  Diveagar Beach View Resort
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  Escape to pure coastal serenity with direct sea-view rooms, private balcony sit-outs, lush tropical coconut plantations, and authentic Konkani dining. Perfect for family weekends, couples, and group getaways with round-trip AC cab pickup from Pune.
                </p>

                {/* 6 Key Amenities Directly From the Resort Poster */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-800">
                    <Waves className="w-4 h-4 text-[#a0cc28] shrink-0" />
                    <span>Sea View Rooms</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-800">
                    <BedDouble className="w-4 h-4 text-[#a0cc28] shrink-0" />
                    <span>Comfortable Stay</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-800">
                    <Utensils className="w-4 h-4 text-[#a0cc28] shrink-0" />
                    <span>In-house Dining</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-800">
                    <Wifi className="w-4 h-4 text-[#a0cc28] shrink-0" />
                    <span>Wi-Fi Access</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-800">
                    <Palmtree className="w-4 h-4 text-[#a0cc28] shrink-0" />
                    <span>Lush Greenery</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-800">
                    <Car className="w-4 h-4 text-[#a0cc28] shrink-0" />
                    <span>Ample Parking</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-gray-100">
                <a
                  href="https://wa.me/918530847555?text=*Namaste%20Saishree%20Tours!*%20%F0%9F%8F%96%EF%B8%8F%0A%0AI%20want%20to%20inquire%20about%20the%20*Diveagar%20Beach%20View%20Resort*%20package%20(Diveagar%2C%20Maharashtra).%0A%0APlease%20share%20room%20options%2C%20tariff%2C%20availability%2C%20and%20cab%20package%20details%20from%20Pune.%0A%0AThank%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl text-xs sm:text-sm font-extrabold text-white bg-[#25D366] hover:bg-[#20be5b] shadow-md hover:shadow-lg transition-all active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Book Resort &amp; Cab Package on WhatsApp</span>
                </a>
                <div className="flex items-center justify-between text-[11px] text-gray-500 px-1">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#a0cc28]" />
                    <span>Direct Helpline: +91 85308 47555</span>
                  </span>
                  <span className="font-semibold text-[#6e9418]">AC Cab + Stay Packages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
