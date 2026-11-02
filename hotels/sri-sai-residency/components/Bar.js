export default function Bar({ s }) {
  const wa = `https://wa.me/${s.whatsapp}?text=${encodeURIComponent("Hi, I have a query about " + s.name)}`;
  const dir = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapQuery)}`;
  return (<nav className="bar" aria-label="Quick contact"><a href={`tel:${s.phone}`}>Call</a><a href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href={dir} target="_blank" rel="noopener noreferrer">Directions</a></nav>);
}
