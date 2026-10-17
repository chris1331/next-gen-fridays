import fs from 'node:fs';
import path from 'node:path';

const manifest = JSON.parse(fs.readFileSync('scripts/image-manifest.json', 'utf8'));

async function downloadAll() {
  for (const item of manifest) {
    const destPath = path.resolve(item.dest);
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 0) {
      console.log(`Already downloaded: ${item.dest}`);
      continue;
    }
    console.log(`Downloading ${item.url} -> ${item.dest}...`);
    const res = await fetch(item.url);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${item.url}: ${res.status}`);
    }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(destPath, buf);
  }
  console.log(`Successfully downloaded all ${manifest.length} images!`);
}

downloadAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
