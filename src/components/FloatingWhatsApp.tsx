"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 select-none">
      {/* Floating Prompt Tooltip */}
      {showTooltip && (
        <div className="relative bg-[#161a22] border border-[#d4a843]/40 rounded-2xl p-3 pr-8 shadow-2xl backdrop-blur-md max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="text-[11px] font-bold text-[#f3cf7a]">
            👋 Planning a trip from Pune?
          </div>
          <div className="text-[11px] text-gray-300 mt-0.5">
            Get instant cab fare or Tempo Traveller availability on WhatsApp!
          </div>
        </div>
      )}

      {/* Buttons Row */}
      <div className="flex items-center gap-2">
        {/* Quick Phone Call Button (Mobile & Desktop) */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          aria-label="Call Saishree Tours Helpline"
          className="w-11 h-11 rounded-full bg-gray-900 border border-gray-700 hover:border-[#d4a843] text-[#d4a843] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Floating Pill / Circle */}
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Saishree Tours on WhatsApp"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs sm:text-sm shadow-2xl shadow-emerald-950/60 hover:shadow-emerald-900/80 hover:scale-105 active:scale-95 transition-all"
        >
          {/* Subtle pulse animation ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:opacity-60 blur-sm animate-pulse" />

          <MessageCircle className="w-5 h-5 fill-white shrink-0 relative z-10" />
          <span className="hidden sm:inline relative z-10">
            Book on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
