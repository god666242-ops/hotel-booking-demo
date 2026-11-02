import { I } from "./images"; import { FAQ, TRUST, AMEN } from "./content";
export const s = { name: "Pavan Comforts", slug: "pavan-comforts", url: "https://example.com", area: "Benz Circle", pin: "520010",
  address: "Door No. 00-00, Benz Circle, Patamata, Vijayawada, Andhra Pradesh", phone: "+910000000000", whatsapp: "910000000000", email: "stay@example.com",
  mapQuery: "Benz Circle Vijayawada", from: 1099, tag: "Comfortable AC rooms at Benz Circle, close to food, shops and hospitals.",
  desc: "Budget AC rooms at Benz Circle, Vijayawada from ₹1,099. Free Wi-Fi, 24-hour front desk, easy parking. Book direct.",
  images: { hero: I.r6 }, trust: TRUST, amen: AMEN, faq: FAQ,
  rooms: [{ name: "Economy Double AC", price: 1099, size: "150 sq ft", beds: "Double bed", ac: true, img: I.r7, perks: ["AC", "Hot water"] },
    { name: "Deluxe AC", price: 1499, size: "190 sq ft", beds: "Queen bed", ac: true, img: I.r8, perks: ["AC", "Wi-Fi", "LED TV"] },
    { name: "Triple AC", price: 1899, size: "250 sq ft", beds: "Double + single bed", ac: true, img: I.r1, perks: ["AC", "Extra bed", "Wi-Fi"] }],
  gallery: [I.r2, I.r3, I.bath, I.lobby, I.ext, I.food],
  nearby: [["Benz Circle Flyover", "0.3 km"], ["Siddhartha Medical College", "3 km"], ["Vijayawada Railway Station", "5 km"], ["PNBS Bus Stand", "5.5 km"], ["Gannavaram Airport", "18 km"]] };
