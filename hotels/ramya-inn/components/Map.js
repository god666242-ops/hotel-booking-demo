export default function Map({ s }) {
  return (<iframe className="map" title={"Map of " + s.name} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
    src={`https://www.google.com/maps?q=${encodeURIComponent(s.mapQuery)}&output=embed`} />);
}
