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
  CheckCircle,
  Star,
  Users,
  Award,
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
    <section className="py-20 sm:py-24 bg-white text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 h-px bg-gray-300" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a0cc28]">
              THE SAISHREE PROMISE
            </span>
            <span className="w-10 h-px bg-gray-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 font-normal leading-relaxed">
            Founded with a commitment to reliability, comfort, and transparent pricing.
            Here is what makes Saishree Tours the preferred travel choice across Maharashtra.
          </p>
        </div>

        {/* 7 Trust Pillars Grid (Preserves all existing points) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || CheckCircle;
            return (
              <div
                key={index}
                className="p-6 rounded-3xl bg-[#f8f9fb] border border-gray-200/80 hover:border-[#a0cc28] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#a0cc28]/15 border border-[#a0cc28]/30 flex items-center justify-center text-[#6e9418] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* 8th Card: Rating & Verified Chauffeurs Badge */}
          <div className="p-6 rounded-3xl bg-[#1f2530] text-white flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center gap-1 text-[#a0cc28] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#a0cc28]" />
                ))}
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">
                4.9/5 Average Rating
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Trusted by thousands of Pune &amp; Mumbai daily commuters, families, and corporates.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-700 text-[11px] text-[#a0cc28] font-bold">
              100% Commercial RTO Fleet
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
