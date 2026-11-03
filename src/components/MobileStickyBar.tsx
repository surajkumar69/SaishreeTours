"use client";

import React from "react";
import Link from "next/link";
import { Phone, Building, MessageCircle, CalendarCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function MobileStickyBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0b0e14]/95 backdrop-blur-lg border-t border-gray-800 py-2 px-2 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-4 gap-1.5 items-center max-w-md mx-auto">
        {/* Number 1: Call Booking */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gray-900 border border-gray-700/80 text-gray-200 active:bg-gray-800 transition-colors"
          aria-label={`Call Booking Helpline ${BUSINESS_INFO.phone}`}
          title={`Call Booking: ${BUSINESS_INFO.phone}`}
        >
          <Phone className="w-4 h-4 text-[#d4a843] mb-0.5" />
          <span className="text-[10px] font-bold text-white">Booking</span>
        </a>

        {/* Number 2: Call Office */}
        <a
          href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gray-900/70 border border-gray-800 text-gray-200 active:bg-gray-800 transition-colors"
          aria-label={`Call Office Desk ${BUSINESS_INFO.officePhone}`}
          title={`Call Office: ${BUSINESS_INFO.officePhone}`}
        >
          <Building className="w-4 h-4 text-blue-400 mb-0.5" />
          <span className="text-[10px] font-semibold text-gray-200">Office</span>
        </a>

        {/* Quick Booking Form Anchor */}
        <Link
          href="#booking-form"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#d4a843] text-black active:bg-[#b88a28] font-bold shadow-md shadow-[#d4a843]/20 transition-colors"
          aria-label="Book Cab or Bus"
        >
          <CalendarCheck className="w-4 h-4 text-black mb-0.5" />
          <span className="text-[10px] font-bold text-black">Book</span>
        </Link>

        {/* WhatsApp Quote */}
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white active:opacity-90 font-bold shadow-md shadow-emerald-950/40 transition-colors"
          aria-label="WhatsApp Booking"
        >
          <MessageCircle className="w-4 h-4 fill-white mb-0.5" />
          <span className="text-[10px] font-bold text-white">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
