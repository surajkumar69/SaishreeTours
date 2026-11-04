"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, MapPin, CheckCircle2, MessageCircle } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { COMMON_IMAGES } from "@/lib/images";

export default function LandmarkFinder() {
  const [landmark, setLandmark] = useState("");
  const [resultMsg, setResultMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!landmark.trim()) return;

    setResultMsg(`Cab dispatch available in and around ${landmark.trim()}. Opening WhatsApp...`);

    const url = getWhatsAppBookingUrl({
      pickupLocation: landmark.trim(),
      customMessage: `Inquiry: Check cab availability near ${landmark.trim()} for immediate or scheduled booking.`,
    });

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <section className="relative py-20 sm:py-24 text-white overflow-hidden bg-[#12161f]">
      {/* Dark Evening City Street Background with Bokeh Lights (Matching Reference) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={COMMON_IMAGES.heroBanner}
          alt="Saishree Tours Pune City Street Night Travel"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.38] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10141c] via-black/50 to-[#10141c]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Title and Subtitle (Exact match for reference design) */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Find your nearest Saishree Tours Cab
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-300 font-normal mt-2.5 max-w-xl mx-auto">
          Enjoy your Comfortable, Professional, Safe &amp; Reliable ride today
        </p>

        {/* Input & Submit Button Form (Matching reference) */}
        <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
          <div className="space-y-3">
            <div className="relative">
              <input
                type="text"
                value={landmark}
                onChange={(e) => {
                  setLandmark(e.target.value);
                  if (resultMsg) setResultMsg(null);
                }}
                placeholder="Enter Pincode / Nearby Landmark"
                className="w-full px-5 py-3.5 bg-white text-gray-900 placeholder-gray-500 rounded-md text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#a0cc28] shadow-lg text-center"
              />
            </div>

            {/* Dark Submit Button with White Border (Exact match for reference button) */}
            <button
              type="submit"
              className="px-8 py-2.5 bg-[#1a202c]/90 hover:bg-[#1a202c] text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/60 rounded-md shadow-md transition-all active:scale-95 hover:border-white"
            >
              Submit
            </button>
          </div>

          {resultMsg && (
            <div className="mt-4 p-3 bg-emerald-950/80 border border-emerald-600 rounded-lg text-emerald-200 text-xs flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{resultMsg}</span>
            </div>
          )}

          {/* Popular Landmark Quick Buttons */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] text-gray-300">
            <span className="text-gray-400">Quick pickup points:</span>
            {["New Sangvi", "Pune Airport", "Pune Station", "Hinjawadi", "Wakad", "Kothrud", "Hadapsar"].map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => setLandmark(loc)}
                className="px-2.5 py-1 bg-black/60 hover:bg-[#a0cc28] hover:text-black rounded-full border border-gray-600 transition-colors"
              >
                {loc}
              </button>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
}
