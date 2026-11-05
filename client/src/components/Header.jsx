import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { path: '/', label: 'HOME' },
  { path: '/chisiamo', label: 'CHI SIAMO' },
  { path: '/kosher', label: 'KOSHER' },
  { path: '/diconodinoi', label: 'DICONO DI NOI' },
  { path: '/menu', label: "MENU'" },
  { path: '/gallery', label: 'GALLERY' },
  { path: '/contact', label: 'CONTACT' }
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-inner container">
        <Link to="/" className="header-logo" onClick={() => setMenuOpen(false)}>
          <img src="./images/assets/logo.png" alt="Denzel Logo" className="logo-img" />
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Apri menu di navigazione"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
