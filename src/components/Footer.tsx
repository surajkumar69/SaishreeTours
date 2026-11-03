"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  Heart,
  Building,
} from "lucide-react";
import { BUSINESS_INFO, FLEET_DATA, SERVICES_DATA } from "@/lib/constants";
import { COMMON_IMAGES } from "@/lib/images";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const popularRoutes = [
    "Pune to Mumbai Cab (Expressway)",
    "Pune to Shirdi Taxi Service",
    "Pune to Mahabaleshwar Outstation",
    "Pune to Lonavala Weekend Cab",
    "Pune Airport Pickup & Drop",
    "Mumbai Airport to Pune Taxi",
    "Pune to Goa Road Trip",
    "Pune to Nashik Trimbakeshwar",
    "Ashtavinayak Darshan 8 Temples",
    "17 Seater Tempo Traveller Pune",
  ];

  return (
    <footer className="bg-[#07090c] text-gray-400 border-t border-gray-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="relative h-18 w-56 sm:h-20 sm:w-64 md:h-24 md:w-72 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={COMMON_IMAGES.logo}
                  alt="Saishree Tours Logo"
                  fill
                  sizes="(max-width: 640px) 220px, 300px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#f3cf7a] font-semibold tracking-wide uppercase">
              {BUSINESS_INFO.tagline}
            </p>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Saishree Tours is a Pune-based premier cab and luxury bus rental company.
              We specialize in reliable Pune-Mumbai daily travel, outstation cabs,
              executive airport transfers, Tempo Travellers, and custom tour packages.
            </p>

            {/* Direct Contact Numbers & WhatsApp */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] shadow-md shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Booking</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#f3cf7a] bg-gray-900 border border-gray-700/80 hover:border-[#d4a843]"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4a843]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="#hero" className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-600" /> Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-600" /> About Us
                </Link>
              </li>
              <li>
                <Link href="#fleet" className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-600" /> Our Fleet
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-600" /> Our Services
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-600" /> Tour Packages
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-600" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Cab Routes (SEO) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Popular Routes
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link
                  href="/pune-to-mumbai-cab"
                  className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5 text-gray-400 hover:translate-x-0.5 transform duration-150"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]" />
                  <span>Pune to Mumbai Cab (Daily)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tempo-traveller-pune"
                  className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5 text-gray-400 hover:translate-x-0.5 transform duration-150"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]" />
                  <span>17 Seater Tempo Traveller Pune</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/pune-airport-cab"
                  className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5 text-gray-400 hover:translate-x-0.5 transform duration-150"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]" />
                  <span>Pune Airport Pickup & Drop</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#destinations"
                  className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5 text-gray-400 hover:translate-x-0.5 transform duration-150"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]/60" />
                  <span>Pune to Mahabaleshwar Outstation</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#destinations"
                  className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5 text-gray-400 hover:translate-x-0.5 transform duration-150"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]/60" />
                  <span>Pune to Shirdi Sai Darshan</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#destinations"
                  className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5 text-gray-400 hover:translate-x-0.5 transform duration-150"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]/60" />
                  <span>Pune to Goa Coastal Trip</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#fleet"
                  className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5 text-gray-400 hover:translate-x-0.5 transform duration-150"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]/60" />
                  <span>Luxury Bus Rental in Pune</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact & Support
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4a843] shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-relaxed">
                  {BUSINESS_INFO.address}
                </span>
              </li>

              {/* Number 1: Booking / WhatsApp */}
              <li className="p-2.5 rounded-xl bg-gray-900/90 border border-gray-800 hover:border-[#d4a843]/60 transition-colors">
                <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Booking & WhatsApp</span>
                  <span className="text-emerald-400 text-[9px] font-bold">24/7 LIVE</span>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-2 text-white hover:text-[#f3cf7a] font-bold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#d4a843] shrink-0" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </li>

              {/* Number 2: Office / Calling */}
              <li className="p-2.5 rounded-xl bg-gray-900/50 border border-gray-800/80 hover:border-blue-400/60 transition-colors">
                <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Office & Calling Desk</span>
                  <span className="text-blue-400 text-[9px] font-bold">PUNE OFFICE</span>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
                  className="flex items-center gap-2 text-gray-200 hover:text-white font-semibold text-sm transition-colors"
                >
                  <Building className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{BUSINESS_INFO.officePhone}</span>
                </a>
              </li>

              <li className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#d4a843] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-gray-300 hover:text-[#d4a843] truncate font-medium"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>

              <li className="flex items-center gap-2.5 text-emerald-400 font-medium">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Open 24 Hours / 7 Days a Week</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © 2026 Saishree Tours. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="hover:text-gray-300">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-gray-300">Terms of Travel</span>
            <span>•</span>
            <span className="text-[#d4a843] font-medium">Pune Cab Booking</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
