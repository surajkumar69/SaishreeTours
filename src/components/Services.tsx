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
  ChevronRight,
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/lib/constants";
import { getServiceWhatsAppUrl } from "@/lib/whatsapp";

// Mapping string names to Lucide icons
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
    <section id="services" className="py-20 bg-[#0d1017] border-t border-gray-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/20 text-[#d4a843] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Comprehensive Travel Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Services
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
            Everything you need for seamless mobility across Pune, Maharashtra, and All India.
            20 dedicated travel services crafted with care and punctuality.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {serviceCategories.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-[#d4a843] text-black shadow-lg shadow-[#d4a843]/20 font-bold scale-105"
                    : "bg-[#141822] text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-800"
                }`}
              >
                {tab === "All" ? `All Services (${SERVICES_DATA.length})` : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Car;

            return (
              <div
                key={service.id}
                className="group bg-[#12161f] border border-gray-800 hover:border-[#d4a843]/40 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative aspect-[16/9] w-full bg-[#0a0c10] overflow-hidden rounded-t-3xl">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Saishree Tours Travel Service`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12161f] via-[#12161f]/40 to-transparent" />

                    {/* Category Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/80 backdrop-blur-md text-[#f3cf7a] border border-[#d4a843]/30">
                        {service.category}
                      </span>
                    </div>

                    {/* Icon Floating Badge */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-[#d4a843] text-black flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#f3cf7a] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1 pt-1 border-t border-gray-800/80">
                      {service.highlights.slice(0, 3).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 text-[11px] text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Button */}
                <div className="p-5 pt-0">
                  <a
                    href={getServiceWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Book on WhatsApp</span>
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
