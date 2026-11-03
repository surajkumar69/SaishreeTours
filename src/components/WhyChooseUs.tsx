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
  ShieldCheck,
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

          {/* Transparent Pricing Policy Card */}
          <div className="bg-gradient-to-br from-[#1a202c] via-[#12161f] to-[#0b0d10] border border-[#d4a843]/30 rounded-3xl p-6 flex flex-col justify-between text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d4a843] mb-2">
                <ShieldCheck className="w-4 h-4 text-[#d4a843]" />
                Fare Transparency
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">
                Itemized Billing
              </div>
              <p className="text-xs text-gray-400 mt-2 mb-4 leading-relaxed">
                Every quote provides complete clarity before you depart. No hidden charges or surprise deductions on the road.
              </p>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-gray-800 text-xs text-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Highway Tolls & FASTag:</span>
                <span className="font-semibold text-white">Itemized / Actuals</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Airport & City Parking:</span>
                <span className="font-semibold text-white">At Actual Slips</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Night Driver Allowance:</span>
                <span className="font-semibold text-[#f3cf7a]">Only after 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Pune Helpline & Dispatch:</span>
                <span className="font-bold text-emerald-400">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
