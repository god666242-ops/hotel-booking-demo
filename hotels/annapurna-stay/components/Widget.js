import Script from "next/script";
// PureBook booking engine. Set `slug` in site.js to the hotel's PureBook slug.
export default function Widget({ slug }) {
  return (<>
    <hotel-booking-engine data-hotel={slug}></hotel-booking-engine>
    <Script src="https://cdn.purebook.in/embed.min.js" strategy="afterInteractive" />
  </>);
}
