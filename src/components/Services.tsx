"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Car,
  Compass,
  Plane,
  ArrowRightCircle,
  Repeat,
  Zap,
  Briefcase,
  Users,
  HeartHandshake,
  Sparkles,
  Bus,
  Ticket,
  ShieldCheck,
  Building,
  Palmtree,
  Map,
  Train,
  Camera,
  Globe,
  Sliders,
  MessageCircle,
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/lib/constants";
import { getServiceWhatsAppUrl } from "@/lib/whatsapp";

const iconMap: Record<string, React.ElementType> = {
  Car,
  Compass,
  Plane,
  ArrowRightCircle,
  Repeat,
  Zap,
  Briefcase,
  Users,
  HeartHandshake,
  Sparkles,
  Bus,
  Ticket,
  ShieldCheck,
  Building,
  Palmtree,
  Map,
  Train,
  Camera,
  Globe,
  Sliders,
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const serviceCategories = ["All", "Cab & Taxi", "Buses & Tempo", "Tours & Stays"];

  const filteredServices =
    activeTab === "All"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-20 sm:py-24 bg-white text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 h-px bg-gray-300" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a0cc28]">
              COMPLETE TRAVEL SOLUTIONS
            </span>
            <span className="w-10 h-px bg-gray-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-900">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 font-normal leading-relaxed">
            From daily Pune-Mumbai express cabs and airport transfers to group Tempo Travellers,
            multi-axle luxury tourist coaches, and customized holiday packages.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === cat
                    ? "bg-[#a0cc28] text-black shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                {cat === "All" ? "All Services (20)" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (Preserves all 20 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl border border-gray-200 hover:border-[#a0cc28] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[16/9] w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Saishree Tours Pune`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Category Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-gray-900 shadow-sm border border-gray-200">
                        {service.category}
                      </span>
                    </div>

                    {service.popularRoute && (
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="block px-2.5 py-1 rounded-lg text-[10px] font-bold bg-black/75 text-[#c5e64a] backdrop-blur-xs truncate">
                          {service.popularRoute}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#a0cc28]/15 border border-[#a0cc28]/30 flex items-center justify-center text-[#6e9418] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#a0cc28] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Highlights Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-gray-50 text-gray-700 border border-gray-100"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="p-6 pt-0">
                  <a
                    href={getServiceWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20be5b] shadow-sm transition-transform active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire for {service.title}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
