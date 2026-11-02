import DemoBack from "../../components/DemoBack";
import "./globals.css"; import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import { s } from "../../hotels/sri-sai-residency/site"; import Seo from "../../hotels/sri-sai-residency/components/Seo"; import Bar from "../../hotels/sri-sai-residency/components/Bar";
const d = Bricolage_Grotesque({ subsets: ["latin"], variable: "--fd", display: "swap" });
const b = Public_Sans({ subsets: ["latin"], variable: "--fb", display: "swap" });
export const metadata = { metadataBase: new URL(s.url), title: `${s.name}, ${s.area}, Vijayawada | Rooms from ₹${s.from}`, description: s.desc,
  openGraph: { title: s.name, description: s.desc, images: [s.images.hero], locale: "en_IN", type: "website" } };
export const viewport = { width: "device-width", initialScale: 1 };
export default function L({ children }) {
  return (<html lang="en"><body className={`${d.variable} ${b.variable}`}>{children}<Seo s={s} /><DemoBack /><Bar s={s} /></body></html>);
}
