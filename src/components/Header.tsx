"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, Clock, MapPin, ChevronRight } from "lucide-react";
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
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Our Fleet", href: "#fleet" },
    { name: "Our Services", href: "#services" },
    { name: "Tour Packages", href: "#destinations" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
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
          <div className="flex items-center gap-6">
            <a
              href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
              className="hover:text-[#d4a843] transition-colors flex items-center gap-1.5"
            >
              Office: {BUSINESS_INFO.officePhone}
            </a>
            <span className="text-gray-600">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-[#f3cf7a] font-semibold hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#d4a843]" />
              Call: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b0d10]/95 backdrop-blur-md shadow-2xl border-b border-gray-800/80 py-3"
            : "bg-gradient-to-b from-[#0b0d10]/95 via-[#0b0d10]/80 to-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#hero" className="flex items-center gap-3 group">
              <div className="relative h-12 w-36 sm:h-14 sm:w-44 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={COMMON_IMAGES.logo}
                  alt="Saishree Tours Logo"
                  fill
                  sizes="(max-width: 640px) 150px, 200px"
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

            {/* Header Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-200 bg-gray-900/80 hover:bg-gray-800 border border-gray-700/60 rounded-full transition-all"
                title="Call 24/7 Helpline"
              >
                <div className="w-6 h-6 rounded-full bg-[#d4a843]/20 flex items-center justify-center text-[#d4a843]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] rounded-full shadow-lg shadow-emerald-900/30 transition-all transform hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Booking</span>
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
                <div className="relative h-10 w-32">
                  <Image
                    src={COMMON_IMAGES.logo}
                    alt="Saishree Tours"
                    fill
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

            {/* Drawer Footer with Quick Calls */}
            <div className="pt-6 border-t border-gray-800 flex flex-col gap-3">
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
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-gray-800/90 hover:bg-gray-700 border border-gray-700 rounded-xl"
              >
                <Phone className="w-4 h-4 text-[#d4a843]" />
                <span>Call {BUSINESS_INFO.phone}</span>
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
