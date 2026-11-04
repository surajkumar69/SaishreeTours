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
    "Reliable Pune Airport (PNQ) and Mumbai Airport (BOM) cab booking. Professional chauffeurs, flight tracking, punctual curbside pickup, and transparent fares with parking explained. Booking: +91 85308 47555 | Office: +91 96042 52201.",
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
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-[#a0cc28] selection:text-black">
      <Header />

      <main className="flex-1">
        <section className="relative pt-8 pb-16 lg:py-16 overflow-hidden bg-[#1f2530] text-white">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src={SERVICE_IMAGES.airportPickupDrop}
              alt="Pune Airport Pickup Chauffeur Service"
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
              <span className="text-[#a0cc28] font-bold">Pune Airport Pickup &amp; Drop</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#a0cc28]/20 border border-[#a0cc28]/40 text-[#a0cc28] text-xs font-bold uppercase tracking-wider">
                  <Plane className="w-3.5 h-3.5" />
                  24/7 Airport Transfers
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
                  Pune Airport Pickup &amp; Drop <br />
                  <span className="text-[#a0cc28]">Punctual &amp; Stress-Free Transfers</span>
                </h1>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl font-normal">
                  Reliable curbside pickups and drops for Pune International Airport (PNQ, Lohegaon) and direct expressway transfers to Mumbai Chhatrapati Shivaji Maharaj International Airport (BOM Terminal 1 &amp; Terminal 2).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-gray-700">
                    <div className="text-xs text-gray-400">Flight Tracking</div>
                    <div className="text-sm font-bold text-white mt-0.5">Real-Time Monitor</div>
                    <div className="text-[10px] text-gray-400">Free Delay Wait</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-gray-700">
                    <div className="text-xs text-gray-400">Luggage Help</div>
                    <div className="text-sm font-bold text-white mt-0.5">Trunk Loading</div>
                    <div className="text-[10px] text-gray-400">Courteous Chauffeur</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-gray-700">
                    <div className="text-xs text-gray-400">Transparent Fares</div>
                    <div className="text-sm font-bold text-[#a0cc28] mt-0.5">Fixed Quotes</div>
                    <div className="text-[10px] text-gray-400">Zero Surge</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Airport Fleet Options */}
        <section className="py-16 bg-[#f8f9fb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-gray-900">
                Recommended Airport Cabs
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Spacious luggage storage and chilled climate control for late-night or early-morning flights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {airportVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-white border border-gray-200 hover:border-[#a0cc28] rounded-2xl overflow-hidden flex flex-col justify-between p-4 shadow-xs hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3 bg-gray-100">
                      <Image
                        src={vehicle.image}
                        alt={`${vehicle.name} Airport Taxi`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base">{vehicle.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{vehicle.capacity} • {vehicle.luggage}</p>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2">{vehicle.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <a
                      href={getWhatsAppBookingUrl({
                        tripType: "One Way",
                        pickupLocation: "Pune Area",
                        dropLocation: "Airport",
                        vehicle: vehicle.name,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20be5b] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Book Airport Cab on WhatsApp</span>
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
