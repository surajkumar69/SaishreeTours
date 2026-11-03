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
} from "lucide-react";
import { BUSINESS_INFO, FLEET_DATA, SERVICES_DATA } from "@/lib/constants";
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
            <Link href="#hero" className="inline-block">
              <div className="relative h-14 w-48">
                <Image
                  src="/images/logo.png"
                  alt="Saishree Tours Logo"
                  fill
                  sizes="200px"
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

            <div className="pt-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] shadow-md shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
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
              {popularRoutes.slice(0, 7).map((route, i) => (
                <li key={i}>
                  <Link
                    href="#hero"
                    className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5 text-gray-400 hover:translate-x-0.5 transform duration-150"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]/60" />
                    <span>{route}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact & Support
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4a843] shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {BUSINESS_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4a843] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-white hover:text-[#d4a843] font-semibold"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
                  className="hover:text-[#d4a843]"
                >
                  Office: {BUSINESS_INFO.officePhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4a843] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-[#d4a843] truncate"
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
