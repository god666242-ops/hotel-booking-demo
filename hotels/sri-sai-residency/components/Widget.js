import Script from "next/script";
// PureBook booking engine, same embed as the widget demo page.
// Optional attributes: data-primary, data-theme ("light" | "dark"), data-button-label.
export default function Widget({ slug, primary, theme = "light", label = "Reserve now" }) {
  return (<>
    <hotel-booking-engine data-primary={primary} data-theme={theme} data-button-label={label} data-hotel={slug}></hotel-booking-engine>
    <Script src="https://cdn.purebook.in/embed.min.js" strategy="afterInteractive" />
  </>);
}
