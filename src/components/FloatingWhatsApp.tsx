"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, Building, X } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5 select-none">
      {/* Floating Prompt Tooltip */}
      {showTooltip && (
        <div className="relative bg-[#1f2530] text-white border border-[#a0cc28]/40 rounded-2xl p-3 pr-8 shadow-2xl backdrop-blur-md max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="text-[11px] font-bold text-[#a0cc28]">
            👋 Planning a trip from Pune?
          </div>
          <div className="text-[11px] text-gray-300 mt-0.5">
            Get instant cab fare or Tempo Traveller availability on WhatsApp!
          </div>
        </div>
      )}

      {/* Buttons Row - BOTH Phone Numbers + WhatsApp */}
      <div className="flex items-center gap-2">
        {/* Quick Phone Call Button: Booking Helpline (Mandatory) */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          aria-label={`Call Booking Helpline ${BUSINESS_INFO.phone}`}
          title={`Call Booking: ${BUSINESS_INFO.phone}`}
          className="w-11 h-11 rounded-full bg-white border border-gray-300 hover:border-[#a0cc28] text-gray-900 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5 text-[#a0cc28]" />
        </a>

        {/* Quick Phone Call Button: Office Desk (Mandatory) */}
        <a
          href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
          aria-label={`Call Office Desk ${BUSINESS_INFO.officePhone}`}
          title={`Call Office: ${BUSINESS_INFO.officePhone}`}
          className="w-11 h-11 rounded-full bg-white border border-gray-300 hover:border-blue-500 text-blue-600 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
        >
          <Building className="w-5 h-5" />
        </a>

        {/* WhatsApp Floating Pill / Circle */}
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Saishree Tours on WhatsApp"
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20be5b] text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-25 group-hover:opacity-50 blur-xs animate-pulse" />
          <MessageCircle className="w-5 h-5 fill-white shrink-0 relative z-10" />
          <span className="hidden sm:inline relative z-10 font-bold">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
