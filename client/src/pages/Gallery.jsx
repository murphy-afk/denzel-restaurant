import { useState, useEffect } from 'react'
import { fetchGallery } from '../data/api'
import './Gallery.css'

export default function Gallery() {
  const [images, setImages] = useState([])
  const [lightbox, setLightbox] = useState(null)
  const [loading, setLoading] = useState(true)

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
            <img
              src={getImageSrc(item, index)}
              alt={item.title}
              loading="lazy"
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
            <img
              src={getImageSrc(images[lightbox], lightbox)}
              alt={images[lightbox].title}
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
