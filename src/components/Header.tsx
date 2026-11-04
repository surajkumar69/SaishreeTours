"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, Clock, MapPin, ChevronRight, Building } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { COMMON_IMAGES } from "@/lib/images";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "The Fleet", href: "/#fleet" },
    { name: "Services", href: "/#services" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Destinations", href: "/#destinations" },
    { name: "Pune–Mumbai", href: "/pune-to-mumbai-cab" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Top Contact Strip (Always visible, responsive) */}
      <div className="bg-[#1f2530] text-gray-200 text-xs py-1.5 px-3 sm:px-6 border-b border-gray-700/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] sm:text-xs">
          <div className="flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#a0cc28]" />
              <span className="hidden sm:inline">New Sangvi, </span>Pune, Maharashtra
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-[#a0cc28]" />
              24/7 Available for Booking
            </span>
          </div>

          {/* Quick Dual Phone Bar in top strip */}
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-white font-bold hover:text-[#a0cc28] transition-colors flex items-center gap-1"
              title="24/7 Booking Helpline"
            >
              <Phone className="w-3 h-3 text-[#a0cc28]" />
              <span><span className="hidden sm:inline">Booking: </span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-gray-500">|</span>
            <a
              href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              title="Office Support Desk"
            >
              <Building className="w-3 h-3 text-blue-400" />
              <span><span className="hidden sm:inline">Office: </span>{BUSINESS_INFO.officePhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 bg-white border-b border-gray-200 ${
          isScrolled ? "shadow-md py-2" : "py-2.5 sm:py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* 1. Saishree Tours Logo (Left) */}
            <Link href="/" className="flex items-center shrink-0 group">
              <div className="relative h-11 w-40 sm:h-13 sm:w-48 md:h-14 md:w-56 transition-transform duration-200 group-hover:scale-102">
                <Image
                  src={COMMON_IMAGES.logo}
                  alt="Saishree Tours Logo"
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 240px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* 2. Navigation Links: One Clean Horizontal Row (Center) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 2xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-2.5 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-bold text-gray-800 hover:text-[#a0cc28] hover:bg-gray-50 rounded-lg transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* 3. Right Action Group: Both Phone Numbers + WhatsApp + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Both Phone Numbers Clearly Displayed on Desktop */}
              <div className="hidden lg:flex flex-col items-end border-l border-gray-200 pl-3 xl:pl-4">
                {/* Number 1: Booking / WhatsApp */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-1.5 text-[11px] xl:text-xs font-bold text-gray-900 hover:text-[#a0cc28] transition-colors whitespace-nowrap"
                  title="24/7 Booking Helpline & WhatsApp"
                >
                  <Phone className="w-3 h-3 text-[#a0cc28] shrink-0" />
                  <span>{BUSINESS_INFO.phone}</span>
                  <span className="text-[9px] font-semibold text-gray-500 bg-gray-100 px-1 py-0.2 rounded">
                    Booking
                  </span>
                </a>

                {/* Number 2: Office / Support */}
                <a
                  href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
                  className="flex items-center gap-1.5 text-[11px] xl:text-xs font-semibold text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap mt-0.5"
                  title="Office Desk & Alternate Support"
                >
                  <Building className="w-3 h-3 text-blue-600 shrink-0" />
                  <span>{BUSINESS_INFO.officePhone}</span>
                  <span className="text-[9px] font-medium text-gray-500 bg-gray-100 px-1 py-0.2 rounded">
                    Office
                  </span>
                </a>
              </div>

              {/* Mobile Quick Call Button (Phone Icon for < lg) */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="lg:hidden p-2 text-gray-800 hover:text-[#a0cc28] hover:bg-gray-100 rounded-lg transition-colors"
                title={`Call ${BUSINESS_INFO.phone}`}
                aria-label="Call Booking"
              >
                <Phone className="w-4 h-4 text-[#a0cc28]" />
              </a>

              {/* Green WhatsApp Button */}
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20be5b] rounded-full shadow-xs transition-transform active:scale-95 whitespace-nowrap"
                title="Book on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Hamburger Menu on the Right */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl text-gray-800 hover:text-black hover:bg-gray-100 transition-colors"
                aria-label="Open Navigation Menu"
                title="Open Navigation Menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Drawer Panel (Mobile & Desktop) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Body */}
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white border-l border-gray-200 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl z-50">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div className="relative h-11 w-36">
                  <Image
                    src={COMMON_IMAGES.logo}
                    alt="Saishree Tours Logo"
                    fill
                    sizes="150px"
                    className="object-contain object-left"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:text-black hover:bg-gray-200"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tagline */}
              <p className="text-xs text-[#a0cc28] font-bold tracking-wider uppercase mt-3 mb-5">
                Journey Beyond Destination • 24/7 Available
              </p>

              {/* Navigation Links */}
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-gray-800 hover:text-[#a0cc28] hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </nav>

              {/* Dedicated Route Cards */}
              <div className="mt-5 pt-4 border-t border-gray-200 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Featured Routes
                </span>
                <Link
                  href="/pune-to-mumbai-cab"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-2.5 bg-gray-50 hover:bg-[#a0cc28]/10 rounded-xl border border-gray-200 transition-colors"
                >
                  <div className="text-xs font-bold text-gray-900">Pune ⇄ Mumbai Expressway</div>
                  <div className="text-[11px] text-gray-500">From ₹2,499 • 3 Hours Express</div>
                </Link>
                <Link
                  href="/pune-airport-cab"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-2.5 bg-gray-50 hover:bg-[#a0cc28]/10 rounded-xl border border-gray-200 transition-colors"
                >
                  <div className="text-xs font-bold text-gray-900">Pune / Mumbai Airport Transfers</div>
                  <div className="text-[11px] text-gray-500">From ₹800 • Punctual Curbside Pickup</div>
                </Link>
                <Link
                  href="/tempo-traveller-pune"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-2.5 bg-gray-50 hover:bg-[#a0cc28]/10 rounded-xl border border-gray-200 transition-colors"
                >
                  <div className="text-xs font-bold text-gray-900">17 Seater Tempo Traveller</div>
                  <div className="text-[11px] text-gray-500">From ₹25/km • Pushback Luxury Seats</div>
                </Link>
              </div>
            </div>

            {/* Drawer Footer Contact Numbers (Both Mandatory Numbers Preserved) */}
            <div className="pt-6 border-t border-gray-200 space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                Direct Help &amp; Reservations
              </span>

              {/* Number 1: Booking / WhatsApp */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-bold text-xs hover:border-[#a0cc28] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#a0cc28]/20 flex items-center justify-center text-[#6e9418] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-medium">Booking / WhatsApp (24/7)</div>
                  <div className="text-gray-900 font-bold">{BUSINESS_INFO.phone}</div>
                </div>
              </a>

              {/* Number 2: Office / Support */}
              <a
                href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
                className="flex items-center gap-2.5 p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-semibold text-xs hover:border-blue-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-medium">Office Calling Desk / Support</div>
                  <div className="text-gray-900 font-bold">{BUSINESS_INFO.officePhone}</div>
                </div>
              </a>

              {/* Direct WhatsApp Button */}
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20be5b] shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
