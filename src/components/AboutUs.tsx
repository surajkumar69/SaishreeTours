"use client";

import React from "react";
import Image from "next/image";
import {
  Award,
  Phone,
  Building,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FLEET_IMAGES } from "@/lib/images";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#f8f9fb] text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Chauffeur & Vehicle Showcase */}
          <div className="lg:col-span-5 space-y-4">
            {/* Properly Sized Image Container Showing Complete Car with Original Proportions */}
            <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl group">
              <Image
                src={FLEET_IMAGES.toyotaInnova}
                alt="Saishree Tours Toyota Innova Chauffeur Driven Taxi in Pune"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                priority
              />
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-gray-900 shadow-sm border border-gray-200">
                  Toyota Innova • Executive Fleet
                </span>
              </div>
            </div>

            {/* Experience & Trust Badge */}
            <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-md">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#a0cc28]/20 border border-[#a0cc28]/40 flex items-center justify-center text-[#6e9418] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm sm:text-base">
                    Pune&apos;s Trusted Travel Partner
                  </h4>
                  <p className="text-xs text-gray-500">
                    Based in New Sangvi, Pune. Serving all Maharashtra &amp; India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-8 h-px bg-gray-300" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a0cc28]">
                  ABOUT SAISHREE TOURS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                Journey Beyond Destination
              </h2>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Saishree Tours is a premier cab and bus rental company based in New Sangvi, Pune.
              We specialize in reliable Pune-Mumbai daily travel, outstation taxis, executive airport transfers,
              17-seater Tempo Travellers, and luxury tourist coach charters across Maharashtra and India.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              Every trip is handled with absolute punctuality, professional RTO-verified chauffeurs, spotless climate-controlled interiors, and 100% upfront transparent billing.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Police & Commercial RTO Verified Drivers",
                "Clean, Sanitized Fleet with Dual A/C",
                "Transparent Per-km & Package Fares",
                "24/7 Reservation & Dispatch Desk",
                "Specialists in Mumbai-Pune Expressway",
                "Large Coaches for Weddings & Corporate",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-[#a0cc28] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact Desk with BOTH Mandatory Phone Numbers */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-xl text-xs font-bold hover:bg-[#a0cc28] hover:text-black transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Booking: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
                className="flex items-center gap-2 px-4 py-2.5 bg-white text-gray-800 border border-gray-200 rounded-xl text-xs font-semibold hover:border-gray-400 transition-colors"
              >
                <Building className="w-3.5 h-3.5 text-blue-600" />
                <span>Office: {BUSINESS_INFO.officePhone}</span>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded-xl text-xs font-bold hover:bg-[#20be5b] shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
