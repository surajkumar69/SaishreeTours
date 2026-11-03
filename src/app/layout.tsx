import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saishreetours.com"),
  title: "Saishree Tours | Journey Beyond Destination - Pune Cab & Luxury Travel Services",
  description:
    "Saishree Tours offers premier cab booking, outstation taxi, Pune to Mumbai daily travel, luxury bus hire, and customized holiday packages across India.",
  keywords: [
    "Saishree Tours Pune",
    "Cab Booking Pune",
    "Taxi Service New Sangvi",
    "Pune to Mumbai Cab",
    "Outstation Taxi Pune",
    "Tempo Traveller Pune",
    "Luxury Bus Booking Pune",
    "Airport Taxi Pune",
  ],
  authors: [{ name: "Saishree Tours" }],
  openGraph: {
    title: "Saishree Tours - Journey Beyond Destination",
    description: "Premium, Comfortable & Reliable Cab and Bus Booking Services in Pune & All India.",
    url: "https://saishreetours.com",
    siteName: "Saishree Tours",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Saishree Tours Luxury Fleet",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className="min-h-screen bg-[#0d0f12] text-white font-sans antialiased selection:bg-[#d4a843] selection:text-black">
        {children}
      </body>
    </html>
  );
}
