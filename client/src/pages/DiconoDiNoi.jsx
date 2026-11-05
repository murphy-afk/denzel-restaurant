import { useState, useEffect } from 'react'
import { fetchReviews } from '../data/api'
import './DiconoDiNoi.css'

export default function DiconoDiNoi() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchReviews().then((data) => {
      setReviews(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="page container">
        <h1 className="page-title">COSA DICONO DI NOI?</h1>
        <p style={{ textAlign: 'center' }}>Caricamento...</p>
      </div>
    )
  }

  return (
    <div className="page container">
      <h1 className="page-title">COSA DICONO DI NOI?</h1>

      <div className="reviews-list">
        {reviews.map((review, index) => (
          <blockquote className="review-card" key={review.id || index}>
            <p className="review-text">"{review.text}"</p>
            <footer className="review-footer">
              <cite className="review-source">{review.source}</cite>
              <a
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="review-link"
              >
                Leggi l'articolo
              </a>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  )
}
