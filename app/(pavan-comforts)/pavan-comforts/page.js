import { s } from "../../../hotels/pavan-comforts/site"; import { inr } from "../../../hotels/pavan-comforts/lib/format"; import Img from "../../../hotels/pavan-comforts/components/Img"; import Widget from "../../../hotels/pavan-comforts/components/Widget"; import Faq from "../../../hotels/pavan-comforts/components/Faq"; import Map from "../../../hotels/pavan-comforts/components/Map";
export default function P() { return (<>
  <header className="hero"><Img src={s.images.hero} alt={s.name} className="abs" sizes="100vw" priority /><div className="shade" />
    <div className="hc"><b className="logo">{s.name}</b><h1>{s.tag}</h1><p>Rooms from <strong>{inr(s.from)}</strong> a night</p><a className="btn" href="#book">Check availability</a></div></header>
  <div className="chips">{s.trust.map(t => <span key={t}>✓ {t}</span>)}</div>
  <section><h2>Choose your room</h2><div className="grid3">{s.rooms.map(r => (<article className="rc" key={r.name}><Img src={r.img} alt={r.name} className="rimg" sizes="(max-width:768px) 100vw, 33vw" />
    <div className="rb"><h3>{r.name}</h3><p>{r.beds} · {r.size}</p><p className="pk">{r.perks.join(" · ")}</p><div className="rp"><b>{inr(r.price)}</b><span>/ night</span><a href="#book">Book</a></div></div></article>))}</div></section>
  <section id="book" className="band"><h2>Book direct, best price</h2><div className="wbox"><Widget slug={s.slug} /></div></section>
  <section><h2>What you get</h2><div className="pills">{s.amen.map(a => <span key={a}>{a}</span>)}</div></section>
  <section><h2>Photos</h2><div className="g6">{s.gallery.map((g, i) => <Img key={i} src={g} alt={s.name + " photo " + (i + 1)} sizes="33vw" />)}</div></section>
  <section><h2>Around {s.area}</h2><div className="pills alt">{s.nearby.map(([a, b]) => <span key={a}>{a}<em>{b}</em></span>)}</div></section>
  <section className="narrow"><h2>Good to know</h2><Faq items={s.faq} /></section>
  <section><h2>Getting here</h2><p>{s.address}</p><br /><Map s={s} /></section>
  <footer><b>{s.name}</b><p>{s.address}</p><p>{s.phone} · {s.email}</p></footer></>); }
