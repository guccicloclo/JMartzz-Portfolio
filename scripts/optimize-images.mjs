// Converts the original artwork in /assets into responsive WebP files in /public/art
// and writes the resulting sizes to src/data/imageManifest.json.
// Run with: npm run images
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public', 'art');

// Each slug is matched against the original file name with a unique, ASCII-only pattern.
const sources = {
  'catwoman': /Catwoman/,
  'supergirl-lobo-1': /Supergirl vs Lobo1/,
  'supergirl-lobo-2': /Supergirl vs Lobo2/,
  'supergirl-lobo-3': /Supergirl vs Lobo3/,
  'supergirl-lobo-4': /Supergirl vs Lobo4/,
  'flash': /The Flash/,
  'starfire-nightwing': /Starfire and Nightwing/,
  'spiderverse-1': /Miles Morales1/,
  'spiderverse-2': /Miles Morales2/,
  'spiderverse-3': /Miles Morales3/,
  'spiderverse-4': /Miles Morales4/,
  'black-cat': /Black cat/,
  'magik-danger-1': /Magik & Danger1/,
  'magik-danger-2': /Magik & Danger2/,
  'spider-man': /SPIDER-MAN/,
  'wanda': /Supreme Sorcerer Wanda/,
  'jmartzz-portrait': /ArtistPersonalImage/,
};
const widths = [640, 1280, 2048];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)])),
  );
  return files.flat();
}

const allFiles = (await walk(path.join(root, 'assets'))).filter((f) => f.endsWith('.png'));
await fs.mkdir(out, { recursive: true });

const manifest = {};
for (const [slug, pattern] of Object.entries(sources)) {
  const matches = allFiles.filter((f) => pattern.test(path.basename(f)));
  if (matches.length !== 1) throw new Error(`${slug}: expected 1 source, found ${matches.length}`);
  const meta = await sharp(matches[0]).metadata();
  // Every size below the native width, plus the native width itself (capped at 2048).
  const sizes = [...new Set([...widths.filter((w) => w < meta.width), Math.min(meta.width, 2048)])];
  manifest[slug] = { width: meta.width, height: meta.height, widths: sizes };
  for (const w of sizes) {
    await sharp(matches[0])
      .resize({ width: w })
      .webp({ quality: 86 })
      .toFile(path.join(out, `${slug}-${w}.webp`));
  }
  console.log(slug, meta.width, 'x', meta.height);
}
await fs.writeFile(
  path.join(root, 'src', 'data', 'imageManifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`,
);
