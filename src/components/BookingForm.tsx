"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Car,
  Users,
  ArrowRightLeft,
  MessageCircle,
  ShieldCheck,
  Check,
  Navigation,
  Info,
  AlertCircle,
} from "lucide-react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { FLEET_DATA } from "@/lib/constants";

export default function BookingForm() {
  const [tripType, setTripType] = useState<"One Way" | "Round Trip" | "Local Rental">("One Way");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("Toyota Innova Crysta");
  const [passengers, setPassengers] = useState("4");
  const [localPackage, setLocalPackage] = useState("8 Hours / 80 km (Full Day)");
  const [minDate, setMinDate] = useState<string>("");
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation checks
    if (!pickupLocation.trim()) {
      setValidationError("Please enter your pickup location in Pune or airport.");
      return;
    }

    if (tripType !== "Local Rental" && !dropLocation.trim()) {
      setValidationError("Please enter your drop destination (e.g. Mumbai, Shirdi, Lonavala).");
      return;
    }

    if (!pickupDate) {
      setValidationError("Please select your travel date.");
      return;
    }

    if (tripType === "Round Trip" && returnDate && returnDate < pickupDate) {
      setValidationError("Return date cannot be earlier than pickup date.");
      return;
    }

    setValidationError(null);

    const url = getWhatsAppBookingUrl({
      tripType,
      pickupLocation: pickupLocation.trim(),
      dropLocation: tripType === "Local Rental" ? (dropLocation.trim() || "Within Pune / PCMC City") : dropLocation.trim(),
      pickupDate,
      returnDate: tripType === "Round Trip" ? returnDate : undefined,
      pickupTime: pickupTime || "As scheduled",
      vehicle: selectedVehicle,
      passengers,
      localPackage: tripType === "Local Rental" ? localPackage : undefined,
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const quickPopularRoutes = [
    { from: "Pune", to: "Mumbai Airport (BOM)" },
    { from: "Pune", to: "Lonavala" },
    { from: "Pune", to: "Mahabaleshwar" },
    { from: "Pune", to: "Shirdi" },
  ];

  return (
    <div id="booking-form" className="w-full max-w-xl mx-auto lg:max-w-none scroll-mt-24">
      <div className="bg-[#12161f]/95 backdrop-blur-xl border border-gray-700/60 rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative gold gradient top border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#d4a843] via-[#ff4d4d] to-[#d4a843]" />

        {/* Form Title & Trip Type Tabs */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4a843] bg-[#d4a843]/10 px-2.5 py-1 rounded-full border border-[#d4a843]/20">
                Instant Fare Estimate & Availability
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5">
                Book Your Ride
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available 24/7 in Pune
            </div>
          </div>

          {/* Trip Type Selector */}
          <div className="grid grid-cols-3 gap-1.5 bg-[#0a0c10] p-1.5 rounded-2xl border border-gray-800">
            {(["One Way", "Round Trip", "Local Rental"] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => {
                  setTripType(type);
                  setValidationError(null);
                }}
                className={`py-2 px-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 text-center ${
                  tripType === type
                    ? "bg-[#d4a843] text-black shadow-md font-bold"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/60"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Validation Error Banner */}
        {validationError && (
          <div className="mb-4 p-3 rounded-2xl bg-rose-950/60 border border-rose-800 text-rose-200 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Booking Form Fields */}
        <form onSubmit={handleBookNow} className="space-y-4">
          {/* Pickup & Drop Locations */}
          <div className="space-y-3">
            {/* Pickup */}
            <div className="relative">
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Pickup Location <span className="text-rose-400">*</span>
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-emerald-400">
                  <Navigation className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={pickupLocation}
                  onChange={(e) => {
                    setPickupLocation(e.target.value);
                    if (validationError) setValidationError(null);
                  }}
                  placeholder="Enter pickup address, Pune area, or airport..."
                  className="w-full pl-10 pr-4 py-3 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all"
                />
              </div>
            </div>

            {/* Drop Location / Local Package */}
            {tripType === "Local Rental" ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Local Hourly Package
                  </label>
                  <select
                    value={localPackage}
                    onChange={(e) => setLocalPackage(e.target.value)}
                    className="w-full px-4 py-3 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-sm text-white focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all cursor-pointer"
                  >
                    <option value="4 Hours / 40 km (Half Day)">4 Hours / 40 km (Half Day City)</option>
                    <option value="8 Hours / 80 km (Full Day)">8 Hours / 80 km (Full Day City)</option>
                    <option value="12 Hours / 120 km (Extended)">12 Hours / 120 km (Extended City & PCMC)</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Coverage Area / Key Stops (Optional)
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 text-rose-500">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={dropLocation}
                      onChange={(e) => setDropLocation(e.target.value)}
                      placeholder="e.g. Hinjawadi, Koregaon Park, Swargate..."
                      className="w-full pl-10 pr-4 py-3 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Drop Destination <span className="text-rose-400">*</span>
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3.5 text-rose-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={dropLocation}
                    onChange={(e) => {
                      setDropLocation(e.target.value);
                      if (validationError) setValidationError(null);
                    }}
                    placeholder="Enter drop city (e.g. Mumbai, Lonavala, Shirdi, Goa)..."
                    className="w-full pl-10 pr-4 py-3 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Quick Popular Route Pills */}
          {tripType !== "Local Rental" && (
            <div className="pt-0.5">
              <span className="text-[11px] text-gray-400 mr-2">Popular:</span>
              <div className="inline-flex flex-wrap gap-1.5 mt-1">
                {quickPopularRoutes.map((route) => (
                  <button
                    key={`${route.from}-${route.to}`}
                    type="button"
                    onClick={() => {
                      setPickupLocation(route.from);
                      setDropLocation(route.to);
                      if (validationError) setValidationError(null);
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-gray-800/80 text-gray-300 hover:text-[#d4a843] hover:bg-gray-700/80 border border-gray-700/60 transition-colors"
                  >
                    {route.to}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Date & Time Row */}
          <div className={`grid ${tripType === "Round Trip" ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"} gap-3 pt-1`}>
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Pickup Date <span className="text-rose-400">*</span>
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-gray-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <input
                  type="date"
                  required
                  min={minDate || undefined}
                  value={pickupDate}
                  onChange={(e) => {
                    setPickupDate(e.target.value);
                    if (validationError) setValidationError(null);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all"
                />
              </div>
            </div>

            {tripType === "Round Trip" && (
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Return Date
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3.5 text-gray-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    min={pickupDate || minDate || undefined}
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Pickup Time
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-gray-400">
                  <Clock className="w-4 h-4" />
                </div>
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Vehicle & Passengers Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Vehicle Selection
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-[#d4a843]">
                  <Car className="w-4 h-4" />
                </div>
                <select
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all appearance-none cursor-pointer"
                >
                  {FLEET_DATA.map((v) => (
                    <option key={v.id} value={v.name} className="bg-[#11141b] text-white">
                      {v.name} ({v.capacity})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 text-gray-400">
                  ▼
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Passengers
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-gray-400">
                  <Users className="w-4 h-4" />
                </div>
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all appearance-none cursor-pointer"
                >
                  <option value="1-2" className="bg-[#11141b]">1 - 2 Passengers (Sedan)</option>
                  <option value="3-4" className="bg-[#11141b]">3 - 4 Passengers (Sedan / Ertiga)</option>
                  <option value="5-7" className="bg-[#11141b]">5 - 7 Passengers (Innova Crysta / SUV)</option>
                  <option value="8-12" className="bg-[#11141b]">8 - 12 Passengers (Tempo / Maxi)</option>
                  <option value="13-17" className="bg-[#11141b]">13 - 17 Passengers (17 Seater Tempo)</option>
                  <option value="18-32" className="bg-[#11141b]">18 - 32 Passengers (Mini Bus)</option>
                  <option value="33+" className="bg-[#11141b]">33+ Passengers (Luxury Coach)</option>
                </select>
                <div className="pointer-events-none absolute right-3 text-gray-400">
                  ▼
                </div>
              </div>
            </div>
          </div>

          {/* Transparent Pricing Disclaimer Card */}
          <div className="p-3 rounded-2xl bg-[#090b0e] border border-gray-800 text-[11px] text-gray-400 space-y-1">
            <div className="flex items-center gap-1.5 text-gray-300 font-semibold">
              <Info className="w-3.5 h-3.5 text-[#d4a843] shrink-0" />
              <span>Transparent Fare Policy</span>
            </div>
            <p className="text-[11px] leading-relaxed text-gray-400">
              Quotes include base fare & fuel. Highway tolls, state border taxes, airport parking, and driver night allowance (after 10 PM) are itemized upfront. Zero surprise extras.
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-1">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-[#25D366] via-[#20be5b] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/60 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Confirm & Book on WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-3 text-[11px] text-gray-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4a843]" />
                Zero Advance Booking Fee
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Prompt Scheduled Pickup
              </span>
              <span>•</span>
              <span>Direct WhatsApp Help</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
