"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Users,
  Compass,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-[#0b0d10] relative overflow-hidden border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              <div className="relative h-96 sm:h-[460px] w-full">
                <Image
                  src="/images/fleet-innova-crysta.jpg"
                  alt="Saishree Tours Chauffeur Driven Luxury Innova Crysta"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-transparent" />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#12161f]/95 border border-[#d4a843]/30 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d4a843]/20 border border-[#d4a843]/40 flex items-center justify-center text-[#d4a843] shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base">
                      Pune&apos;s Trusted Travel Partner
                    </h4>
                    <p className="text-xs text-gray-400">
                      Based in New Sangvi, Pune. Serving all over Maharashtra & India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/20 text-[#d4a843] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              About Saishree Tours
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Journey Beyond Destination.
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Headquartered in <strong>New Sangvi, Pune</strong>, <strong className="text-white">Saishree Tours</strong> is a premier travel, car rental, and luxury bus charter company dedicated to delivering exceptional journey experiences for tourists, corporate clients, families, and pilgrims.
            </p>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Whether you need a swift early-morning airport drop to Mumbai or Pune Airport, a relaxing family road trip to the misty peaks of Mahabaleshwar and Lonavala, a 17-seater Tempo Traveller for an office retreat, or a multi-axle luxury bus for a wedding procession, Saishree Tours guarantees immaculate cleanliness, punctual service, and total safety.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#12161f] border border-gray-800">
                <div className="p-2 rounded-xl bg-[#d4a843]/15 text-[#d4a843] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Safety First</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Police-verified chauffeurs with proven highway and ghat experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#12161f] border border-gray-800">
                <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Zero Delays</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Vehicle arrives at your doorstep 15 minutes prior to scheduled pickup.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#12161f] border border-gray-800">
                <div className="p-2 rounded-xl bg-[#ff4d4d]/15 text-[#ff6b6b] shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Transparent Tariff</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Clear per-km and fixed package quotes. No surge pricing or hidden costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#12161f] border border-gray-800">
                <div className="p-2 rounded-xl bg-blue-500/15 text-blue-400 shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">End-to-End Solutions</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    From 4-seater sedans to 50-seater tourist buses and hotel packages.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat with Founder on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-gray-200 bg-gray-900 border border-gray-700 hover:border-[#d4a843]"
              >
                <Phone className="w-4 h-4 text-[#d4a843]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
