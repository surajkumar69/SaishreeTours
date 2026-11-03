"use client";

import React from "react";
import {
  MapPin,
  CarFront,
  CheckCircle,
  Smile,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { HOW_IT_WORKS, BUSINESS_INFO } from "@/lib/constants";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function HowItWorks() {
  const icons = [MapPin, CarFront, CheckCircle, Smile];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0b0d10] via-[#0f1218] to-[#0b0d10] relative overflow-hidden border-y border-gray-800/60">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d4a843]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/20 text-[#d4a843] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
            Booking your taxi or luxury bus with Saishree Tours takes less than a minute.
            Enjoy effortless travel from pickup to drop-off.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS.map((item, index) => {
            const IconComponent = icons[index];
            return (
              <div
                key={item.step}
                className="relative group bg-[#141822]/80 hover:bg-[#181d29] border border-gray-800 hover:border-[#d4a843]/40 rounded-3xl p-6 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                {/* Step Number Top Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d4a843]/20 to-transparent border border-[#d4a843]/30 flex items-center justify-center text-[#d4a843] group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-gray-700/60 group-hover:text-[#d4a843]/40 transition-colors font-mono">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f3cf7a] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Step Connector Indicator for Desktop */}
                {index < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-gray-600">
                    <ArrowRight className="w-5 h-5 text-[#d4a843]/60" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Careem-inspired Quick Booking Strip Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#171b25] via-[#1c2230] to-[#171b25] border border-gray-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#d4a843]/15 border border-[#d4a843]/30 flex items-center justify-center text-[#d4a843] shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Need Instant Confirmation in 2 Minutes?
              </h4>
              <p className="text-xs sm:text-sm text-gray-400">
                Call our dispatch team directly at{" "}
                <span className="text-white font-semibold">{BUSINESS_INFO.phone}</span> or{" "}
                <span className="text-white font-semibold">{BUSINESS_INFO.officePhone}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 hover:scale-105 transition-transform"
            >
              <span>Book via WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs sm:text-sm font-semibold flex items-center justify-center border border-gray-700 transition-colors"
            >
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
