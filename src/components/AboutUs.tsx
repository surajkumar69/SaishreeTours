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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Chauffeur & Vehicle Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="relative h-96 sm:h-[460px] w-full">
                <Image
                  src={FLEET_IMAGES.innovaCrysta}
                  alt="Saishree Tours Chauffeur Driven Luxury Innova Crysta"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#a0cc28]/20 border border-[#a0cc28]/40 flex items-center justify-center text-[#6e9418] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-sm">
                      Pune&apos;s Trusted Travel Partner
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      Based in New Sangvi, Pune. Serving all Maharashtra &amp; India.
                    </p>
                  </div>
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
