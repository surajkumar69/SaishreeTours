/**
 * Centralized Image Registry for Saishree Tours
 * 
 * Maps every Fleet vehicle, Service, and Tour Package destination to its
 * dedicated, authentic, AI-generated high-resolution photograph.
 */

export const FLEET_IMAGES = {
  swiftDzire: "/images/fleet-swift-dzire.jpg",
  hyundaiXcent: "/images/fleet-hyundai-xcent.jpg",
  marutiErtiga: "/images/fleet-maruti-ertiga.jpg",
  mahindraXuv500: "/images/fleet-mahindra-xuv500.jpg",
  toyotaInnova: "/images/fleet-toyota-innova.jpg",
  innovaCrysta: "/images/fleet-innova-crysta.jpg",
  mahindraScorpio: "/images/fleet-mahindra-scorpio.jpg",
  tempoTraveller17: "/images/fleet-tempo-traveller-17.jpg",
  bus27: "/images/fleet-bus-27.jpg",
  bus32: "/images/fleet-bus-32.jpg",
  busLuxuryAc: "/images/fleet-bus-luxury-ac.jpg",
} as const;

export const DESTINATION_IMAGES = {
  lonavalaKhandala: "/images/dest-lonavala.jpg",
  mahabaleshwarPanchgani: "/images/dest-mahabaleshwar.jpg",
  shirdiSaiDarshan: "/images/dest-shirdi.jpg",
  mumbaiCityAirport: "/images/dest-mumbai.jpg",
  goaBeachHoliday: "/images/dest-goa.jpg",
  lavasaCity: "/images/dest-lavasa.jpg",
  alibaugBeaches: "/images/dest-alibaug.jpg",
  ashtavinayakTour: "/images/dest-ashtavinayak.jpg",
} as const;

export const SERVICE_IMAGES = {
  localCabBooking: "/images/fleet-swift-dzire.jpg",
  outstationTaxi: "/images/hero-banner.jpg",
  airportPickupDrop: "/images/service-airport-pickup.jpg",
  oneWayTaxi: "/images/fleet-hyundai-xcent.jpg",
  roundTripTaxi: "/images/fleet-toyota-innova.jpg",
  puneToMumbaiDaily: "/images/service-mumbai-expressway.jpg",
  corporateTransportation: "/images/fleet-innova-crysta.jpg",
  groupTrips: "/images/fleet-tempo-traveller-17.jpg",
  familyTours: "/images/dest-mahabaleshwar.jpg",
  weddingTransportation: "/images/service-wedding-car.jpg",
  tempoTravellerBooking: "/images/fleet-tempo-traveller-17.jpg",
  busTicketBooking: "/images/fleet-bus-27.jpg",
  acLuxuryBusBooking: "/images/fleet-bus-luxury-ac.jpg",
  hotelBooking: "/images/service-hotel-booking.jpg",
  resortVillaBooking: "/images/service-luxury-resort.jpg",
  holidayPackages: "/images/dest-goa.jpg",
  railwayStationTransfers: "/images/fleet-swift-dzire.jpg",
  sightseeingTours: "/images/dest-lonavala.jpg",
  allIndiaTaxiServices: "/images/fleet-mahindra-scorpio.jpg",
  customizedTravelPackages: "/images/dest-lavasa.jpg",
} as const;

export const COMMON_IMAGES = {
  logo: "/images/logo.png",
  heroBanner: "/images/hero-banner.jpg",
} as const;

export interface DestinationSlide {
  id: string;
  name: string;
  nameHindi: string;
  category: "Beach Tours" | "Hill Station Tours" | "Konkan Tours" | "Religious Tours" | "Fort & Historical Tours";
  tagline: string;
  description: string;
  hindiDescription: string;
  image: string;
  location: string;
  focalPosition?: string;
}

/**
 * All 16 Official Maharashtra Tourist Destinations Extracted Directly From User PDF:
 * 1. Beach Tours (4): Diveagar Beach, Tarkarli Beach, Malvan Beach, Alibaug Beach
 * 2. Hill Station Tours (3): Mahabaleshwar, Panchgani, Lonavala
 * 3. Konkan Tours (3): Ratnagiri, Ganpatipule, Dapoli
 * 4. Religious Tours (3): Trimbakeshwar Jyotirlinga, Bhimashankar Jyotirlinga, Grishneshwar Jyotirlinga
 * 5. Fort & Historical Tours (3): Raigad Fort, Sinhagad Fort, Pratapgad Fort
 */
export const PDF_DESTINATIONS: DestinationSlide[] = [
  // 1. BEACH TOURS
  {
    id: "diveagar-beach",
    name: "Diveagar Beach & Resort",
    nameHindi: "दिवेआगर बीच & रिसॉर्ट",
    category: "Beach Tours",
    tagline: "Diveagar Beach View Resort & Konkan Shoreline",
    description: "Peaceful white sand beach and luxury stay at Diveagar Beach View Resort with sea view rooms, in-house dining, and lush green surroundings.",
    hindiDescription: "दिवेआगर बीच व्यू रिसॉर्ट (Diveagar, Maharashtra), समुद्र दर्शन रूम्स, इन-हाउस डाइनिंग और नारियल-सुपारी के पेड़ों से घिरा सुंदर कोकण अनुभव।",
    image: "/images/diveagar-beach-resort.jpg",
    location: "Raigad District, Konkan",
    focalPosition: "center center",
  },
  {
    id: "tarkarli-beach",
    name: "Tarkarli Beach",
    nameHindi: "तारकरली बीच",
    category: "Beach Tours",
    tagline: "Crystal Waters & Water Sports",
    description: "Pristine turquoise waters, scuba diving, clean beaches, and authentic Konkani coastal culture.",
    hindiDescription: "सिंधुदुर्ग का खूबसूरत तट; समुद्री नज़ारे और स्थानीय कोकणी संस्कृति का आनंद लें।",
    image: "/images/destinations/2-tarkarli-beach.jpg",
    location: "Sindhudurg, Konkan",
    focalPosition: "center center",
  },
  {
    id: "malvan-beach",
    name: "Malvan Beach",
    nameHindi: "मालवण बीच",
    category: "Beach Tours",
    tagline: "Golden Sands & Coastal Heritage",
    description: "Golden shorelines, authentic Malvani seafood culture, and scenic ocean views facing Sindhudurg Fort.",
    hindiDescription: "समुद्र किनारे सुकून, स्थानीय भोजन और सिंधुदुर्ग क्षेत्र की तटीय सुंदरता।",
    image: "/images/destinations/3-malvan-beach.jpg",
    location: "Sindhudurg, Konkan",
    focalPosition: "center center",
  },
  {
    id: "alibaug-beach",
    name: "Alibaug Beach",
    nameHindi: "अलीबाग बीच",
    category: "Beach Tours",
    tagline: "Sea Breeze & Island Fort",
    description: "Popular beach getaway near Mumbai & Pune with refreshing sea breezes and historic Kolaba Fort.",
    hindiDescription: "मुंबई के पास लोकप्रिय समुद्रतट, समुद्री हवा और किले-दर्शन के लिए अच्छा ठिकाना।",
    image: "/images/destinations/4-alibaug-beach.jpg",
    location: "Raigad, Near Mumbai / Pune",
    focalPosition: "center center",
  },

  // 2. HILL STATION TOURS
  {
    id: "mahabaleshwar",
    name: "Mahabaleshwar",
    nameHindi: "महाबलेश्वर",
    category: "Hill Station Tours",
    tagline: "Queen of Western Ghats",
    description: "Lush Sahyadri valleys, misty green hills, fresh strawberry farms, and famous panoramic viewpoints.",
    hindiDescription: "सह्याद्री की हरियाली, घाटियों और मनमोहक व्यू-पॉइंट्स के लिए मशहूर हिल स्टेशन।",
    image: "/images/destinations/5-mahabaleshwar.jpg",
    location: "Satara District, Western Ghats",
    focalPosition: "center center",
  },
  {
    id: "panchgani",
    name: "Panchgani",
    nameHindi: "पंचगनी",
    category: "Hill Station Tours",
    tagline: "Volcanic Table Land Plateau",
    description: "Vast flat Table Land plateau, crisp mountain weather, and stunning sweeping views of Krishna valley.",
    hindiDescription: "टेबल लैंड, पहाड़ी दृश्य और शांत मौसम के लिए प्रसिद्ध खूबसूरत पर्यटन स्थल।",
    image: "/images/destinations/6-panchgani.jpg",
    location: "Satara District (Near Mahabaleshwar)",
    focalPosition: "center 40%",
  },
  {
    id: "lonavala",
    name: "Lonavala & Khandala",
    nameHindi: "लोनावला",
    category: "Hill Station Tours",
    tagline: "Emerald Hills & Waterfalls",
    description: "Scenic green hills, cascading seasonal waterfalls, and misty canyons beloved for weekend getaways.",
    hindiDescription: "हरी-भरी पहाड़ियाँ, झरने और मनमोहक घाटियाँ - परिवार और दोस्तों के साथ घूमने का लोकप्रिय स्थान।",
    image: "/images/destinations/7-lonavala.jpg",
    location: "Pune District, Sahyadri Range",
    focalPosition: "center center",
  },

  // 3. KONKAN TOURS
  {
    id: "ratnagiri",
    name: "Ratnagiri",
    nameHindi: "रत्नागिरी",
    category: "Konkan Tours",
    tagline: "Alphonso Orchards & Coastline",
    description: "Scenic Konkan port town famous for authentic Alphonso mango orchards, Bhatye beach, and heritage forts.",
    hindiDescription: "समुद्रतट, ऐतिहासिक धरोहर और आमों के लिए प्रसिद्ध कोकण का सुंदर शहर।",
    image: "/images/destinations/8-ratnagiri.jpg",
    location: "Ratnagiri District, Konkan",
    focalPosition: "center center",
  },
  {
    id: "ganpatipule",
    name: "Ganpatipule",
    nameHindi: "गणपतिपुले",
    category: "Konkan Tours",
    tagline: "Sacred Beach Temple",
    description: "400-year-old self-manifested Swayambhu Ganesha temple directly on the serene Arabian sea shore.",
    hindiDescription: "समुद्र किनारे स्थित प्रसिद्ध गणपति मंदिर और सुंदर बीच का खास संगम।",
    image: "/images/destinations/9-ganpatipule.jpg",
    location: "Ratnagiri District, Konkan",
    focalPosition: "center 35%",
  },
  {
    id: "dapoli",
    name: "Dapoli",
    nameHindi: "दापोली",
    category: "Konkan Tours",
    tagline: "Mini Mahabaleshwar of Konkan",
    description: "Unspoiled beaches, dolphin safari boat rides, and tranquil Konkani villages nestled in coconut groves.",
    hindiDescription: "समुद्रतटों, हरियाली और शांत कोकणी गांवों के बीच सुकून भरी छुट्टी।",
    image: "/images/destinations/10-dapoli.jpg",
    location: "Ratnagiri District, Konkan",
    focalPosition: "center center",
  },

  // 4. RELIGIOUS TOURS
  {
    id: "trimbakeshwar",
    name: "Trimbakeshwar Jyotirlinga",
    nameHindi: "त्र्यंबकेश्वर ज्योतिर्लिंग",
    category: "Religious Tours",
    tagline: "Sacred Godavari Origin Shrine",
    description: "Ancient black basalt Hemadpanthi temple of Lord Shiva, one of the 12 sacred Jyotirlingas near Nashik.",
    hindiDescription: "नाशिक के पास स्थित पवित्र ज्योतिर्लिंग मंदिर; आध्यात्मिक यात्रा का महत्वपूर्ण पड़ाव।",
    image: "/images/destinations/11-trimbakeshwar.jpg",
    location: "Nashik District, Maharashtra",
    focalPosition: "center 30%",
  },
  {
    id: "bhimashankar",
    name: "Bhimashankar Jyotirlinga",
    nameHindi: "भीमाशंकर ज्योतिर्लिंग",
    category: "Religious Tours",
    tagline: "Mist-Shrouded Rainforest Jyotirlinga",
    description: "Sacred Jyotirlinga temple nestled deep inside the dense, misty rainforests of Bhimashankar sanctuary.",
    hindiDescription: "सह्याद्री के जंगलों के बीच स्थित पवित्र ज्योतिर्लिंग और प्राकृतिक सौंदर्य का संगम।",
    image: "/images/destinations/12-bhimashankar.jpg",
    location: "Pune District, Sahyadri Hills",
    focalPosition: "center 35%",
  },
  {
    id: "grishneshwar",
    name: "Grishneshwar Jyotirlinga",
    nameHindi: "घृष्णेश्वर ज्योतिर्लिंग",
    category: "Religious Tours",
    tagline: "12th Jyotirlinga at Ellora",
    description: "The 12th holy Jyotirlinga shrine near Ellora Caves with exquisite red stone carved architecture.",
    hindiDescription: "वेरूळ लेणी के निकट स्थित प्रसिद्ध ज्योतिर्लिंग मंदिर और श्रद्धा का प्रमुख केंद्र।",
    image: "/images/destinations/13-grishneshwar.jpg",
    location: "Chhatrapati Sambhaji Nagar",
    focalPosition: "center 30%",
  },

  // 5. FORT & HISTORICAL TOURS
  {
    id: "raigad-fort",
    name: "Raigad Fort",
    nameHindi: "रायगढ़ किला",
    category: "Fort & Historical Tours",
    tagline: "Capital of Swarajya",
    description: "The majestic hill fortress that served as the capital of Chhatrapati Shivaji Maharaj, towering over deep valleys.",
    hindiDescription: "छत्रपति शिवाजी महाराज की राजधानी रहा ऐतिहासिक दुर्ग; इतिहास और सह्याद्री के शानदार दृश्य।",
    image: "/images/destinations/14-raigad-fort.jpg",
    location: "Raigad District, Sahyadri Range",
    focalPosition: "center 35%",
  },
  {
    id: "sinhagad-fort",
    name: "Sinhagad Fort",
    nameHindi: "सिंहगढ़ किला",
    category: "Fort & Historical Tours",
    tagline: "The Lion's Fort",
    description: "Historic hilltop fortress near Pune with steep cliff ramparts, rich Maratha history, and sweeping views.",
    hindiDescription: "पुणे के पास स्थित ऐतिहासिक किला, सह्याद्री की पहाड़ियों और यादगार इतिहास के लिए प्रसिद्ध।",
    image: "/images/destinations/15-sinhagad-fort.jpg",
    location: "Pune District, Haveli",
    focalPosition: "center 40%",
  },
  {
    id: "pratapgad-fort",
    name: "Pratapgad Fort",
    nameHindi: "प्रतापगढ़ किला",
    category: "Fort & Historical Tours",
    tagline: "Historic Battle Fortress",
    description: "Famous Maratha stone citadel commanding high Sahyadri ridges, known for the epic Battle of Pratapgad.",
    hindiDescription: "महाबलेश्वर के पास ऐतिहासिक मराठा किला; पहाड़ी नज़ारों और गौरवशाली इतिहास का अनुभव।",
    image: "/images/destinations/16-pratapgad-fort.jpg",
    location: "Satara District (Near Mahabaleshwar)",
    focalPosition: "center 35%",
  },
];

// Backwards compatibility alias for components that import MAHABALESHWAR_SLIDES
export const MAHABALESHWAR_SLIDES = PDF_DESTINATIONS;
