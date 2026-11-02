// Floating "back to all demos" pill. Only exists in the demo, never in the individual sites.
export default function DemoBack() {
  return (
    <a href="/" style={{ position: "fixed", top: 10, left: 10, zIndex: 99999, background: "rgba(17,24,39,.88)", color: "#fff",
      font: "600 13px/1 system-ui, sans-serif", padding: "10px 14px", borderRadius: 999, textDecoration: "none",
      boxShadow: "0 2px 10px rgba(0,0,0,.25)" }}>← All demos</a>
  );
}
