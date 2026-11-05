import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-section">
          <h4 className="footer-title">DENZEL</h4>
          <p>Via Washington 9</p>
          <p>20146 Milano (MI)</p>
          <p>Tel. 02 485 19326</p>
          <p>Cell. 327 738 1017</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">ORARI</h4>
          <p>Dom - Gio</p>
          <p>Pranzo 12.00 - 14.30</p>
          <p>Cena 19.00 - 23.00</p>
          <p>Ven: Pranzo 12.00 - 14.30</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">LINK</h4>
          <Link to="/menu">Menù</Link>
          <Link to="/contact">Contatti</Link>
          <a href="https://www.justeat.it/restaurants-denzelartburgeremore" target="_blank" rel="noopener noreferrer">Just Eat</a>
          <a href="https://deliveroo.it/it/menu/milano/santambrogio/denzel" target="_blank" rel="noopener noreferrer">Deliveroo</a>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">SOCIAL</h4>
          <a href="http://www.instagram.com/DENZELburger" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="http://www.facebook.com/DENZELburger" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="http://www.twitter.com/DENZELburger" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>Copyright 2011 Denzel</p>
          <p>P.IVA n. 12563170153 - REA Mi 1569017</p>
        </div>
      </div>
    </footer>
  )
}
