"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
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
    <section id="contact" className="py-20 sm:py-24 bg-white text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 h-px bg-gray-300" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a0cc28]">
              GET IN TOUCH
            </span>
            <span className="w-10 h-px bg-gray-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-900">
            Contact Saishree Tours
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 font-normal leading-relaxed">
            Have questions about fares, custom tour packages, or bus charter?
            Our friendly Pune team is available 24/7 to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Office Coordinates & BOTH Mandatory Phone Numbers */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#f8f9fb] border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3">
                Head Office Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Booking Number */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#a0cc28]/20 flex items-center justify-center text-[#6e9418] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-medium">Booking / WhatsApp (24/7)</div>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="font-bold text-gray-900 hover:text-[#a0cc28] transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Office Number */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-medium">Office Desk / Alternate Calling</div>
                    <a
                      href={`tel:${BUSINESS_INFO.officePhoneRaw}`}
                      className="font-bold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {BUSINESS_INFO.officePhone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gray-200 flex items-center justify-center text-gray-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-medium">Official Email</div>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="font-bold text-gray-900 hover:text-[#a0cc28] transition-colors break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-medium">Office Address</div>
                    <p className="font-semibold text-gray-900 leading-snug">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-medium">Working Hours</div>
                    <p className="font-bold text-emerald-700">
                      {BUSINESS_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Responsive Google Map of New Sangvi, Pune */}
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xs h-56 w-full">
              <iframe
                title="Saishree Tours New Sangvi Pune Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15129.839611756586!2d73.8055452!3d18.5758839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b918fa0999ef%3A0x2da86bbcefc4723c!2sNew%20Sangavi%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#f8f9fb] border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Send an Inquiry
            </h3>
            <p className="text-xs text-gray-600 mb-6">
              Fill out this quick form to send your travel requirements directly to our WhatsApp booking desk.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900">
                  Inquiry Transferred!
                </h4>
                <p className="text-xs text-emerald-700">
                  Your message has been opened in WhatsApp. Our team will share the best available quotation within minutes.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-bold text-black bg-[#a0cc28] rounded-xl hover:bg-[#8eb822]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#a0cc28]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#a0cc28]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#a0cc28]"
                  >
                    <option value="Pune to Mumbai Cab">Pune to Mumbai Cab</option>
                    <option value="Airport Pickup / Drop">Airport Pickup / Drop (Pune / BOM)</option>
                    <option value="Local Hourly Cab (4hr/8hr)">Local Hourly Cab (4hr / 8hr / 12hr)</option>
                    <option value="Outstation Round Trip Taxi">Outstation Round Trip Taxi</option>
                    <option value="17 Seater Tempo Traveller">17 Seater Tempo Traveller</option>
                    <option value="Luxury Bus Charter (27/32/45 Seater)">Luxury Bus Charter (27/32/45 Seater)</option>
                    <option value="Tour Package (Shirdi / Mahabaleshwar / Goa)">Tour Package (Shirdi / Mahabaleshwar / Goa / Lonavala)</option>
                    <option value="Corporate / Wedding Transport">Corporate / Wedding Transport</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Message / Travel Details
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter travel dates, pickup location, passenger count, or specific vehicle preferences..."
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#a0cc28]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20be5b] shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Submit Inquiry to WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
