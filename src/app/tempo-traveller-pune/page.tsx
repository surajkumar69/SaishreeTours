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
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-[#a0cc28] selection:text-black">
      <Header />

      <main className="flex-1">
        <section className="relative pt-8 pb-16 lg:py-16 overflow-hidden bg-[#1f2530] text-white">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src={FLEET_IMAGES.tempoTraveller17}
              alt="17 Seater Tempo Traveller Pune"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f2530] via-[#1f2530]/80 to-[#1f2530]/90" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-gray-300 mb-6">
              <Link href="/" className="hover:text-[#a0cc28]">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#a0cc28] font-bold">Tempo Traveller Booking Pune</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#a0cc28]/20 border border-[#a0cc28]/40 text-[#a0cc28] text-xs font-bold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5" />
                  Group Travel Specialist
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
                  17 Seater Luxury <br />
                  <span className="text-[#a0cc28]">Tempo Traveller in Pune</span>
                </h1>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl font-normal">
                  Travel together without splitting into multiple cars. Our 17-seater Force Tempo Travellers feature premium pushback leather seating, chilled dual AC compressors, expansive luggage boot, and experienced highway drivers.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-gray-700">
                    <div className="text-xs text-gray-400">Seating Capacity</div>
                    <div className="text-sm font-bold text-white mt-0.5">17 Pushback Seats</div>
                    <div className="text-[10px] text-gray-400">2x1 Captain Row</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-gray-700">
                    <div className="text-xs text-gray-400">Air Conditioning</div>
                    <div className="text-sm font-bold text-white mt-0.5">Dual High-Output</div>
                    <div className="text-[10px] text-gray-400">Individual Vents</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-gray-700 col-span-2 sm:col-span-1">
                    <div className="text-xs text-gray-400">Luggage Hold</div>
                    <div className="text-sm font-bold text-[#a0cc28] mt-0.5">12-15 Big Bags</div>
                    <div className="text-[10px] text-gray-400">Large Rear Boot</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Popular Group Circuits */}
        <section className="py-16 bg-[#f8f9fb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-gray-900">
                Popular Tempo Traveller Circuits from Pune
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Ideal for family pilgrimages, wedding guest convoys, and corporate weekend offsites.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Shirdi & Shani Shingnapur", duration: "1 or 2 Days", desc: "Door-to-door temple pilgrimage circuit with comfortable rest stops." },
                { title: "Ashtavinayak Darshan", duration: "2 or 3 Days", desc: "Complete 8 Ganesha holy temple circuit across Maharashtra." },
                { title: "Mahabaleshwar & Panchgani", duration: "2 or 3 Days", desc: "Scenic mountain holiday with strawberry farm visits and viewpoints." },
              ].map((circuit, i) => (
                <div key={i} className="bg-white border border-gray-200 hover:border-[#a0cc28] p-5 rounded-2xl shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#6e9418] uppercase tracking-wider">{circuit.duration}</span>
                    <h3 className="font-bold text-gray-900 text-base mt-1 mb-2">{circuit.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{circuit.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <a
                      href={getWhatsAppBookingUrl({
                        tripType: "Round Trip",
                        pickupLocation: "Pune",
                        dropLocation: circuit.title,
                        vehicle: "17 Seater Tempo Traveller",
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20be5b] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Inquire Rate for {circuit.title}</span>
                    </a>
                  </div>
                </div>
              ))}
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
