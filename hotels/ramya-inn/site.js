import { I } from "./images"; import { FAQ, TRUST, AMEN } from "./content";
export const s = { name: "Ramya Inn", slug: "ramya-inn", url: "https://example.com", area: "MG Road", pin: "520002",
  address: "Door No. 00-00, MG Road, Labbipet, Vijayawada, Andhra Pradesh", phone: "+910000000000", whatsapp: "910000000000", email: "stay@example.com",
  mapQuery: "MG Road Vijayawada", from: 1199, tag: "Simple, clean rooms in the middle of the city. Pay for the room, not the frills.",
  desc: "Budget hotel on MG Road, Vijayawada. Non-AC from ₹1,199, AC from ₹1,499. Central location, free Wi-Fi, easy booking.",
  images: { hero: I.ext }, trust: TRUST, amen: AMEN, faq: FAQ,
  rooms: [{ name: "Standard Non-AC", price: 1199, size: "140 sq ft", beds: "Double", ac: false, img: I.r4, perks: [] },
    { name: "Deluxe AC", price: 1499, size: "170 sq ft", beds: "Double", ac: true, img: I.r5, perks: [] },
    { name: "Family AC", price: 1799, size: "230 sq ft", beds: "Double + single", ac: true, img: I.r6, perks: [] },
    { name: "Executive AC", price: 1999, size: "260 sq ft", beds: "King", ac: true, img: I.r7, perks: [] }],
  gallery: [I.r1, I.r8],
  nearby: [["MG Road main junction", "0.2 km"], ["PNBS Bus Stand", "2.5 km"], ["Vijayawada Railway Station", "3 km"], ["Prakasam Barrage", "3.5 km"], ["Gannavaram Airport", "20 km"]] };
