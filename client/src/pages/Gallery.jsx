import { useState } from 'react'
import galleryData from '../data/gallery-images.json'
import './Gallery.css'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)

  const prevImage = () => setLightbox((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1))
  const nextImage = () => setLightbox((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1))

  return (
    <div className="page container">
      <h1 className="page-title">DENZEL GALLERY</h1>

      <div className="gallery-grid">
        {galleryData.map((item, index) => {
          const safeName = item.title.replace(/[^a-zA-Z0-9]+/g, '_').toLowerCase()
          const isDuplicate = galleryData.findIndex(
            (g) => g.title.replace(/[^a-zA-Z0-9]+/g, '_').toLowerCase() === safeName
          ) !== index
          const fileSuffix = isDuplicate ? '_2' : ''
          const ext = item.uri.endsWith('.png') ? 'png' : 'jpg'

          return (
            <button
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(index)}
              aria-label={`Apri foto: ${item.title}`}
            >
              <img
                src={`./images/gallery/${safeName}${fileSuffix}.${ext}`}
                alt={item.title}
                loading="lazy"
              />
              <span className="gallery-caption">{item.title}</span>
            </button>
          )
        })}
      </div>

      {lightbox !== null && (
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
            <img
              src={`./images/gallery/${(() => {
                const item = galleryData[lightbox]
                const safeName = item.title.replace(/[^a-zA-Z0-9]+/g, '_').toLowerCase()
                const isDuplicate = galleryData.findIndex(
                  (g) => g.title.replace(/[^a-zA-Z0-9]+/g, '_').toLowerCase() === safeName
                ) !== lightbox
                const fileSuffix = isDuplicate ? '_2' : ''
                const ext = item.uri.endsWith('.png') ? 'png' : 'jpg'
                return `${safeName}${fileSuffix}.${ext}`
              })()}`}
              alt={galleryData[lightbox].title}
            />
            <p className="lightbox-caption">{galleryData[lightbox].title}</p>
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
