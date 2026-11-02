import Script from "next/script";
import { s } from "../../../hotels/sri-sai-residency/site";
import { inr } from "../../../hotels/sri-sai-residency/lib/format";
import Img from "../../../hotels/sri-sai-residency/components/Img";
import Faq from "../../../hotels/sri-sai-residency/components/Faq";
import Map from "../../../hotels/sri-sai-residency/components/Map";

const wa = `https://wa.me/${s.whatsapp}?text=${encodeURIComponent("Hi, I have a query about " + s.name)}`;
const links = [
  ["Rooms", "rooms"],
  ["Facilities", "facilities"],
  ["Nearby", "nearby"],
  ["Photos", "photos"],
  ["FAQ", "faq"],
  ["Contact", "contact"],
];

export default function P() {
  return (
    <>
      {/* PureBook Booking Engine CDN Script */}
      <Script
        src="https://cdn.purebook.in/engine.js"
        strategy="afterInteractive"
      />

      <div className="sign">
        <span>{s.address}</span>
        <a href={`tel:${s.phone}`}>Call {s.phone}</a>
      </div>
      <header className="nav">
        <a className="brand" href="#top">
          {s.name}
        </a>
        <nav aria-label="Sections">
          {links.map(([t, id]) => (
            <a key={id} href={"#" + id}>
              {t}
            </a>
          ))}
        </nav>
        <a className="call" href={`tel:${s.phone}`}>
          Call us
        </a>
      </header>
      <main id="top">
        <section className="hero">
          <div className="ht">
            <h1>{s.headline}</h1>
            <p className="lead">
              {s.tag} Rooms start at <b>{inr(s.from)}</b> a night.
            </p>
            <div className="reserve">
              {/* PureBook Web Component Widget */}
              <hotel-booking-engine data-hotel={s.slug}></hotel-booking-engine>

              <a
                className="wa"
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask on WhatsApp
              </a>
            </div>
            <ul className="facts">
              {s.trust.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="hp">
            <Img
              src={s.images.hero}
              alt={s.name + " room"}
              className="himg"
              sizes="(max-width:900px) 100vw, 50vw"
              priority
            />
            <div className="tag">
              <small>Vijayawada Jn</small>
              <b>0.4 km</b>
            </div>
          </div>
        </section>
        <section className="stats">
          {s.stats.map(([a, b]) => (
            <div key={b}>
              <b>{a}</b>
              <span>{b}</span>
            </div>
          ))}
        </section>
        <section className="about wrap">
          <div className="pair">
            <Img src={I2(s, 0)} alt="Reception" className="p1" sizes="30vw" />
            <Img src={I2(s, 1)} alt="Bathroom" className="p2" sizes="30vw" />
          </div>
          <div>
            <h2>A plain, honest place to stay</h2>
            {s.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="why">
              {s.why.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="wrap" id="rooms">
          <div className="sh">
            <h2>Rooms</h2>
            <p>
              Three simple room types. Rates are per room, per night, taxes
              extra.
            </p>
          </div>
          {s.rooms.map((r, i) => (
            <article className={"rm" + (i % 2 ? " flip" : "")} key={r.name}>
              <Img
                src={r.img}
                alt={r.name}
                className="rimg"
                sizes="(max-width:800px) 100vw, 45vw"
              />
              <div className="rb">
                <span className={"type" + (r.ac ? " ac" : "")}>
                  {r.ac ? "AC" : "Non-AC"}
                </span>
                <h3>{r.name}</h3>
                <p>{r.desc}</p>
                <dl>
                  <div>
                    <dt>Bed</dt>
                    <dd>{r.beds}</dd>
                  </div>
                  <div>
                    <dt>Size</dt>
                    <dd>{r.size}</dd>
                  </div>
                </dl>
                <ul className="chips">
                  {r.perks.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="price">
                  <b>{inr(r.price)}</b> per night
                </div>
              </div>
            </article>
          ))}
        </section>
        <section className="deps" id="nearby">
          <div className="wrap">
            <div className="sh">
              <h2>Around the hotel</h2>
              <p>How far everything is from our front door.</p>
            </div>
            <div className="brd" role="table">
              <div className="bh" role="row">
                <span>Place</span>
                <span>Distance</span>
                <span>Getting there</span>
              </div>
              {s.nearby.map(([a, b, c]) => (
                <div className="bd" role="row" key={a}>
                  <span>{a}</span>
                  <b>{b}</b>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="wrap" id="facilities">
          <div className="sh">
            <h2>What you get</h2>
            <p>The basics, done properly.</p>
          </div>
          <ul className="fac">
            {s.facilities.map(([i, t, d]) => (
              <li key={t}>
                <span aria-hidden="true">{i}</span>
                <div>
                  <b>{t}</b>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="uses">
          <div className="wrap">
            <div className="sh">
              <h2>Who stays with us</h2>
            </div>
            <div className="ug">
              {s.uses.map(([t, d]) => (
                <div key={t}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="wrap" id="photos">
          <div className="sh">
            <h2>Take a look</h2>
          </div>
          <div className="bento">
            {s.gallery.map((g, i) => (
              <Img
                key={i}
                src={g}
                alt={s.name + " photo " + (i + 1)}
                className={"b" + i}
                sizes="(max-width:800px) 50vw, 33vw"
              />
            ))}
          </div>
        </section>
        <section className="wrap">
          <div className="sh">
            <h2>Good to know</h2>
          </div>
          <dl className="info">
            {s.info.map(([a, b]) => (
              <div key={a}>
                <dt>{a}</dt>
                <dd>{b}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="wrap" id="faq">
          <div className="sh">
            <h2>Questions guests ask</h2>
          </div>
          <Faq items={s.faq} />
        </section>
        <section className="contact" id="contact">
          <div className="wrap cg">
            <div>
              <h2>Find us</h2>
              <p className="ad">{s.address}</p>
              <div className="cl">
                <a href={`tel:${s.phone}`}>Call {s.phone}</a>
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  WhatsApp us
                </a>
                <a href={`mailto:${s.email}`}>{s.email}</a>
              </div>
              <h3>How to reach us</h3>
              {s.reach.map(([a, b]) => (
                <div className="rc" key={a}>
                  <b>{a}</b>
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap">
          <b>{s.name}</b>
          <p>{s.address}</p>
          <p>
            {s.phone}, {s.email}
          </p>
          <small>
            © {new Date().getFullYear()} {s.name}. Rooms from {inr(s.from)} per
            night.
          </small>
        </div>
      </footer>
    </>
  );
}

function I2(s, i) {
  return [s.gallery[2], s.gallery[1]][i];
}