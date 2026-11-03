import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Plane,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Info,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import BookingForm from "@/components/BookingForm";
import { BUSINESS_INFO, FLEET_DATA } from "@/lib/constants";
import { SERVICE_IMAGES } from "@/lib/images";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Pune Airport Pickup & Drop Cab Service | 24/7 Transfers | Saishree Tours",
  description:
    "Reliable Pune Airport (PNQ) and Mumbai Airport (BOM) cab booking. Professional chauffeurs, flight tracking, punctual curbside pickup, and transparent fares with parking explained. Call +91 85308 47555.",
  keywords: [
    "Pune Airport Pickup and Drop",
    "Pune Airport Cab",
    "Pune to Mumbai Airport Cab",
    "Airport Taxi Pune",
    "Lohegaon Airport Cab Service",
  ],
  alternates: {
    canonical: "https://saishreetours.vercel.app/pune-airport-cab",
  },
};

export default function PuneAirportCabPage() {
  const airportVehicles = FLEET_DATA.filter((v) =>
    ["swift-dzire", "maruti-ertiga", "toyota-innova-crysta"].includes(v.id)
  );

  return (
    <div className="min-h-screen bg-[#0b0d10] text-white flex flex-col selection:bg-[#d4a843] selection:text-black">
      <Header />

      <main className="flex-1">
        <section className="relative pt-8 pb-16 lg:py-16 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src={SERVICE_IMAGES.airportPickupDrop}
              alt="Pune Airport Pickup Chauffeur Service"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-[#0b0d10]/80 to-[#0b0d10]/90" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
              <Link href="/" className="hover:text-[#d4a843]">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#f3cf7a]">Pune Airport Pickup & Drop</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/30 text-[#d4a843] text-xs font-bold uppercase tracking-wider">
                  <Plane className="w-3.5 h-3.5" />
                  24/7 Airport Transfers
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  Pune Airport Pickup & Drop <br />
                  <span className="gold-gradient-text">Punctual & Stress-Free Transfers</span>
                </h1>

                <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
                  Never stress about catching early morning or late-night flights. We serve Pune International Airport (PNQ) as well as direct highway transfers to Mumbai International Airport (BOM) with scheduled doorstep pickups and clean luggage space.
                </p>

                {/* Service Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-black/50 border border-gray-800">
                    <div className="text-xs text-gray-400">Coverage</div>
                    <div className="text-base font-bold text-white mt-0.5">PNQ & BOM</div>
                    <div className="text-[10px] text-gray-500">Pune & Mumbai Airports</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-black/50 border border-gray-800">
                    <div className="text-xs text-gray-400">Availability</div>
                    <div className="text-base font-bold text-emerald-400 mt-0.5">24/7 Service</div>
                    <div className="text-[10px] text-gray-500">Late night & early morning</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-black/50 border border-gray-800 col-span-2 sm:col-span-1">
                    <div className="text-xs text-gray-400">Billing</div>
                    <div className="text-base font-bold text-white mt-0.5">Zero Surge</div>
                    <div className="text-[10px] text-gray-500">Fixed Transparent Quotes</div>
                  </div>
                </div>

                {/* Transparent Fare Notice */}
                <div className="p-4 rounded-2xl bg-[#12161f] border border-gray-800 text-xs text-gray-300 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-[#f3cf7a]">
                    <Info className="w-4 h-4 text-[#d4a843]" />
                    <span>Transparent Airport Fare Policy</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-[11px]">
                    Airport parking slips and highway toll charges are billed at actuals with proof or included transparently in fixed package quotes. Zero surge multiplier during peak hours.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
    </div>
  );
}
