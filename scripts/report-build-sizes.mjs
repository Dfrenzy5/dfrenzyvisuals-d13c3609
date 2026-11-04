import { readdir, stat, readFile } from "node:fs/promises";
import { gzip } from "node:zlib";
import { promisify } from "node:util";
import path from "node:path";

const gzipAsync = promisify(gzip);
const rows = [];
async function walk(dir) {
  let entries;
  try { entries = await readdir(dir, { withFileTypes: true }); } catch { return; }
  for (const entry of entries) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (/\\.(?:m?js|css)$/i.test(entry.name)) {
      const info = await stat(file);
      const compressed = await gzipAsync(await readFile(file), { level: 9 });
      rows.push({ file, raw: info.size, gzip: compressed.length });
    }
  }
}
await walk(".output/public/assets");
rows.sort((a, b) => b.raw - a.raw);
const fmt = (n) => (n / 1024).toFixed(1) + " KiB";
console.log("| Browser asset | Raw | Gzip |");
console.log("|---|---:|---:|");
for (const row of rows.slice(0, 40)) console.log(`| \`${row.file}\` | ${fmt(row.raw)} | ${fmt(row.gzip)} |`);
const total = rows.reduce((a, r) => ({ raw: a.raw + r.raw, gzip: a.gzip + r.gzip }), { raw: 0, gzip: 0 });
console.log(`\\n**Total:** ${fmt(total.raw)} raw / ${fmt(total.gzip)} gzip across ${rows.length} JS/CSS assets.`);
