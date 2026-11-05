import { Link } from 'react-router-dom'
import './Home.css'

const cards = [
  {
    title: 'SFIDA 530g',
    text: 'Il 530g ti aspetta! Porta a casa la maglietta!',
    image: './images/assets/card-sfida.jpg',
    link: '/sfida530g'
  },
  {
    title: 'CONCEPT',
    text: 'Sai quello che mangi e decidi come farlo!',
    image: './images/assets/card-concept.jpg',
    link: '/diconodinoi'
  },
  {
    title: 'KOSHER',
    text: 'Che cosa vuol dire kosher? Scoprilo con noi!',
    image: './images/assets/card-kosher.jpg',
    link: '/kosher'
  },
  {
    title: 'SERVIZI DENZEL',
    text: 'Scopri i nostri servizi take away e delivery!',
    image: './images/assets/card-servizi.jpg',
    link: '/contact'
  }
]

export default function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="hero-bg" style={{ backgroundImage: 'url(./images/assets/hero-home.jpg)' }}></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <img
            src="./images/assets/logo.png"
            alt="Denzel Art Burger Fish and More"
            className="hero-logo"
          />
          <p className="hero-tagline">ART BURGER FISH & MORE</p>
          <p className="hero-sub">Street food gourmet kosher nel cuore di Milano</p>
          <div className="hero-actions">
            <Link to="/menu" className="btn btn-primary">Scopri il Menù</Link>
            <Link to="/contact" className="btn btn-outline">Ordina Ora</Link>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span></span>
        </div>
      </section>

      <section className="home-cards container">
        {cards.map((card, index) => (
          <Link to={card.link} key={card.title} className="home-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="card-image">
              <img src={card.image} alt={card.title} loading="lazy" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
              <span className="card-link">Scopri di più</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="home-cta container">
        <div className="cta-box">
          <h2 className="cta-title">Hai fame?</h2>
          <p className="cta-text">Vieni a trovarci in Via Washington 9, Milano oppure ordina comodamente a casa.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Contattaci</Link>
            <a href="https://www.justeat.it/restaurants-denzelartburgeremore" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Just Eat</a>
          </div>
        </div>
      </section>
    </div>
  )
}
