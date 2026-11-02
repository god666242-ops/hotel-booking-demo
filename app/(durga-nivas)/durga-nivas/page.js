import { s } from "../../../hotels/durga-nivas/site"; import { inr } from "../../../hotels/durga-nivas/lib/format"; import Img from "../../../hotels/durga-nivas/components/Img"; import Widget from "../../../hotels/durga-nivas/components/Widget"; import Faq from "../../../hotels/durga-nivas/components/Faq"; import Map from "../../../hotels/durga-nivas/components/Map";
export default function P() { return (<>
  <header className="mast"><b>{s.name}</b><a href={`tel:${s.phone}`}>{s.phone}</a></header>
  <section className="hero"><div><p className="num">Vijayawada</p><h1>{s.tag}</h1><p>{s.area}. Rooms from <strong>{inr(s.from)}</strong>.</p><a className="btn" href="#book">Book your stay</a></div>
    <Img src={s.images.hero} alt={s.name} className="himg" priority /></section>
  <section id="book" className="bk"><p className="num">01</p><h2>Check availability</h2><Widget slug={s.slug} /></section>
  <section><p className="num">02</p><h2>Rooms</h2>{s.rooms.map(r => (<article className="zz" key={r.name}><Img src={r.img} alt={r.name} className="zimg" sizes="(max-width:800px) 100vw, 50vw" />
    <div><h3>{r.name}</h3><p>{r.beds} · {r.size} · {r.ac ? "AC" : "Non-AC"}</p><p className="pk">{r.perks.join(" · ")}</p><p className="pr">{inr(r.price)} <small>per night</small></p><a className="btn" href="#book">Book this room</a></div></article>))}</section>
  <section className="callout"><p className="num">03</p><h2>Visiting the temple?</h2><ul>{s.nearby.map(([a, b]) => <li key={a}><span>{a}</span><b>{b}</b></li>)}</ul></section>
  <section><p className="num">04</p><h2>Comforts</h2><ul className="am">{s.amen.map(a => <li key={a}>{a}</li>)}</ul><div className="gal">{s.gallery.map((g, i) => <Img key={i} src={g} alt={s.name + " photo " + (i + 1)} sizes="33vw" />)}</div></section>
  <section className="two"><div><p className="num">05</p><h2>Questions</h2><Faq items={s.faq} /></div><div><p className="num">06</p><h2>Find us</h2><p>{s.address}</p><br /><Map s={s} /></div></section>
  <footer><h2>{s.name}</h2><p>{s.address}</p><p>{s.phone} · {s.email}</p></footer></>); }
