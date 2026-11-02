// Builds the demo from ../individual-sites. Runs automatically before `npm run dev` / `npm run build`.
// Rule: edit hotels ONLY in ../individual-sites. Everything this script generates is overwritten each time.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const sitesDir = path.join(root, "..", "individual-sites");

if (!fs.existsSync(sitesDir)) {
  console.log("sync: warning: cannot find ../individual-sites next to demo-showcase.");
  console.log("sync: skipping synchronization and using existing generated build files.");
  process.exit(0); // Exit successfully so Vercel/production builds don't crash
}

const read = (f) => fs.readFileSync(f, "utf8");
const write = (f, t) => { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, t); };
const rm = (p) => fs.rmSync(p, { recursive: true, force: true });
const cp = (a, b) => fs.cpSync(a, b, { recursive: true });

// Each site's imports like "../site" must point at its copy inside demo-showcase/hotels/<slug>/
const fixImports = (code, slug, up) =>
  code.replace(/(["'])\.\.\/(?=(site|content|images|components|lib)\b)/g, `$1${up}hotels/${slug}/`);
// Local photos "/images/x.jpg" are namespaced per hotel so two hotels can't overwrite each other.
const fixImgPaths = (code, slug) => code.replace(/(["'`])\/images\//g, `$1/images/${slug}/`);

const sites = fs.readdirSync(sitesDir)
  .filter((d) => fs.existsSync(path.join(sitesDir, d, "app", "page.js")) && fs.existsSync(path.join(sitesDir, d, "site.js")))
  .map((d) => {
    const pkg = JSON.parse(read(path.join(sitesDir, d, "package.json")));
    const port = Number((/-p\s+(\d+)/.exec(pkg.scripts?.dev || "") || [])[1] || 9999);
    return { slug: d, port };
  })
  .sort((a, b) => a.port - b.port);

// Clean previously generated output
rm(path.join(root, "hotels"));
rm(path.join(root, "public", "images"));
for (const d of fs.readdirSync(path.join(root, "app"))) {
  if (d.startsWith("(") && d !== "(showcase)") rm(path.join(root, "app", d));
}

for (const { slug } of sites) {
  const src = path.join(sitesDir, slug);

  // 1) shared hotel code -> hotels/<slug>/
  const h = path.join(root, "hotels", slug);
  for (const f of ["site.js", "content.js", "images.js"]) {
    if (fs.existsSync(path.join(src, f))) write(path.join(h, f), fixImgPaths(read(path.join(src, f)), slug));
  }
  for (const d of ["components", "lib"]) if (fs.existsSync(path.join(src, d))) cp(path.join(src, d), path.join(h, d));

  // 2) each hotel gets its OWN root layout (own <html>, own CSS, own fonts) so styles never leak between hotels
  //    app/(slug)/layout.js + globals.css    ->    app/(slug)/<slug>/page.js   =>   URL /<slug>
  const g = path.join(root, "app", `(${slug})`);
  write(path.join(g, "globals.css"), read(path.join(src, "app", "globals.css")));

  let layout = fixImports(read(path.join(src, "app", "layout.js")), slug, "../../");
  if (!layout.includes("<Seo s={s} />")) throw new Error(`sync: ${slug}/app/layout.js has no <Seo s={s} /> to attach the Back button to`);
  layout = `import DemoBack from "../../components/DemoBack";\n` + layout.replace("<Seo s={s} />", "<Seo s={s} /><DemoBack />");
  write(path.join(g, "layout.js"), layout);

  write(path.join(g, slug, "page.js"), fixImports(read(path.join(src, "app", "page.js")), slug, "../../../"));

  // 3) local photos (if the hotel has put any in its public/images)
  const imgs = path.join(src, "public", "images");
  if (fs.existsSync(imgs)) cp(imgs, path.join(root, "public", "images", slug));
}

// Index used by the cards page
const idx = sites.map(({ slug }) => `import { s as ${slug.replace(/-/g, "_")} } from "./${slug}/site";`).join("\n")
  + `\nexport const hotels = [${sites.map(({ slug }) => slug.replace(/-/g, "_")).join(", ")}];\n`;
write(path.join(root, "hotels", "index.js"), idx);

console.log(`sync: ${sites.length} hotels -> ${sites.map((s) => s.slug).join(", ")}`);