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
        <div className="container">
          <img
            src="./images/assets/logo.png"
            alt="Denzel Art Burger Fish and More"
            className="hero-logo"
          />
          <p className="hero-tagline">ART BURGER FISH & MORE</p>
        </div>
      </section>

      <section className="home-cards container">
        {cards.map((card) => (
          <Link to={card.link} key={card.title} className="home-card">
            <div className="card-image">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
              <span className="card-link">Read More</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
