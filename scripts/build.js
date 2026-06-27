const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const files = [
  "index.html",
  "posters.html",
  "print-pack.html",
  "pilots.html",
  "healthy-technology.html",
  "style.css",
  "favicon.svg",
  "404.html",
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
