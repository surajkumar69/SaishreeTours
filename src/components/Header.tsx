"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, Clock, MapPin, ChevronRight, Building, User } from "lucide-react";
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
    { name: "Our Fleet", href: "/#fleet" },
    { name: "Our Services", href: "/#services" },
    { name: "Tour Packages", href: "/#destinations" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Pune to Mumbai", href: "/pune-to-mumbai-cab" },
    { name: "Airport Cab", href: "/pune-airport-cab" },
    { name: "Tempo Traveller", href: "/tempo-traveller-pune" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Top Notification Bar (Desktop) with Contact Details */}
      <div className="bg-[#1f2530] text-gray-200 text-xs py-1.5 px-4 hidden md:block border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#a0cc28]" />
              New Sangvi, Pune, Maharashtra
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#a0cc28]" />
              24/7 Cab & Bus Booking Service
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-white font-bold hover:text-[#a0cc28] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#a0cc28]" />
              <span>Booking: {BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-gray-500">|</span>
            <a
              href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Building className="w-3.5 h-3.5 text-[#a0cc28]" />
              <span>Office: {BUSINESS_INFO.officePhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Careem-Themed Header (Clean White with Green Ribbon) */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 relative overflow-hidden ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-md py-2.5 border-b border-gray-200"
            : "bg-white py-3.5 border-b border-gray-100"
        }`}
      >
        {/* Top-Right Corner Diagonal Ribbon (Matching #justcareemit in reference) */}
        <div className="hidden sm:block">
          <div className="corner-ribbon">
            #SaishreeTours
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-14 w-44 sm:h-16 sm:w-56 md:h-16 md:w-64 transition-transform duration-200 group-hover:scale-102">
                <Image
                  src={COMMON_IMAGES.logo}
                  alt="Saishree Tours Logo"
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 280px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-semibold text-gray-800 hover:text-[#a0cc28] rounded-md transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#fleet"
                className="px-3 py-2 text-sm font-semibold text-gray-800 hover:text-[#a0cc28] rounded-md transition-colors"
              >
                The Fleet
              </Link>
              <Link
                href="/#services"
                className="px-3 py-2 text-sm font-semibold text-gray-800 hover:text-[#a0cc28] rounded-md transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#how-it-works"
                className="px-3 py-2 text-sm font-semibold text-gray-800 hover:text-[#a0cc28] rounded-md transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/#destinations"
                className="px-3 py-2 text-sm font-semibold text-gray-800 hover:text-[#a0cc28] rounded-md transition-colors"
              >
                Destinations
              </Link>
              <Link
                href="/pune-to-mumbai-cab"
                className="px-3 py-2 text-sm font-semibold text-gray-800 hover:text-[#a0cc28] rounded-md transition-colors"
              >
                Pune-Mumbai
              </Link>
              <Link
                href="/#contact"
                className="px-3 py-2 text-sm font-semibold text-gray-800 hover:text-[#a0cc28] rounded-md transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Actions: Call Button + SIGN UP/LOG IN + Hamburger Icon (as in reference) */}
            <div className="flex items-center gap-3 sm:gap-4 sm:mr-10 lg:mr-14">
              {/* Call desk pills */}
              <div className="hidden xl:flex items-center gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-gray-900 bg-gray-100 hover:bg-[#a0cc28]/15 hover:text-black rounded-full border border-gray-200 transition-colors"
                  title="24/7 Booking Helpline"
                >
                  <Phone className="w-3.5 h-3.5 text-[#a0cc28]" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>

              {/* Reference SIGN UP / LOG IN style text */}
              <Link
                href="/#booking-form"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-gray-900 hover:text-[#a0cc28] transition-colors"
              >
                <User className="w-3.5 h-3.5 text-[#a0cc28]" />
                <span>SIGN UP / LOG IN</span>
              </Link>

              {/* Instant WhatsApp Quick Button */}
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20be5b] rounded-full shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>

              {/* Hamburger Menu Toggle (Matching the reference 3 bars) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-gray-800 hover:text-black hover:bg-gray-100 transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Drawer Panel (Accessible on mobile & desktop like reference) */}
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
                <div className="relative h-12 w-40">
                  <Image
                    src={COMMON_IMAGES.logo}
                    alt="Saishree Tours Logo"
                    fill
                    sizes="160px"
                    className="object-contain object-left"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:text-black hover:bg-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tagline */}
              <p className="text-xs text-[#a0cc28] font-bold tracking-wider uppercase mt-3 mb-5">
                Journey Beyond Destination • 24/7 Available
              </p>

              {/* Nav Links */}
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-[#a0cc28] hover:bg-gray-50 rounded-xl transition-colors"
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
                Direct Help & Reservations
              </span>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-bold text-xs hover:border-[#a0cc28]"
              >
                <div className="w-7 h-7 rounded-lg bg-[#a0cc28]/20 flex items-center justify-center text-[#a0cc28]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-medium">Booking / WhatsApp</div>
                  <div>{BUSINESS_INFO.phone}</div>
                </div>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
                className="flex items-center gap-2 p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-semibold text-xs hover:border-blue-400"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <Building className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-medium">Office Calling Desk</div>
                  <div>{BUSINESS_INFO.officePhone}</div>
                </div>
              </a>

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
