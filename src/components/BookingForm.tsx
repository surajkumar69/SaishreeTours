"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Clock,
  Car,
  Users,
  Navigation,
  AlertCircle,
  Sparkles,
  ChevronDown,
  Info,
} from "lucide-react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { FLEET_DATA } from "@/lib/constants";

export default function BookingForm() {
  // Booking Timing: "Now" vs "Later" (Exact match for reference)
  const [timing, setTiming] = useState<"Now" | "Later">("Now");
  // Trip type: One Way, Round Trip, Local Rental
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
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
    if (!pickupDate) {
      setPickupDate(today);
    }
  }, [pickupDate]);

  const handleBookNow = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!pickupLocation.trim()) {
      setValidationError("Please enter your pickup location.");
      return;
    }

    if (tripType !== "Local Rental" && !dropLocation.trim()) {
      setValidationError("Please enter your dropoff address or destination.");
      return;
    }

    if (timing === "Later" && !pickupDate) {
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
      dropLocation:
        tripType === "Local Rental"
          ? dropLocation.trim() || "Within Pune / PCMC City"
          : dropLocation.trim(),
      pickupDate: timing === "Now" ? "Today (Immediate / ASAP)" : pickupDate,
      returnDate: tripType === "Round Trip" ? returnDate : undefined,
      pickupTime: timing === "Now" ? "Immediate Pickup (ASAP)" : pickupTime || "Scheduled",
      vehicle: selectedVehicle,
      passengers,
      localPackage: tripType === "Local Rental" ? localPackage : undefined,
      customMessage: timing === "Now" ? "Urgent/Immediate pickup requested" : undefined,
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
    <div id="booking-form" className="w-full max-w-md sm:max-w-lg mx-auto relative z-20 pt-4 pb-20 sm:pb-24">
      {/* Map Pin Teardrop Container (Matching the reference design blueprint) */}
      <div className="relative">
        {/* Main Map Pin Dark Charcoal Rounded Body */}
        <div className="bg-[#212631] text-white rounded-[42px] sm:rounded-[52px] p-6 sm:p-8 pt-7 sm:pt-9 shadow-2xl border border-white/10 relative z-20">
          {/* NOW / LATER Toggle Buttons (Exact match for reference design) */}
          <div className="flex items-center justify-center gap-1 max-w-[240px] mx-auto bg-[#13171e] p-1 rounded-full border border-gray-700/60 mb-5">
            <button
              type="button"
              onClick={() => {
                setTiming("Now");
                setValidationError(null);
              }}
              className={`flex-1 py-2 px-5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                timing === "Now"
                  ? "bg-[#a0cc28] text-black shadow-md scale-102"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Now
            </button>
            <button
              type="button"
              onClick={() => {
                setTiming("Later");
                setShowAdvanced(true);
                setValidationError(null);
              }}
              className={`flex-1 py-2 px-5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                timing === "Later"
                  ? "bg-[#a0cc28] text-black shadow-md scale-102"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Later
            </button>
          </div>

          {/* Trip Type Pills: One Way | Round Trip | Local Rental */}
          <div className="flex items-center justify-center gap-1.5 mb-4">
            {(["One Way", "Round Trip", "Local Rental"] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => {
                  setTripType(type);
                  setValidationError(null);
                }}
                className={`text-[11px] font-bold py-1 px-3 rounded-full transition-all ${
                  tripType === type
                    ? "bg-white/20 text-white border border-[#a0cc28]/60"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Validation Error Alert */}
          {validationError && (
            <div className="mb-4 p-2.5 rounded-xl bg-rose-950/80 border border-rose-700 text-rose-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Address Inputs (White Rounded Text Boxes Matching Reference) */}
          <div className="space-y-3">
            {/* Pickup Address */}
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a0cc28]">
                <Navigation className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => {
                  setPickupLocation(e.target.value);
                  if (validationError) setValidationError(null);
                }}
                placeholder="Pickup Address (Pune area or airport)"
                className="w-full pl-10 pr-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-2xl text-xs sm:text-sm font-medium border-2 border-transparent focus:border-[#a0cc28] focus:outline-none shadow-inner transition-all"
              />
            </div>

            {/* Dropoff Address or Local Package */}
            {tripType === "Local Rental" ? (
              <div className="space-y-2">
                <select
                  value={localPackage}
                  onChange={(e) => setLocalPackage(e.target.value)}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-2xl text-xs sm:text-sm font-medium border-2 border-transparent focus:border-[#a0cc28] focus:outline-none shadow-inner"
                >
                  <option value="4 Hours / 40 km (Half Day)">4 Hours / 40 km (Half Day City)</option>
                  <option value="8 Hours / 80 km (Full Day)">8 Hours / 80 km (Full Day City)</option>
                  <option value="12 Hours / 120 km (Extended)">12 Hours / 120 km (Full Day & PCMC)</option>
                </select>
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-rose-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={dropLocation}
                    onChange={(e) => setDropLocation(e.target.value)}
                    placeholder="Specific Pune Area / Stops (Optional)"
                    className="w-full pl-10 pr-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-2xl text-xs sm:text-sm font-medium border-2 border-transparent focus:border-[#a0cc28] focus:outline-none shadow-inner"
                  />
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-rose-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={dropLocation}
                  onChange={(e) => {
                    setDropLocation(e.target.value);
                    if (validationError) setValidationError(null);
                  }}
                  placeholder="Dropoff Address (e.g. Mumbai, Shirdi, Lonavala)"
                  className="w-full pl-10 pr-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-2xl text-xs sm:text-sm font-medium border-2 border-transparent focus:border-[#a0cc28] focus:outline-none shadow-inner transition-all"
                />
              </div>
            )}
          </div>

          {/* Collapsible / Optional Date, Time, Vehicle selectors (Auto-expanded when 'Later') */}
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center justify-between w-full py-1.5 px-3 text-[11px] font-semibold text-gray-400 hover:text-[#a0cc28] transition-colors"
            >
              <span>{showAdvanced ? "Hide ride preferences" : "+ Choose date, vehicle & passengers"}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showAdvanced ? "rotate-180" : ""}`} />
            </button>

            {(showAdvanced || timing === "Later") && (
              <div className="mt-2.5 p-3 rounded-2xl bg-[#141822] border border-gray-700/60 space-y-2.5 text-xs">
                {/* Date / Time */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] text-gray-400 mb-1">Pickup Date</label>
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-2.5 w-3.5 h-3.5 text-gray-400" />
                      <input
                        type="date"
                        min={minDate || undefined}
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-full pl-8 pr-2 py-2 bg-gray-900 border border-gray-700 rounded-xl text-white text-xs focus:outline-none focus:border-[#a0cc28]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-gray-400 mb-1">Pickup Time</label>
                    <div className="relative flex items-center">
                      <Clock className="absolute left-2.5 w-3.5 h-3.5 text-gray-400" />
                      <input
                        type="time"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="w-full pl-8 pr-2 py-2 bg-gray-900 border border-gray-700 rounded-xl text-white text-xs focus:outline-none focus:border-[#a0cc28]"
                      />
                    </div>
                  </div>
                </div>

                {tripType === "Round Trip" && (
                  <div>
                    <label className="block text-[10px] text-gray-400 mb-1">Return Date</label>
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-2.5 w-3.5 h-3.5 text-gray-400" />
                      <input
                        type="date"
                        min={pickupDate || minDate || undefined}
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full pl-8 pr-2 py-2 bg-gray-900 border border-gray-700 rounded-xl text-white text-xs focus:outline-none focus:border-[#a0cc28]"
                      />
                    </div>
                  </div>
                )}

                {/* Vehicle & Passengers */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] text-gray-400 mb-1">Select Vehicle</label>
                    <div className="relative flex items-center">
                      <Car className="absolute left-2.5 w-3.5 h-3.5 text-[#a0cc28]" />
                      <select
                        value={selectedVehicle}
                        onChange={(e) => setSelectedVehicle(e.target.value)}
                        className="w-full pl-8 pr-2 py-2 bg-gray-900 border border-gray-700 rounded-xl text-white text-xs focus:outline-none focus:border-[#a0cc28] appearance-none"
                      >
                        {FLEET_DATA.map((v) => (
                          <option key={v.id} value={v.name}>
                            {v.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-gray-400 mb-1">Passengers</label>
                    <div className="relative flex items-center">
                      <Users className="absolute left-2.5 w-3.5 h-3.5 text-gray-400" />
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="w-full pl-8 pr-2 py-2 bg-gray-900 border border-gray-700 rounded-xl text-white text-xs focus:outline-none focus:border-[#a0cc28] appearance-none"
                      >
                        <option value="1-2">1 - 2 (Sedan)</option>
                        <option value="3-4">3 - 4 (Sedan/Ertiga)</option>
                        <option value="5-7">5 - 7 (Innova Crysta)</option>
                        <option value="8-17">8 - 17 (Tempo Traveller)</option>
                        <option value="18+">18+ (Luxury Bus)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Yellow 3D Car Graphic (Positioned resting on lower curve of pin like reference) */}
          <div className="relative -mb-6 mt-4 w-full h-24 sm:h-28 flex items-center justify-center pointer-events-none">
            <div className="relative w-56 sm:w-64 h-24 sm:h-28">
              <Image
                src="/images/pin-car.svg"
                alt="Saishree Tours Yellow Cab"
                fill
                priority
                className="object-contain filter drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* The Bottom Point of the Map Pin */}
        <div className="map-pin-pointer" />

        {/* FARE ESTIMATE Circular Lime Green Badge Button (Exact match for reference) */}
        <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 z-30">
          <button
            type="button"
            onClick={() => handleBookNow()}
            className="fare-estimate-btn w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center text-center p-2 cursor-pointer transition-transform active:scale-95"
            title="Get Instant Fare Estimate & Book on WhatsApp"
          >
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider leading-tight text-gray-950">
              FARE
            </span>
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider leading-tight text-gray-950">
              ESTIMATE
            </span>
          </button>
        </div>
      </div>

      {/* Quick popular route pill badges */}
      <div className="mt-14 sm:mt-16 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <span className="text-[11px] text-gray-300 font-bold mr-1">Popular:</span>
          {quickPopularRoutes.map((route) => (
            <button
              key={`${route.from}-${route.to}`}
              type="button"
              onClick={() => {
                setPickupLocation(route.from);
                setDropLocation(route.to);
                setValidationError(null);
              }}
              className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/15 hover:bg-[#a0cc28] text-white hover:text-black font-semibold transition-colors"
            >
              {route.to}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
