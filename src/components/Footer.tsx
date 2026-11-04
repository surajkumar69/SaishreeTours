"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Building,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { COMMON_IMAGES } from "@/lib/images";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 pt-12 pb-14 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* App Download Badges (Exact match for the 3 download badges in reference footer) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* App Store badge */}
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.13.64-2.79 1.41-.57.66-.99 1.73-.93 2.77 1.07.08 2.1-0.56 2.71-1.31z"/>
            </svg>
            <div className="text-left">
              <div className="text-[9px] uppercase tracking-wider text-gray-300">Direct Booking on</div>
              <div className="text-xs font-bold leading-tight">App Store</div>
            </div>
          </a>

          {/* Google Play badge */}
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.793 12 3.61 22.186a1.5 1.5 0 0 1-.61-.735V2.55a1.5 1.5 0 0 1 .609-.736zm11.255 11.257l2.368 2.368-12.06 6.945 9.692-9.313zm0-2.142L5.172 1.616l12.06 6.945-2.368 2.368zm1.06 1.071l3.525 2.032c.983.567.983 1.49 0 2.057l-3.525 2.032-2.142-2.142 2.142-2.142z"/>
            </svg>
            <div className="text-left">
              <div className="text-[9px] uppercase tracking-wider text-gray-300">GET IT ON</div>
              <div className="text-xs font-bold leading-tight">Google Play</div>
            </div>
          </a>

          {/* Windows / Web Portal badge */}
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.8"/>
            </svg>
            <div className="text-left">
              <div className="text-[9px] uppercase tracking-wider text-gray-300">Available via</div>
              <div className="text-xs font-bold leading-tight">Windows &amp; Web</div>
            </div>
          </a>
        </div>

        {/* Clean Centered Link Row (Exact match for reference: About Us | FAQs | Careers | Contact Us | Terms and Conditions | Privacy Policy | Offers | Fares) */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-gray-600">
          <Link href="/#about" className="hover:text-[#a0cc28] transition-colors">
            About Us
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/#fleet" className="hover:text-[#a0cc28] transition-colors">
            Our Fleet
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/#services" className="hover:text-[#a0cc28] transition-colors">
            Services
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/#how-it-works" className="hover:text-[#a0cc28] transition-colors">
            How It Works
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/pune-to-mumbai-cab" className="hover:text-[#a0cc28] transition-colors">
            Pune to Mumbai Cab
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/pune-airport-cab" className="hover:text-[#a0cc28] transition-colors">
            Airport Cab
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/tempo-traveller-pune" className="hover:text-[#a0cc28] transition-colors">
            Tempo Traveller
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/#contact" className="hover:text-[#a0cc28] transition-colors">
            Contact Us
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/#destinations" className="hover:text-[#a0cc28] transition-colors">
            Offers &amp; Fares
          </Link>
        </div>

        {/* Social Media Icons (Matching reference Facebook, Twitter, YouTube, Pinterest/Instagram) */}
        <div className="flex items-center justify-center gap-5">
          {/* Facebook */}
          <a
            href={BUSINESS_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Saishree Tours Facebook Page"
            title="Follow Saishree Tours on Facebook"
            className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a
            href={BUSINESS_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Saishree Tours Instagram Page"
            title="Follow @saishreetours09 on Instagram"
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          {/* Twitter / X */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          {/* YouTube */}
          <a
            href={BUSINESS_INFO.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Saishree Tours YouTube Channel"
            title="Watch Saishree Tours on YouTube"
            className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xs"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        {/* Mandatory Business Coordinates & Both Contact Numbers */}
        <div className="pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
          {/* Logo & Bio */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="relative h-12 w-44">
              <Image
                src={COMMON_IMAGES.logo}
                alt="Saishree Tours Logo"
                fill
                sizes="180px"
                className="object-contain object-center md:object-left"
              />
            </div>
            <p className="text-[11px] text-gray-500 max-w-xs">
              Pune&apos;s premier taxi, tempo traveller and luxury tourist bus rental service.
            </p>
          </div>

          {/* Contact Numbers (BOTH Mandatory Numbers) */}
          <div className="flex flex-col items-center space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
              Direct Booking &amp; Office Help
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="font-bold text-gray-900 hover:text-[#a0cc28] flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#a0cc28]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <span className="text-gray-300">|</span>
              <a
                href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
                className="font-bold text-gray-900 hover:text-blue-600 flex items-center gap-1"
              >
                <Building className="w-3.5 h-3.5 text-blue-600" />
                <span>{BUSINESS_INFO.officePhone}</span>
              </a>
            </div>
            <div className="text-[11px] text-gray-500">
              Email: {BUSINESS_INFO.email}
            </div>
          </div>

          {/* Address & Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-1 text-[11px] text-gray-500">
            <div className="flex items-center gap-1 text-gray-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#a0cc28]" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
            <p>
              &copy; {currentYear} {BUSINESS_INFO.name}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
