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
    { name: "About Us", href: "/#about" },
    { name: "Our Fleet", href: "/#fleet" },
    { name: "Our Services", href: "/#services" },
    { name: "Tour Packages", href: "/#destinations" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <>
      {/* Mobile Top Contact Bar - Always visible on mobile screens */}
      <div className="bg-[#0b0e14] border-b border-gray-800 text-[11px] px-3 py-1.5 flex items-center justify-between md:hidden">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex items-center gap-1 text-[#f3cf7a] font-bold active:text-white"
        >
          <Phone className="w-3.5 h-3.5 text-[#d4a843]" />
          <span>Booking: {BUSINESS_INFO.phone}</span>
        </a>
        <span className="text-gray-700">|</span>
        <a
          href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
          className="flex items-center gap-1 text-gray-200 active:text-white font-semibold"
        >
          <Building className="w-3.5 h-3.5 text-blue-400" />
          <span>Office: {BUSINESS_INFO.officePhone}</span>
        </a>
      </div>

      {/* Top Notification Bar (Desktop md+) */}
      <div className="bg-[#11141b] border-b border-gray-800/60 text-xs text-gray-300 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#d4a843]" />
              New Sangvi, Pune, Maharashtra
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#d4a843]" />
              24/7 Available for Bookings
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-[#f3cf7a] font-bold hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4a843]" />
              <span>Booking: {BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
              className="text-gray-300 hover:text-[#d4a843] transition-colors flex items-center gap-1.5"
            >
              <Building className="w-3.5 h-3.5 text-blue-400" />
              <span>Office: {BUSINESS_INFO.officePhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b0d10]/95 backdrop-blur-md shadow-2xl border-b border-gray-800/80 py-2 sm:py-2.5"
            : "bg-gradient-to-b from-[#0b0d10]/95 via-[#0b0d10]/80 to-transparent py-2.5 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Increased Size & Transparent Background */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-14 w-44 sm:h-16 sm:w-56 md:h-18 md:w-64 lg:h-20 lg:w-72 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={COMMON_IMAGES.logo}
                  alt="Saishree Tours Logo"
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 260px, 300px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-[#d4a843] rounded-lg transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#d4a843] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </Link>
              ))}
            </nav>

            {/* Header Right Action CTAs - BOTH Numbers Clickable + WhatsApp */}
            <div className="hidden xl:flex items-center gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-[#f3cf7a] bg-gray-900/90 hover:bg-gray-800 border border-gray-700/80 rounded-full transition-all hover:border-[#d4a843]"
                title="24/7 Booking Helpline"
              >
                <div className="w-5 h-5 rounded-full bg-[#d4a843]/20 flex items-center justify-center text-[#d4a843]">
                  <Phone className="w-3 h-3" />
                </div>
                <span>Booking: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-300 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 rounded-full transition-all hover:border-blue-400"
                title="Office Calling Desk"
              >
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Building className="w-3 h-3" />
                </div>
                <span>Office: {BUSINESS_INFO.officePhone}</span>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] rounded-full shadow-lg shadow-emerald-900/30 transition-all transform hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mid-screen Dual Call Quick Links (sm to xl) */}
            <div className="hidden sm:flex xl:hidden items-center gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#f3cf7a] bg-gray-900 border border-gray-700/80 rounded-full hover:border-[#d4a843]"
                title={`Booking Helpline: ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#d4a843]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
                className="p-2 rounded-full bg-gray-900 border border-gray-700 text-blue-400 hover:border-blue-400"
                title={`Office: ${BUSINESS_INFO.officePhone}`}
              >
                <Building className="w-4 h-4" />
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-full sm:hidden transition-all shadow-md"
                aria-label="WhatsApp Us"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#d4a843]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#11141b] border-l border-gray-800 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-gray-800">
                <div className="relative h-14 w-44 sm:h-16 sm:w-52">
                  <Image
                    src={COMMON_IMAGES.logo}
                    alt="Saishree Tours Logo"
                    fill
                    sizes="200px"
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-gray-800/80 text-gray-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tagline */}
              <p className="text-xs text-[#d4a843] font-medium tracking-wide uppercase mt-3 mb-6">
                Journey Beyond Destination
              </p>

              {/* Nav links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-3 text-base font-medium text-gray-200 hover:text-[#d4a843] hover:bg-gray-800/60 rounded-xl transition-all"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Footer with Quick Calls - BOTH Numbers & WhatsApp */}
            <div className="pt-6 border-t border-gray-800 flex flex-col gap-2.5">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-xl shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Booking</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-between py-2.5 px-4 text-xs font-bold text-white bg-gray-900 border border-gray-700/80 rounded-xl hover:border-[#d4a843] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#d4a843]/20 text-[#d4a843] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 font-normal">Booking & 24/7 Helpline</div>
                    <div className="text-white font-bold">{BUSINESS_INFO.phone}</div>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-[#f3cf7a] uppercase bg-[#d4a843]/15 px-2 py-0.5 rounded">Call</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
                className="w-full flex items-center justify-between py-2.5 px-4 text-xs font-semibold text-gray-200 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Building className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 font-normal">Office Desk</div>
                    <div className="text-gray-200 font-semibold">{BUSINESS_INFO.officePhone}</div>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-blue-300 uppercase bg-blue-500/15 px-2 py-0.5 rounded">Call</span>
              </a>

              <p className="text-[11px] text-center text-gray-400 mt-1">
                New Sangvi, Pune • 24/7 Service Available
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
