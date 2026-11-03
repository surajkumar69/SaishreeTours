export const WHATSAPP_NUMBER = "918530847555";

export interface BookingDetails {
  pickupLocation?: string;
  dropLocation?: string;
  pickupDate?: string;
  pickupTime?: string;
  tripType?: "One Way" | "Round Trip" | "Local Rental";
  vehicle?: string;
  passengers?: string;
  serviceName?: string;
  packageName?: string;
  customMessage?: string;
}

export function getWhatsAppBookingUrl(details: BookingDetails): string {
  let message = `*Namaste Saishree Tours!* 🚕\n`;
  message += `I would like to inquire / book a journey with you:\n\n`;

  if (details.tripType) {
    message += `📍 *Trip Type:* ${details.tripType}\n`;
  }
  if (details.pickupLocation) {
    message += `🟢 *Pickup Location:* ${details.pickupLocation}\n`;
  }
  if (details.dropLocation) {
    message += `🔴 *Drop Location:* ${details.dropLocation}\n`;
  }
  if (details.pickupDate) {
    message += `📅 *Date:* ${details.pickupDate}\n`;
  }
  if (details.pickupTime) {
    message += `⏰ *Time:* ${details.pickupTime}\n`;
  }
  if (details.vehicle) {
    message += `🚘 *Vehicle Required:* ${details.vehicle}\n`;
  }
  if (details.passengers) {
    message += `👥 *Number of Passengers:* ${details.passengers}\n`;
  }
  if (details.serviceName) {
    message += `✨ *Service Interested:* ${details.serviceName}\n`;
  }
  if (details.packageName) {
    message += `🏖️ *Tour Package:* ${details.packageName}\n`;
  }
  if (details.customMessage) {
    message += `📝 *Notes:* ${details.customMessage}\n`;
  }

  message += `\nPlease share the best fare estimate and vehicle availability. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getVehicleWhatsAppUrl(vehicleName: string, capacity?: string): string {
  const message = `*Hello Saishree Tours!* 🚕\n\nI want to book the *${vehicleName}* (${capacity || "Standard Capacity"}).\n\nPlease share the fare per km, package rates, and availability for my upcoming journey.\n\nThank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getServiceWhatsAppUrl(serviceTitle: string): string {
  const message = `*Hello Saishree Tours!* 🚕\n\nI am inquiring about *${serviceTitle}*.\n\nPlease share tariff details, vehicle options, and availability.\n\nThank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getDestinationWhatsAppUrl(destinationName: string): string {
  const message = `*Hello Saishree Tours!* 🏖️\n\nI am planning a trip to *${destinationName}* from Pune.\n\nPlease share your complete tour package details, cab options, and pricing.\n\nThank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsAppUrl(): string {
  const message = `*Hello Saishree Tours!* 👋\n\nI have an inquiry regarding your travel and cab booking services in Pune.\n\nPlease connect with me. Thank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
