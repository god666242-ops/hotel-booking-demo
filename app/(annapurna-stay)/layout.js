import DemoBack from "../../components/DemoBack";
import "./globals.css"; import { Poppins } from "next/font/google";
const f = Poppins({subsets:["latin"],weight:["400","500","600","700"],display:"swap"});
import { s } from "../../hotels/annapurna-stay/site"; import Seo from "../../hotels/annapurna-stay/components/Seo"; import Bar from "../../hotels/annapurna-stay/components/Bar";
export const metadata = { metadataBase: new URL(s.url), title: `${s.name}, ${s.area}, Vijayawada | Rooms from ₹${s.from}`, description: s.desc,
  openGraph: { title: s.name, description: s.desc, images: [s.images.hero], locale: "en_IN", type: "website" } };
export const viewport = { width: "device-width", initialScale: 1 };
export default function L({ children }) {
  return (<html lang="en"><body className={f.className}>{children}<Seo s={s} /><DemoBack /><Bar s={s} /></body></html>);
}
