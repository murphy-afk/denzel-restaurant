// Generates smaller responsive variants of the gallery photos used in the grid
// and writes a manifest with the available widths for each image.
// Run with: node scripts/generate-responsive-images.js

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const ROOT = path.join(__dirname, '..', 'client', 'public', 'images', 'gallery')
const MANIFEST = path.join(__dirname, '..', 'client', 'src', 'data', 'gallery-widths.json')
const WIDTHS = [528, 1024]

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`
}

async function main() {
  const files = fs
    .readdirSync(ROOT)
    .filter((name) => /\.(jpg|jpeg|png)$/i.test(name) && !/-\d+w\.webp$/.test(name))

  const manifest = {}
  let total = 0

  for (const name of files) {
    const file = path.join(ROOT, name)
    const base = name.replace(/\.(jpg|jpeg|png)$/i, '')
    const meta = await sharp(file).metadata()
    const widths = []

    for (const width of WIDTHS) {
      if (meta.width <= width) continue
      const out = path.join(ROOT, `${base}-${width}w.webp`)
      await sharp(file)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(out + '.tmp')
      fs.renameSync(out + '.tmp', out)
      total += fs.statSync(out).size
      widths.push(width)
    }

    // The full size WebP always exists because optimize-images.js creates it.
    manifest[base] = { full: meta.width, variants: widths }
  }

  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n')
  console.log(`Wrote manifest for ${Object.keys(manifest).length} images`)
  console.log(`Variants total: ${formatKb(total)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
