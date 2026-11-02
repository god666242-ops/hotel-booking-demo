import { s } from "../../../hotels/annapurna-stay/site"; import { inr } from "../../../hotels/annapurna-stay/lib/format"; import Img from "../../../hotels/annapurna-stay/components/Img"; import Widget from "../../../hotels/annapurna-stay/components/Widget"; import Faq from "../../../hotels/annapurna-stay/components/Faq"; import Map from "../../../hotels/annapurna-stay/components/Map";
const steps = [["Pick a room", "Choose AC or Non-AC below."], ["Pay online", "UPI, card or net banking."], ["Walk in", "Show your ID at the desk, any time of day."]];
export default function P() { return (<>
  <header className="hero"><b className="logo">{s.name}</b><h1>{s.tag}</h1><p>From <strong>{inr(s.from)}</strong> per night · {s.area}, Vijayawada</p>
    <div className="cta"><a className="btn" href="#book">Book now</a><a className="ghost" href={`tel:${s.phone}`}>Call {s.phone}</a></div>
    <Img src={s.images.hero} alt={s.name} className="himg" sizes="(max-width:900px) 100vw, 900px" priority /></header>
  <section className="steps">{steps.map(([a, b], i) => <div key={a}><span>{i + 1}</span><h3>{a}</h3><p>{b}</p></div>)}</section>
  <section className="wide"><h2>Rooms for every budget</h2><div className="car">{s.rooms.map(r => (<article key={r.name}><Img src={r.img} alt={r.name} className="cimg" sizes="300px" />
    <h3>{r.name}</h3><p>{r.beds} · {r.ac ? "AC" : "Non-AC"}</p><p className="pk">{r.perks.join(" · ")}</p><b>{inr(r.price)}</b><a href="#book">Book</a></article>))}</div></section>
  <section id="book" className="tint"><h2>Check availability</h2><Widget slug={s.slug} /></section>
  <section><h2>Why stay with us</h2><div className="why">{s.amen.map(a => <div key={a}>{a}</div>)}</div></section>
  <section className="wide"><h2>Photos</h2><div className="mas">{s.gallery.map((g, i) => <Img key={i} src={g} alt={s.name + " photo " + (i + 1)} sizes="33vw" className={"m" + (i % 3)} />)}</div></section>
  <section><h2>Nearby places</h2><div className="nb">{s.nearby.map(([a, b]) => <div key={a}><span>{a}</span><b>{b}</b></div>)}</div></section>
  <section className="narrow"><h2>FAQs</h2><Faq items={s.faq} /></section>
  <section><h2>Find us</h2><p className="c">{s.address}</p><Map s={s} /></section>
  <footer><b>{s.name}</b> · {s.phone} · {s.email}</footer></>); }
