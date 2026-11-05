import reviewsData from '../data/reviews.json'
import './DiconoDiNoi.css'

export default function DiconoDiNoi() {
  return (
    <div className="page container">
      <h1 className="page-title">COSA DICONO DI NOI?</h1>

      <div className="reviews-list">
        {reviewsData.reviews.map((review, index) => (
          <blockquote className="review-card" key={index}>
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
