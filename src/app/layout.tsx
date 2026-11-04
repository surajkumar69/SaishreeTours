import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saishreetours.vercel.app"),
  alternates: {
    canonical: "https://saishreetours.vercel.app",
  },
  title: "Saishree Tours | Pune to Mumbai Cab, Outstation Taxi & Bus Rental Service Pune",
  description:
    "Leading cab and bus rental service in Pune. Book Pune to Mumbai daily cabs, Pune airport transfers, outstation taxis, 17-seater Tempo Travellers, and luxury buses with transparent fares. Booking: +91 85308 47555 | Office: +91 96042 52201.",
  keywords: [
    "Pune to Mumbai Cab",
    "Pune to Mumbai Daily Cab Service",
    "Cab Service in Pune",
    "Pune Airport Pickup and Drop",
    "Pune Outstation Cab Booking",
    "Tempo Traveller Booking Pune",
    "Pune to Mahabaleshwar Cab",
    "Pune to Nashik Cab",
    "Pune to Goa Cab",
    "Bus Rental in Pune",
    "Taxi Service New Sangvi",
    "Saishree Tours Pune",
    "Innova Crysta Pune to Mumbai",
    "17 Seater Tempo Traveller Pune",
    "Luxury Bus Booking Pune",
  ],
  authors: [{ name: "Saishree Tours", url: "https://saishreetours.vercel.app" }],
  publisher: "Saishree Tours",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Saishree Tours | Pune to Mumbai Cab, Outstation Taxi & Bus Rental",
    description:
      "Reliable cab booking, airport pickups, tempo traveller, and luxury tourist bus rentals in Pune with transparent fares and 24/7 service.",
    url: "https://saishreetours.vercel.app",
    siteName: "Saishree Tours",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Saishree Tours Premium Cab and Bus Fleet in Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saishree Tours | Pune to Mumbai Cab & Outstation Taxi",
    description: "Comfortable, safe, and reliable travel services for every journey across Maharashtra and India.",
    images: ["/images/hero-banner.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Saishree Tours",
  "alternateName": "Saishree Tours Pune",
  "image": "https://saishreetours.vercel.app/images/logo.png",
  "@id": "https://saishreetours.vercel.app/#organization",
  "url": "https://saishreetours.vercel.app",
  "sameAs": [
    "https://www.facebook.com/share/1CH7iBG2Kh/?mibextid=wwXIfr",
    "https://www.instagram.com/saishreetours09?cplk=NXJ4NXQwMHdmeDF1&utm_source=qr"
  ],
  "telephone": "+918530847555",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-85308-47555",
      "contactType": "reservations",
      "availableLanguage": ["English", "Hindi", "Marathi"],
      "areaServed": "IN"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-96042-52201",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Marathi"],
      "areaServed": "IN"
    }
  ],
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "New Sangvi",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411027",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5772,
    "longitude": 73.8164,
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    "opens": "00:00",
    "closes": "23:59",
  },
  "areaServed": [
    { "@type": "City", "name": "Pune" },
    { "@type": "City", "name": "Pimpri-Chinchwad" },
    { "@type": "City", "name": "Mumbai" },
    { "@type": "City", "name": "Lonavala" },
    { "@type": "City", "name": "Mahabaleshwar" },
    { "@type": "City", "name": "Shirdi" },
    { "@type": "State", "name": "Maharashtra" },
    { "@type": "State", "name": "Goa" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Saishree Tours Cab and Bus Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pune to Mumbai Cab",
          "description": "Daily one-way and round-trip cab service via the Mumbai-Pune Expressway.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pune Airport Pickup and Drop",
          "description": "24/7 transfers for Pune Lohegaon Airport and Mumbai BOM International Airport.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tempo Traveller Booking Pune",
          "description": "17-seater luxury Force Tempo Traveller for family pilgrimages and group tours.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Luxury Bus Rental Pune",
          "description": "27, 32, and 45+ seater AC luxury buses for weddings, corporate offsites, and events.",
        },
      },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#a0cc28] selection:text-black pb-14 sm:pb-0">
        {children}
      </body>
    </html>
  );
}
