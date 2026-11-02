export default function Seo({ s }) {
  const j = { "@context": "https://schema.org", "@type": "Hotel", name: s.name, url: s.url, telephone: s.phone, priceRange: `₹${s.from}+`, image: s.images.hero,
    address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "Vijayawada", addressRegion: "Andhra Pradesh", postalCode: s.pin, addressCountry: "IN" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />;
}
