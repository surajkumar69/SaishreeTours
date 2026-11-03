"use client";

import React from "react";
import {
  Car,
  UserCheck,
  Clock,
  Tag,
  MessageSquare,
  Shield,
  Sliders,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Car,
  UserCheck,
  Clock,
  Tag,
  MessageSquare,
  Shield,
  Sliders,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#0b0d10] relative overflow-hidden border-t border-gray-800/60">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a843]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d32f2f]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/20 text-[#d4a843] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            The Saishree Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Why Choose Saishree Tours?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
            We don&apos;t just provide a cab; we deliver peace of mind, punctuality,
            and courteous hospitality for every kilometer of your journey.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || CheckCircle2;

            return (
              <div
                key={item.title}
                className={`bg-[#131722]/90 border border-gray-800/80 hover:border-[#d4a843]/40 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d4a843]/5 flex flex-col justify-between ${
                  index === 0 ? "lg:col-span-2 xl:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d4a843]/20 to-transparent border border-[#d4a843]/30 flex items-center justify-center text-[#d4a843] mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-800/60 flex items-center gap-1.5 text-[11px] text-[#f3cf7a] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}

          {/* Quick Statistics Card */}
          <div className="bg-gradient-to-br from-[#1a202c] via-[#12161f] to-[#0b0d10] border border-[#d4a843]/30 rounded-3xl p-6 flex flex-col justify-between text-left">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#d4a843] mb-2">
                Trusted by Pune
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                10,000+
              </div>
              <div className="text-xs text-gray-400 mt-1 mb-4">
                Successful journeys completed across Maharashtra and India.
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-gray-800 text-xs text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-400">Punctuality Record:</span>
                <span className="font-bold text-emerald-400">99.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Google / Traveler Rating:</span>
                <span className="font-bold text-[#f3cf7a]">4.9 / 5.0 ★</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Support Availability:</span>
                <span className="font-bold text-white">24/7/365</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
