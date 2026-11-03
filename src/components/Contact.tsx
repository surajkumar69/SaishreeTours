"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Sparkles,
  Building,
  CheckCircle,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Cab Booking");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const url = getWhatsAppBookingUrl({
      customMessage: `Inquiry from ${name} (Phone: ${phone}). Service: ${service}. Note: ${message}`,
      serviceName: service,
    });

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#0d1017] border-t border-gray-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d4a843]/10 border border-[#d4a843]/20 text-[#d4a843] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Contact Saishree Tours
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
            Have questions about fares, custom tour packages, or bus charter?
            Our friendly Pune team is available 24/7 to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#12161f] border border-gray-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Office Information
              </h3>

              <div className="space-y-4">
                {/* Number 1: Booking / WhatsApp Hotline */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#0b0d10] border border-[#d4a843]/40 hover:border-[#d4a843] transition-all group shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#d4a843]/20 text-[#d4a843] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-[#d4a843] font-bold uppercase tracking-wider">Booking & WhatsApp Number</div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded-full">24/7 LIVE</span>
                    </div>
                    <div className="text-lg sm:text-xl font-black text-white group-hover:text-[#f3cf7a] transition-colors mt-0.5">
                      {BUSINESS_INFO.phone}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      Direct Cab Bookings, Fare Quotes & Instant WhatsApp Reservation
                    </div>
                  </div>
                </a>

                {/* Number 2: Office Calling Desk */}
                <a
                  href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#0b0d10] border border-blue-500/30 hover:border-blue-400 transition-all group shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Building className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-blue-400 font-bold uppercase tracking-wider">Office & Calling Number</div>
                      <span className="text-[10px] font-semibold text-blue-300 bg-blue-950/60 border border-blue-800/80 px-2 py-0.5 rounded-full">OFFICE DESK</span>
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-white group-hover:text-[#f3cf7a] transition-colors mt-0.5">
                      {BUSINESS_INFO.officePhone}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      Dispatch Office, Bus Charters, Corporate Accounts & Support
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#0b0d10] border border-gray-800/80 hover:border-[#d4a843]/50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#ff4d4d]/15 text-[#ff6b6b] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-gray-400">Email Inquiries</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#f3cf7a] transition-colors truncate">
                      {BUSINESS_INFO.email}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      Prompt Reply Within 2 Hours
                    </div>
                  </div>
                </a>

                {/* Physical Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0b0d10] border border-gray-800/80">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Pune Location</div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {BUSINESS_INFO.address}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-1">
                      Serving Pune, Pimpri-Chinchwad, and Western Maharashtra
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Quick Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#12161f] border border-gray-800 rounded-3xl p-6 sm:p-8 relative">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Send Us an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Fill in your details to get an instant WhatsApp quote and itinerary suggestion.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-700/80 text-emerald-300 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Thank you! Your message has been forwarded to our WhatsApp reservation desk. We will connect with you immediately.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-sm text-white focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all cursor-pointer"
                  >
                    <option value="Pune to Mumbai Cab">Pune to Mumbai Cab (Expressway)</option>
                    <option value="Outstation Taxi Booking">Outstation Taxi (Mahabaleshwar, Shirdi, Goa)</option>
                    <option value="Local Pune Rental">Local Pune Rental (Hourly Cab)</option>
                    <option value="Airport Pickup or Drop">Airport Pickup & Drop (Pune / BOM)</option>
                    <option value="17 Seater Tempo Traveller">17 Seater Tempo Traveller</option>
                    <option value="A/C Luxury Bus Booking">A/C Luxury Bus Booking (27, 32, 45+ Seater)</option>
                    <option value="Holiday & Hotel Package">Holiday & Hotel Package</option>
                    <option value="Wedding / Corporate Fleet">Wedding / Corporate Fleet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Message / Travel Details
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your journey (dates, number of travelers, pickup location, any special requests)..."
                    className="w-full px-4 py-3 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#25D366] via-[#20be5b] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] shadow-xl shadow-emerald-950/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Inquiry to WhatsApp Desk</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
