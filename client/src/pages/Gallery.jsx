import { useState, useEffect } from 'react'
import { fetchGallery, staticGallery } from '../data/api'
import { useSeo } from '../seo'
import Picture from '../components/Picture'
import galleryWidths from '../data/gallery-widths.json'
import './Gallery.css'

// Grid cells are about half a mobile viewport and about 260px on desktop.
const GRID_SIZES = '(max-width: 576px) 50vw, (max-width: 992px) 33vw, 260px'

export default function Gallery() {
  const [images, setImages] = useState(staticGallery)
  const [lightbox, setLightbox] = useState(null)
  const [loading, setLoading] = useState(false)

  useSeo({
    title: 'Gallery | Denzel Art Burger Kosher Milano',
    description:
      'Foto del ristorante, degli hamburger Denzel e degli ospiti celebri che hanno visitato la nostra locale in via Washington 9, Milano.',
    path: '/gallery'
  })

  useEffect(() => {
    fetchGallery().then((data) => {
      setImages(data)
      setLoading(false)
    })
  }, [])

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prevImage = () => setLightbox((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const nextImage = () => setLightbox((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  const getImageSrc = (item, index) => {
    const safeName = item.title.replace(/[^a-zA-Z0-9]+/g, '_').toLowerCase()
    const isDuplicate = images.findIndex(
      (g) => g.title.replace(/[^a-zA-Z0-9]+/g, '_').toLowerCase() === safeName
    ) !== index
    const fileSuffix = isDuplicate ? '_2' : ''
    const ext = item.uri && item.uri.endsWith('.png') ? 'png' : 'jpg'
    return `./images/gallery/${safeName}${fileSuffix}.${ext}`
  }

  // WebP srcset pointing at the pre generated variants plus the full image.
  const getWebpSrcSet = (src) => {
    const base = src.replace('./images/gallery/', '').replace(/\.(jpg|png)$/i, '')
    const info = galleryWidths[base]
    if (!info) return undefined
    const parts = info.variants.map((w) => `./images/gallery/${base}-${w}w.webp ${w}w`)
    parts.push(`./images/gallery/${base}.webp ${info.full}w`)
    return parts.join(', ')
  }

  if (loading) {
    return (
      <div className="page container">
        <h1 className="page-title">DENZEL GALLERY</h1>
        <p style={{ textAlign: 'center' }}>Caricamento...</p>
      </div>
    )
  }

  return (
    <div className="page container">
      <h1 className="page-title">DENZEL GALLERY</h1>

      <div className="gallery-grid">
        {images.map((item, index) => (
          <button
            key={item.id || index}
            className="gallery-item"
            onClick={() => openLightbox(index)}
            aria-label={`Apri foto: ${item.title}`}
          >
            <Picture
              src={getImageSrc(item, index)}
              webpSrcSet={getWebpSrcSet(getImageSrc(item, index))}
              sizes={GRID_SIZES}
              alt={item.title}
              loading={index < 2 ? 'eager' : 'lazy'}
              fetchpriority={index === 0 ? 'high' : undefined}
            />
            <span className="gallery-caption">{item.title}</span>
          </button>
        ))}
      </div>

      {lightbox !== null && images[lightbox] && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Chiudi">
            &times;
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            aria-label="Precedente"
          >
            &#8249;
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Picture
              src={getImageSrc(images[lightbox], lightbox)}
              alt={images[lightbox].title}
              loading="lazy"
            />
            <p className="lightbox-caption">{images[lightbox].title}</p>
          </div>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            aria-label="Successivo"
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  )
}
