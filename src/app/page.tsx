import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Fleet from "@/components/Fleet";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Destinations from "@/components/Destinations";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-white flex flex-col selection:bg-[#d4a843] selection:text-black">
      {/* Top Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section with Careem-inspired Booking Experience */}
        <Hero />

        {/* 2. How It Works - 4 Step Booking Journey */}
        <HowItWorks />

        {/* 3. Our Fleet - 11 Premium Vehicles */}
        <Fleet />

        {/* 4. Our Services - 20 Comprehensive Travel Services */}
        <Services />

        {/* 5. Why Choose Us - Value Proposition & Statistics */}
        <WhyChooseUs />

        {/* 6. Popular Destinations Gallery */}
        <Destinations />

        {/* 7. About Saishree Tours */}
        <AboutUs />

        {/* 8. Contact Section with Direct Form & Coordinates */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 24/7 WhatsApp & Quick Call Pill */}
      <FloatingWhatsApp />

      {/* Sticky Mobile Bottom Booking Bar */}
      <MobileStickyBar />
    </div>
  );
}
