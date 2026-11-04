import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Fleet from "@/components/Fleet";
import LandmarkFinder from "@/components/LandmarkFinder";
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
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-[#a0cc28] selection:text-black">
      {/* 1. Header with Saishree Tours Logo, Navigation, Dual Phones, and Corner Ribbon */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 2. Hero Section: Headline, Curved Highway Road, and Map-Pin Booking Form */}
        <Hero />

        {/* 3. How It Works: Smartphone App Mockup (NOW/LATER) & Skyline Road Network */}
        <HowItWorks />

        {/* 4. The Fleet: Featured 5-Vehicle Archetypes & Full 11-Vehicle Detailed Browser */}
        <Fleet />

        {/* 5. Landmark Finder: "Find your nearest Saishree Tours Cab" Night Street Banner */}
        <LandmarkFinder />

        {/* 6. Our Services: Complete 20 Travel Services (Preserved 100%) */}
        <Services />

        {/* 7. Tour Packages & Destinations: 8 Popular Getaways from Pune */}
        <Destinations />

        {/* 8. The Saishree Promise: 7 Value Propositions & Trust Guarantees */}
        <WhyChooseUs />

        {/* 9. About Saishree Tours: Story, Chauffeur Quality & New Sangvi Base */}
        <AboutUs />

        {/* 10. Contact Section: Direct Coordinates, Dual Phone Helplines & Google Map */}
        <Contact />
      </main>

      {/* 11. Footer: App Badges, Centered Links, Social Icons & Business Coordinates */}
      <Footer />

      {/* 12. Floating 24/7 WhatsApp & Calling Desks */}
      <FloatingWhatsApp />

      {/* 13. Mobile Bottom Sticky Bar (Both Mandatory Contact Numbers Always Accessible) */}
      <MobileStickyBar />
    </div>
  );
}
