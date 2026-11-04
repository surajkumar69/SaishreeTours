import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Shield,
  MapPin,
  CheckCircle2,
  Phone,
  MessageCircle,
  Car,
  ChevronRight,
  Info,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import BookingForm from "@/components/BookingForm";
import { BUSINESS_INFO, FLEET_DATA } from "@/lib/constants";
import { SERVICE_IMAGES, FLEET_IMAGES } from "@/lib/images";
import { getWhatsAppBookingUrl, getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Pune to Mumbai Cab Service | Daily One-Way & Round Trip Taxi | Saishree Tours",
  description:
    "Book Pune to Mumbai cab with Saishree Tours. Doorstep pickup across Pune, fast 3-hour expressway transit, sedans, Ertiga & Innova Crysta cabs. Transparent fares with tolls clearly itemized. Booking: +91 85308 47555 | Office: +91 96042 52201.",
  keywords: [
    "Pune to Mumbai Cab",
    "Pune to Mumbai Daily Cab Service",
    "Pune to Mumbai Taxi",
    "Innova Crysta Pune to Mumbai",
    "Pune to Mumbai Airport Cab",
    "One Way Cab Pune to Mumbai",
  ],
  alternates: {
    canonical: "https://saishreetours.vercel.app/pune-to-mumbai-cab",
  },
};

export default function PuneToMumbaiPage() {
  const expresswayVehicles = FLEET_DATA.filter((v) =>
    ["swift-dzire", "maruti-ertiga", "toyota-innova-crysta", "tempo-traveller-17"].includes(v.id)
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-[#a0cc28] selection:text-black">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-8 pb-16 lg:py-16 overflow-hidden bg-[#1f2530] text-white">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src={SERVICE_IMAGES.puneToMumbaiDaily}
              alt="Car on Pune Mumbai Expressway"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f2530] via-[#1f2530]/80 to-[#1f2530]/90" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-300 mb-6">
              <Link href="/" className="hover:text-[#a0cc28]">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#a0cc28] font-bold">Pune to Mumbai Cab</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#a0cc28]/20 border border-[#a0cc28]/40 text-[#a0cc28] text-xs font-bold uppercase tracking-wider">
                  <Car className="w-3.5 h-3.5" />
                  Expressway Daily Service
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
                  Pune to Mumbai Cab <br />
                  <span className="text-[#a0cc28]">Comfortable Daily Travel</span>
                </h1>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl font-normal">
                  Travel comfortably between Pune and Mumbai in clean, commercial AC cabs. Doorstep pickup anywhere in Pune, PCMC, or Hinjawadi with direct drop at Mumbai Airport (BOM), Dadar, Borivali, Thane, or South Mumbai.
                </p>

                {/* Key Route Facts */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-gray-700">
                    <div className="text-xs text-gray-400">Transit Time</div>
                    <div className="text-base font-bold text-white mt-0.5">Approx. 3 Hours</div>
                    <div className="text-[10px] text-gray-400">Via Expressway</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-gray-700">
                    <div className="text-xs text-gray-400">Total Distance</div>
                    <div className="text-base font-bold text-white mt-0.5">~150 Kilometers</div>
                    <div className="text-[10px] text-gray-400">Door-to-door</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-gray-700 col-span-2 sm:col-span-1">
                    <div className="text-xs text-gray-400">Availability</div>
                    <div className="text-base font-bold text-[#a0cc28] mt-0.5">24/7 Service</div>
                    <div className="text-[10px] text-gray-400">Day &amp; Night Cabs</div>
                  </div>
                </div>

                {/* Transparent Fare Notice */}
                <div className="p-4 rounded-2xl bg-black/30 border border-gray-700 text-xs text-gray-300 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-[#a0cc28]">
                    <Info className="w-4 h-4 text-[#a0cc28]" />
                    <span>Transparent Fare Policy for Mumbai Route</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-[11px]">
                    All Pune-Mumbai quotes clearly state base fare, Mumbai-Pune Expressway toll, airport parking (if applicable), and night driver allowance (after 10 PM). Zero unexpected surge fees.
                  </p>
                </div>
              </div>

              {/* Booking Form Card */}
              <div className="lg:col-span-5">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Route Vehicle Options */}
        <section className="py-16 bg-[#f8f9fb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-gray-900">
                Recommended Cabs for Pune to Mumbai
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Choose the vehicle that fits your group size and comfort preference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expresswayVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-white border border-gray-200 hover:border-[#a0cc28] rounded-2xl overflow-hidden flex flex-col justify-between p-4 shadow-xs hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3 bg-gray-100">
                      <Image
                        src={vehicle.image}
                        alt={`${vehicle.name} Pune to Mumbai Cab`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">{vehicle.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{vehicle.capacity} • {vehicle.luggage}</p>
                      <p className="text-xs text-gray-600 mt-2 line-clamp-2">{vehicle.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <a
                      href={getWhatsAppBookingUrl({
                        tripType: "One Way",
                        pickupLocation: "Pune",
                        dropLocation: "Mumbai",
                        vehicle: vehicle.name,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20be5b] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Inquire Fare on WhatsApp</span>
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
