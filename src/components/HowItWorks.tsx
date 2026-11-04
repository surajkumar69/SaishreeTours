"use client";

import React from "react";
import Image from "next/image";
import {
  Phone,
  Building,
  MessageCircle,
  Menu,
  CheckCircle2,
  Calendar,
  Clock,
  CarFront,
  ShieldCheck,
} from "lucide-react";
import { HOW_IT_WORKS, BUSINESS_INFO } from "@/lib/constants";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-white text-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Centered Divider & Title (Exact match for reference) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-12 h-px bg-gray-300" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
              HOW IT WORKS
            </span>
            <span className="w-12 h-px bg-gray-300" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-gray-900 mt-1">
            Book A Ride Easily
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-4 leading-relaxed font-normal max-w-xl mx-auto">
            Already a user? Use the Saishree Tours booking to reserve a car. You can also call or email us and we&apos;ll be happy to assist you. Choose between booking a car to come to you now, or scheduling a ride for later by selecting a specific date and time.
          </p>
        </div>

        {/* Two-Column Layout: Smartphone Mockup (Left) + Steps & Benefits (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
          {/* Left Column: White Smartphone Frame Mockup (Matching reference screenshot) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72 bg-white rounded-[44px] p-3.5 shadow-2xl border-4 border-gray-200">
              {/* Speaker slit & camera dot */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-gray-300" />
                <span className="w-14 h-1.5 rounded-full bg-gray-300" />
              </div>

              {/* Smartphone Screen Content */}
              <div className="bg-[#f8fafc] border border-gray-200 rounded-[32px] p-5 shadow-inner flex flex-col justify-between min-h-[360px]">
                {/* App Screen Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="text-[11px] font-black tracking-wider text-gray-900">
                    SAISHREE TOURS
                  </span>
                  <Menu className="w-4 h-4 text-gray-700" />
                </div>

                {/* Question Prompt */}
                <div className="text-center my-4">
                  <p className="text-xs sm:text-sm font-extrabold text-gray-800">
                    When should we <br />
                    pick you up?
                  </p>
                </div>

                {/* Big Green Buttons (Matching reference NOW & LATER) */}
                <div className="space-y-3.5 my-2">
                  <a
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3.5 px-4 rounded-xl bg-[#a0cc28] hover:bg-[#8eb822] text-center shadow-md transition-transform active:scale-95"
                  >
                    <div className="text-sm font-black text-black uppercase tracking-wider">
                      NOW
                    </div>
                    <div className="text-[10px] text-gray-900 font-medium mt-0.5">
                      As soon as possible
                    </div>
                  </a>

                  <a
                    href="#booking-form"
                    className="block w-full py-3.5 px-4 rounded-xl bg-[#c5e64a] hover:bg-[#b2d633] text-center shadow-sm transition-transform active:scale-95"
                  >
                    <div className="text-sm font-black text-black uppercase tracking-wider">
                      LATER
                    </div>
                    <div className="text-[10px] text-gray-900 font-medium mt-0.5">
                      Schedule for later
                    </div>
                  </a>
                </div>

                {/* Footer status inside phone screen */}
                <div className="text-center pt-3 border-t border-gray-200">
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                    24/7 Available in Pune
                  </span>
                </div>
              </div>

              {/* Home button indicator */}
              <div className="w-12 h-1 rounded-full bg-gray-300 mx-auto mt-3" />
            </div>
          </div>

          {/* Right Column: 4 Clear Steps with Preserved Data + Both Mandatory Phone Numbers */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HOW_IT_WORKS.map((item) => (
                <div
                  key={item.step}
                  className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-[#a0cc28] transition-all hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-[#a0cc28] bg-[#a0cc28]/15 px-2.5 py-0.5 rounded-full">
                      Step {item.step}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Calling & Support Banner with BOTH Mandatory Phone Numbers */}
            <div className="p-5 rounded-2xl bg-[#1f2530] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div>
                <h4 className="text-sm font-extrabold text-white">
                  Prefer To Book By Phone?
                </h4>
                <p className="text-xs text-gray-300 mt-0.5">
                  Call our 24/7 reservation desks in New Sangvi, Pune
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold text-black bg-[#a0cc28] hover:bg-[#8eb822] rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors"
                >
                  <Building className="w-3.5 h-3.5 text-blue-400" />
                  <span>{BUSINESS_INFO.officePhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Across Section: Skyline Silhouette Vector, Road, Pins, White Car & Dots (Exact match for reference) */}
        <div className="mt-16 sm:mt-20 pt-6">
          <div className="relative w-full max-w-4xl mx-auto h-48 sm:h-64">
            <Image
              src="/images/skyline-road.svg"
              alt="Saishree Tours City Travel Network"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
