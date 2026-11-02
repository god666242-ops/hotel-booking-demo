import { s } from "../../../hotels/ramya-inn/site"; import { inr } from "../../../hotels/ramya-inn/lib/format"; import Img from "../../../hotels/ramya-inn/components/Img"; import Widget from "../../../hotels/ramya-inn/components/Widget"; import Faq from "../../../hotels/ramya-inn/components/Faq"; import Map from "../../../hotels/ramya-inn/components/Map";
export default function P() { return (<>
  <nav className="top"><b>{s.name}</b><a href={`tel:${s.phone}`}>{s.phone}</a></nav>
  <header className="hero"><Img src={s.images.hero} alt={s.name} className="abs" sizes="100vw" priority /><div className="shade" />
    <div className="hc"><p className="eyebrow">{s.area}, Vijayawada</p><h1>Rooms from <span>{inr(s.from)}</span></h1><p className="sub">{s.tag}</p><a className="btn" href="#book">Book a room</a></div></header>
  <section id="rates"><h2>Rate card</h2><div className="scroll"><table className="rate"><thead><tr><th>Room</th><th>Bed</th><th>Size</th><th>Type</th><th>Per night</th><th /></tr></thead>
    <tbody>{s.rooms.map(r => <tr key={r.name}><td><b>{r.name}</b></td><td>{r.beds}</td><td>{r.size}</td><td><i className={r.ac ? "ac" : ""}>{r.ac ? "AC" : "Non-AC"}</i></td><td className="p">{inr(r.price)}</td><td><a href="#book">Book</a></td></tr>)}</tbody></table></div>
    <p className="note">Prices are per room per night, taxes extra. Check-in 12 PM, check-out 11 AM.</p></section>
  <section id="book" className="dark"><h2>Check availability</h2><Widget slug={s.slug} /></section>
  <section className="split"><div><h2>Why guests pick us</h2><ul className="tick">{s.trust.map(t => <li key={t}>{t}</li>)}</ul><ul className="tick">{s.amen.slice(0, 6).map(a => <li key={a}>{a}</li>)}</ul></div>
    <div className="pics">{[...s.gallery, ...s.rooms.slice(0, 1).map(r => r.img)].slice(0, 2).map((g, i) => <Img key={i} src={g} alt={s.name + " room"} sizes="40vw" />)}</div></section>
  <section><h2>Close to everything</h2><ul className="dist">{s.nearby.map(([a, b]) => <li key={a}><span>{a}</span><i /><b>{b}</b></li>)}</ul></section>
  <section className="split"><div><h2>FAQ</h2><Faq items={s.faq} /></div><div><h2>Location</h2><p>{s.address}</p><br /><Map s={s} /></div></section>
  <footer>© {s.name} · {s.phone} · {s.email}</footer></>); }
