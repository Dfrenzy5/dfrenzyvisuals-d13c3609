import { readdir, stat } from "node:fs/promises";
import { gzip } from "node:zlib";
import { promisify } from "node:util";
import path from "node:path";

const gzipAsync = promisify(gzip);
const roots = [".output/public/assets"];
const rows = [];

async function walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (/\.(?:m?js|css)$/i.test(entry.name)) {
      const info = await stat(fullPath);
      const { readFile } = await import("node:fs/promises");
      const bytes = await readFile(fullPath);
      const compressed = await gzipAsync(bytes, { level: 9 });
      rows.push({
        file: fullPath,
        raw: info.size,
        gzip: compressed.length,
      });
    }
  }
}

for (const root of roots) await walk(root);
rows.sort((a, b) => b.raw - a.raw);

const format = (n) => `${(n / 1024).toFixed(1)} KiB`;
console.log("| Asset | Raw | Gzip |");
console.log("|---|---:|---:|");
for (const row of rows.slice(0, 40)) {
  console.log(`| \`${row.file}\` | ${format(row.raw)} | ${format(row.gzip)} |`);
}
const totals = rows.reduce(
  (acc, row) => ({ raw: acc.raw + row.raw, gzip: acc.gzip + row.gzip }),
  { raw: 0, gzip: 0 },
);
console.log(`\n**Browser-delivered JS/CSS:** ${format(totals.raw)} raw / ${format(totals.gzip)} gzip across ${rows.length} files.`);
if (rows.length === 0) {
  console.log("\nNo built JS/CSS assets found in dist/ or .output/. Check the build output directory.");
}
