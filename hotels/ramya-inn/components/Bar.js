export default function Bar({ s }) {
  const wa = `https://wa.me/${s.whatsapp}?text=${encodeURIComponent("Hi, I want to book a room at " + s.name)}`;
  return (<nav className="bar" aria-label="Quick contact"><a href={`tel:${s.phone}`}>Call</a><a href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href="#book">Book</a></nav>);
}
