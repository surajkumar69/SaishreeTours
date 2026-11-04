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

                {/* Social Connect Links */}
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-[11px] text-gray-500 font-semibold mb-2">Follow Us on Social Media</div>
                  <div className="flex items-center gap-2">
                    <a
                      href={BUSINESS_INFO.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors text-xs font-bold"
                      title="Follow Saishree Tours on Facebook"
                    >
                      <svg className="w-3.5 h-3.5 fill-blue-600" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span>Facebook</span>
                    </a>
                    <a
                      href={BUSINESS_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-colors text-xs font-bold"
                      title="Follow @saishreetours09 on Instagram"
                    >
                      <svg className="w-3.5 h-3.5 fill-rose-600" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>Instagram</span>
                    </a>
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
