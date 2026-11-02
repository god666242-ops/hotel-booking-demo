import { I } from "./images"; import { FAQ, TRUST, AMEN } from "./content";
export const s = { name: "Durga Nivas", slug: "durga-nivas", url: "https://example.com", area: "Near Kanaka Durga Temple", pin: "520003",
  address: "Door No. 00-00, Near Indrakeeladri, Durga Ghat Road, Vijayawada, Andhra Pradesh", phone: "+910000000000", whatsapp: "910000000000", email: "stay@example.com",
  mapQuery: "Kanaka Durga Temple Vijayawada", from: 1099, tag: "A simple, clean family stay a short walk from Kanaka Durga Temple.",
  desc: "Budget family rooms near Kanaka Durga Temple (Indrakeeladri), Vijayawada from ₹1,099. Clean, quiet, 24-hour hot water. Book direct.",
  images: { hero: I.r5 }, trust: TRUST, amen: AMEN, faq: FAQ,
  rooms: [{ name: "Pilgrim Room (Non-AC)", price: 1099, size: "170 sq ft", beds: "Double bed", ac: false, img: I.r7, perks: ["Attached bath", "Hot water", "Fan"] },
    { name: "Double AC Room", price: 1499, size: "190 sq ft", beds: "Double bed", ac: true, img: I.r1, perks: ["AC", "Wi-Fi", "LED TV"] },
    { name: "Family Room (4 guests)", price: 1999, size: "300 sq ft", beds: "2 double beds", ac: true, img: I.r6, perks: ["AC", "Spacious", "Wi-Fi"] }],
  gallery: [I.lobby, I.ext, I.bath],
  nearby: [["Kanaka Durga Temple (Indrakeeladri)", "0.8 km"], ["Durga Ghat", "1 km"], ["Prakasam Barrage", "2.5 km"], ["Vijayawada Railway Station", "4 km"], ["Gannavaram Airport", "22 km"]] };
