import Image from "next/image";
import { hotels } from "../../hotels";
import { meta } from "../../showcase.config";

const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");

export default function Home() {
  return (
    <main>
      <header className="top">
        <h1>Website demos for Vijayawada budget hotels</h1>
        <p>Tap a card to open the full website. Like one? We hand over your own copy with your hotel&apos;s name, photos and booking.</p>
      </header>
      <section className="grid">
        {hotels.map((s) => {
          const m = meta[s.slug] || {};
          const accent = m.accent || "#374151";
          return (
            <a key={s.slug} href={`/${s.slug}`} className="card" style={{ "--accent": accent }}>
              <div className="pic"><Image src={s.images.hero} alt={s.name} fill sizes="(max-width:700px) 100vw, 360px" style={{ objectFit: "cover" }} /></div>
              <div className="body">
                <span className="area">{s.area}</span>
                <h2>{s.name}</h2>
                {m.style && <p className="style">{m.style}</p>}
                <p className="tag">{s.tag}</p>
                <div className="row"><span>From <b>{inr(s.from)}</b></span><span className="go">View website →</span></div>
              </div>
            </a>
          );
        })}
      </section>
      <footer className="foot">Every site is fully independent. Your copy runs on its own domain.</footer>
    </main>
  );
}
