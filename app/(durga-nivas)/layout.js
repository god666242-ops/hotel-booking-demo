import DemoBack from "../../components/DemoBack";
import "./globals.css"; import { Fraunces } from "next/font/google";
const f = Fraunces({subsets:["latin"],display:"swap"});
import { s } from "../../hotels/durga-nivas/site"; import Seo from "../../hotels/durga-nivas/components/Seo"; import Bar from "../../hotels/durga-nivas/components/Bar";
export const metadata = { metadataBase: new URL(s.url), title: `${s.name}, ${s.area}, Vijayawada | Rooms from ₹${s.from}`, description: s.desc,
  openGraph: { title: s.name, description: s.desc, images: [s.images.hero], locale: "en_IN", type: "website" } };
export const viewport = { width: "device-width", initialScale: 1 };
export default function L({ children }) {
  return (<html lang="en"><body className={f.className}>{children}<Seo s={s} /><DemoBack /><Bar s={s} /></body></html>);
}
