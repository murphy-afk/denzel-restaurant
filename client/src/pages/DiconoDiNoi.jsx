import { useState, useEffect } from 'react'
import { fetchReviews, staticReviews } from '../data/api'
import { useSeo } from '../seo'
import './DiconoDiNoi.css'

export default function DiconoDiNoi() {
  const [reviews, setReviews] = useState(staticReviews)
  const [loading, setLoading] = useState(false)

  useSeo({
    title: 'Cosa dicono di noi | Denzel Art Burger Milano',
    description:
      'Recensioni, articoli e opinioni su Denzel, ristorante kosher con street food gourmet in via Washington 9, Milano.',
    path: '/diconodinoi'
  })

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
