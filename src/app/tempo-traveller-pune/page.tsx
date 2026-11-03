import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Wind,
  Info,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import BookingForm from "@/components/BookingForm";
import { BUSINESS_INFO, FLEET_DATA } from "@/lib/constants";
import { FLEET_IMAGES } from "@/lib/images";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tempo Traveller Booking Pune | 17 Seater Luxury AC Hire | Saishree Tours",
  description:
    "Hire 17-seater luxury Force Tempo Traveller in Pune with pushback seats, dual AC, and high roof comfort. Ideal for family pilgrimages to Shirdi, Ashtavinayak, and group outings to Mahabaleshwar and Goa. Booking: +91 85308 47555 | Office: +91 96042 52201.",
  keywords: [
    "Tempo Traveller Booking Pune",
    "17 Seater Tempo Traveller Pune",
    "Tempo Traveller Hire Pune",
    "Pune to Shirdi Tempo Traveller",
    "Pune to Ashtavinayak Tempo Traveller",
    "Luxury Tempo Traveller Pune",
  ],
  alternates: {
    canonical: "https://saishreetours.vercel.app/tempo-traveller-pune",
  },
};

export default function TempoTravellerPage() {
  const tempoVehicle = FLEET_DATA.find((v) => v.id === "tempo-traveller-17")!;

  return (
    <div className="min-h-screen bg-[#0b0d10] text-white flex flex-col selection:bg-[#d4a843] selection:text-black">
      <Header />

      <main className="flex-1">
        <section className="relative pt-8 pb-16 lg:py-16 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src={FLEET_IMAGES.tempoTraveller17}
              alt="17 Seater Tempo Traveller Pune"
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
              <span className="text-[#f3cf7a]">Tempo Traveller Booking Pune</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/30 text-[#d4a843] text-xs font-bold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5" />
                  Group Travel Specialist
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  17 Seater Luxury <br />
                  <span className="gold-gradient-text">Tempo Traveller in Pune</span>
                </h1>

                <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
                  Travel together without splitting into multiple cars. Our 17-seater Force Tempo Travellers feature premium pushback leather seating, chilled dual AC compressors, expansive luggage boot, and experienced highway drivers.
                </p>

                {/* Features Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-black/50 border border-gray-800">
                    <div className="text-xs text-gray-400">Capacity</div>
                    <div className="text-base font-bold text-white mt-0.5">17 Passengers</div>
                    <div className="text-[10px] text-gray-500">2x1 Luxury Layout</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-black/50 border border-gray-800">
                    <div className="text-xs text-gray-400">Air Conditioning</div>
                    <div className="text-base font-bold text-emerald-400 mt-0.5">Dual Roof AC</div>
                    <div className="text-[10px] text-gray-500">Individual Vents</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-black/50 border border-gray-800 col-span-2 sm:col-span-1">
                    <div className="text-xs text-gray-400">Luggage Boot</div>
                    <div className="text-base font-bold text-white mt-0.5">12-15 Bags</div>
                    <div className="text-[10px] text-gray-500">Rear + Top Carrier</div>
                  </div>
                </div>

                {/* Transparent Fare Notice */}
                <div className="p-4 rounded-2xl bg-[#12161f] border border-gray-800 text-xs text-gray-300 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-[#f3cf7a]">
                    <Info className="w-4 h-4 text-[#d4a843]" />
                    <span>Transparent Pricing Policy</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-[11px]">
                    Tempo Traveller rates are quoted with per-km running, minimum daily km limit, driver day/night allowance, and state border permits clearly specified before confirmation.
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
