// One-off image optimization script.
// Compresses images in client/public/images and writes WebP versions next to them.
// Run with: node scripts/optimize-images.js

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const ROOT = path.join(__dirname, '..', 'client', 'public', 'images')
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png'])
const MAX_WIDTH = 1920
const JPEG_QUALITY = 78
const WEBP_QUALITY = 75

function walk(dir) {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...walk(full))
    else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) files.push(full)
  }
  return files
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`
}

async function optimize(file) {
  const before = fs.statSync(file).size
  const ext = path.extname(file).toLowerCase()
  const base = file.slice(0, -ext.length)

  const image = sharp(file).resize({ width: MAX_WIDTH, withoutEnlargement: true })

  if (ext === '.png') {
    await image.png({ compressionLevel: 9, palette: true, quality: 85 }).toFile(file + '.tmp')
  } else {
    await image.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(file + '.tmp')
  }
  fs.renameSync(file + '.tmp', file)
  const after = fs.statSync(file).size

  const webpFile = base + '.webp'
  await sharp(file).webp({ quality: WEBP_QUALITY }).toFile(webpFile + '.tmp')
  fs.renameSync(webpFile + '.tmp', webpFile)
  const webpSize = fs.statSync(webpFile).size

  return { file, before, after, webpSize }
}

async function main() {
  const files = walk(ROOT)
  let totalBefore = 0
  let totalAfter = 0
  let totalWebp = 0

  for (const file of files) {
    const result = await optimize(file)
    totalBefore += result.before
    totalAfter += result.after
    totalWebp += result.webpSize
    const rel = path.relative(ROOT, file)
    console.log(
      `${rel}: ${formatKb(result.before)} -> ${formatKb(result.after)} (webp ${formatKb(result.webpSize)})`
    )
  }

  console.log('')
  console.log(`Original: ${formatKb(totalBefore)}`)
  console.log(`Optimized: ${formatKb(totalAfter)}`)
  console.log(`WebP total: ${formatKb(totalWebp)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
