import manifest from './imageManifest.json';

// Builds the responsive image props for an optimised file in /public/art.
// Run `npm run images` to regenerate the files and imageManifest.json from /assets.
export function artImage(slug) {
  const entry = manifest[slug];
  if (!entry) throw new Error(`Unknown artwork image: ${slug}`);
  const largest = entry.widths[entry.widths.length - 1];
  return {
    src: `/art/${slug}-${largest}.webp`,
    srcSet: entry.widths.map((w) => `/art/${slug}-${w}.webp ${w}w`).join(', '),
    width: entry.width,
    height: entry.height,
  };
}
