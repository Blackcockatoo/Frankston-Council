const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const files = [
  "index.html",
  "start-here.html",
  "vision.html",
  "pilots.html",
  "posters.html",
  "print-pack.html",
  "image-library.html",
  "schools.html",
  "healthy-technology.html",
  "cultural-protocol.html",
  "sister-city.html",
  "media-contact.html",
  "404.html",
  "style.css",
  "favicon.svg",
  "README.md"
];

const directories = ["assets", "downloads"];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of files) {
  const source = path.join(root, file);
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, path.join(dist, file));
  }
}

for (const directory of directories) {
  const source = path.join(root, directory);
  if (fs.existsSync(source)) {
    fs.cpSync(source, path.join(dist, directory), { recursive: true });
  }
}
