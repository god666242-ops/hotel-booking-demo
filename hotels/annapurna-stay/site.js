import { I } from "./images"; import { FAQ, TRUST, AMEN } from "./content";
export const s = { name: "Annapurna Stay", slug: "annapurna-stay", url: "https://example.com", area: "Bus Stand Area", pin: "520013",
  address: "Door No. 00-00, Opp. PNBS Bus Stand, Vijayawada, Andhra Pradesh", phone: "+910000000000", whatsapp: "910000000000", email: "stay@example.com",
  mapQuery: "PNBS Bus Stand Vijayawada", from: 999, tag: "Step off the bus, walk to your room. Budget stays right at PNBS.",
  desc: "Budget rooms next to PNBS Bus Stand, Vijayawada from ₹999. Perfect for late arrivals and early buses. 24-hour check-in.",
  images: { hero: I.r3 }, trust: TRUST, amen: AMEN.slice(0, 6), faq: FAQ,
  rooms: [{ name: "Budget Single", price: 999, size: "110 sq ft", beds: "Single bed", ac: false, img: I.r8, perks: ["Attached bath", "Hot water"] },
    { name: "Double AC", price: 1299, size: "160 sq ft", beds: "Double bed", ac: true, img: I.r2, perks: ["AC", "Wi-Fi", "TV"] },
    { name: "Triple AC", price: 1699, size: "220 sq ft", beds: "Double + single", ac: true, img: I.r5, perks: ["AC", "Extra bed", "Wi-Fi"] },
    { name: "Family Room", price: 1999, size: "280 sq ft", beds: "2 double beds", ac: true, img: I.r6, perks: ["AC", "4 guests", "Wi-Fi"] }],
  gallery: [I.r1, I.bath, I.lobby, I.r7, I.ext],
  nearby: [["PNBS Bus Stand", "0.3 km"], ["Vijayawada Railway Station", "2 km"], ["Prakasam Barrage", "3 km"], ["Indrakeeladri (Kanaka Durga Temple)", "4 km"], ["Gannavaram Airport", "20 km"]] };
