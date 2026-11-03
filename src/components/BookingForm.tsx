"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { FLEET_DATA } from "@/lib/constants";

export default function BookingForm() {
  const [tripType, setTripType] = useState<"One Way" | "Round Trip" | "Local Rental">("One Way");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("Toyota Innova Crysta");
  const [passengers, setPassengers] = useState("4");
  const [minDate, setMinDate] = useState<string>("");

  React.useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();

    const url = getWhatsAppBookingUrl({
      tripType,
      pickupLocation: pickupLocation || "Pune (City / Airport)",
      dropLocation: dropLocation || "Mumbai / Outstation Destination",
      pickupDate: pickupDate || "As soon as possible",
      pickupTime: pickupTime || "Immediate / Scheduled",
      vehicle: selectedVehicle,
      passengers,
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const quickPopularRoutes = [
    { from: "Pune", to: "Mumbai Airport" },
    { from: "Pune", to: "Lonavala" },
    { from: "Pune", to: "Mahabaleshwar" },
    { from: "Pune", to: "Shirdi" },
  ];

  return (
    <div className="w-full max-w-xl mx-auto lg:max-w-none">
      <div className="bg-[#12161f]/95 backdrop-blur-xl border border-gray-700/60 rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative gold gradient top border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#d4a843] via-[#ff4d4d] to-[#d4a843]" />

        {/* Form Title & Trip Type Tabs */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4a843] bg-[#d4a843]/10 px-2.5 py-1 rounded-full border border-[#d4a843]/20">
                Instant Fare Estimate & Booking
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5">
                Book Your Ride
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Drivers Ready in Pune
            </div>
          </div>

          {/* Trip Type Selector */}
          <div className="grid grid-cols-3 gap-1.5 bg-[#0a0c10] p-1.5 rounded-2xl border border-gray-800">
            {(["One Way", "Round Trip", "Local Rental"] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setTripType(type)}
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

        {/* Booking Form Fields */}
        <form onSubmit={handleBookNow} className="space-y-4">
          {/* Pickup & Drop Locations */}
          <div className="space-y-3">
            {/* Pickup */}
            <div className="relative">
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Pickup Location
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-emerald-400">
                  <Navigation className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="Enter pickup address, Pune area, or airport..."
                  className="w-full pl-10 pr-4 py-3 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all"
                />
              </div>
            </div>

            {/* Drop Location */}
            <div className="relative">
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Drop Location
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-rose-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={dropLocation}
                  onChange={(e) => setDropLocation(e.target.value)}
                  placeholder={
                    tripType === "Local Rental"
                      ? "Within Pune / PCMC 8hr 80km"
                      : "Enter drop city (e.g. Mumbai, Lonavala, Shirdi)..."
                  }
                  className="w-full pl-10 pr-4 py-3 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Quick Popular Route Pills */}
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
                  }}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-gray-800/80 text-gray-300 hover:text-[#d4a843] hover:bg-gray-700/80 border border-gray-700/60 transition-colors"
                >
                  {route.to}
                </button>
              ))}
            </div>
          </div>

          {/* Date & Time Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Pickup Date
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-gray-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <input
                  type="date"
                  min={minDate || undefined}
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#090b0e] border border-gray-700/80 rounded-2xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] transition-all"
                />
              </div>
            </div>

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
                  <option value="1-2" className="bg-[#11141b]">1 - 2 Persons</option>
                  <option value="3-4" className="bg-[#11141b]">3 - 4 Persons</option>
                  <option value="5-7" className="bg-[#11141b]">5 - 7 Persons (SUV / Innova)</option>
                  <option value="8-12" className="bg-[#11141b]">8 - 12 Persons</option>
                  <option value="13-17" className="bg-[#11141b]">13 - 17 Persons (Tempo)</option>
                  <option value="18-32" className="bg-[#11141b]">18 - 32 Persons (Mini Bus)</option>
                  <option value="33+" className="bg-[#11141b]">33+ Persons (Large Coach)</option>
                </select>
                <div className="pointer-events-none absolute right-3 text-gray-400">
                  ▼
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-[#25D366] via-[#20be5b] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/60 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Confirm & Book on WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-4 mt-3 text-[11px] text-gray-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4a843]" />
                Zero Booking Fee
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Guaranteed On-Time Cab
              </span>
              <span>•</span>
              <span>Instant Confirmation</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
