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
  tagline: string;
  description: string;
  image: string;
  location: string;
}

export const MAHABALESHWAR_SLIDES: DestinationSlide[] = [
  {
    id: "mahabaleshwar-valley",
    name: "Mahabaleshwar Panoramic Valley",
    tagline: "Heart of the Western Ghats",
    description: "Lush green rolling hills, tranquil valleys, and breathtaking natural scenery.",
    image: "/images/mahabaleshwar/1-mahabaleshwar-valley.jpg",
    location: "Mahabaleshwar, Maharashtra",
  },
  {
    id: "venna-lake",
    name: "Venna Lake",
    tagline: "Serene Waterway & Boating",
    description: "Scenic paddle boats, shimmering water reflections, and lush eucalyptus groves.",
    image: "/images/mahabaleshwar/2-venna-lake.jpg",
    location: "Venna Lake, Mahabaleshwar",
  },
  {
    id: "strawberry-farms",
    name: "Authentic Strawberry Farms",
    tagline: "Sweet Sahyadri Harvest",
    description: "Vibrant hillside plantations yielding Maharashtra's freshest red strawberries.",
    image: "/images/mahabaleshwar/3-strawberry-farms.jpg",
    location: "Strawberry Plantations, Mahabaleshwar",
  },
  {
    id: "lingmala-waterfall",
    name: "Lingmala Waterfall",
    tagline: "Cascading Forest Wonder",
    description: "Majestic tiered waterfall plunging into deep subtropical rainforest gorges.",
    image: "/images/mahabaleshwar/4-lingmala-waterfall.jpg",
    location: "Lingmala Falls, Mahabaleshwar",
  },
  {
    id: "elephants-head-point",
    name: "Elephant's Head Point",
    tagline: "Needle Hole Rock Formation",
    description: "Famous natural overhanging rock cliff resembling an elephant's head & trunk.",
    image: "/images/mahabaleshwar/5-elephants-head-point.jpg",
    location: "Needle Hole Point, Mahabaleshwar",
  },
  {
    id: "arthurs-seat-point",
    name: "Arthur's Seat Point",
    tagline: "Queen of All Sahyadri Points",
    description: "Dramatic cliff precipice offering jaw-dropping views of the Savitri river valley.",
    image: "/images/mahabaleshwar/6-arthurs-seat-point.jpg",
    location: "Arthur's Seat, Mahabaleshwar",
  },
  {
    id: "wilson-point",
    name: "Wilson Point (Sunrise Point)",
    tagline: "Highest Peak in Mahabaleshwar",
    description: "Spectacular 360-degree sunrise and sunset panoramas at 1,439 meters elevation.",
    image: "/images/mahabaleshwar/7-wilson-point.jpg",
    location: "Highest Elevation (1,439m)",
  },
  {
    id: "mahabaleshwar-temple",
    name: "Ancient Mahabaleshwar Temple",
    tagline: "16th-Century Sacred Heritage",
    description: "Revered Hemadpanthi stone shrine dedicated to Lord Shiva in Old Mahabaleshwar.",
    image: "/images/mahabaleshwar/8-mahabaleshwar-temple.jpg",
    location: "Old Mahabaleshwar",
  },
  {
    id: "mapro-garden",
    name: "Mapro Garden",
    tagline: "Strawberry Delights & Cafe",
    description: "Lush botanical gardens, famous strawberry sundaes, and gourmet country treats.",
    image: "/images/mahabaleshwar/9-mapro-garden.jpg",
    location: "Gureghar, Panchgani-Mahabaleshwar",
  },
  {
    id: "kates-point",
    name: "Kate's Point (Echo Point)",
    tagline: "Dhom Dam & Krishna Valley",
    description: "Magnificent vantage point towering over the turquoise waters of Dhom reservoir.",
    image: "/images/mahabaleshwar/10-kates-point.jpg",
    location: "Kate's Point, Mahabaleshwar",
  },
  {
    id: "pratapgad-fort",
    name: "Pratapgad Fort",
    tagline: "Historic Mountain Citadel",
    description: "Commanding hilltop stone fortifications steeped in heroic Maratha heritage.",
    image: "/images/mahabaleshwar/11-pratapgad-fort.jpg",
    location: "Poladpur Ghat, Mahabaleshwar",
  },
];
